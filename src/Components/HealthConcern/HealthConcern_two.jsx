import React from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';
import { heading, health_concern } from '../../assets/data';
import Header from '../Header/Header';
import Items from '../Items';

const HealthConcern_two = () => {
    return (
        <div className='bg-[#0070BC1A] mt-20 nnt'>
            <div className='container_box'>
                <div className='py-4'>
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

                        {health_concern.slice(6, 12).map((item, index) => {
                            return (<SwiperSlide className=' h-full' ><Items key={index} id={item.id} image={item.image} title={item.title} /></SwiperSlide>)
                        })}


                    </Swiper>
                </div>
            </div>
        </div>
    )
}

export default HealthConcern_two