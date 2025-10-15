import React from 'react'
import { featured_Products, heading, health_concern } from '../../assets/data'
import { FaShoppingBag, FaStar } from 'react-icons/fa'
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/pagination';
import Header from '../Header/Header';
import Items from '../Items';


const AyurvedaTopBrand = () => {
    const displayBrands = health_concern.slice(12, 23)
    return (

        <div className='mt-20 h-[407px] bg-[#0070BC1A] ayurveda_container '>
            <div className='container_box nnt h-full'>
                <div className='pt-20 ayurved_top'>
                    <div>
                        <Header title={heading[7].title} />
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

                        {health_concern.slice(12, 20).map((item, index) => {
                            return (<SwiperSlide className=' h-full' ><Items key={index} id={item.id} image={item.image} title={item.title} /></SwiperSlide>)
                        })}
                    </Swiper>
                </div>
            </div>
        </div>
    )
}

export default AyurvedaTopBrand