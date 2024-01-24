import { useContext, useEffect, useRef, useState } from 'react'
import socket from './socket'
import { AppContext } from 'src/context/app.context'
import './chat.css'
import http from 'src/utills/https'
export default function Chat({
  none,
  setNone
}: {
  none: string
  setNone: React.Dispatch<React.SetStateAction<boolean>>
}) {
  const [value, setValue] = useState('')
  const [conversations, setConversations] = useState<any>([])
  const [members, setMembers] = useState<any>([])
  const [receiver, setReceiver] = useState('')
  const [name, setName] = useState('')
  const { profile, id, setMessage, message } = useContext(AppContext)

  const ref = useRef<any>(null)
  useEffect(() => {
    if (profile?._id) {
      handleFetchMessage()
    }

    socket.auth = {
      _id: profile?._id
    }
    socket.connect()
    socket.on('receive_message', (data: any) => {
      const { payload } = data
      setMessage(payload)
      setConversations((conversations: any) => [...conversations, payload])
    })
    return () => {
      socket.disconnect()
    }
  }, [profile])
  useEffect(() => {
    if (members.length > 0) {
      setReceiver(members[0].userId)
    }
    if (id.length > 0) {
      setReceiver(id)
    }
  }, [members, message])
  useEffect(() => {
    if (receiver?.length > 0) {
      http.get(`/conversations/receivers/${receiver}`).then((res) => {
        setConversations(res.data.result.conversations)
      })
    }
  }, [receiver])
  useEffect(() => {
    if (id.length > 0) {
      http.get(`users/${id}`).then((res) => setName(res.data.result.full_name))
    }
  }, [id])
  async function handleFetchMessage() {
    const mem = await http.get(`/conversations`)
    setMembers(mem.data.result)
  }

  const send = (e: any) => {
    e.preventDefault()
    setValue('')
    const conversation = {
      content: value,
      sender_id: profile._id,
      receiver_id: receiver
    }
    socket.emit('send_message', {
      payload: conversation
    })
    ref.current?.scrollIntoView({ behavior: 'smooth' })
    ref.current?.scrollTo(0, ref.current?.scrollHeight + 100)
    setConversations((conversations: any) => [
      ...conversations,
      {
        ...conversation,
        _id: new Date().getTime()
      }
    ])
  }
  return (
    <div
      className={`${none} flex gap-2 p-1 justify-start rounded-lg w-[500px] absolute bg-[#f7f7f7] top-[-200px] left-[-507px]`}
    >
      <div className='flex flex-col gap-2 w-1/3 items-center'>
        <p className='p-3'>Contacs</p>
        <div className='flex flex-col gap-2 overflow-scroll h-[230px] custom-scrollbar'>
          {members?.length > 0 &&
            members.map((item: any) => {
              console.log(item)
              return (
                <div
                  onClick={() => setReceiver(item.userId)}
                  className='p-3 cursor-pointer hover:bg-blue-300 hover:text-white font-semibold border rounded-xl text-xs'
                  key={item?.userId}
                >
                  {item?.result?.full_name}
                </div>
              )
            })}
        </div>
      </div>
      <div className='w-full'>
        <div className='flex justify-between items-center bg-white pr-2'>
          <p className='p-3 font-semibold'>{name || (members?.length > 0 && members[0].result.full_name)}</p>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            fill='none'
            viewBox='0 0 24 24'
            strokeWidth={1.5}
            stroke='currentColor'
            className={`w-6 h-6 cursor-pointer`}
            onClick={() => setNone(!none)}
          >
            <path strokeLinecap='round' strokeLinejoin='round' d='M6 18 18 6M6 6l12 12' />
          </svg>
        </div>
        <div className='border'>
          <div className='chat px-3 pt-2 pb-2' ref={ref}>
            {conversations.map((conversation: any) => (
              <div key={conversation._id}>
                <div className='message-container'>
                  <div className={'message ' + (conversation.sender_id === profile._id ? 'message-right' : '')}>
                    {conversation.content}
                  </div>
                </div>
              </div>
            ))}
          </div>
          <form onSubmit={send}>
            <div className='flex gap-3'>
              <input
                type='text'
                id='first_name'
                className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5'
                placeholder='Nhập tin nhắn...'
                required
                onChange={(e) => setValue(e.target.value)}
                value={value}
              />
              <button
                type='submit'
                className='border border-blue-500 text-blue-500 hover:bg-blue-500 hover:text-white font-medium rounded-lg text-sm px-5 py-2.5'
              >
                Send
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}
