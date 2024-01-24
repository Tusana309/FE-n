import React, { useState } from 'react'
import { useMutation } from 'react-query'
import { useNavigate } from 'react-router-dom'
import { searchHotel } from 'src/apis/hotel.api'
import { searchLocation } from 'src/apis/location.api'
function Location() {
  const [keySearch, setKeySearch] = useState('')
  const navigate = useNavigate()
  const searchMutation = useMutation((key: string) => searchLocation(key))
  function handleSearch() {
    searchMutation.mutate(keySearch, {
      onSuccess: (data) => {
        navigate('/location/search', { state: data.data.result })
      }
    })
  }
  return (
    <div className='max-w-[1200px] w-full px-24 '>
      <div className='mt-8 justify-start grid grid-cols-10 items-end'>
        <div className='w-full rounded-l-lg overflow-hidden col-span-9'>
          <p className='text-[14px] font-semibold py-2'></p>
          <div className='w-full rounded-l-lg overflow-hidden mt-4'>
            <input
              type='text'
              placeholder='Tìm hoạt động hoặc điểm đến'
              onChange={(e) => setKeySearch(e.target.value)}
              className='text-[#000] px-3 py-2 w-full min-h-[40px] border-y-[3px] border-r-[0px] border-l-[3px] border-[#cdd0d180] outline-none'
            />
          </div>
        </div>
        <button
          className='flex w-1/2 items-center rounded-r-lg border-y-[3px] border-r-[0px] border-l-[3px] border-[#cdd0d180] pl-2 py-5 bg-[#ff5e1f] h-[40px]'
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

export default Location
