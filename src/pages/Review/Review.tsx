import classNames from 'classnames'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import './review.css'
import HeaderSub from 'src/component/HeaderSub'
import { useMutation, useQuery } from 'react-query'
import { search } from 'src/apis/review.api'
function Review() {
  const navigate = useNavigate()
  const [key, setKey] = useState('')
  const mutation = useMutation((key: string) => search(key))
  const handleSubmit = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.preventDefault()
    mutation.mutate(key, {
      onSuccess: (data) => {
        navigate('/review-search', { state: { data: data.data, key } })
      }
    })
  }
  return (
    <>
      <HeaderSub />
      <div className='review'>
        <div className=' mx-auto px-4 sm:mt-[140px] max-w-[1000px] '>
          <h1 className='mt-12 text-[54px] font-bold text-center'>Bạn muốn có đánh giá về?</h1>
          <div className='mt-8 flex justify-center rounded-3xl w-full'>
            <div className='shadow-t-mh rounded-3xl w-full'>
              <div className='flex pl-4 pr-3 max-w-[1000px] w-full h-[56px] items-center shadow-mh rounded-3xl'>
                <svg viewBox='0 0 24 24' width='24px' height='24px'>
                  <path
                    fillRule='evenodd'
                    clipRule='evenodd'
                    d='M9.74 3.75a5.99 5.99 0 100 11.98 5.99 5.99 0 000-11.98zM2.25 9.74a7.49 7.49 0 1113.3 4.728l5.44 5.442-1.06 1.06-5.44-5.439A7.49 7.49 0 012.25 9.74z'
                  ></path>
                </svg>
                <input
                  placeholder='Địa điểm tham quan, hoạt động giải trí, khách sạn...'
                  type='text'
                  onChange={(e) => setKey(e.target.value)}
                  className='outline-none w-full ml-2 truncate'
                />
                <button onClick={handleSubmit} className='shrink-0 px-4 py-3 bg-[#34e0a1] font-bold rounded-3xl'>
                  Tìm kiếm
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Review
