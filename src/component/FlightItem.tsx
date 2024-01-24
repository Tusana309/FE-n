import React, { useEffect, useState } from 'react'
import HeaderSub from './HeaderSub'
import { useLocation, useNavigate } from 'react-router-dom'
import Loading from './Loading'

function FlightItem() {
  const location = useLocation()
  const navigate = useNavigate()
  const [value, setValue] = useState(10)
  if (!location?.state?.itineraries?.length) {
    return <Loading />
  }

  useEffect(()=>{
    console.log(location);
    
  },[])
  
  return (
    <div>
      <HeaderSub />
      <div className='bg-[#eff1f2]'>
        <div className='mx-auto px-4 pt-[120px] max-w-[600px]'>
          <div className='flex flex-col gap-2 items-center px-4'>
            <div className='flex gap-2 items-center bg-[#015386] px-3 py-2 rounded-lg'>
              <div>
                <img
                  src='https://ik.imagekit.io/tvlk/image/imageResource/2020/04/02/1585822077238-0c53c5e6508ac2e425e91fc6e59eb1f0.png?tr=h-24,q-75,w-24'
                  alt=''
                />
              </div>
              <p className='text-white w-full'>
                Bạn muốn kế hoạch lưu trú của mình linh hoạt hơn trong giai đoạn này? Hãy tìm hiểu các gợi ý sau nhé.
              </p>
              <svg
                width='16'
                height='16'
                viewBox='0 0 24 24'
                fill='none'
                xmlns='http://www.w3.org/2000/svg'
                data-id='IcSystemHelpFill'
              >
                <path
                  fillRule='evenodd'
                  clipRule='evenodd'
                  d='M23 12C23 18.0751 18.0751 23 12 23C5.92487 23 1 18.0751 1 12C1 5.92487 5.92487 1 12 1C18.0751 1 23 5.92487 23 12ZM13.5061 6.13503C12.558 5.66096 11.442 5.66096 10.4939 6.13503L9.55276 6.60557C9.05878 6.85256 8.85856 7.45324 9.10555 7.94721C9.35254 8.44119 9.95321 8.64142 10.4472 8.39443L11.3883 7.92388C11.7734 7.73135 12.2266 7.73135 12.6117 7.92388L12.9197 8.07791C13.4805 8.35832 13.7843 8.97938 13.6613 9.59422C13.6075 9.86339 13.4752 10.1106 13.2811 10.3047L12.1371 11.4487C11.8331 11.7527 11.5801 12.1037 11.3878 12.4883L11.3167 12.6305C11.1084 13.0471 11 13.5064 11 13.9722V14C11 14.5523 11.4477 15 12 15C12.5523 15 13 14.5523 13 14V13.9722C13 13.8169 13.0361 13.6638 13.1055 13.525L13.1767 13.3827C13.2728 13.1904 13.3993 13.0149 13.5513 12.8629L14.6953 11.7189C15.1686 11.2456 15.4912 10.6428 15.6225 9.98644C15.9223 8.48723 15.1817 6.97281 13.8142 6.28906L13.5061 6.13503ZM11.75 15.75C11.1977 15.75 10.75 16.1977 10.75 16.75V17.25C10.75 17.8023 11.1977 18.25 11.75 18.25H12.25C12.8023 18.25 13.25 17.8023 13.25 17.25V16.75C13.25 16.1977 12.8023 15.75 12.25 15.75H11.75Z'
                  fill='#FFFFFF'
                ></path>
              </svg>
            </div>
            {location?.state?.itineraries?.slice(0, value).map((item: any) => {
              return (
                <div className='px-3 py-6 flex justify-between items-center rounded-xl w-full bg-white' key={item.id}>
                  <div className='flex justify-center '>
                    <img
                      src={item.legs[0].carriers.marketing[0].logoUrl}
                      alt=''
                      className='w-full h-full object-cover'
                    />
                  </div>
                  <div className='flex gap-3 items-center'>
                    <div className='flex flex-col justify-center'>
                      <span className='font-semibold'>{location.state.filterStats.airports[0].airports[0].name}</span>
                      <span className='text-center text-sm font-semibold'>
                        {location.state.filterStats.airports[0].airports[0].id}
                      </span>
                    </div>
                    <div className='relative'>
                      <img
                        src='https://www.vietnamairlinesgiare.vn/wp-content/themes/vietnamairlines/images/flight-icon.svg'
                        alt=''
                      />
                      <div className='absolute text-xs top-[-10px] left-1/3'>
                        {(+item.price.formatted.slice(1, 3) * 25000)
                          .toLocaleString('vi-VN', { style: 'currency', currency: 'VND' })
                          .replace('₫', '')}
                        VND
                      </div>
                    </div>
                    <div className='flex flex-col'>
                      <span className='font-semibold'>{location.state.filterStats.airports[1].airports[0].name}</span>
                      <span className='text-center text-sm font-semibold'>
                        {location.state.filterStats.airports[1].airports[0].id}
                      </span>
                    </div>
                  </div>
                  <div className='bg-[#154679] rounded-lg' onClick={() => navigate('/flight', { state: item })}>
                    <button className='flex px-2 py-1 gap-3 items-center'>
                      <p className='text-white font-semibold'>Chọn</p>
                      <svg
                        xmlns='http://www.w3.org/2000/svg'
                        viewBox='0 0 24 24'
                        aria-hidden='true'
                        fill='white'
                        style={{ width: '1rem', height: '1rem' }}
                      >
                        <path
                          d='M3 12a1.5 1.5 0 001.5 1.5h11.379l-4.94 4.94a1.5 1.5 0 002.122 2.12l7.5-7.5a1.5 1.5 0 000-2.12l-7.5-7.5a1.5 1.5 0 00-2.122 2.12l4.94 4.94H4.5A1.5 1.5 0 003 12z'
                          clipRule='evenodd'
                        ></path>
                      </svg>
                    </button>
                  </div>
                </div>
              )
            })}
            <div className='bg-[#c2c9cd] px-3 py-2 rounded-lg mt-2' onClick={() => setValue(value + 10)}>
              <button className='text-[#161616] font-bold'>Hiển thị thêm kết quả</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default FlightItem
