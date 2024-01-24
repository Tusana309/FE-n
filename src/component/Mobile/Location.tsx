import React, { useState } from 'react'
import { useMutation } from 'react-query'
import { useNavigate } from 'react-router-dom'
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
    <div className='p-4 text-white'>
      <p className='text-2xl font-bold text-white'>Từ Đông Nam Á Đến Thế Giới, Trong Tầm Tay Bạn</p>
      <div className={`p-4 bg-white rounded-lg mt-4`}>
        <form action='' className='flex flex-col gap-2'>
          <div className='flex flex-col'>
            <label htmlFor='' className='text-[#7a8286] text-base font-semibold'>
              Địa điểm vui chơi
            </label>
            <input
              type='text'
              className='outline-none font-normal pb-2 border-b-2 text-[#7a8286] text-base'
              placeholder='Tìm hoạt động hoặc điểm đến'
              onChange={(e) => setKeySearch(e.target.value)}
            />
          </div>
          <div className='w-full py-2 bg-[#ff5e1f] text-center rounded-lg'>
            <button type='button' onClick={handleSearch} className='text-base font-semibold'>
              Tìm kiếm
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default Location
