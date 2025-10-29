import React, { use, useState } from 'react'
import { FaShoppingBag, FaStar } from 'react-icons/fa'

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';
import { heading, similarProducts } from '../assets/data'
import Header from './Header/Header';
import ViewAll from './Featured/ViewAll';


const SimilarProducts = () => {
    const displayedItems = similarProducts.slice(0, 6);
    return (
        <>
            <div className='mt-40 '>
                <div>
                    <div className='mb-5 flex items-center justify-between'><Header title={heading[0].title} />
                        <div><ViewAll /></div>
                    </div>
                    <div>
                        <Swiper
                            breakpoints={{
                                250: {
                                    slidesPerView: 2,
                                },
                                380: {
                                    slidesPerView: 2,
                                },
                                480: {
                                    slidesPerView: 3,
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
                                }
                            }}
                            slidesPerView={6}
                            spaceBetween={10}
                            className="mySwiper"
                        >

                            <SwiperSlide>
                                <div className='flex items-center justify-center flex-col gap-3 mt-5 health_cncern2'>
                                    <div className='w-7/12 cursor-pointer group'>
                                        <img src={item.image} className='w-full h-full object-contain group-hover:scale-110' />
                                    </div>
                                    <h3 className='text-[15px] text-center 2xl:text-[18px] xl:text-[17px] md:text-[18px] lg:text-[15px] font-bold text-[#020A13]'>{item.title}</h3>
                                </div>
                            </SwiperSlide>
                        </Swiper>
                    </div>
                </div>
            </div>
        </>
    )
}

export default SimilarProducts