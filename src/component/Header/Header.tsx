import classNames from 'classnames'
import React, { useContext, useEffect, useState } from 'react'
import ReactDOM from 'react-dom'
import './header.css'
import { Link, useNavigate } from 'react-router-dom'
import logo from '../../assets/logo.png'
import logo2 from '../../assets/logo-2.png'
import Auth from './Auth'
import { AppContext } from 'src/context/app.context'
import Popover from '../Popover'
import { removeAccessTokenAndProfileFromLS } from 'src/utills/auth'
import { useMutation, useQuery } from 'react-query'
import { searchHotel } from 'src/apis/hotel.api'
import Hotel from './optionHeader/Hotel'
import Transportation from './optionHeader/Transportation'
import Location from './optionHeader/Location'
import Car from './optionHeader/Car'
import Plane from './optionHeader/Plane'
import http from 'src/utills/https'
type ChooseType = 'hotel' | 'car' | 'location' | 'transportation' | 'plane'
export default function Header() {
  const [scroll, setScroll] = useState(false)
  const [choose, setChoose] = useState<ChooseType>('hotel')
  const [keySearch, setKeySearch] = useState('')
  const [date, setDate] = useState({
    timeOrder: 0,
    timeBack: 0
  })
  const [numberRoom, setNumberRoom] = useState(0)
  const { setIsAuthenticated, setProfile, profile, isAuthenticated, setTicket } = useContext(AppContext)
  const navigate = useNavigate()
  const searchMutation = useMutation((key: string) => searchHotel(key))
  function handleSearch() {
    searchMutation.mutate(keySearch, {
      onSuccess: (data) => {
        setTicket(date)
        navigate('/hotel/search', { state: { data: data.data.result, numberRoom } })
      }
    })
  }
  const handleLogout = async () => {
    await http.post('users/logout')
    setIsAuthenticated(false)
    setProfile(null)
    removeAccessTokenAndProfileFromLS()
  }
  useEffect(() => {
    window.addEventListener('scroll', () => {
      setScroll(Boolean(window.pageYOffset))
    })
  }, [])
  return (
    <div className='slider max-sm:hidden'>
      <div
        className={classNames('fixed top-0 left-0 right-0', {
          'bg-white text-[#03121a]': scroll,
          'text-white': !scroll
        })}
      >
        <div className='mx-auto max-w-[1200px] px-4'>
          <div className='flex justify-between items-center h-[72px] text-[14px] font-medium'>
            <div className='mt-4'>
              <img src={scroll ? logo : logo2} alt='logo-img' className='w-[190px] h-[190px] object-cover' />
            </div>
            <div className='flex gap-5 '>
              <ul className='flex gap-6 items-center'>
                <li className='flex gap-3'>
                  <svg
                    width='24'
                    height='24'
                    viewBox='0 0 24 24'
                    fill='none'
                    xmlns='http://www.w3.org/2000/svg'
                    data-id='IcMarketingPromoBadge'
                  >
                    <circle
                      cx='12'
                      cy='12'
                      r='10'
                      stroke='#0194f3'
                      strokeWidth='2'
                      strokeLinecap='round'
                      strokeLinejoin='round'
                    ></circle>
                    <path
                      d='M8.5 17.5L15.5 6.5C15.5 6.5 14 8.00002 12 8.00002C10 8.00002 8 7.05 8 7.05M8 7.00002V7.00002C9.10457 7.00002 10 7.89545 10 9.00002V9.00002C10 10.1046 9.10457 11 8 11V11C6.89543 11 6 10.1046 6 9.00002V9.00002C6 7.89545 6.89543 7.00002 8 7.00002V7.00002ZM18 15V15C18 16.1046 17.1046 17 16 17V17C14.8954 17 14 16.1046 14 15V15C14 13.8954 14.8954 13 16 13V13C17.1046 13 18 13.8954 18 15Z'
                      stroke='#91EC00'
                      strokeWidth='2'
                      strokeLinecap='round'
                      strokeLinejoin='round'
                    ></path>
                  </svg>
                  <p>Khuyến mãi</p>
                </li>
                <li>Hỗ trợ</li>
                <li>Hợp tác với chúng tôi</li>
                <Link to={'/retrieve'}>Đặt vé của tôi</Link>
              </ul>
              {isAuthenticated ? (
                <Popover
                  renderPopover={
                    <div className='rounded-sm border border-gray-200 px-4 py-2 bg-white shadow-md'>
                      {profile.role === 2 ? (
                        <Link
                          to={'/admin'}
                          className='block w-full text-sm bg-white cursor-pointer text-left hover:bg-slate-100 hover:text-cyan-500'
                        >
                          Trang quản trị
                        </Link>
                      ) : null}
                      <button
                        onClick={() => handleLogout()}
                        className='block w-full text-sm bg-white cursor-pointer text-left hover:bg-slate-100 hover:text-cyan-500'
                      >
                        Đăng xuất
                      </button>
                    </div>
                  }
                >
                  <div className='text-base'>Xin chào: {profile?.username}</div>
                </Popover>
              ) : (
                <Auth />
              )}
            </div>
          </div>
          {/* <div className='flex justify-between items-center h-full text-[14px] font-medium pb-4'>
            <ul className='flex gap-6'>
              <li className='cursor-pointer'>Khách sạn</li>
              <li className='cursor-pointer'>Vé máy bay</li>
              <li className='cursor-pointer'>Vé xe khách</li>
              <li className='cursor-pointer'>Đưa đón sân bay</li>
              <li className='cursor-pointer'>Hoạt động & Vui chơi</li>
              <Link to={'/review'} className='flex cursor-pointer items-center gap-1'>
                <p>Cộng đồng review</p>
                <svg
                  width='20'
                  height='20'
                  viewBox='0 0 24 24'
                  fill='none'
                  xmlns='http://www.w3.org/2000/svg'
                  data-id='IcSystemMenuViewGrid'
                >
                  <path
                    d='M4 18.5C4 18.2239 4.22386 18 4.5 18H5.5C5.77614 18 6 18.2239 6 18.5V19.5C6 19.7761 5.77614 20 5.5 20H4.5C4.22386 20 4 19.7761 4 19.5V18.5Z'
                    stroke='#CDD0D1'
                    strokeWidth='2'
                    strokeLinecap='round'
                    strokeLinejoin='round'
                  ></path>
                  <path
                    d='M11 18.5C11 18.2239 11.2239 18 11.5 18H12.5C12.7761 18 13 18.2239 13 18.5V19.5C13 19.7761 12.7761 20 12.5 20H11.5C11.2239 20 11 19.7761 11 19.5V18.5Z'
                    stroke='#CDD0D1'
                    strokeWidth='2'
                    strokeLinecap='round'
                    strokeLinejoin='round'
                  ></path>
                  <path
                    d='M18 18.5C18 18.2239 18.2239 18 18.5 18H19.5C19.7761 18 20 18.2239 20 18.5V19.5C20 19.7761 19.7761 20 19.5 20H18.5C18.2239 20 18 19.7761 18 19.5V18.5Z'
                    stroke='#CDD0D1'
                    strokeWidth='2'
                    strokeLinecap='round'
                    strokeLinejoin='round'
                  ></path>
                  <path
                    d='M4 11.5C4 11.2239 4.22386 11 4.5 11H5.5C5.77614 11 6 11.2239 6 11.5V12.5C6 12.7761 5.77614 13 5.5 13H4.5C4.22386 13 4 12.7761 4 12.5V11.5Z'
                    stroke='#CDD0D1'
                    strokeWidth='2'
                    strokeLinecap='round'
                    strokeLinejoin='round'
                  ></path>
                  <path
                    d='M11 11.5C11 11.2239 11.2239 11 11.5 11H12.5C12.7761 11 13 11.2239 13 11.5V12.5C13 12.7761 12.7761 13 12.5 13H11.5C11.2239 13 11 12.7761 11 12.5V11.5Z'
                    stroke='#CDD0D1'
                    strokeWidth='2'
                    strokeLinecap='round'
                    strokeLinejoin='round'
                  ></path>
                  <path
                    d='M18 11.5C18 11.2239 18.2239 11 18.5 11H19.5C19.7761 11 20 11.2239 20 11.5V12.5C20 12.7761 19.7761 13 19.5 13H18.5C18.2239 13 18 12.7761 18 12.5V11.5Z'
                    stroke='#CDD0D1'
                    strokeWidth='2'
                    strokeLinecap='round'
                    strokeLinejoin='round'
                  ></path>
                  <path
                    d='M11 4.5C11 4.22386 11.2239 4 11.5 4H12.5C12.7761 4 13 4.22386 13 4.5V5.5C13 5.77614 12.7761 6 12.5 6H11.5C11.2239 6 11 5.77614 11 5.5V4.5Z'
                    stroke='#CDD0D1'
                    strokeWidth='2'
                    strokeLinecap='round'
                    strokeLinejoin='round'
                  ></path>
                  <path
                    d='M18 4.5C18 4.22386 18.2239 4 18.5 4H19.5C19.7761 4 20 4.22386 20 4.5V5.5C20 5.77614 19.7761 6 19.5 6H18.5C18.2239 6 18 5.77614 18 5.5V4.5Z'
                    stroke='#CDD0D1'
                    strokeWidth='2'
                    strokeLinecap='round'
                    strokeLinejoin='round'
                  ></path>
                  <path
                    d='M3.5 5C3.5 4.17157 4.17157 3.5 5 3.5V3.5C5.82843 3.5 6.5 4.17157 6.5 5V5C6.5 5.82843 5.82843 6.5 5 6.5V6.5C4.17157 6.5 3.5 5.82843 3.5 5V5Z'
                    stroke='#CDD0D1'
                    strokeWidth='2'
                    strokeLinecap='round'
                    strokeLinejoin='round'
                  ></path>
                </svg>
              </Link>
            </ul>
          </div> */}
        </div>
      </div>
      <div className='absolute top-[150px] flex flex-col w-full items-center text-white font-medium'>
        <h1 className='mt-5 text-[32px]'>Từ Đông Nam Á Đến Thế Giới, Trong Tầm Tay Bạn</h1>
        <ul className='flex text-[16px] gap-1 mt-3 items-center border-b'>
          <li
            className={classNames(
              'cursor-pointer flex text-[#cdd0d1] py-2 px-4 rounded-3xl hover:border-white hover:border',
              {
                'border-white border': choose === 'hotel'
              }
            )}
            onClick={() => setChoose('hotel')}
          >
            <svg
              width='24'
              height='24'
              viewBox='0 0 24 24'
              fill='none'
              xmlns='http://www.w3.org/2000/svg'
              data-id='IcProductDuotoneHotelFill'
            >
              <path
                d='M16 7V3C16 2.44772 16.4477 2 17 2C17.5523 2 18 2.44772 18 3V4H20V3C20 2.44772 20.4477 2 21 2C21.5523 2 22 2.44772 22 3V7C22 7.55228 21.5523 8 21 8C20.4477 8 20 7.55228 20 7V6H18V7C18 7.55228 17.5523 8 17 8C16.4477 8 16 7.55228 16 7Z'
                fill='#CDD0D1'
              ></path>
              <path
                fillRule='evenodd'
                clipRule='evenodd'
                d='M2 4V21C2 21.5523 2.44772 22 3 22H6.5V20.75C6.5 20.3358 6.16421 20 5.75 20C5.33579 20 5 19.6642 5 19.25V19C5 18.4477 5.44772 18 6 18H11C11.5523 18 12 18.4477 12 19V19.25C12 19.6642 11.6642 20 11.25 20C10.8358 20 10.5 20.3358 10.5 20.75V22H14H15H21C21.5523 22 22 21.5523 22 21V12C22 10.8954 21.1046 10 20 10H15V4C15 3.44772 14.5523 3 14 3H12.5C12.2061 1.82459 11.15 1 9.93845 1H7.06155C5.84996 1 4.79385 1.82459 4.5 3H3C2.44772 3 2 3.44771 2 4ZM4 6C4 5.44772 4.44772 5 5 5H7C7.55228 5 8 5.44772 8 6V7C8 7.55228 7.55228 8 7 8H5C4.44772 8 4 7.55228 4 7V6ZM10 5C9.44772 5 9 5.44772 9 6V7C9 7.55228 9.44772 8 10 8H12C12.5523 8 13 7.55228 13 7V6C13 5.44772 12.5523 5 12 5H10ZM9 10C9 9.44772 9.44772 9 10 9H12C12.5523 9 13 9.44771 13 10V11C13 11.5523 12.5523 12 12 12H10C9.44772 12 9 11.5523 9 11V10ZM4 10C4 9.44771 4.44772 9 5 9H7C7.55228 9 8 9.44772 8 10V11C8 11.5523 7.55228 12 7 12H5C4.44772 12 4 11.5523 4 11V10ZM5 13C4.44772 13 4 13.4477 4 14V15C4 15.5523 4.44772 16 5 16H7C7.55228 16 8 15.5523 8 15V14C8 13.4477 7.55228 13 7 13H5ZM10 13C9.44772 13 9 13.4477 9 14V15C9 15.5523 9.44772 16 10 16H12C12.5523 16 13 15.5523 13 15V14C13 13.4477 12.5523 13 12 13H10ZM16 14V13C16 12.4477 16.4477 12 17 12H19C19.5523 12 20 12.4477 20 13V14C20 14.5523 19.5523 15 19 15H17C16.4477 15 16 14.5523 16 14ZM19 16H17C16.4477 16 16 16.4477 16 17V18C16 18.5523 16.4477 19 17 19H19C19.5523 19 20 18.5523 20 18V17C20 16.4477 19.5523 16 19 16Z'
                fill='#CDD0D1'
              ></path>
            </svg>
            <p>Khách sạn</p>
          </li>
          <li
            className={classNames(
              'cursor-pointer flex gap-1 text-[#cdd0d1] py-2 px-4 rounded-3xl hover:border-white hover:border',
              {
                'border-white border': choose === 'plane'
              }
            )}
            onClick={() => setChoose('plane')}
          >
            <svg
              width='20'
              height='20'
              viewBox='0 0 16 16'
              fill='none'
              xmlns='http://www.w3.org/2000/svg'
              data-id='IcProductDuotoneFlightFill16'
            >
              <g clipPath='url(#clip0_4978_5190)'>
                <path
                  fillRule='evenodd'
                  clipRule='evenodd'
                  d='M12.3067 1.22242C12.9992 0.606863 14.0515 0.637769 14.7067 1.29291C15.3619 1.94804 15.3928 3.00031 14.7774 3.69285L11.6317 7.23229L13.9483 14.1839C14.1067 14.6592 13.889 15.1783 13.4389 15.3984C12.9889 15.6185 12.4455 15.4716 12.1676 15.0548L8.73502 9.9059L6.50032 11.4702V14C6.50032 14.4794 6.16014 14.8914 5.68943 14.982C5.21871 15.0727 4.74987 14.8165 4.57184 14.3714L4.02318 12.9998C3.75754 13.0059 3.49182 12.9064 3.29252 12.7071C3.09332 12.5079 2.99383 12.2424 2.99987 11.9769L1.62893 11.4285C1.18385 11.2505 0.92771 10.7817 1.01836 10.3109C1.10901 9.84022 1.52095 9.50005 2.00032 9.50005H4.52895L6.09375 7.26463L0.944927 3.83212C0.528082 3.55422 0.3812 3.01076 0.601306 2.56072C0.821413 2.11067 1.34057 1.89296 1.81585 2.05138L8.76737 4.36852L12.3067 1.22242Z'
                  fill='#CDD0D1'
                ></path>
              </g>
              <defs>
                <clipPath id='clip0_4978_5190'>
                  <rect width='16' height='16' fill='white'></rect>
                </clipPath>
              </defs>
            </svg>
            <p>Vé máy bay</p>
          </li>
          <li
            className={classNames(
              'cursor-pointer flex gap-1 text-[#cdd0d1] py-2 px-4 rounded-3xl hover:border-white hover:border',
              {
                'border-white border': choose === 'transportation'
              }
            )}
            onClick={() => setChoose('transportation')}
          >
            <svg
              width='24'
              height='24'
              viewBox='0 0 24 24'
              fill='none'
              xmlns='http://www.w3.org/2000/svg'
              data-id='IcProductDuotoneAirportTransportFill'
            >
              <path
                fillRule='evenodd'
                clipRule='evenodd'
                d='M19.5 16.5L19 15H10V14H13H14H14.8371C15.1693 14 15.4092 13.682 15.3179 13.3626L15.1217 12.6758C15.088 12.5578 15.0474 12.4432 15.0006 12.3323L17 9H21C21.5523 9 22 8.55228 22 8C22 7.44772 21.5523 7 21 7H17L14 2H13L14 7H11L10 6H9L9.5 8H7V3C7 1.89543 7.89543 1 9 1H21C22.1046 1 23 1.89543 23 3V13C23 14.1046 22.1046 15 21 15L20.5 16.5L21 18V21.5C21 22.0523 20.5523 22.5 20 22.5C19.4477 22.5 19 22.0523 19 21.5V18L19.5 16.5ZM13.6313 10.8435L14 9H11L10 10V10.5H12.2371C12.7354 10.5 13.2112 10.6229 13.6313 10.8435Z'
                fill='#CDD0D1'
              ></path>
              <path
                fillRule='evenodd'
                clipRule='evenodd'
                d='M12.7913 9C13.1976 9 13.5921 9.06115 13.9649 9.17557L13.6313 10.8435C13.2112 10.6229 12.7354 10.5 12.2371 10.5H8.7629C7.42346 10.5 6.24631 11.3879 5.87833 12.6758L5.6821 13.3626C5.59084 13.682 5.83068 14 6.16286 14H13H14H14.8371C15.1693 14 15.4092 13.682 15.3179 13.3626L15.1217 12.6758C15.088 12.5578 15.0474 12.4432 15.0006 12.3323L16.0184 10.636C16.338 11.072 16.5729 11.5779 16.6961 12.1323L17 13.5L17.9207 13.1931C18.2531 13.0823 18.6164 13.2328 18.7731 13.5461C18.9086 13.8172 18.8555 14.1445 18.6412 14.3588L18 15C18.5523 15 19 15.4477 19 16V18.382C19 19.0672 18.6129 19.6936 18 20V21C18 21.8284 17.3284 22.5 16.5 22.5C15.6716 22.5 15 21.8284 15 21V20H6V21C6 21.8284 5.32843 22.5 4.5 22.5C3.67157 22.5 3 21.8284 3 21V20C2.38713 19.6936 2 19.0672 2 18.382V16C2 15.4477 2.44772 15 3 15L2.35881 14.3588C2.14453 14.1445 2.09141 13.8172 2.22693 13.5461C2.38362 13.2328 2.74689 13.0823 3.07927 13.1931L4 13.5L4.30394 12.1323C4.71064 10.3021 6.33389 9 8.20869 9H9.25L9 10H10L11 9H12.7913ZM5.5 18H7.5C8.05228 18 8.5 17.5523 8.5 17C8.5 16.4477 8.05228 16 7.5 16H5.5C4.94772 16 4.5 16.4477 4.5 17C4.5 17.5523 4.94772 18 5.5 18ZM15.5 18H13.5C12.9477 18 12.5 17.5523 12.5 17C12.5 16.4477 12.9477 16 13.5 16H15.5C16.0523 16 16.5 16.4477 16.5 17C16.5 17.5523 16.0523 18 15.5 18Z'
                fill='#CDD0D1'
              ></path>
            </svg>
            <p>Dịch vụ vận chuyển</p>
          </li>
          <li
            className={classNames(
              'cursor-pointer flex gap-1 text-[#cdd0d1] py-2 px-4 rounded-3xl hover:border-white hover:border',
              {
                'border-white border': choose === 'car'
              }
            )}
            onClick={() => setChoose('car')}
          >
            <svg
              width='24'
              height='24'
              viewBox='0 0 24 24'
              fill='none'
              xmlns='http://www.w3.org/2000/svg'
              data-id='IcProductDuotoneCarRentalFill'
            >
              <path
                fillRule='evenodd'
                clipRule='evenodd'
                d='M4 20V21C4 21.8284 4.67157 22.5 5.5 22.5C6.32843 22.5 7 21.8284 7 21V20H17V21C17 21.8284 17.6716 22.5 18.5 22.5C19.3284 22.5 20 21.8284 20 21V20C20.6129 19.6936 21 19.0672 21 18.382V15C21 14.4477 20.5523 14 20 14L20.6412 13.3588C20.8555 13.1445 20.9086 12.8172 20.7731 12.5461C20.6164 12.2328 20.2531 12.0823 19.9207 12.1931L19 12.5L18.6961 11.1323C18.2894 9.30213 16.6661 8 14.7913 8H9.20869C7.33389 8 5.71064 9.30213 5.30394 11.1323L5 12.5L4.07927 12.1931C3.74689 12.0823 3.38362 12.2328 3.22693 12.5461C3.09141 12.8172 3.14453 13.1445 3.35881 13.3588L4 14C3.44772 14 3 14.4477 3 15V18.382C3 19.0672 3.38713 19.6936 4 20ZM16.8767 14H7.12331C6.80343 14 6.56582 13.7038 6.63521 13.3915L6.97795 11.8492C7.28298 10.4766 8.50042 9.5 9.90651 9.5H14.0935C15.4996 9.5 16.717 10.4766 17.022 11.8492L17.3648 13.3915C17.4342 13.7038 17.1966 14 16.8767 14ZM8.5 18H6.5C5.94772 18 5.5 17.5523 5.5 17C5.5 16.4477 5.94772 16 6.5 16H8.5C9.05228 16 9.5 16.4477 9.5 17C9.5 17.5523 9.05228 18 8.5 18ZM15.5 18H17.5C18.0523 18 18.5 17.5523 18.5 17C18.5 16.4477 18.0523 16 17.5 16H15.5C14.9477 16 14.5 16.4477 14.5 17C14.5 17.5523 14.9477 18 15.5 18Z'
                fill='#CDD0D1'
              ></path>
              <path
                fillRule='evenodd'
                clipRule='evenodd'
                d='M8.5 7H5C3.89543 7 3 6.10457 3 5V4C3 2.89543 3.89543 2 5 2H8.5C9.32843 2 10 2.67157 10 3.5H19.5C20.0523 3.5 20.5 3.94772 20.5 4.5C20.5 5.05228 20.0523 5.5 19.5 5.5H10C10 6.32843 9.32843 7 8.5 7ZM5.5 6C5.22386 6 5 5.77614 5 5.5V3.5C5 3.22386 5.22386 3 5.5 3C5.77614 3 6 3.22386 6 3.5V5.5C6 5.77614 5.77614 6 5.5 6Z'
                fill='#CDD0D1'
              ></path>
            </svg>
            <p>Cho thuê xe</p>
          </li>
          <li
            className={classNames(
              'cursor-pointer flex gap-1 text-[#cdd0d1] py-2 px-4 rounded-3xl hover:border-white hover:border',
              {
                'border-white border': choose === 'location'
              }
            )}
            onClick={() => setChoose('location')}
          >
            <svg
              width='24'
              height='24'
              viewBox='0 0 24 24'
              fill='none'
              xmlns='http://www.w3.org/2000/svg'
              data-id='IcProductDuotoneXperienceFill'
            >
              <path
                fillRule='evenodd'
                clipRule='evenodd'
                d='M5.32125 8.49859L9.98962 12.6068L18.1819 2.25861C18.8675 1.39258 20.1254 1.24632 20.9914 1.93193C21.8574 2.61754 22.0037 3.87539 21.3181 4.74143L11.8181 16.7414C11.1071 17.6395 9.78862 17.7581 8.92874 17.0014L2.67874 11.5014C1.84952 10.7717 1.76886 9.50798 2.49857 8.67876C3.22828 7.84955 4.49204 7.76888 5.32125 8.49859ZM4.72017 18.9617L6.81535 16.4737L8.26811 17.7522C8.86424 18.2768 9.60732 18.5209 10.3395 18.4987L7.77982 21.5383C7.06832 22.3832 5.80662 22.4913 4.96172 21.7798C4.11683 21.0683 4.00868 19.8066 4.72017 18.9617ZM12.6021 17.3621C12.1498 17.9334 11.5336 18.2945 10.8755 18.4342L15.57 21.8648C16.4618 22.5165 17.7131 22.3219 18.3648 21.4301C19.0165 20.5382 18.8218 19.287 17.93 18.6352L13.9163 15.7021L12.6021 17.3621Z'
                fill='#CDD0D1'
              ></path>
              <path
                fillRule='evenodd'
                clipRule='evenodd'
                d='M7 6C7 8 10 10 10 10C10 10 13 8 13 6C13 4 11.5 3 10 3C8.5 3 7 4 7 6ZM11 6C11 6.55228 10.5523 7 10 7C9.44772 7 9 6.55228 9 6C9 5.44772 9.44772 5 10 5C10.5523 5 11 5.44772 11 6Z'
                fill='#CDD0D1'
              ></path>
            </svg>
            <p>Hoạt động & Vui chơi</p>
          </li>
          <li className='cursor-pointer flex gap-1 text-[#cdd0d1] py-2 px-4 rounded-3xl hover:border-white hover:border'>
            <Link to={'/review'} className='flex cursor-pointer items-center gap-1'>
              <svg
                width='24'
                height='24'
                viewBox='0 0 24 24'
                fill='none'
                xmlns='http://www.w3.org/2000/svg'
                data-id='IcSystemMenuViewGrid'
              >
                <path
                  d='M4 18.5C4 18.2239 4.22386 18 4.5 18H5.5C5.77614 18 6 18.2239 6 18.5V19.5C6 19.7761 5.77614 20 5.5 20H4.5C4.22386 20 4 19.7761 4 19.5V18.5Z'
                  stroke='#CDD0D1'
                  strokeWidth='2'
                  strokeLinecap='round'
                  strokeLinejoin='round'
                ></path>
                <path
                  d='M11 18.5C11 18.2239 11.2239 18 11.5 18H12.5C12.7761 18 13 18.2239 13 18.5V19.5C13 19.7761 12.7761 20 12.5 20H11.5C11.2239 20 11 19.7761 11 19.5V18.5Z'
                  stroke='#CDD0D1'
                  strokeWidth='2'
                  strokeLinecap='round'
                  strokeLinejoin='round'
                ></path>
                <path
                  d='M18 18.5C18 18.2239 18.2239 18 18.5 18H19.5C19.7761 18 20 18.2239 20 18.5V19.5C20 19.7761 19.7761 20 19.5 20H18.5C18.2239 20 18 19.7761 18 19.5V18.5Z'
                  stroke='#CDD0D1'
                  strokeWidth='2'
                  strokeLinecap='round'
                  strokeLinejoin='round'
                ></path>
                <path
                  d='M4 11.5C4 11.2239 4.22386 11 4.5 11H5.5C5.77614 11 6 11.2239 6 11.5V12.5C6 12.7761 5.77614 13 5.5 13H4.5C4.22386 13 4 12.7761 4 12.5V11.5Z'
                  stroke='#CDD0D1'
                  strokeWidth='2'
                  strokeLinecap='round'
                  strokeLinejoin='round'
                ></path>
                <path
                  d='M11 11.5C11 11.2239 11.2239 11 11.5 11H12.5C12.7761 11 13 11.2239 13 11.5V12.5C13 12.7761 12.7761 13 12.5 13H11.5C11.2239 13 11 12.7761 11 12.5V11.5Z'
                  stroke='#CDD0D1'
                  strokeWidth='2'
                  strokeLinecap='round'
                  strokeLinejoin='round'
                ></path>
                <path
                  d='M18 11.5C18 11.2239 18.2239 11 18.5 11H19.5C19.7761 11 20 11.2239 20 11.5V12.5C20 12.7761 19.7761 13 19.5 13H18.5C18.2239 13 18 12.7761 18 12.5V11.5Z'
                  stroke='#CDD0D1'
                  strokeWidth='2'
                  strokeLinecap='round'
                  strokeLinejoin='round'
                ></path>
                <path
                  d='M11 4.5C11 4.22386 11.2239 4 11.5 4H12.5C12.7761 4 13 4.22386 13 4.5V5.5C13 5.77614 12.7761 6 12.5 6H11.5C11.2239 6 11 5.77614 11 5.5V4.5Z'
                  stroke='#CDD0D1'
                  strokeWidth='2'
                  strokeLinecap='round'
                  strokeLinejoin='round'
                ></path>
                <path
                  d='M18 4.5C18 4.22386 18.2239 4 18.5 4H19.5C19.7761 4 20 4.22386 20 4.5V5.5C20 5.77614 19.7761 6 19.5 6H18.5C18.2239 6 18 5.77614 18 5.5V4.5Z'
                  stroke='#CDD0D1'
                  strokeWidth='2'
                  strokeLinecap='round'
                  strokeLinejoin='round'
                ></path>
                <path
                  d='M3.5 5C3.5 4.17157 4.17157 3.5 5 3.5V3.5C5.82843 3.5 6.5 4.17157 6.5 5V5C6.5 5.82843 5.82843 6.5 5 6.5V6.5C4.17157 6.5 3.5 5.82843 3.5 5V5Z'
                  stroke='#CDD0D1'
                  strokeWidth='2'
                  strokeLinecap='round'
                  strokeLinejoin='round'
                ></path>
              </svg>
              <p>Cộng đồng review</p>
            </Link>
          </li>
        </ul>
        {choose === 'hotel' && (
          <Hotel
            date={date}
            setDate={setDate}
            setNumberRoom={setNumberRoom}
            handleSearch={handleSearch}
            setKeySearch={setKeySearch}
          />
        )}
        {choose === 'plane' && <Plane />}
        {choose === 'transportation' && <Transportation />}
        {choose === 'location' && <Location />}
        {choose === 'car' && <Car />}
      </div>
    </div>
  )
}
