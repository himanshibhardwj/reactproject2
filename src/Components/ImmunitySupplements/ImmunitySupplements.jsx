'use client'
import React from 'react'
import { featured_Products, heading } from '../../assets/data'
import Header from '../Header/Header'
import ViewAll from '../Featured/ViewAll'
import ItemsSlider from '../ItemsSlider'

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';
import { Link } from 'react-router-dom'


const ImmunitySupplements = () => {
    return (
        <>
            <div className='mt-20 '>
                <div className='container_box nnt '>
                    <div className='mb-5 flex items-center justify-between'><Header title={heading[2].title} />
                        <div className='view_all cursor-pointer'><Link><ViewAll /></Link></div>
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

                        {featured_Products.slice(6,16).map((item, index) => {
                            return (<SwiperSlide className=' h-full' ><ItemsSlider key={index} id={item.id} image={item.image} name={item.name} deliver_time={item.deliver_time} time={item.time} star_content={item.star_content} old_price={item.old_price} new_price={item.new_price} discount={item.discount} /></SwiperSlide>)
                        })}


                    </Swiper>
                </div>
            </div>
        </>
    )
}

export default ImmunitySupplements