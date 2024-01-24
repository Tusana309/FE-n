import React from 'react'
type Props = {
  setKeySearch: React.Dispatch<React.SetStateAction<string>>
  handleSearch(): void
  setDate: React.Dispatch<
    React.SetStateAction<{
      timeOrder: number
      timeBack: number
    }>
  >
  date: {
    timeOrder: number
    timeBack: number
  }
}
function Hotel({ handleSearch, setKeySearch, setDate, date }: Props) {
  function handleOnChange(e: React.ChangeEvent<HTMLInputElement>) {
    setDate({
      ...date,
      [e.target.name]: new Date(e.target.value).getTime()
    })
  }
  return (
    <div className='max-w-[1200px] w-full px-24 '>
      <div className='mt-8 justify-start grid grid-cols-12 items-end'>
        <div className='w-full rounded-l-lg overflow-hidden  col-span-3'>
          <p className='text-[14px] font-semibold'>Thành phố, địa điểm hoặc tên khách sạn:</p>
          <div className='w-full rounded-l-lg overflow-hidden mt-4 '>
            <input
              type='text'
              placeholder='VD: Đà Nẵng,...'
              onChange={(e) => setKeySearch(e.target.value)}
              className='text-[#000] px-3 w-full min-h-[40px] border-y-[3px] border-r-[0px] border-l-[3px] border-[#cdd0d180] outline-none'
            />
          </div>
        </div>

        <div className='w-full overflow-hidden col-span-3'>
          <p className='text-[14px] font-semibold'>Ngày nhận phòng</p>
          <div className='w-full overflow-hidden mt-4 '>
            <input
              type='date'
              onChange={handleOnChange}
              name='timeOrder'
              className='text-[#000] px-3 w-full min-h-[40px] border-y-[3px] border-r-[0px] border-l-[3px] border-[#cdd0d180] outline-none'
            />
          </div>
        </div>
        <div className='w-full overflow-hidden col-span-3'>
          <p className='text-[14px] font-semibold'>Ngày trả phòng</p>
          <div className='w-full overflow-hidden mt-4 '>
            <input
              type='date'
              name='timeBack'
              onChange={handleOnChange}
              className='text-[#000] px-3 w-full min-h-[40px] border-y-[3px] border-r-[0px] border-l-[3px] border-[#cdd0d180] outline-none'
            />
          </div>
        </div>
        <div className='w-full overflow-hidden  col-span-2'>
          <p className='text-[14px] font-semibold'>Khách và Phòng</p>
          <div className='w-full overflow-hidden mt-4 col-span-1'>
            <input
              type='text'
              placeholder='1 người lớn, 0 Trẻ em, 1 phòng'
              className='text-[#000] px-3 w-full min-h-[40px] border-y-[3px] border-r-[0px] border-l-[3px] border-[#cdd0d180] outline-none'
            />
          </div>
        </div>
        <button
          className='flex w-1/2 items-center rounded-r-lg border-y-[3px] border-r-[0px] border-l-[3px] border-[#cdd0d180] pl-2 bg-[#ff5e1f] h-[40px]'
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

export default Hotel
