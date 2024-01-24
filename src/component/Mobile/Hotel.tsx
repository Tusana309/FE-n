import React, { useContext, useState } from 'react'
import { useMutation } from 'react-query'
import { useNavigate } from 'react-router-dom'
import { searchHotel } from 'src/apis/hotel.api'
import { AppContext } from 'src/context/app.context'

function Hotel() {
  const { setIsAuthenticated, setProfile, profile, isAuthenticated, setTicket } = useContext(AppContext)
  const [keySearch, setKeySearch] = useState('')
  const [date, setDate] = useState({
    timeOrder: 0,
    timeBack: 0
  })
  const searchMutation = useMutation((key: string) => searchHotel(key))
  const navigate = useNavigate()
  function handleSearch() {
    searchMutation.mutate(keySearch, {
      onSuccess: (data) => {
        setTicket(date)
        navigate('/hotel/search', { state: data.data.result })
      }
    })
  }
  function handleOnChange(e: React.ChangeEvent<HTMLInputElement>) {
    setDate({
      ...date,
      [e.target.name]: new Date(e.target.value).getTime()
    })
  }
  return (
    <div className='p-4 text-white'>
      <p className='text-2xl font-bold text-white'>Từ Đông Nam Á Đến Thế Giới, Trong Tầm Tay Bạn</p>
      <div className={`p-4 bg-white rounded-lg mt-4`}>
        <form action='' className='flex flex-col gap-2'>
          <div className='flex flex-col'>
            <label htmlFor='' className='text-[#7a8286] text-base font-semibold'>
              Thành phố, địa điểm hoặc tên khách sạn:
            </label>
            <input
              type='text'
              onChange={(e) => setKeySearch(e.target.value)}
              className='outline-none font-normal pb-2 border-b-2 text-[#7a8286] text-base'
              placeholder={'abc'}
            />
          </div>
          <div className='flex flex-col'>
            <label htmlFor='' className='text-[#7a8286] text-base font-semibold'>
              Ngày nhận phòng
            </label>
            <input
              type='date'
              onChange={handleOnChange}
              name='timeOrder'
              className='outline-none font-normal pb-2 border-b-2 text-[#7a8286] text-base'
              placeholder={'abc'}
            />
          </div>
          <div className='flex flex-col'>
            <label htmlFor='' className='text-[#7a8286] text-base font-semibold'>
              Ngày trả phòng
            </label>
            <input
              type='date'
              name='timeBack'
              onChange={handleOnChange}
              className='outline-none font-normal pb-2 border-b-2 text-[#7a8286] text-base'
              placeholder={'abc'}
            />
          </div>
          <div className='flex flex-col'>
            <label htmlFor='' className='text-[#7a8286] text-base font-semibold'>
              Khách và phòng
            </label>
            <input
              type='text'
              className='outline-none font-normal pb-2 border-b-2 text-[#7a8286] text-base'
              placeholder='1 người lớn và 0 trẻ em'
            />
          </div>
          <div className='w-full py-2 bg-[#ff5e1f] text-center rounded-lg'>
            <button onClick={handleSearch} type='button' className='text-base font-semibold'>
              Tìm kiếm
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default Hotel
