import React, { useContext, useEffect, useState } from 'react'
import './message.css'
import { AppContext } from 'src/context/app.context'
import { useNavigate } from 'react-router-dom'
import socket from 'src/pages/Chat/socket'
import Chat from 'src/pages/Chat/Chat'
function Message({ text }: { text?: string }) {
  const { message, setTicket, profile, setMessage } = useContext(AppContext)
  const navigate = useNavigate()
  // const [none, setNone] = useState(true)
  // function handleMessage() {
  //   if (ring === 'ring') {
  //     navigate('/chat')
  //     setTicket(message.sender_id)
  //     setRing('')
  //   }
  // }
  return (
    <div className={`fixed right-[40px] bottom-[60px] p-3 rounded-full bg-[#42a6f4]`}>
      <Chat none={message ? 'hidden' : ''} setNone={setMessage} />
      <svg
        xmlns='http://www.w3.org/2000/svg'
        fill='white'
        viewBox='0 0 24 24'
        strokeWidth={1.5}
        stroke='currentColor'
        className='w-6 h-6 cursor-pointer'
        onClick={() => setMessage(!message)}
      >
        <path
          strokeLinecap='round'
          strokeLinejoin='round'
          d='M2.25 12.76c0 1.6 1.123 2.994 2.707 3.227 1.087.16 2.185.283 3.293.369V21l4.076-4.076a1.526 1.526 0 0 1 1.037-.443 48.282 48.282 0 0 0 5.68-.494c1.584-.233 2.707-1.626 2.707-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0 0 12 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018Z'
        />
      </svg>
    </div>
  )
}

export default Message
