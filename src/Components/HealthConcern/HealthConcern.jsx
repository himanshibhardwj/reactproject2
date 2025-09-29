import React from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';


// import required modules
import { Pagination } from 'swiper/modules';
// import HealthConcernContent from './HealthConcernContent';
import { heading, health_concern } from '../../assets/data';
import Header from '../Header/Header';

const HealthConcern = () => {
    return (
        <div className='bg-[#0070BC1A] '>
            <div className='container'>
            <div className='p-4'>
                <div>
                    <Header title={heading[1].title} />
                </div>
                <Swiper
                    slidesPerView={7}
                    spaceBetween={20}
                    className="mySwiper"
                >

                    {health_concern.map((item, index) => {
                        return (
                            <SwiperSlide key={index}>
                                <div className='flex items-center flex-col gap-3 mt-3'>
                                    <div className='shadow-md cursor-pointer'>
                                        <img src={item.image} />
                                    </div>
                                    <h1 className='text-center'>{item.title}</h1>
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