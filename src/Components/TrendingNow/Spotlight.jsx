import React from 'react'

import { featured_Products, heading } from '../../assets/data'
import { FaShoppingBag, FaStar } from 'react-icons/fa'
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';

import Header from '../Header/Header';
import ViewAll from '../Featured/ViewAll';


const Spotlight = () => {
    const displayedItems = featured_Products.slice(30, 36);
    return (
        <div>
            <div className='mt-20 '>
                <div className='container nnt '>
                    <div className='mb-5 flex items-center justify-between'><Header title={heading[6].title} />
                        <div><ViewAll /></div>
                    </div>
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
                            1400:{
                                 slidesPerView: 6,
                                spaceBetween: 10,
                            },
                            1536:{
                                slidesPerView: 6,
                                spaceBetween: 10,
                            }
                        }}
                        slidesPerView={6}
                        spaceBetween={20}
                        className="mySwiper"
                    >
                        {displayedItems.map((item, index) => {
                            return (
                                <SwiperSlide className='p-1'>
                                    <div key={index} className='w-[210px] h-[440px] group shadow-md bg-white flex flex-col items-center gap-5 relative drop-shadow rounded-2xl pt-10 spotlight_content'>
                                        <div className=' w-[full] h-[full] max-w-[100px] max-h-[150px] flex items-center justify-center spotlight'>
                                            <img src={item.image} />
                                        </div>
                                        <div className='w-full h-[250px] flex flex-col items-center gap-2 p-2'>
                                            <h1 className='text-base font-bold text-center'>{item.name}</h1>
                                            <p className='font-medium text-[#666666] flex items-center gap-1'>{item.deliver_time}<span className='text-[15px] text-[#000000] font-bold'>{item.time}</span></p>
                                            <div className='flex items-center gap-5 stars'>
                                                <ul className='flex items-center gap-2 text-[#FEB92D]'>
                                                    <li><FaStar size={15} /></li>
                                                    <li><FaStar size={15} /></li>
                                                    <li><FaStar size={15} /></li>
                                                    <li><FaStar size={15} /></li>
                                                    <li><FaStar size={15} /></li>
                                                </ul>
                                                <span>{item.star_content}</span>
                                            </div>
                                            <div className='flex items-center gap-2'>
                                                <span className='font-medium line-through'>₹{item.old_price}</span>
                                                <span className='font-bold'>₹{item.new_price}</span>
                                            </div>
                                            <button className='opacity-0 group-hover:opacity-100 absolute bottom-0 text-white w-full h-[42px] bg-[#0071BC] flex items-center justify-center rounded-b-[12px] text-base gap-3 font-bold'>Add to Cart <span><FaShoppingBag /></span></button>
                                            {item.discount === 0 ? null :
                                                <span className='absolute top-5 w-[48px] h-[25px] left-5 text-white font-bold text-[10px] flex items-center justify-center bg-[#0070BC] discount'> {item.discount}% </span>}
                                        </div>
                                    </div>
                                </SwiperSlide>
                            )
                        })}
                    </Swiper>
                </div>
            </div>
        </div>
    )
}

export default Spotlight