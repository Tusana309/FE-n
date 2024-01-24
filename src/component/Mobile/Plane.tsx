import React, { useState } from 'react'
import { useMutation } from 'react-query'
import { useNavigate } from 'react-router-dom'
import { searchAirport, searchFlight } from 'src/apis/auth.api'
import { formatDateReverse, removeVietnameseTones } from 'src/utills/date'
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
          navigate('/flight/list', { state: data.data.data })
        }
      }
    )
  }
  return (
    <div className='p-4 text-white'>
      <p className='text-2xl font-bold text-white'>Từ Đông Nam Á Đến Thế Giới, Trong Tầm Tay Bạn</p>
      <div className={`p-4 bg-white rounded-lg mt-4`}>
        <form action='' className='flex flex-col gap-2'>
          <div className='flex flex-col'>
            <label htmlFor='' className='text-[#7a8286] text-base font-semibold'>
              Chuyến bay từ
            </label>
            <input
              type='text'
              onChange={handleOnChange}
              name='fromId'
              className='outline-none font-normal pb-2 border-b-2 text-[#7a8286] text-base'
              placeholder={'abc'}
            />
          </div>
          <div className='flex flex-col'>
            <label htmlFor='' className='text-[#7a8286] text-base font-semibold'>
              Chuyến bay đến
            </label>
            <input
              type='text'
              onChange={handleOnChange}
              name='toId'
              className='outline-none font-normal pb-2 border-b-2 text-[#7a8286] text-base'
              placeholder={'abc'}
            />
          </div>
          <div className='flex flex-col'>
            <label htmlFor='' className='text-[#7a8286] text-base font-semibold'>
              Ngày bay
            </label>
            <input
              type='date'
              name='date'
              onChange={handleOnChange}
              className='outline-none font-normal pb-2 border-b-2 text-[#7a8286] text-base'
              placeholder={'abc'}
            />
          </div>
          <div className='flex flex-col'>
            <label htmlFor='' className='text-[#7a8286] text-base font-semibold'>
              Ngày về
            </label>
            <input
              type='date'
              name='returnDate'
              onChange={handleOnChange}
              className='outline-none font-normal pb-2 border-b-2 text-[#7a8286] text-base'
              placeholder={'abc'}
            />
          </div>
          <div className='w-full py-2 bg-[#ff5e1f] text-center rounded-lg'>
            <button onClick={handleSubmit} className='text-base font-semibold'>
              Tìm kiếm
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default Plane
