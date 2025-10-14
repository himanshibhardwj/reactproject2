import React, { use, useState } from 'react'
import { featured_Products, heading } from '../../assets/data'
import { FaShoppingBag, FaStar } from 'react-icons/fa'
import Header from '../Header/Header'
import ViewAll from './ViewAll'

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';
import { Link } from 'react-router-dom'


const FeatureAll = () => {
    const displayedItems = featured_Products.slice(0, 8);
    const [butonShow, setButtonShow] = useState(false);
    return (
        <>
            <div className='mt-40 '>
                <div className='container_box nnt '>
                    <div className='mb-5 flex items-center justify-between'><Header title={heading[0].title} />
                        <div className='view_all'><ViewAll /></div>
                    </div>
                    <Swiper
                        breakpoints={{
                            250: {
                                slidesPerView: 2,
                            },
                            380: {
                                slidesPerView: 2,
                            },
                            480: {
                                slidesPerView: 2,
                            },
                            578: {
                                slidesPerView: 3,
                            },
                            640: {
                                slidesPerView: 3,
                            },
                            768: {
                                slidesPerView: 4,
                            },
                            1024: {
                                slidesPerView: 6,
                            },

                            1400: {
                                slidesPerView: 6,
                            },
                            1536: {
                                slidesPerView: 6,
                            },
                            1600: {
                                slidesPerView: 6,
                            }
                        }}
                        slidesPerView={6}
                        spaceBetween={10}
                        className="mySwiper"
                    >
                        {displayedItems.map((item, index) => {
                            return (
                                <SwiperSlide className=' h-full' key={index} >
                                    <div className='p-1 h-full featured_all_content shadow-md bg-white flex flex-col items-center gap-5 relative drop-shadow rounded-2xl'>
                                        <div className=' flex items-center justify-center fetured_all_image' style={{ height: '180px' }}>
                                            <Link to={'/productdetailspage'}>
                                                <img src={item.image} className='w-full h-full ' />
                                            </Link>
                                        </div>
                                        <div className='w-full flex flex-col items-center gap-2 '>
                                            <h3 className='text-[15px] 2xl:text-[18px] xl:text-[17px] md:text-[18px] lg:text-[15px] font-bold text-center line-clamp-2 ram_ji'>{item.name}</h3>
                                            <p className='font-medium text-[15px] 2xl:text-[18px] xl:text-[17px] md:text-[18px] lg:text-[15px]  text-[#666666] flex items-center gap-1'>{item.deliver_time}<span className='text-[15px] text-[#000000] font-bold'>{item.time}</span></p>
                                            <div className='flex items-center gap-2 stars'>
                                                <ul className='flex items-center gap-2 text-[#FEB92D]'>
                                                    <li><FaStar size={13} /></li>
                                                    <li><FaStar size={13} /></li>
                                                    <li><FaStar size={13} /></li>
                                                    <li><FaStar size={13} /></li>
                                                    <li><FaStar size={13} /></li>
                                                </ul>
                                                <span className='text-[15px] 2xl:text-[18px] xl:text-[17px] md:text-[18px] lg:text-[15px] '>{item.star_content}</span>
                                            </div>
                                            <div className='flex items-center gap-2'>
                                                <span className='font-medium line-through text-[15px] 2xl:text-[18px] xl:text-[17px] md:text-[18px] lg:text-[15px] '>₹{item.old_price}</span>
                                                <span className='font-bold text-[15px] 2xl:text-[18px] xl:text-[17px] md:text-[18px] lg:text-[15px] '>₹{item.new_price}</span>
                                            </div>
                                            <div className='slider_add_to_cart absolute bottom-0 text-white w-full h-[42px] bg-[#0071BC]  rounded-b-[12px] text-[15px] 2xl:text-[18px] xl:text-[17px] md:text-[18px] lg:text-[15px]  gap-3 font-bold'>
                                                <button className='w-full h-full flex items-center justify-center gap-2'>Add to Cart <span><FaShoppingBag /></span> </button>
                                                
                                            </div>
                                            <span className='absolute top-5 w-[48px] h-[25px] left-5 text-white font-bold text-[10px] discount flex items-center justify-center bg-[#0070BC]'>{item.discount}%</span>
                                        </div>
                                    </div>
                                </SwiperSlide>
                            )
                        })}
                    </Swiper>
                </div>
            </div>
        </>
    )
}

export default FeatureAll