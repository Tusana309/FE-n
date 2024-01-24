import React, { useContext } from 'react'
import { AppContext } from 'src/context/app.context';
import { formatDate, formatStatus } from 'src/utills/date'

function LocationItem({ _, index }: { _: any; index: number }) {
  const { setMessage, profile } = useContext(AppContext)
  function handleChat(id: string) {
    if (id !== profile._id) {
      setMessage(false)
    }
  }
  return (
    <div className='py-3 px-4 bg-[#ecf8ff] shadow-md rounded-lg mt-4' key={index}>
      <div className='flex justify-between'>
        <h1 className='text-[#687176] text-[14px]'>Mã đặt chỗ Traveloka {_._id}</h1>
        <div className='flex items-center gap-2'>
          <p className='text-[#03121a] font-bold'>{_.locations?.price} VND</p>
          <div className='cursor-pointer'onClick={() => handleChat(_.locations?.user_id)}>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              fill='white'
              viewBox='0 0 24 24'
              strokeWidth={1.5}
              stroke='currentColor'
              className='w-6 h-6 '
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                d='M2.25 12.76c0 1.6 1.123 2.994 2.707 3.227 1.087.16 2.185.283 3.293.369V21l4.076-4.076a1.526 1.526 0 0 1 1.037-.443 48.282 48.282 0 0 0 5.68-.494c1.584-.233 2.707-1.626 2.707-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0 0 12 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018Z'
              />
            </svg>
          </div>
        </div>
      </div>
      <div className='flex gap-2 items-center'>
        <div className='flex flex-col'>
          <div className='flex gap-2 items-center'>
            <svg
              width='16'
              height='16'
              viewBox='0 0 16 16'
              fill='none'
              xmlns='http://www.w3.org/2000/svg'
              data-id='IcProductHotelFill16'
            >
              <path
                fillRule='evenodd'
                clipRule='evenodd'
                d='M1 3.5C1 2.67157 1.67157 2 2.5 2H3V1.5C3 1.22386 3.22386 1 3.5 1H7.5C7.77614 1 8 1.22386 8 1.5V2H8.5C9.32843 2 10 2.67157 10 3.5V6H13.5C14.3284 6 15 6.67157 15 7.5V14.5C15 14.7761 14.7761 15 14.5 15H7.5C7.22386 15 7 14.7761 7 14.5V14C7 13.4477 6.55228 13 6 13H5C4.44772 13 4 13.4477 4 14V14.5C4 14.7761 3.77614 15 3.5 15H1.5C1.22386 15 1 14.7761 1 14.5V3.5ZM2.5 4C2.22386 4 2 4.22386 2 4.5V5.5C2 5.77614 2.22386 6 2.5 6H4.5C4.77614 6 5 5.77614 5 5.5V4.5C5 4.22386 4.77614 4 4.5 4H2.5ZM6.5 4C6.22386 4 6 4.22386 6 4.5V5.5C6 5.77614 6.22386 6 6.5 6H8.5C8.77614 6 9 5.77614 9 5.5V4.5C9 4.22386 8.77614 4 8.5 4H6.5ZM2.5 7C2.22386 7 2 7.22386 2 7.5V8.5C2 8.77614 2.22386 9 2.5 9H4.5C4.77614 9 5 8.77614 5 8.5V7.5C5 7.22386 4.77614 7 4.5 7H2.5ZM6.5 7C6.22386 7 6 7.22386 6 7.5V8.5C6 8.77614 6.22386 9 6.5 9H8.5C8.77614 9 9 8.77614 9 8.5V7.5C9 7.22386 8.77614 7 8.5 7H6.5ZM2.5 10C2.22386 10 2 10.2239 2 10.5V11.5C2 11.7761 2.22386 12 2.5 12H4.5C4.77614 12 5 11.7761 5 11.5V10.5C5 10.2239 4.77614 10 4.5 10H2.5ZM6.5 10C6.22386 10 6 10.2239 6 10.5V11.5C6 11.7761 6.22386 12 6.5 12H8.5C8.77614 12 9 11.7761 9 11.5V10.5C9 10.2239 8.77614 10 8.5 10H6.5ZM11.5 8C11.2239 8 11 8.22386 11 8.5V9.5C11 9.77614 11.2239 10 11.5 10H13.5C13.7761 10 14 9.77614 14 9.5V8.5C14 8.22386 13.7761 8 13.5 8H11.5ZM11.5 11C11.2239 11 11 11.2239 11 11.5V12.5C11 12.7761 11.2239 13 11.5 13H13.5C13.7761 13 14 12.7761 14 12.5V11.5C14 11.2239 13.7761 11 13.5 11H11.5ZM11 1.5C11 1.22386 11.2239 1 11.5 1C11.7761 1 12 1.22386 12 1.5V3H14V1.5C14 1.22386 14.2239 1 14.5 1C14.7761 1 15 1.22386 15 1.5V5C15 5.27614 14.7761 5.5 14.5 5.5C14.2239 5.5 14 5.27614 14 5V4H12V5C12 5.27614 11.7761 5.5 11.5 5.5C11.2239 5.5 11 5.27614 11 5V1.5Z'
                fill='#235D9F'
              ></path>
            </svg>
            <p className='text-[#03121a] font-bold'>{_.locations?.location_name}</p>
          </div>
          <p>
            Mã chuyển khoản: <p className='font-semibold inline'>{_.code}</p>
          </p>
          <p>Số người {_.amount_human}</p>
          <p>Ngày tham quan {formatDate(_.tour_day)}</p>
          <p>Trạng thái: {formatStatus(_.status)}</p>
        </div>
      </div>
    </div>
  )
}

export default LocationItem
