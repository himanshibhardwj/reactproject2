import React from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';
import { heading, health_concern } from '../../assets/data';
import Header from '../Header/Header';

const HealthConcern_two = () => {
    const health = health_concern.slice(6, 13)
    return (
        <div className='bg-[#0070BC1A] mt-20 nnt'>
            <div className='container_box'>
                <div className='p-4'>
                    <div>
                        <Header title={heading[1].title} />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HealthConcern_two