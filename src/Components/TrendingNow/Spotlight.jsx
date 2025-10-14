import React from 'react'

import { featured_Products, heading } from '../../assets/data'
import { FaShoppingBag, FaStar } from 'react-icons/fa'
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';

import Header from '../Header/Header';
import ViewAll from '../Featured/ViewAll';
import { Link } from 'react-router-dom';


const Spotlight = () => {
    const displayedItems = featured_Products.slice(30, 36);
    return (
        <div>
            <div className='mt-20 '>
                <div className='container_box nnt '>
                    <div className='mb-5 flex items-center justify-between'><Header title={heading[6].title} />
                        <div className='view_all'><ViewAll /></div>
                    </div>
                    
                </div>
            </div>
        </div>
    )
}

export default Spotlight