import React, { useState } from 'react'
import './slider.css'
// import 'react-date-range/dist/styles.css' // main style file
// import 'react-date-range/dist/theme/default.css' // theme css file
import Content from '../Content'
import { useNavigate } from 'react-router-dom'
const data = [
  {
    name: 'TP HCM - Đà Nẵng',
    img: 'https://ik.imagekit.io/tvlk/mchitm/imageResource/template/337/vi_VN/2023/12/18/2435cf4f-65c8-31e2-8502-4c3a23f4d182?tr=w-247',
    date: '25/02/2024',
    price: ' VND602.000'
  },
  {
    name: 'TP HCM - Đà Nẵng2',
    img: 'https://ik.imagekit.io/tvlk/mchitm/imageResource/template/337/vi_VN/2023/12/18/2435cf4f-65c8-31e2-8502-4c3a23f4d182?tr=w-247',
    date: '25/02/2024',
    price: ' VND602.000'
  },
  {
    name: 'TP HCM - Đà Nẵng3',
    img: 'https://ik.imagekit.io/tvlk/mchitm/imageResource/template/337/vi_VN/2023/12/18/2435cf4f-65c8-31e2-8502-4c3a23f4d182?tr=w-247',
    date: '25/02/2024',
    price: ' VND602.000'
  },
  {
    name: 'TP HCM - Đà Nẵng4',
    img: 'https://ik.imagekit.io/tvlk/mchitm/imageResource/template/337/vi_VN/2023/12/18/2435cf4f-65c8-31e2-8502-4c3a23f4d182?tr=w-247',
    date: '25/02/2024',
    price: ' VND602.000'
  },
  {
    name: 'TP HCM - Đà Nẵng5',
    img: 'https://ik.imagekit.io/tvlk/mchitm/imageResource/template/337/vi_VN/2023/12/18/2435cf4f-65c8-31e2-8502-4c3a23f4d182?tr=w-247',
    date: '25/02/2024',
    price: ' VND602.000'
  },
  {
    name: 'TP HCM - Đà Nẵng6',
    img: 'https://ik.imagekit.io/tvlk/mchitm/imageResource/template/337/vi_VN/2023/12/18/2435cf4f-65c8-31e2-8502-4c3a23f4d182?tr=w-247',
    date: '25/02/2024',
    price: ' VND602.000'
  },
  {
    name: 'TP HCM - Đà Nẵng7',
    img: 'https://ik.imagekit.io/tvlk/mchitm/imageResource/template/337/vi_VN/2023/12/18/2435cf4f-65c8-31e2-8502-4c3a23f4d182?tr=w-247',
    date: '25/02/2024',
    price: ' VND602.000'
  }
]
export default function Slider() {
  return (
    <div className=''>
      <div className='rounded-t-3xl w-full bg-white'>
        <div className='mx-auto max-w-[1200px] px-4'>
          <div className='w-full rounded-lg overflow-hidden mt-[90px] max-sm:mt-8'>
            <img
              src='https://ik.imagekit.io/tvlk/image/imageResource/2023/12/11/1702282079827-1ecaea191048ac82823b4cd410be281c.png'
              alt=''
              className='overflow-hidden object-cover object-center w-full h-full'
            />
          </div>
          <div className='w-full rounded-lg overflow-hidden mt-[90px] max-sm:mt-8'>
            <img
              src='https://ik.imagekit.io/tvlk/image/imageResource/2023/12/20/1703036383694-89e163c8c59b70d884359bba236fe840.jpeg'
              alt=''
              className='overflow-hidden object-cover object-center w-full h-full'
            />
          </div>
          <div className='flex gap-2'>
            <div className='w-full rounded-lg overflow-hidden mt-[90px] max-sm:mt-8'>
              <img
                src='https://ik.imagekit.io/tvlk/image/imageResource/2023/12/01/1701420392966-93e2bb3147f86f26aa10990c6527a5d9.jpeg?tr=q-75,w-320'
                alt=''
                className='overflow-hidden object-cover object-center w-full h-full'
              />
            </div>
            <div className='w-full rounded-lg overflow-hidden mt-[90px] max-sm:mt-8'>
              <img
                src='https://ik.imagekit.io/tvlk/image/imageResource/2023/12/01/1701420403280-8ca317a954d6fadbdf67471aacfefae2.jpeg?tr=q-75,w-320'
                alt=''
                className='overflow-hidden object-cover object-center w-full h-full'
              />
            </div>
            <div className='w-full rounded-lg overflow-hidden mt-[90px] max-sm:mt-8'>
              <img
                src='https://ik.imagekit.io/tvlk/image/imageResource/2023/12/01/1701420425994-3e722f2f084ee21688486344d62798f4.jpeg?tr=q-75,w-320'
                alt=''
                className='overflow-hidden object-cover object-center w-full h-full'
              />
            </div>
            <div className='w-full rounded-lg overflow-hidden mt-[90px] max-sm:mt-8'>
              <img
                src='https://ik.imagekit.io/tvlk/image/imageResource/2023/12/01/1701420433420-1ad788991090befb8d0000de3cdfa81d.jpeg?tr=q-75,w-320'
                alt=''
                className='overflow-hidden object-cover object-center w-full h-full'
              />
            </div>
          </div>
          <div className='w-full rounded-lg overflow-hidden mt-[90px] max-sm:mt-8'>
            <img
              src='https://ik.imagekit.io/tvlk/image/imageResource/2023/11/30/1701335891209-a8b7016ce7ef974ed2a8d66577216b09.jpeg?tr=q-75,w-1280'
              alt=''
              className='overflow-hidden object-cover object-center w-full h-full'
            />
          </div>
          <Content
            data={data}
            titleCss='text-[#30c5f7] font-bold'
            button='Xem thêm ưu đãi!'
            buttonCss='bg-[#30c5f7] mt-4 px-10 py-2 text-white rounded-md cursor-pointer font-semibold'
            icon='https://ik.imagekit.io/tvlk/image/imageResource/2022/11/30/1669792901948-45b10e385062e76bd4e154d3cc58a549.png?_src=imagekit&tr=q-40,h-24'
            items={5}
            subTitle='Ưu đãi lên đến 50%, nhanh tay đặt ngay!'
            title='Vé máy bay cuối năm'
          />
          <Content
            data={data}
            titleCss='text-[#235d9f] font-bold'
            button='Xem thêm ưu đãi khách sạn!'
            buttonCss='bg-[#235d9f] mt-4 px-10 py-2 text-white rounded-md cursor-pointer font-semibold'
            icon='https://ik.imagekit.io/tvlk/image/imageResource/2023/10/27/1698396158407-b99791be1cff908b1977c5cf813ee9c9.png?_src=imagekit&tr=q-40,h-24'
            items={5}
            title='Khách sạn sale to cuối năm'
          />
          <Content
            data={data}
            titleCss='text-[#ff6d70] font-bold'
            button='Xem thêm vui chơi lễ hội!'
            buttonCss='bg-[#235d9f] mt-4 px-10 py-2 text-white rounded-md cursor-pointer font-semibold'
            icon='https://ik.imagekit.io/tvlk/image/imageResource/2023/10/27/1698398975489-ca2e62a278e5ba673e4a62ffc67ec6ac.png?_src=imagekit&tr=q-40,h-24'
            items={5}
            subTitle='Siêu sale thả phanh bắt đầu!'
            title='Vui hân hoan cuối năm'
          />
        </div>
        <div className='mx-auto max-w-[1200px] px-4'>
          <h1 className='text-2xl text-[#434343] font-bold mt-10 max-sm:mt-6 mb-[30px]'>
            Nâng tầm chuyến đi theo cách bạn muốn
          </h1>
          <div className='flex gap-3'>
            <div className='rounded-xl overflow-hidden mb-10 shadow-md w-fit'>
              <img
                src='https://ik.imagekit.io/tvlk/image/imageResource/2023/06/20/1687227865303-92e8a9f380d1ac6cc541dee7a4d49a88.png?tr=q-75,w-256'
                alt=''
                className='overflow-hidden rounded-xl object-cover object-center'
              />
              <p className='text-[14px] text-[#434343] font-bold mt-[20px] ml-3 mb-2'>Chuyến đi và Danh thắng</p>
            </div>
            <div className='rounded-xl overflow-hidden mb-10 shadow-md w-fit'>
              <img
                src='https://ik.imagekit.io/tvlk/image/imageResource/2023/06/20/1687227867984-3c8e84185751a99679e258b0e16bc914.png?tr=q-75,w-256'
                alt=''
                className='overflow-hidden rounded-xl object-cover object-center'
              />
              <p className='text-[14px] text-[#434343] font-bold mt-[20px] ml-3 mb-2'>Fun Activities</p>
            </div>
            <div className='rounded-xl overflow-hidden mb-10 shadow-md w-fit'>
              <img
                src='https://ik.imagekit.io/tvlk/image/imageResource/2023/06/20/1687227873526-2c86a7c100d5a4bd96603a7eac3ec60a.png?tr=q-75,w-256'
                alt=''
                className='overflow-hidden rounded-xl object-cover object-center'
              />
              <p className='text-[14px] text-[#434343] font-bold mt-[20px] ml-3 mb-2'>Travel Insurance</p>
            </div>
          </div>
        </div>
        <div className='mx-auto max-w-[1200px] px-4'>
          <div className='flex gap-2 items-center max-sm:items-start mb-[30px]'>
            <div className='w-[24px] h-[24px]'>
              <img
                src='https://ik.imagekit.io/tvlk/image/imageResource/2023/06/01/1685631988109-4e2f068146d14d35aa47c5e9e9add5ff.png?_src=imagekit&tr=q-40,h-24'
                alt=''
                className='overflow-hidden object-cover object-center w-full h-full'
              />
            </div>
            <h1 className='text-2xl max-sm:text-xl text-[#434343] font-bold'>
              Tái khám phá bản thân ở châu Á và những nơi khác
            </h1>
          </div>
          <div className='grid grid-cols-3 max-sm:grid-cols-4 gap-4'>
            {Array(6)
              .fill(0)
              .map((item, index) => (
                <div className='col-span-1 max-sm:col-span-2' key={index}>
                  <div className='w-full h-48 max-sm:h-40 rounded-md overflow-hidden relative'>
                    <img
                      src='https://ik.imagekit.io/tvlk/image/imageResource/2023/06/14/1686721948003-7928a0b56734caaca663b9239cde96da.png?tr=q-75,w-427'
                      alt=''
                      className='w-full object-cover object-bottom h-full'
                    />
                    <div className='absolute z-10 top-0 left-0 p-6 max-sm:p-3 text-white'>
                      <h1 className='text-2xl font-bold max-sm:text-base'>Việt Nam</h1>
                      <p className='text-[12px]'>16,763 accommodations</p>
                    </div>
                  </div>
                </div>
              ))}
          </div>
          <Content
            button='Xem tất cả'
            title='Không thể không đến'
            titleCss='text-[#434343]'
            items={4}
            data={data}
            subTitle='Đi cùng người thân vừa vui vừa thích'
            buttonCss='bg-[#f7f9fa] mt-4 px-10 py-2 text-[#0194f3] rounded-md cursor-pointer font-semibold'
          />
        </div>
      </div>
    </div>
  )
}
