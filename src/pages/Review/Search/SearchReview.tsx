import classNames from 'classnames'
import React from 'react'
import { useQuery } from 'react-query'
import { useLocation, useNavigate } from 'react-router-dom'
import { get } from 'src/apis/review.api'
import HeaderSub from 'src/component/HeaderSub'

function SearchReview() {
  const navigate = useNavigate()
  const { state } = useLocation()

  return (
    <div className='bg-[#f2f2f2]'>
      <HeaderSub />
      <div className='mx-auto px-4 sm:pt-[140px] max-sm:pt-8 max-w-[1000px] '>
        <div className='bg-[#fff] '>
          <h1 className='py-4 px-8 border'>Kết quả hàng đầu với "{state?.key}"</h1>
          {state.data.result.map((_: any, index: any) =>
            _.map((item: any, index: any) => (
              <div className='flex gap-4 pl-8 pt-4 border' key={index}>
                <div className='h-[140px] w-[177px] '>
                  <img
                    src={item.car_vehicle || item.location_img || item.hotel_img || item.car_img}
                    alt=''
                    className='w-full h-full object-cover'
                  />
                </div>
                <div className=''>
                  <h1
                    className='text-[20px] font-bold cursor-pointer'
                    onClick={() => navigate('/danh-gia', { state: item })}
                  >
                    {item.tranportation_name || item.hotel_name || item.car_name || item.location_name}
                  </h1>
                  <p className='text-[14px]'>{item.location}</p>
                  {/* <p className='text-[14px]'>{</p> */}
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  )
}

export default SearchReview
