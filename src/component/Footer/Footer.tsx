import React from 'react'

export default function Footer() {
  return (
    <div className='bg-[#1c2930]'>
      <div className='max-w-[1200px] mx-auto px-4'>
        <div className='grid grid-cols-4'>
          <div className='col-span-1'>
            <div>
              <img
                src='https://d1785e74lyxkqq.cloudfront.net/_next/static/v2/a/ad89f39fe62c8b500e6f9a25fa4427d8.svg'
                alt=''
              />
            </div>
            <div className='flex flex-wrap'>
              <div>
                <img
                  src='https://ik.imagekit.io/tvlk/image/imageResource/2017/12/13/1513150321127-5096be77d2a19401b476853e54ba2cc6.svg?tr=h-35,q-75'
                  alt=''
                />
              </div>
              <div>
                <img
                  src='https://ik.imagekit.io/tvlk/image/imageResource/2021/05/10/1620638808154-e6c02ed786235ab59252628a9aa9b715.png?tr=h-35,q-75'
                  alt=''
                />
              </div>
            </div>
          </div>
          <div className='col-span-1'></div>
          <div className='col-span-1'></div>
          <div className='col-span-1'></div>
        </div>
      </div>
    </div>
  )
}
