import React, { use, useState } from 'react'
import { FaShoppingBag, FaStar } from 'react-icons/fa'

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';
import { heading, similarProducts } from '../assets/data'
import Header from './Header/Header';
import ViewAll from './Featured/ViewAll';


const SimilarProducts = () => {
    const displayedItems = similarProducts.slice(0, 6);
    return (
        <>
            <div className='mt-40 '>
                <div>
                    <div className='mb-5 flex items-center justify-between'><Header title={heading[0].title} />
                        <div><ViewAll /></div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default SimilarProducts