import React, { useContext, useState } from 'react'
import { useMutation } from 'react-query'
import { useNavigate } from 'react-router-dom'
import { searchTransportation } from 'src/apis/transportation.api'
import { AppContext } from 'src/context/app.context'

function Transportation() {
  const [keySearch, setKeySearch] = useState('')
  const [date, setDate] = useState(0)
  const navigate = useNavigate()
  const { setTicket } = useContext(AppContext)
  const searchMutation = useMutation((key: string) => searchTransportation(key))
  function handleSearch() {
    searchMutation.mutate(keySearch, {
      onSuccess: (data) => {
        setTicket(date)
        navigate('/transportation/search', { state: data.data.result })
      }
    })
  }
  return (
    <div className='p-4 text-white'>
      <p className='text-2xl font-bold text-white'>Từ Đông Nam Á Đến Thế Giới, Trong Tầm Tay Bạn</p>
      <div className={`p-4 bg-white rounded-lg mt-4`}>
        <form action='' className='flex flex-col gap-2'>
          <div className='flex flex-col'>
            <label htmlFor='' className='text-[#7a8286] text-base font-semibold'>
              Điểm đón khách
            </label>
            <input
              type='text'
              className='outline-none font-normal pb-2 border-b-2 text-[#7a8286] text-base'
              placeholder='VD: Hà Nội,...'
              onChange={(e) => setKeySearch(e.target.value)}
            />
          </div>
          <div className='flex flex-col'>
            <label htmlFor='' className='text-[#7a8286] text-base font-semibold'>
              Ngày vận chuyển
            </label>
            <input
              type='date'
              onChange={(e) => setDate(new Date(e.target.value).getTime())}
              name='timeOrder'
              className='outline-none font-normal pb-2 border-b-2 text-[#7a8286] text-base'
              placeholder={'abc'}
            />
          </div>
          <div className='w-full py-2 bg-[#ff5e1f] text-center rounded-lg'>
            <button type='button' className='text-base font-semibold' onClick={handleSearch}>
              Tìm kiếm
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default Transportation
