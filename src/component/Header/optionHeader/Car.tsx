import classNames from 'classnames'
import React, { useContext, useEffect, useState } from 'react'
import { useMutation } from 'react-query'
import { useNavigate } from 'react-router-dom'
import { Props, searchCar } from 'src/apis/car.api'
import { AppContext } from 'src/context/app.context'
const car = ['4', '5', '7', '16', '29', '30', '35', '45', '47']
function Car() {
  const [keySearch, setKeySearch] = useState('')
  const [seater, setSeater] = useState('')
  const [isDrive, setIsDrive] = useState(true)
  const [date, setDate] = useState(0)
  const navigate = useNavigate()
  const { setTicket } = useContext(AppContext)
  const searchMutation = useMutation((body: Props) => searchCar(body))
  function handleSearch() {
    searchMutation.mutate(
      { key: keySearch, body: { seater_number: +seater } },
      {
        onSuccess: (data) => {
          setTicket(isDrive)
          navigate('/car/search', { state: { data: data.data.result, seater, date } })
        }
      }
    )
  }
  useEffect(()=>{
    console.log(seater);
    
  },[seater])
  return (
    <div className='max-w-[1200px] w-full px-24 '>
      <div className='flex gap-4 ml-16 mt-4 '>
        <div
          className={classNames('flex gap-2 items-center cursor-pointer transition-all py-2 px-3 text-sm rounded-3xl', {
            'bg-[#0194f3]': isDrive
          })}
          onClick={() => setIsDrive(true)}
        >
          <svg
            width='16'
            height='16'
            viewBox='0 0 24 24'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'
            data-id='IcTransportPickUpDriver'
          >
            <path
              d='M2 4V5C2 7.20914 3.79086 9 6 9H11.7639C12.5215 9 13.214 9.428 13.5528 10.1056L14 11M8 7C6.89543 7 6 6.10457 6 5C6 3.89543 6.89543 3 8 3C9.10457 3 10 3.89543 10 5C10 6.10457 9.10457 7 8 7Z'
              stroke='#FFFFFF'
              strokeWidth='2'
              strokeLinecap='round'
              strokeLinejoin='round'
            ></path>
            <path
              d='M6 15H8M16 15H18M21 11H19M19 11L17.8289 6.90112C17.3383 5.18391 15.7687 4 13.9828 4H13M19 11H3M17 18H20V19.5C20 20.3284 19.3284 21 18.5 21C17.6716 21 17 20.3284 17 19.5V18ZM4 18H7V19.5C7 20.3284 6.32843 21 5.5 21C4.67157 21 4 20.3284 4 19.5V18ZM5 18H19C20.1046 18 21 17.1046 21 16V14C21 12.3431 19.6569 11 18 11H6C4.34315 11 3 12.3431 3 14V16C3 17.1046 3.89543 18 5 18Z'
              stroke='#FFFFFF'
              strokeWidth='2'
              strokeLinecap='round'
              strokeLinejoin='round'
            ></path>
          </svg>
          <p>Tự lái</p>
        </div>
        <div
          className={classNames('flex gap-2 items-center cursor-pointer transition-all py-2 px-3 text-sm rounded-3xl', {
            'bg-[#0194f3]': !isDrive
          })}
          onClick={() => setIsDrive(!true)}
        >
          <svg
            width='16'
            height='16'
            viewBox='0 0 24 24'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'
            data-id='IcTripDriver'
          >
            <path
              d='M8 4.94713V7.5C8 9.70914 9.79086 11.5 12 11.5V11.5C14.2091 11.5 16 9.70914 16 7.5V4.94713M6.5 20L3.5 21C3.5 21 5 14 12 14C19 14 20.5 21 20.5 21L17.5 20M12 7C10.217 7 7.92539 4.96542 6.75755 3.79836C6.45369 3.4947 6.6723 3 7.10188 3H16.8981C17.3277 3 17.5463 3.4947 17.2425 3.79836C16.0746 4.96542 13.783 7 12 7Z'
              stroke='#FFFFFF'
              strokeWidth='2'
              strokeLinecap='round'
              strokeLinejoin='round'
            ></path>
            <path
              d='M12 16C13.6569 16 15 17.3431 15 19C15 20.6569 13.6569 22 12 22C10.3431 22 9 20.6569 9 19C9 17.3431 10.3431 16 12 16Z'
              stroke='#FFFFFF'
              strokeWidth='2'
              strokeLinecap='round'
              strokeLinejoin='round'
            ></path>
          </svg>
          <p>Có tài xế</p>
        </div>
      </div>
      <div className='mt-2 justify-start grid grid-cols-10 items-end'>
        <div className='col-span-1'></div>
        <div className='w-full rounded-l-lg ml-4 overflow-hidden col-span-3'>
          <p className='text-[14px] ml-4 font-semibold'>Điểm đón</p>
          <div className='w-full rounded-l-lg overflow-hidden mt-4'>
            <input
              type='text'
              placeholder='VD: Hà Nội,...'
              onChange={(e) => setKeySearch(e.target.value)}
              className='text-[#000] px-3 w-full min-h-[40px] border-y-[3px] border-r-[0px] border-l-[3px] border-[#cdd0d180] outline-none'
            />
          </div>
        </div>
        <div className='w-full ml-4 overflow-hidden col-span-2'>
          <p className='text-[14px] ml-4 font-semibold'>Ngày nhận xe</p>
          <div className='w-full overflow-hidden mt-4'>
            <input
              type='date'
              onChange={(e) => setDate(new Date(e.target.value).getTime())}
              className='text-[#000] px-5 w-full min-h-[40px] border-y-[3px] border-r-[0px] border-l-[3px] border-[#cdd0d180] outline-none'
            />
          </div>
        </div>
        <div className='col-span-2'>
          <p className='text-[14px] font-semibold'>Chọn số ghế</p>
          <div className='w-full overflow-hidden mt-4'>
            <select
              name=''
              id=''
              className='text-[#000] px-3  w-full min-h-[40px] border-y-[3px] border-r-[0px] border-l-[3px] border-[#cdd0d180] outline-none'
              onChange={(e) => setSeater(e.target.value)}
            >
              <option value='0'>Chọn số lượng chỗ</option>
              {car.map((item, index) => (
                <option key={index} value={item}>
                  Xe {item} chỗ
                </option>
              ))}
            </select>
            {/* <input
              type='number'
              placeholder='VD: 7'
              onChange={(e) => setSeater(e.target.value)}
              className='text-[#000] px-3 py-2 w-full min-h-[40px] border-y-[3px] border-r-[0px] border-l-[3px] border-[#cdd0d180] outline-none'
            /> */}
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

export default Car
