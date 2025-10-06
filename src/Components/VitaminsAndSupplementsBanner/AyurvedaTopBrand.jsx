import React from 'react'
import { featured_Products, heading, health_concern } from '../../assets/data'
import { FaShoppingBag, FaStar } from 'react-icons/fa'
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/pagination';


const AyurvedaTopBrand = () => {
    const displayBrands = health_concern.slice(12, 23)
    return (

        <div className='mt-20 h-[407px] bg-[#0070BC1A] '>
            <div className='container nnt h-full'>
                <div className='pt-20'>
                    <h2 className='text-[32px] font-bold'>Ayurveda top brands</h2>
                    <Swiper
                        breakpoints={{
                            640: {
                                slidesPerView: 3,
                                spaceBetween: 20,
                            },
                            768: {
                                slidesPerView: 4,
                                spaceBetween: 40,
                            },
                            1024: {
                                slidesPerView: 6,
                                spaceBetween: 20,
                            },
                            1208: {
                                    slidesPerView: 6,
                                spaceBetween: 20,
                                }
                            }
                        }
                        slidesPerView={6}
                        spaceBetween={10}
                        className="mySwiperone"
                    >
                        <div>
                            {displayBrands.map((item, index) => {
                                return (
                                    <SwiperSlide key={index}>
                                        <div className='w-[150px] h-[150px] group mt-5 cursor-pointer'>
                                            <img src={item.image} className='w-full h-full group-hover:scale-90' />
                                        </div>
                                    </SwiperSlide>
                                )
                            })}
                        </div>
                    </Swiper>
                </div>
            </div>
        </div>
    )
}

export default AyurvedaTopBrand