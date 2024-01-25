import classNames from 'classnames'
import React, { useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import '../review.css'
import HeaderSub from 'src/component/HeaderSub'
import { useMutation, useQuery } from 'react-query'
import { create, get } from 'src/apis/review.api'
function DanhGia() {
  const navigate = useNavigate()
  const { state } = useLocation()
  const [comment, setComment] = useState('')
  const { data, refetch } = useQuery('danh-gia', () => get(state._id))
  const handleSubmit = async (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.preventDefault()
    await mutation.mutateAsync({ comment, post_id: state?._id })
    setComment('')
    await refetch()
  }
  const mutation = useMutation((body: { comment: string; post_id: string }) => create(body))
  return (
    <>
      <HeaderSub />
      <div className='mx-auto px-4 sm:pt-[80px] max-sm:pt-4 max-w-[1200px]'>
        <h1 className='text-[50px] font-bold'>
          {state?.tranportation_name || state?.hotel_name || state?.car_name || state?.location_name}
        </h1>
        {/* <div className='flex gap-3'>
          <p className='underline'>602 đánh giá</p>
          <p className='underline'>Số 33/502 Spa & Sức khoẻ ở Hà Nội</p>
          <p>Spa</p>
        </div> */}
        {/* <div className='flex gap-3'>
          <p className='text-[#cc0000] font-bold'>Đang đóng cửa</p>
          <p className='font-bold'>09:00 - 22:30</p>
        </div> */}
        <div className='grid grid-cols-3 items-stretch mt-4 gap-3'>
          <div className='sm:col-span-1 max-sm:col-span-3 shadow-t-mh rounded-lg'>
            <div className='shadow-mh pt-8 px-6 pb-6 rounded-lg'>
              <p className='mb-12 text-2xl font-bold'>Giới thiệu</p>
              <div className='flex gap-2 items-center'>
                {/* <svg viewBox='0 0 24 24' width='1em' height='1em'>
                  <path
                    fillRule='evenodd'
                    clipRule='evenodd'
                    d='M6.713 3.982a9.994 9.994 0 00-4.734 8.502c0 5.523 4.477 10 10 10s10-4.477 10-10c0-5.522-4.477-10-10-10v1.5a8.5 8.5 0 11-5.266 1.828v-1.83z'
                  ></path>
                  <path
                    fillRule='evenodd'
                    clipRule='evenodd'
                    d='M6.323 4.935h-3.55v-1.5h5.05v5.05h-1.5v-3.55zM11.333 13.034v-5.36h1.5v5.457c0 .312-.116.612-.326.842l-2.765 3.033-1.109-1.01 2.7-2.962z'
                  ></path>
                </svg> */}
                <p>{state?.description}</p>
              </div>
              <div className='flex gap-2 items-start'>
                <svg viewBox='0 0 24 24' width='24' height='24' className='mt-1'>
                  <path
                    fillRule='evenodd'
                    clipRule='evenodd'
                    d='M14.288 6.793L6.69 14.368l-.816 3.746 3.724-.839 7.588-7.583-2.9-2.9zm3.96 1.84l-2.898-2.9.556-.554A2.318 2.318 0 0117.52 4.5c.378 0 .73.104 1.031.315l.01.007.012.008c1.12.757 1.221 2.26.326 3.151l-.65.651zm-7.896 10.01l-5.99 1.35C4.34 20 4.319 20 4.298 20a.297.297 0 01-.29-.36l1.31-6.023 9.529-9.5A3.818 3.818 0 0117.52 3c.66 0 1.318.184 1.893.587a3.536 3.536 0 01.546 5.457l-9.607 9.599z'
                  ></path>
                </svg>
                <p>Đề xuất chỉnh sửa để cải thiện nội dung chúng tôi hiển thị.</p>
              </div>
              <h1 className='font-bold'>Viết đánh giá của bạn</h1>
              <textarea
                placeholder='Type your review here!!!'
                className='rounded-lg mt-3 w-full border focus:border focus:outline-none p-3'
                onChange={(e) => setComment(e.target.value)}
                name=''
                id=''
                cols={10}
                rows={10}
              ></textarea>
              <button onClick={handleSubmit} className='px-4 py-2 text-white bg-blue-400 rounded-lg'>
                Gửi
              </button>
            </div>
          </div>
          <div className='sm:col-span-2 max-sm:col-span-3 rounded-lg overflow-hidden'>
            <img
              src={state?.car_vehicle || state?.hotel_img || state?.location_img || state?.car_img}
              alt=''
              className=''
            />
          </div>
        </div>
      </div>
      <div className='mx-auto flex justify-end px-4 sm:pt-[50px] max-sm:py-8 max-w-[1200px]'>
        <div className='max-w-[800px] w-full overflow-y-auto border-l-2 pl-4'>
          {data?.data?.result.map((_: any, index: any) => (
            <div key={index} className='mb-6 pb-2 border-b'>
              <div className='flex gap-2'>
                <div>
                  <img
                    src='https://dynamic-media-cdn.tripadvisor.com/media/photo-o/1a/f6/f0/d5/default-avatar-2020-17.jpg?w=100&h=-1&s=1'
                    alt=''
                    className='w-[32px] h-[32px] object-cover object-center rounded-full'
                  />
                </div>
                <p className='font-bold'>{_.result.username}</p>
              </div>
              <p>{_.comment}</p>
            </div>
          ))}
        </div>
      </div>
    </>
  )
}

export default DanhGia
