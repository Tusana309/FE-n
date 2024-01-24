import classNames from 'classnames'
import React, { useContext } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import HeaderSub from 'src/component/HeaderSub'
import Loading from 'src/component/Loading'
import { AppContext } from 'src/context/app.context'

export default function Search() {
  const navigate = useNavigate()
  const location = useLocation()
  const { setMessage, profile } = useContext(AppContext)
  function handlePickRoom(price: string, id: string) {
    navigate('/transportation/booking', { state: { price, id } })
  }
  function handleChat(id: string) {
    if (id !== profile._id) {
      setMessage(false)
    }
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
              {/* <p className='ml-2 text-[#000] font-semibold w-full'>Tìm thấy 1685 cơ sở lưu trú tại Đà Nẵng</p> */}
            </div>
            {location.state.map((item: any, index: any) => (
              <div className='grid mb-4 grid-cols-4 gap-3 shadow-md rounded-md overflow-hidden' key={index}>
                <div className='col-span-1 rounded-md flex flex-col gap-1'>
                  <div className='rounded-md w-full h-full'>
                    <img className='w-full object-cover object-center h-full' src={item.car_vehicle} alt='' />
                  </div>
                </div>
                <div className='col-span-2'>
                  <div className='flex gap-2 items-center'>
                    <p className='text-[#03121a] font-bold mb-3'>{item.tranportation_name}</p>
                    <div className='cursor-pointer mb-3' onClick={() => handleChat(item.user_id)}>
                      <svg
                        xmlns='http://www.w3.org/2000/svg'
                        fill='white'
                        viewBox='0 0 24 24'
                        strokeWidth={1.5}
                        stroke='currentColor'
                        className='w-4 h-4 '
                      >
                        <path
                          strokeLinecap='round'
                          strokeLinejoin='round'
                          d='M2.25 12.76c0 1.6 1.123 2.994 2.707 3.227 1.087.16 2.185.283 3.293.369V21l4.076-4.076a1.526 1.526 0 0 1 1.037-.443 48.282 48.282 0 0 0 5.68-.494c1.584-.233 2.707-1.626 2.707-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0 0 12 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018Z'
                        />
                      </svg>
                    </div>
                  </div>
                  <div className='flex items-center gap-1'>
                    <div>
                      <img
                        src='https://ik.imagekit.io/tvlk/image/imageResource/2023/03/28/1679986877455-c9fba4a49268f20248a89a0b68c86973.png?tr=h-12,q-75,w-12'
                        alt=''
                      />
                    </div>
                    <p className='text-[14px] text-[#0264c8] font-semibold'> {item.location} </p>
                    <div className='flex items-center'>
                      {Array(4)
                        .fill(0)
                        .map((_, index) => (
                          <img
                            key={index}
                            src='https://d1785e74lyxkqq.cloudfront.net/_next/static/v2/e/e4cb5ddfa3d1399bc496ee6b6539a5a7.svg'
                            alt=''
                          />
                        ))}
                      <img
                        src='https://d1785e74lyxkqq.cloudfront.net/_next/static/v2/5/50ebd00a57a4a3f5c2414dab877609f6.svg'
                        alt=''
                      />
                    </div>
                  </div>
                  <div className='flex items-center gap-1 mb-3'>
                    <svg
                      width='12'
                      height='12'
                      viewBox='0 0 24 24'
                      fill='none'
                      xmlns='http://www.w3.org/2000/svg'
                      data-id='IcSystemMapLocationFill'
                    >
                      <path
                        fillRule='evenodd'
                        clipRule='evenodd'
                        d='M21 10C21 7.25554 20.0331 4.98482 18.3787 3.40236C16.7312 1.8265 14.4725 1 12 1C9.52754 1 7.26876 1.8265 5.62128 3.40236C3.96688 4.98482 3 7.25554 3 10C3 13.4069 5.24119 16.5278 7.2718 18.6854C8.31023 19.7887 9.34524 20.694 10.1194 21.323C10.5073 21.6381 10.8316 21.8855 11.0609 22.0554C11.0795 22.0692 11.0982 22.0831 11.1169 22.0971C11.3805 22.2937 11.6567 22.4998 12 22.4998C12.3432 22.4999 12.6194 22.2938 12.8829 22.0972C12.9017 22.0832 12.9205 22.0692 12.9391 22.0554C13.1684 21.8855 13.4927 21.6381 13.8806 21.323C14.6548 20.694 15.6898 19.7887 16.7282 18.6854C18.7588 16.5278 21 13.4069 21 10ZM15.5 9.5C15.5 11.433 13.933 13 12 13C10.067 13 8.5 11.433 8.5 9.5C8.5 7.567 10.067 6 12 6C13.933 6 15.5 7.567 15.5 9.5Z'
                        fill='#687176'
                      ></path>
                    </svg>
                    <p className='text-[#03121a] font-semibold text-[14px]'>{item.location}</p>
                  </div>
                  <div className='flex gap-2'>
                    <p key={index} className='text-[#03121a] font-semibold text-[12px] bg-[#f9f9f9] px-2'>
                      {item.description}
                    </p>
                  </div>
                </div>
                <div className='col-span-1 flex flex-col justify-end mb-3'>
                  <div className='flex gap-1  '>
                    <div>
                      <img
                        src='https://ik.imagekit.io/tvlk/image/imageResource/2018/04/03/1522754232742-552d078378e134fb3df3b659a7d527f4.png?tr=h-16,q-75,w-16'
                        alt=''
                      />
                    </div>
                    <p className='text-[#05a069] font-semibold text-[12px]'>Ưu đãi tặng riêng bạn</p>
                  </div>
                  <p className='text-[#ff5e1f] font-bold text-[20px] text-start'>{item.price} VND</p>
                  <div>
                    <button
                      onClick={() => handlePickRoom(item.price, item._id)}
                      className='py-1 px-2 bg-[#ff5e1f] rounded-xl text-[14px] font-bold text-white'
                    >
                      Chọn dịch vụ
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </>
        ) : (
          <Loading />
        )}
      </div>
    </>
  )
}
