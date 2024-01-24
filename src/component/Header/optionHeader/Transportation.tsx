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
    <div className='max-w-[1200px] w-full px-24 '>
      <div className='mt-8 justify-start grid grid-cols-10 items-end'>
        <div className='w-full rounded-l-lg overflow-hidden col-span-6'>
          <p className='text-[14px] font-semibold'>Điểm đón</p>
          <div className='w-full rounded-l-lg overflow-hidden mt-4'>
            <input
              type='text'
              placeholder='VD: Hà Nội,...'
              onChange={(e) => setKeySearch(e.target.value)}
              className='text-[#000] px-3 w-full min-h-[40px] border-y-[3px] border-r-[0px] border-l-[3px] border-[#cdd0d180] outline-none'
            />
          </div>
        </div>
        <div className='w-full overflow-hidden col-span-3'>
          <p className='text-[14px] font-semibold'>Ngày vận chuyển</p>
          <div className='w-full overflow-hidden mt-4 '>
            <input
              type='date'
              onChange={(e) => setDate(new Date(e.target.value).getTime())}
              name='timeOrder'
              className='text-[#000] px-3 w-full min-h-[40px] border-y-[3px] border-r-[0px] border-l-[3px] border-[#cdd0d180] outline-none'
            />
          </div>
        </div>
        <button
          className='flex w-1/2 items-center rounded-r-lg border-y-[3px] border-r-[0px] border-l-[3px] border-[#cdd0d180] pl-2 py-4 bg-[#ff5e1f] h-[40px]'
          onClick={handleSearch}
        >
          <svg
            width='24'
            height='24'
            viewBox='0 0 24 24'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'
            data-id='IcSystemSearch'
          >
            <path
              d='M15 15L20.5 20.5M10 17C13.866 17 17 13.866 17 10C17 6.13401 13.866 3 10 3C6.13401 3 3 6.13401 3 10C3 13.866 6.13401 17 10 17Z'
              stroke='#FFFFFF'
              strokeWidth='2'
              strokeLinecap='round'
              strokeLinejoin='round'
            ></path>
          </svg>
        </button>
      </div>
    </div>
  )
}

export default Transportation
