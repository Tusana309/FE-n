import classNames from 'classnames'
import React, { useContext } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import HeaderSub from 'src/component/HeaderSub'
import Loading from 'src/component/Loading'
import { AppContext } from 'src/context/app.context'

export default function Search() {
  const navigate = useNavigate()
  const location = useLocation()
  function handlePickRoom(price: string, id: string) {
    navigate('/location/booking', { state: { price, id } })
  }

  return (
    <>
      <HeaderSub />
      <div className='mx-auto px-4 sm:mt-[120px] max-sm:mt-5 max-w-[1000px]'>
        <div className='flex gap-2 items-center bg-[#015386] px-4 py-2 rounded-lg'>
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
        {location.state ? (
          <>
            <div className='flex gap-2 items-center mt-4 bg-[#fff] px-4 py-2 rounded-lg shadow-md mb-4'>
              {/* <p className='ml-2 text-[#000] font-semibold w-full'>Tìm thấy 16285 cơ sở lưu trú tại Đà Nẵng</p> */}
            </div>
            <div className='grid mb-4 grid-cols-3 gap-3 shadow-md rounded-md'>
              {location.state.map((item: any, index: any) => (
                <div className='col-span-1'>
                  <div className='w-full'>
                    <img src={item.location_img} alt='' className='rounded-md w-full' />
                  </div>
                  <div className='p-3'>
                    <div className=''>
                      <div className='flex gap-2 '>
                        <div className=''>
                          <img
                            src='https://d1785e74lyxkqq.cloudfront.net/_next/static/v2/b/b389ffb3531caf7ef87136de528d466f.svg'
                            alt=''
                            className='w-5 h-5 object-cover '
                          />
                        </div>
                        <p className='text-[#687176] text-base font-semibold'>{item.location}</p>
                      </div>
                      <p className='truncate font-bold'>{item.description}</p>
                    </div>
                    <p className='mt-4 text-[#ff5e1f] font-bold text-end'>{item.price} VND</p>
                    <div
                      className='flex gap-2 items-end justify-end cursor-pointer'
                      onClick={() => handlePickRoom(item.price, item._id)}
                    >
                      <p className='mt-2 text-[#ff5e1f] font-bold text-base text-end'>Đặt vé</p>
                      <svg
                        width='18'
                        height='15'
                        viewBox='0 0 24 24'
                        fill='none'
                        xmlns='http://www.w3.org/2000/svg'
                        data-id='IcSystemArrowRight'
                        className='mb-1'
                      >
                        <path
                          d='M4 12H20M20 12L13 5M20 12L13 19'
                          stroke='#FF6D6A'
                          strokeWidth='2'
                          strokeLinecap='round'
                          strokeLinejoin='round'
                        ></path>
                      </svg>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </>
        ) : (
          <Loading />
        )}
      </div>
    </>
  )
}
