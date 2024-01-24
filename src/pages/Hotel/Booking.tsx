import classNames from 'classnames'
import React, { useContext, useState } from 'react'
import { useMutation, useQuery } from 'react-query'
import { useLocation, useNavigate } from 'react-router-dom'
import { BookingBody, createBooking } from 'src/apis/booking.api'
import { getHotelId } from 'src/apis/hotel.api'
import HeaderSub from 'src/component/HeaderSub'
import { AppContext } from 'src/context/app.context'
import { Start } from './Search'
import { formatDate } from 'src/utills/date'
export default function Booking() {
  const navigate = useNavigate()
  const location = useLocation()
  const [name, setName] = useState('')
  const bookingMutation = useMutation((body: BookingBody) => createBooking(body))
  const { profile, ticket } = useContext(AppContext)
  const { data: result } = useQuery({
    queryKey: ['', location.state.id],
    queryFn: () => getHotelId(location.state.id)
  })
  const { setMessage } = useContext(AppContext)
  function handleChat(id: string) {
    if (id !== profile._id) {
      setMessage(false)
    }
  }
  function handleDatPhong() {
    if (location.state) {
      bookingMutation.mutate(
        {
          hotel_id: location.state.id,
          date_pick: new Date().getTime(),
          name: name || profile?.full_name,
          timeOrder: ticket.timeOrder,
          timeBack: ticket.timeBack
        },
        {
          onSuccess: (data) => {
            navigate('/pay', {
              state: { price: location.state.price, code: data.data.result.code, result: result?.data.result }
            })
          }
        }
      )
    }
  }
  return (
    <>
      <HeaderSub />
      <div className='bg-[#f7f9fa]'>
        <div className='mx-auto px-4 flex max-sm:flex-col sm:pt-[140px] max-w-[1200px]'>
          <div className='sm:w-2/3'>
            <div>
              <h1 className='text-[#03121a] text-[24px] font-bold'>Đặt phòng khách sạn</h1>
              <p className='text-[#687176] text-[16px] font-bold mt-2 mb-2'>
                Hãy chắc chắn rằng tất cả thông tin trên trang này là chính xác trước khi tiến hành thanh toán.
              </p>
              <h1 className='text-[#03121a] text-[20px] font-bold'>Chi tiết liên hệ (cho Vé điện tử/Phiếu xác nhận)</h1>
              <div className='p-4 rounded-md shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px] bg-white'>
                <div className='flex flex-col'>
                  <label htmlFor='name' className='text-[#03121a] text-[14px] font-bold'>
                    Họ và tên
                  </label>
                  <input
                    type='text'
                    id='name'
                    defaultValue={profile?.full_name}
                    onChange={(e) => setName(e.target.value)}
                    className='outline-none border p-2 rounded-md mt-2 focus:border-2 mb-1 focus:border-blue-400'
                  />
                  <p className='text-[#687176] text-[12px] font-bold'>*Nhập tên như trên CMND/hộ chiếu (không dấu)</p>
                </div>
                <div className='flex gap-4 mt-4'>
                  <div className='flex flex-col w-1/2'>
                    <label htmlFor='phone' className='text-[#03121a] text-[14px] font-bold'>
                      Số điện thoại
                    </label>
                    <input
                      type='text'
                      id='phone'
                      defaultValue={profile?.phone}
                      className='outline-none border p-2 rounded-md mt-2 focus:border-2 mb-1 focus:border-blue-400'
                    />
                    <p className='text-[#687176] text-[12px] font-bold'>
                      ví dụ. +62812345678 gồm Mã quốc gia (+62) và Số di động 0812345678.
                    </p>
                  </div>
                  <div className='flex flex-col w-1/2'>
                    <label htmlFor='email' className='text-[#03121a] text-[14px] font-bold'>
                      E-mail
                    </label>
                    <input
                      type='text'
                      id='email'
                      defaultValue={profile?.email}
                      className='outline-none border p-2 rounded-md mt-2 focus:border-2 mb-1 focus:border-blue-400'
                    />
                    <p className='text-[#687176] text-[12px] font-bold'>VD: email@example.com</p>
                  </div>
                </div>
              </div>
            </div>
            <div className='mt-4'>
              <h1 className='text-[#03121a] text-[16px] font-bold'>Chính sách huỷ phòng</h1>
              <div className='p-4 rounded-md shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px] bg-white flex'>
                <p className='text-[#687176] text-[14px] font-semibold'>
                  Đặt phòng này <b>không thể hoàn tiền và không thể đổi lịch.</b>
                </p>
              </div>
            </div>
            <div className='mt-4'>
              <h1 className='text-[#03121a] text-[24px] font-bold'>Chi tiết giá</h1>
              <div className='p-4 rounded-md shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px] bg-white'>
                <div className='flex justify-between w-full'>
                  <p className='text-[#03121a] text-[16px] font-bold'>Thành Tiền</p>
                  <div className='flex items-center'>
                    <svg
                      width='24'
                      height='24'
                      viewBox='0 0 24 24'
                      fill='none'
                      xmlns='http://www.w3.org/2000/svg'
                      data-id='IcSystemChevronDown'
                    >
                      <path
                        d='M6 9L12 15L18 9'
                        stroke='#0194f3'
                        strokeWidth='2'
                        strokeLinecap='round'
                        strokeLinejoin='round'
                      ></path>
                    </svg>
                    <p className='text-[#03121a] text-[16px] font-bold'>{location.state.price} VND</p>
                  </div>
                </div>
                <div className='mt-4 flex gap-2 '>
                  <div className='shrink-0'>
                    <img
                      src='https://ik.imagekit.io/tvlk/image/imageResource/2022/09/13/1663036323265-71c4f62650fd2a96cda8cd045e2ab935.webp?tr=h-24,q-75'
                      alt=''
                    />
                  </div>
                  <p className='text-[#0194fa] text-[16px] font-bold'>
                    Thuế và phí là các khoản được Traveloka chuyển trả cho khách sạn. Mọi thắc mắc về thuế và hóa đơn,
                    vui lòng tham khảo Điều khoản và Điều kiện của Traveloka để được giải đáp
                  </p>
                </div>
                <div className='flex justify-between w-full mt-4'>
                  <p className='text-[#03121a] text-[16px] font-semibold'>(1x) Superior Double (1 đêm)</p>
                  <div className='flex items-center'>
                    <p className='text-[#03121a] text-[16px] font-bold'>{location.state.price} VND</p>
                  </div>
                </div>
                <div className='flex justify-between w-full mt-4'>
                  <p className='text-[#03121a] text-[16px] font-semibold'>Thuế và phí</p>
                  <div className='flex items-center'>
                    <p className='text-[#03121a] text-[16px] font-bold'>0 VND</p>
                  </div>
                </div>
              </div>
            </div>
            <div className='mt-4 grid grid-cols-9 max-sm:mb-8 sm:mb-32 justify-between max-sm:hidden'>
              <p className='col-span-4 text-[#03121a] text-[14px] font-semibold'>
                Khi nhấn vào nút này bạn công nhận mình đã đọc và đồng ý với các Điều khoản & Điều kiện và Chính sách
                quyền riêng tư của Traveloka
              </p>
              <p className='col-span-3'></p>
              <div className='col-span-2'>
                <button
                  onClick={handleDatPhong}
                  className='py-2 px-3 text-[15px] text-white rounded-lg font-semibold bg-[#ff5e1f]'
                >
                  Đặt phòng
                </button>
              </div>
            </div>
          </div>
          <div className='ml-4 sm:w-1/3 max-sm:mt-8'>
            <div className='p-4 bg-white shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px] rounded-t-xl'>
              <div className='flex justify-between'>
                <p className='text-[#03121a] text-[16px] font-bold'>{result?.data.result[0].hotel_name}</p>
                <Start />
              </div>
              {/* <p className='text-[#03121a] text-[16px] font-medium'>{result?.data.result[0].hotel_name}</p> */}
              <div className='cursor-pointer mb-3' onClick={() => handleChat(result?.data.result[0].user_id)}>
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
            <div>
              <img src={result?.data.result[0].hotel_img} alt='' className='w-full h-full' />
            </div>
            <div className='p-4 bg-white shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px] rounded-b-xl'>
              <div className='flex justify-between mt-4 gap-2'>
                <div className='flex flex-col items-center border px-2 py-3 border-[#cdd0d1] rounded-xl'>
                  <span className='text-[11px] text-[#687176] font-semibold'>Nhận phòng</span>
                  <span className='text-[12px] font-bold'>{formatDate(ticket.timeOrder)}</span>
                  <span className='text-[11px] text-[#687176] font-semibold'>Từ 14:00</span>
                </div>
                <div className='flex items-center'>
                  <div className='p-[3px] border-[0.5px] border-[#cdd0d1] inline-block rounded-full'></div>
                  <div className='w-[90px] border h-[1px] border-[#cdd0d1]'></div>
                  <div className='p-[3.5px] inline-block bg-[#cdd0d1] rounded-full'></div>
                </div>
                <div className='flex flex-col items-center border px-2 py-3 border-[#cdd0d1] rounded-xl'>
                  <span className='text-[11px] text-[#687176] font-semibold'>Trả phòng</span>
                  <span className='text-[12px] font-bold'>{formatDate(ticket.timeBack)}</span>
                  <span className='text-[11px] text-[#687176] font-semibold'>Trước 12:00</span>
                </div>
              </div>
              <h1 className='mt-4 font-bold'>(1x) Superior Double</h1>
              <p className='text-xs font-semibold text-[#e7090e]'>Được nhiều người chọn!</p>
              <div className='mt-4 flex gap-2'>
                <img
                  src='https://d1785e74lyxkqq.cloudfront.net/_next/static/v2/3/377ee1b8105881b249bd015d717ccf4f.svg'
                  alt=''
                />
                <p className='text-[#687176] font-medium text-sm'>2 khách</p>
              </div>
              <div className='mt-4 flex gap-2'>
                <img
                  src='https://d1785e74lyxkqq.cloudfront.net/_next/static/v2/b/bf6a43a380752458f8ff4bcf166ccd42.svg'
                  alt=''
                />
                <p className='text-[#687176] font-medium text-sm'>1 Giường đôi</p>
              </div>
              <div className='mt-4 flex gap-2'>
                <img
                  src='https://d1785e74lyxkqq.cloudfront.net/_next/static/v2/8/812d6f19a9d1ceb30728acbce11f709a.svg'
                  alt=''
                />
                <p className='text-[#687176] font-medium text-sm'>Không gồm bữa sáng</p>
              </div>
              <div className='mt-4 flex gap-2'>
                <img
                  src='https://d1785e74lyxkqq.cloudfront.net/_next/static/v2/4/4f0f6df93a9354e95d086ef2f54fd33d.svg'
                  alt=''
                />
                <img
                  src='https://d1785e74lyxkqq.cloudfront.net/_next/static/v2/b/b1b083b94f10e645e787bfebbda1c111.svg'
                  alt=''
                />
              </div>
              <div className='mt-4 flex justify-between'>
                <div>
                  <div className='flex items-center gap-2'>
                    <svg
                      width='16'
                      height='16'
                      viewBox='0 0 24 24'
                      fill='none'
                      xmlns='http://www.w3.org/2000/svg'
                      data-id='IcUserReceipt'
                    >
                      <path
                        d='M9 14H17M6 21V4C6 3.44772 6.44772 3 7 3V3C7.55228 3 7.97243 3.56084 8.43968 3.85529C8.57822 3.94259 8.76041 4 9 4C9.23959 4 9.42178 3.94259 9.56032 3.85529C10.0276 3.56084 10.4477 3 11 3V3C11.5523 3 11.9724 3.56084 12.4397 3.85529C12.5782 3.94259 12.7604 4 13 4C13.2396 4 13.4218 3.94259 13.5603 3.85529C14.0276 3.56084 14.4477 3 15 3V3C15.5523 3 15.9724 3.56084 16.4397 3.85529C16.5782 3.94259 16.7604 4 17 4C17.2396 4 17.4218 3.94259 17.5603 3.85529C18.0276 3.56084 18.4477 3 19 3V3C19.5523 3 20 3.44772 20 4V12V17C20 19.2091 18.2091 21 16 21H6ZM6 13H3V18.0023C3 19.6579 4.34214 21 5.99775 21V21L6 13Z'
                        stroke='#687176'
                        strokeWidth='2'
                        strokeLinecap='round'
                        strokeLinejoin='round'
                      ></path>
                      <path
                        d='M14 17H16.5M9 11H13M9 8H13M16 11H17M16 8H17'
                        stroke='#0194F3'
                        strokeWidth='2'
                        strokeLinecap='round'
                        strokeLinejoin='round'
                      ></path>
                    </svg>
                    <p className='font-bold'>Tổng giá phòng</p>
                  </div>
                  <p className='text-sm font-medium text-[#687176]'>1 phòng, 1 đêm</p>
                </div>
                <div>
                  <p className='text-[#ff5e1f] font-bold'>{result?.data.result[0].price} VND</p>
                </div>
              </div>
            </div>
            <div className='mt-4 grid grid-cols-9 max-sm:mb-8 sm:mb-32 justify-between sm:hidden'>
              <p className='col-span-4 text-[#03121a] text-[14px] font-semibold'>
                Khi nhấn vào nút này bạn công nhận mình đã đọc và đồng ý với các Điều khoản & Điều kiện và Chính sách
                quyền riêng tư của Traveloka
              </p>
              <p className='col-span-3'></p>
              <div className='col-span-2'>
                <button
                  onClick={handleDatPhong}
                  className='py-2 px-3 text-[15px] text-white rounded-lg font-semibold bg-[#ff5e1f]'
                >
                  Đặt phòng
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
