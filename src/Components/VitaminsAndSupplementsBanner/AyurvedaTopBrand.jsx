import React from 'react'
import { featured_Products, heading, health_concern } from '../../assets/data'
import { FaShoppingBag, FaStar } from 'react-icons/fa'
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/pagination';
import Header from '../Header/Header';


const AyurvedaTopBrand = () => {
    const displayBrands = health_concern.slice(12, 23)
    return (

        <div className='mt-20 h-[407px] bg-[#0070BC1A] ayurveda_container '>
            <div className='container_box nnt h-full'>
                <div className='pt-20 ayurved_top'>
                    <div>
                        <Header title={heading[7].title} />
                    </div>
                   
                </div>
            </div>
        </div>
    )
}

export default AyurvedaTopBrand