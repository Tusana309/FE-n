import classNames from 'classnames'
import React, { useContext, useEffect, useState } from 'react'
import { useQuery } from 'react-query'
import { useNavigate } from 'react-router-dom'
import { getHotelUser } from 'src/apis/booking.api'
import HeaderSub from 'src/component/HeaderSub'
import HotelItem from './HotelItem'
import LocationItem from './LocationItem'
import TransItem from './TransItem'
import CarItem from './CarItem'
import { AppContext } from 'src/context/app.context'

function Retrieve() {
  const navigate = useNavigate()
  const [ticket, setTicket] = useState([])
  const { profile } = useContext(AppContext)
  const { data } = useQuery('retrieve', getHotelUser)
  useEffect(() => {
    if (data?.data.result) {
      setTicket(data.data.result)
    }
  }, [data, profile])
  useEffect(()=>{
    console.log(ticket);
    
  },[])
  return (
    <>
      <HeaderSub />
      <div className='mx-auto px-4 sm:mt-[120px] max-sm:mt-8 max-w-[800px] mb-20'>
        <div className=''>
          <div className='flex justify-between'>
            <h1 className='text-[#03121a] font-bold '>Giao dịch đang tiến hành</h1>
            <p className='text-[#0264c8] text-[14px] font-bold'>Xoá tất cả</p>
          </div>
          {ticket.map((_: any, index) => {
            if (_.hotels) return <HotelItem index={index} _={_} />
            if (_.locations) return <LocationItem index={index} _={_} />
            if (_.transportations) return <TransItem index={index} _={_} />
            if (_.cars) return <CarItem index={index} _={_} />
          })}
        </div>
      </div>
    </>
  )
}

export default Retrieve
