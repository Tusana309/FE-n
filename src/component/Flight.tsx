import React from 'react'
import HeaderSub from './HeaderSub'
import path from 'path'
import { Link, useLocation, useNavigate } from 'react-router-dom'
const arr = [
  {
    url: 'https://www.vietnamairlines.com/vn/vi/home',
    name: 'Vietnam Airlines'
  },
  {
    url: 'https://www.agoda.com/',
    name: 'Agoda'
  },
  {
    url: 'https://vivavivu.com/',
    name: 'Vivavivu.com'
  },
  {
    url: 'https://baydep.vn/',
    name: 'Baydep.vn'
  }
]
function Flight() {
  const navigate = useNavigate()
  const location = useLocation()
  console.log(location)
  return (
    <div>
      <HeaderSub />
      <div className='mx-auto px-4 mt-[120px] max-w-[600px]'>
        <div className='flex flex-col  items-center px-4 py-2'>
          <div className='flex items-center justify-between w-full'>
            <div className='flex items-center gap-1 '>
              <h1 className='text-xl text-[#111236] font-semibold'>Chuyến đi</h1>
              <p className='text-[#545860] text-lg'>{location.state.legs[0].arrival}</p>
            </div>
            <p className='text-[#545860] text-sm'>Tất cả giờ đều là giờ địa phương</p>
          </div>
          <div className='p-3 flex justify-between items-center w-full'>
            <div>
              <img src={location.state.legs[0].carriers.marketing[0].logoUrl} alt='' />
            </div>
            <div className='flex gap-3 items-center'>
              <div className='flex flex-col justify-center'>
                <span>{location.state.legs[0].destination.name}</span>
                <span className='text-center'>{location.state.legs[0].destination.id}</span>
              </div>
              <div className='relative'>
                <img
                  src='https://www.vietnamairlinesgiare.vn/wp-content/themes/vietnamairlines/images/flight-icon.svg'
                  alt=''
                />
                <div className='absolute text-xs top-[-10px] left-1/3'>
                  {+location.state.price.formatted.slice(1, 3) * 25}.000 VNĐ
                </div>
              </div>
              <div className='flex flex-col'>
                <span>{location.state.legs[1].destination.name}</span>
                <span className='text-center'>{location.state.legs[1].destination.id}</span>
              </div>
            </div>
            <div>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                fill='none'
                viewBox='0 0 24 24'
                strokeWidth={1.5}
                stroke='currentColor'
                className='w-6 h-6'
              >
                <path strokeLinecap='round' strokeLinejoin='round' d='m19.5 8.25-7.5 7.5-7.5-7.5' />
              </svg>
            </div>
          </div>
          <h1 className='text-start w-full text-xl text-[#111236] font-normal'>Đặt vé</h1>
          <p className='text-start w-full text-xs'>Phổ thông, 1 người lớn</p>
          {arr.map((item, index) => (
            <div className='w-full flex justify-between mt-2 bg-[#eff1f2] px-3 pt-3 pb-6 rounded-xl items-center'>
              <div className='flex flex-col gap-1'>
                <p className='font-semibold'>{item.name}</p>
                <div className='flex'>
                  {Array(5)
                    .fill(0)
                    .map(() => (
                      <svg
                        xmlns='http://www.w3.org/2000/svg'
                        viewBox='0 0 24 24'
                        aria-hidden='true'
                        fill='#f55d42'
                        style={{ width: '1rem', height: '1rem' }}
                      >
                        <path d='M7.925 8.03a1.05 1.05 0 00.793-.591l2.576-5.478a.771.771 0 011.412 0l2.576 5.478a1.048 1.048 0 00.793.59l5.75.87a.835.835 0 01.437 1.407l-4.188 4.274a1.05 1.05 0 00-.287.905l.99 6.05a.795.795 0 01-1.141.869l-5.13-2.83a1.05 1.05 0 00-1.013 0l-5.13 2.83a.795.795 0 01-1.141-.87l.995-6.05a1.05 1.05 0 00-.286-.904l-4.192-4.273A.834.834 0 012.175 8.9z'></path>
                      </svg>
                    ))}
                </div>
              </div>
              <div className='flex items-center gap-1 hover:border-b-2 hover:border-black '>
                <Link to={item.url}>Chọn</Link>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  fill='none'
                  viewBox='0 0 24 24'
                  strokeWidth={1.5}
                  stroke='currentColor'
                  className='w-4 h-4'
                >
                  <path strokeLinecap='round' strokeLinejoin='round' d='M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3' />
                </svg>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Flight
