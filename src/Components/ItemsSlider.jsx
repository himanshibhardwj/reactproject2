import React from 'react'

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';
import { featured_Products } from '../../assets/data'


const ItemsSlider = (props) => {
  return (

    <Swiper
      breakpoints={{
        640: {
          slidesPerView: 3,
          spaceBetween: 10,
        },
        768: {
          slidesPerView: 4,
          spaceBetween: 10,
        },
        1024: {
          slidesPerView: 6,
          spaceBetween: 10,
        },

        1400: {
          slidesPerView: 6,
          spaceBetween: 10,
        },
        1536: {
          slidesPerView: 6,
          spaceBetween: 10,
        }
      }}
      slidesPerView={6}
      spaceBetween={10}
      className="mySwiper"
    >
      <SwiperSlide className=' h-full' >
        <div className='p-1 h-full featured_all_content shadow-md bg-white flex flex-col items-center gap-5 relative drop-shadow rounded-2xl'>
          <div className=' flex items-center justify-center fetured_all_image' style={{ height: '180px' }}>
            <Link to={'/productdetailspage'}>
              <img src={props.image} className='w-full h-full ' />
            </Link>
          </div>
          <div className='w-full flex flex-col items-center gap-2 '>
            <h3 className='text-[15px] 2xl:text-[18px] xl:text-[17px] md:text-[18px] lg:text-[15px] font-bold text-center line-clamp-2 ram_ji'>{props.name}</h3>
            <p className='font-medium text-[15px] 2xl:text-[18px] xl:text-[17px] md:text-[18px] lg:text-[15px]  text-[#666666] flex items-center gap-1'>{props.deliver_time}<span className='text-[15px] text-[#000000] font-bold'>{props.time}</span></p>
            <div className='flex items-center gap-2 stars'>
              <ul className='flex items-center gap-2 text-[#FEB92D]'>
                <li><FaStar size={13} /></li>
                <li><FaStar size={13} /></li>
                <li><FaStar size={13} /></li>
                <li><FaStar size={13} /></li>
                <li><FaStar size={13} /></li>
              </ul>
              <span className='text-[15px] 2xl:text-[18px] xl:text-[17px] md:text-[18px] lg:text-[15px] '>{props.star_content}</span>
            </div>
            <div className='flex items-center gap-2'>
              <span className='font-medium line-through text-[15px] 2xl:text-[18px] xl:text-[17px] md:text-[18px] lg:text-[15px] '>₹{props.old_price}</span>
              <span className='font-bold text-[15px] 2xl:text-[18px] xl:text-[17px] md:text-[18px] lg:text-[15px] '>₹{props.new_price}</span>
            </div>
            <div className='slider_add_to_cart absolute bottom-0 text-white w-full h-[42px] bg-[#0071BC]  rounded-b-[12px] text-[15px] 2xl:text-[18px] xl:text-[17px] md:text-[18px] lg:text-[15px]  gap-3 font-bold'>
              <button className='w-full h-full flex items-center justify-center gap-2'>Add to Cart <span><FaShoppingBag /></span> </button>

            </div>
            <span className='absolute top-5 w-[48px] h-[25px] left-5 text-white font-bold text-[10px] discount flex items-center justify-center bg-[#0070BC]'>{props.discount}%</span>
          </div>
        </div>

      </SwiperSlide>
    </Swiper>
  )
}

export default ItemsSlider