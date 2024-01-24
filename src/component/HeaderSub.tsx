import classNames from 'classnames'
import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import logo2 from '../assets/logo.png'
function HeaderSub() {
  const navigate = useNavigate()
  return (
    <>
      <div className={classNames('fixed max-sm:hidden top-0 left-0 w-full z-20 bg-white text-[#000]')}>
        <div className='mx-auto max-w-[1200px] px-4 border-b border-[#e5e5e5] pb-2'>
          <div className='flex justify-between items-center h-[72px] text-[14px] font-medium'>
            {/* logo */}
            <div className='cursor-pointer mt-4' onClick={() => navigate('/')}>
              <img src={logo2} alt='logo-img' className='w-[190px] h-[190px] object-cover' />
            </div>
            {/* menu */}
            <div className='flex gap-5'>
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
              {/* <div className='flex items-center gap-1'>
              <button
                onClick={openModal}
                className={classNames('p-[6px] border border-white rounded-lg flex items-center gap-2', {
                  'border-[#0194f3]': scroll
                })}
              >
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  fill='none'
                  viewBox='0 0 24 24'
                  strokeWidth={1.5}
                  stroke='currentColor'
                  //   dataSlot='icon'
                  className='w-5 h-5'
                >
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    d='M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z'
                  />
                </svg>
                <p>Đăng Nhập</p>
              </button>
              <Modal
                isOpen={modalIsOpen}
                onRequestClose={closeModal}
                style={customStyles}
                contentLabel='Example Modal'
                overlayClassName='Overlay'
                className='Modal'
              >
                <div className='px-8 py-6 rounded-2xl overflow-hidden w-[400px]'>
                  <h1 className='font-semibold text-2xl mb-8 w-full'>Đăng nhập</h1>
                  <form className='flex flex-col w-full'>
                    <input
                      type='text'
                      placeholder='Tên đăng nhập'
                      className='py-2 w-full px-4 outline-none focus:border focus:border-[#0194f3] rounded-lg mb-4'
                    />
                    <input
                      type='password'
                      placeholder='Mật khẩu'
                      className='py-2 px-4 w-full outline-none focus:border focus:border-[#0194f3] rounded-lg mb-4'
                    />
                    <button className='py-[8px] px-4 bg-[#0194f3] text-white rounded-lg'>Đăng nhập</button>
                  </form>
                </div>
              </Modal>
              <button onClick={openModal} className='py-[8px] px-4 bg-[#0194f3] text-white rounded-lg'>
                Đăng Ký
              </button>
              <Modal
                isOpen={modalIsOpen}
                onRequestClose={closeModal}
                style={customStyles}
                contentLabel='Example Modal'
                overlayClassName='Overlay'
                className='Modal'
              >
                <div className='px-8 py-6 rounded-2xl overflow-hidden w-[400px]'>
                  <h1 className='font-semibold text-2xl mb-8 w-full'>Đăng ký</h1>
                  <form className='flex flex-col w-full'>
                    <input
                      type='text'
                      placeholder='Tên đăng nhập'
                      className='py-2 w-full px-4 outline-none focus:border focus:border-[#0194f3] rounded-lg mb-4'
                    />
                    <input
                      type='password'
                      placeholder='Mật khẩu'
                      className='py-2 px-4 w-full outline-none focus:border focus:border-[#0194f3] rounded-lg mb-4'
                    />
                    <input
                      type='password'
                      placeholder='Nhập lại mật khẩu'
                      className='py-2 px-4 w-full outline-none focus:border focus:border-[#0194f3] rounded-lg mb-4'
                    />
                    <button className='py-[8px] px-4 bg-[#0194f3] text-white rounded-lg'>Đăng ký</button>
                  </form>
                </div>
              </Modal>
            </div> */}
            </div>
          </div>
          {/* <div className='flex justify-between items-center h-full text-[14px] font-medium'>
            <ul className='flex gap-6'>
              <li>Khách sạn</li>
              <li>Vé máy bay</li>
              <li>Vé xe khách</li>
              <li>Đưa đón sân bay</li>
              <li>Cho thuê xe</li>
              <li>Hoạt động & Vui chơi</li>
              <Link to={'/review'} className='flex items-center gap-1'>
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
      <div className='bg-[#1ba0e2]'>
        <div className='flex justify-center items-center relative'>
          <img
            onClick={() => navigate('/')}
            src={logo2}
            alt='logo-img'
            className='w-[115px] h-[40px] object-center object-cover mt-1'
          />
          <div className='absolute right-0 pr-4'>
            <svg
              width='24'
              height='24'
              viewBox='0 0 24 24'
              fill='none'
              xmlns='http://www.w3.org/2000/svg'
              data-id='IcUserAccount'
            >
              <path
                d='M8 7.5C8 9.70914 9.79086 11.5 12 11.5C14.2091 11.5 16 9.70914 16 7.5V6.5C16 4.29086 14.2091 2.5 12 2.5C9.79086 2.5 8 4.29086 8 6.5V7.5Z'
                stroke='#FFFFFF'
                strokeWidth='2'
                strokeLinecap='round'
                strokeLinejoin='round'
              ></path>
              <path
                d='M19.5 21H4.5C4.5 21 5 14 12 14C19 14 19.5 21 19.5 21Z'
                stroke='#FFFFFF'
                strokeWidth='2'
                strokeLinecap='round'
                strokeLinejoin='round'
              ></path>
            </svg>
          </div>
        </div>
      </div>
    </>
  )
}

export default HeaderSub
