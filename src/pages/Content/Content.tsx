import Carousel from 'react-multi-carousel'
import 'react-multi-carousel/lib/styles.css'
import './content.css'
import { SnapList, SnapItem, useVisibleElements, useScroll } from 'react-snaplist-carousel'
interface Props {
  button: string
  buttonCss: string
  items: number
  data: { name?: string; img: string; date?: string; price?: string }[]
  title: string
  icon?: string
  subTitle?: string
  titleCss?: string
}
export default function Content({ button, items, data, title, icon, subTitle, buttonCss, titleCss }: Props) {
  return (
    <div>
      <div className='mt-[90px] max-sm:mt-8'>
        <div className='flex gap-2 items-center'>
          {icon && (
            <div className='w-[24px] h-[24px] rounded-lg overflow-hidden'>
              <img src={icon} alt='' className='overflow-hidden object-cover object-center w-full h-full' />
            </div>
          )}
          <p className={`text-[24px] max-sm:text-base font-bold ${titleCss}`}>{title}</p>
        </div>
        <p className='text-[#8f8f8f] text-base max-sm:text-sm mt-1 mb-3'>{subTitle}</p>
        <SnapList direction='horizontal' className='pb-2'>
          {data.map((item, index) => (
            <SnapItem margin={{ right: '10px' }} key={index} className='max-sm:w-1/2' snapAlign='center'>
              <div className='px-1 shadow-lg overflow-hidden rounded-lg' key={index}>
                <div className='rounded-lg overflow-hidden'>
                  <img src={item.img} alt='' className='w-full h-full object-cover object-center' />
                </div>
                <div className='pl-2 pt-4'>
                  <p className='text-[#434343] font-bold'>{item.name}</p>
                  <p className='text-[12px] text-[#8f8f8f]'>{item.date}</p>
                  <p className='text-[#d99800]'>{item.price}</p>
                </div>
              </div>
            </SnapItem>
          ))}
        </SnapList>
        <div className='flex justify-center mt-4 '>
          <button className={buttonCss}>{button}</button>
        </div>
      </div>
    </div>
  )
}
