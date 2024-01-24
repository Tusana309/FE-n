import React, { useState } from 'react'
import { useMutation, useQuery } from 'react-query'
import { useNavigate } from 'react-router-dom'
import { searchAirport, searchFlight } from 'src/apis/auth.api'
import Loading from 'src/component/Loading'
import { formatBody, formatDateReverse, removeVietnameseTones } from 'src/utills/date'
type OptionType = {
  svg: React.ReactNode
  text: string
}

const Option = ({ svg, text }: OptionType) => {
  return (
    <div className='inline-flex px-2 py-1 cursor-pointer bg-[#ffffff40] text-sm border border-white rounded-lg gap-8'>
      <div className='flex items-center gap-2'>
        <div>{svg}</div>
        <div>
          <p>{text}</p>
        </div>
      </div>
      <div>
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
            stroke='#FFFFFF'
            strokeWidth='2'
            strokeLinecap='round'
            strokeLinejoin='round'
          ></path>
        </svg>
      </div>
    </div>
  )
}
type Body = {
  fromId: string
  toId: string
  date: string
  returnDate: string
}
function Plane() {
  const [body, setBody] = useState<Body>({
    fromId: '',
    toId: '',
    date: '',
    returnDate: ''
  })
  const navigate = useNavigate()
  const mutation = useMutation((body: Body) => searchFlight(body))
  const mutationAir = useMutation((body: { query: string }) => searchAirport(body))
  const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.name === 'date') {
      setBody({
        ...body,
        [e.target.name]: formatDateReverse(new Date(e.target.value).getTime())
      })
    } else {
      setBody({
        ...body,
        [e.target.name]: e.target.value
      })
    }
  }
  const handleSubmit = async (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.preventDefault()
    const dataFromId = await mutationAir.mutateAsync({ query: removeVietnameseTones(body.fromId) })
    const dataToId = await mutationAir.mutateAsync({ query: removeVietnameseTones(body.toId) })
    await mutation.mutateAsync(
      {
        fromId: dataFromId.data.data[0]?.id,
        toId: dataToId.data.data[0]?.id,
        date: body.date,
        returnDate: body.returnDate
      },
      {
        onSuccess: (data) => {
          data.data.status ? navigate('/flight/list', { state:  data.data.data}) : alert("Có lỗi với thông tin bạn nhập vào\nKiểm tra lại thông tin!");
          // console.log(data.data.status);
          
        }
      }
    )
  }
  return (
    <div className='max-w-[1200px] w-full px-24 '>
      <div className='flex justify-end gap-4 items-center mr-20 mt-3'>
        <Option
          svg={
            <svg
              width='16'
              height='16'
              viewBox='0 0 24 24'
              fill='none'
              xmlns='http://www.w3.org/2000/svg'
              data-id='IcSymbolGuestPassenger'
            >
              <path
                fillRule='evenodd'
                clipRule='evenodd'
                d='M9 13.5C12.3137 13.5 15 16.1863 15 19.5V21H3V19.5C3 16.1863 5.68629 13.5 9 13.5ZM9 10.5C11.0711 10.5 12.75 8.82107 12.75 6.75C12.75 4.67893 11.0711 3 9 3C6.92893 3 5.25 4.67893 5.25 6.75C5.25 8.82107 6.92893 10.5 9 10.5Z'
                stroke='#FFFFFF'
                strokeWidth='2'
                strokeLinecap='round'
                strokeLinejoin='round'
              ></path>
              <path
                d='M15 3H15.75C17.8211 3 19.5 4.67893 19.5 6.75C19.5 8.82107 17.8211 10.5 15.75 10.5M16.5 13.5C18.9853 13.5 21 15.5147 21 18V21H19.5'
                stroke='#FFFFFF'
                strokeWidth='2'
                strokeLinecap='round'
                strokeLinejoin='round'
              ></path>
            </svg>
          }
          text='1 Người lớn, 5 Trẻ em, 0 Em bé'
        />
        <Option
          svg={
            <svg
              width='16'
              height='16'
              viewBox='0 0 24 24'
              fill='none'
              xmlns='http://www.w3.org/2000/svg'
              data-id='IcTransportSeatClass'
            >
              <path
                d='M6.99997 21H17M4.10496 3H4.76788C6.0927 3 7.26067 3.869 7.64136 5.13796L9.78617 12.2873C9.91307 12.7103 10.3024 13 10.744 13H16.4059C18.0152 13 19.7434 13.8444 20.5714 15.2244C21.3043 16.4459 20.4244 18 18.9999 18H7.21493C5.67368 18 4.38318 16.8321 4.22982 15.2985L3.10992 4.0995C3.05105 3.51082 3.51333 3 4.10496 3Z'
                stroke='#FFFFFF'
                strokeWidth='2'
                strokeLinecap='round'
                strokeLinejoin='round'
              ></path>
              <path d='M13 10H17' stroke='#FFFFFF' strokeWidth='2' strokeLinecap='round' strokeLinejoin='round'></path>
            </svg>
          }
          text='Phổ thông'
        />
      </div>
      <div className='mt-3 justify-start grid grid-cols-12 items-end'>
        <div className='col-span-1'></div>
        <div className='w-full rounded-l-lg overflow-hidden  col-span-3'>
          <p className='text-[14px] font-semibold'>Chuyến bay từ</p>
          <div className='w-full rounded-l-lg overflow-hidden mt-4 '>
            <input
              type='text'
              onChange={handleOnChange}
              name='fromId'
              className='text-[#000] px-3 w-full min-h-[40px] border-y-[3px] border-r-[0px] border-l-[3px] border-[#cdd0d180] outline-none'
            />
          </div>
        </div>
        <div className='w-full overflow-hidden col-span-3'>
          <p className='text-[14px] font-semibold'>Chuyến bay đến</p>
          <div className='w-full overflow-hidden mt-4 '>
            <input
              type='text'
              name='toId'
              onChange={handleOnChange}
              className='text-[#000] px-3 w-full min-h-[40px] border-y-[3px] border-r-[0px] border-l-[3px] border-[#cdd0d180] outline-none'
            />
          </div>
        </div>
        <div className='w-full overflow-hidden col-span-2'>
          <p className='text-[14px] font-semibold'>Ngày bay</p>
          <div className='w-full overflow-hidden mt-4 col-span-1'>
            <input
              type='date'
              name='date'
              onChange={handleOnChange}
              className='text-[#000] px-3 w-full min-h-[40px] border-y-[3px] border-r-[0px] border-l-[3px] border-[#cdd0d180] outline-none'
            />
          </div>
        </div>
        <div className='w-full overflow-hidden col-span-2'>
          <p className='text-[14px] font-semibold'>Ngày về</p>
          <div className='w-full overflow-hidden mt-4 col-span-1'>
            <input
              type='date'
              name='returnDate'
              onChange={handleOnChange}
              className='text-[#000] px-3 w-full min-h-[40px] border-y-[3px] border-r-[0px] border-l-[3px] border-[#cdd0d180] outline-none'
            />
          </div>
        </div>
        <button
          className='flex w-1/2 items-center rounded-r-lg border-y-[3px] border-r-[0px] border-l-[3px] border-[#cdd0d180] pl-2 bg-[#ff5e1f] h-[40px]'
          onClick={handleSubmit}
        >
          <svg
            width='24'
            height='24'
            viewBox='0 0 24 24'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'
            data-id='IcSystemSearch'
          >
            <path
              d='M15 15L20.5 20.5M10 17C13.866 17 17 13.866 17 10C17 6.13401 13.866 3 10 3C6.13401 3 3 6.13401 3 10C3 13.866 6.13401 17 10 17Z'
              stroke='#FFFFFF'
              strokeWidth='2'
              strokeLinecap='round'
              strokeLinejoin='round'
            ></path>
          </svg>
        </button>
      </div>
      <div className='ml-20'>{mutation.isLoading ? <Loading /> : ''}</div>
      <div className='ml-20'>{mutationAir.isLoading ? <Loading /> : ''}</div>
    </div>
  )
}

export default Plane
