import React from 'react'
import { featured_Products, heading } from '../../assets/data'
import { FaShoppingBag, FaStar } from 'react-icons/fa'
import Header from '../Header/Header'
import ViewAll from '../Featured/ViewAll.jsx'

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';
import { Link } from 'react-router-dom'

const SuperSavingDeals = () => {
    const displayedItems = featured_Products.slice(36, 43);
    return (
        <>
            <div className='mt-40 '>
                <div className='container_box nnt '>
                    <div className='mb-5 flex items-center justify-between'><Header title={heading[7].title} />
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

export default SuperSavingDeals