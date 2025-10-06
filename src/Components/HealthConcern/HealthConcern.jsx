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
            <div className='container'>
                <div className='p-4'>
                    <div>
                        <Header title={heading[1].title} />
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
                        spaceBetween={20}
                        className="mySwiper"
                    >

                        {health.map((item, index) => {
                            return (
                                <SwiperSlide key={index}>
                                    <div className='flex items-center flex-col gap-3 mt-3 health_cncern'>
                                        <div className='shadow-md cursor-pointer group'>
                                            <img src={item.image} className='group-hover:scale-110' />
                                        </div>
                                        <h1 className='text-center text-xl font-bold text-[#020A13]'>{item.title}</h1>
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

export default HealthConcern