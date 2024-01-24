import classNames from 'classnames'
import React, { useContext, useState } from 'react'
import { useMutation } from 'react-query'
import { useNavigate } from 'react-router-dom'
import { Props, searchCar } from 'src/apis/car.api'
import { AppContext } from 'src/context/app.context'
const car = ['4', '5', '7', '16', '29', '30', '35', '45', '47']
function Car() {
  const [keySearch, setKeySearch] = useState('')
  const [seater, setSeater] = useState('')
  const [isDrive, setIsDrive] = useState(true)
  const navigate = useNavigate()
  const { setTicket } = useContext(AppContext)
  const searchMutation = useMutation((body: Props) => searchCar(body))
  function handleSearch() {
    searchMutation.mutate(
      { key: keySearch, body: { seater_number: +seater } },
      {
        onSuccess: (data) => {
          setTicket(isDrive)
          navigate('/car/search', { state: { data: data.data.result, seater } })
        }
      }
    )
  }
  return (
    <div className='p-4 text-white'>
      <p className='text-2xl font-bold text-white'>Từ Đông Nam Á Đến Thế Giới, Trong Tầm Tay Bạn</p>
      <div className={`p-4 bg-white rounded-lg mt-4`}>
        <div className='flex justify-between gap-6 mb-3'>
          <p
            onClick={() => setIsDrive(true)}
            className={classNames('font-bold transition-all border py-3 flex-1  text-center rounded-lg ', {
              'text-[#0194f3] border-[#0194f3]': isDrive,
              'text-[#687176] border-[#cdd0d1]': !isDrive
            })}
          >
            Tự lái
          </p>
          <p
            onClick={() => setIsDrive(!true)}
            className={classNames('font-bold transition-all border py-3 flex-1  text-center rounded-lg ', {
              'text-[#0194f3] border-[#0194f3]': !isDrive,
              'text-[#687176] border-[#cdd0d1]': isDrive
            })}
          >
            Có tài xế
          </p>
        </div>
        <form action='' className='flex flex-col gap-2'>
          <div className='flex flex-col'>
            <label htmlFor='' className='text-[#7a8286] text-base font-semibold'>
              Điểm đón khách
            </label>
            <input
              type='text'
              placeholder='VD: Hà Nội,...'
              onChange={(e) => setKeySearch(e.target.value)}
              className='outline-none font-normal pb-2 border-b-2 text-[#7a8286] text-base'
            />
          </div>
          <div className='flex flex-col'>
            <label htmlFor='' className='text-[#7a8286] text-base font-semibold'>
              Chọn số ghế
            </label>
            <select
              name=''
              id=''
              onChange={(e) => setSeater(e.target.value)}
              className='text-[#000] px-3  w-full min-h-[40px] border-y-[3px] border-r-[0px] border-l-[3px] border-[#cdd0d180] outline-none'
              //   onChange={(e) => setSeater(e.target.value)}
            >
              <option value='0'>Chọn số lượng chỗ</option>
              {car.map((item, index) => (
                <option key={index} value={item}>
                  Xe {item} chỗ
                </option>
              ))}
            </select>
          </div>
          <div className='w-full py-2 bg-[#ff5e1f] text-center rounded-lg'>
            <button type='button' onClick={handleSearch} className='text-base font-semibold'>
              Tìm kiếm
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default Car
