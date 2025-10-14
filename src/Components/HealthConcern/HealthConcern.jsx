import React from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';
import { heading, health_concern } from '../../assets/data';
import Header from '../Header/Header';

const HealthConcern = () => {
    const health = health_concern.slice(0, 8);
    return (
        <div className='bg-[#0070BC1A] mt-20 nnt'>
            <div className='container_box'>
                <div className='p-4'>
                    <div>
                        <Header title={heading[1].title} />
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

                        {health.map((item, index) => {
                            return (
                                <SwiperSlide key={index}>
                                   
                                </SwiperSlide>
                            )
                        })}
                    </Swiper>
                </div>
            </div>
        </div>
    )
}

export default HealthConcern