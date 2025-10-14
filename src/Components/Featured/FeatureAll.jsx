import React, { useState } from 'react'
import { featured_Products, heading } from '../../assets/data'
import Header from '../Header/Header'
import ViewAll from './ViewAll'

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';


const FeatureAll = () => {
    const displayedItems = featured_Products.slice(0, 8);
    // const [butonShow, setButtonShow] = useState(false);
    return (
        <>
            <div className='mt-40 '>
                <div className='container_box nnt '>
                    <div className='mb-5 flex items-center justify-between'><Header title={heading[0].title} />
                        <div className='view_all cursor-pointer'><ViewAll /></div>
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
                                <SwiperSlide className=' h-full' key={index} >
                                   
                                </SwiperSlide>
                    </Swiper>
                </div>
            </div>
        </>
    )
}

export default FeatureAll