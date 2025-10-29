import React from 'react'
import ProductDetailSlider from './ProductDetailSlider'
import Review from '../Components/Review'
import { featured_Products } from '../assets/data';
import ItemsSlider from '../Components/ItemsSlider';
import ProductDetailsDisplay from '../Components/ProductDetailsDisplay';
import ProductDetailsRightSide from '../Components/ProductDetailsRightSide';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/navigation';
import 'swiper/css/thumbs';

// import required modules
import { FreeMode, Navigation, Thumbs } from 'swiper/modules';



const ProductDetailsPage = () => {

    return (
        <section className='container_box'>
            <div className='mt-10'>
                <div className='flex gap-7 product_details_cntainer'>
                    <ProductDetailSlider />
                    <ProductDetailsRightSide/>
                </div>
                <div className='mt-20 public_sans'>
                    <ProductDetailsDisplay />
                </div>
                <div className='mt-10'>
                    <Review />
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
                    {featured_Products.slice(0, 10).map((item, index) => {
                        return (<SwiperSlide className=' h-full mt-10' key={index} ><ItemsSlider key={index} id={item.id} image={item.image} name={item.name} deliver_time={item.deliver_time} time={item.time} star_content={item.star_content} old_price={item.old_price} new_price={item.new_price} discount={item.discount} /></SwiperSlide>)
                    })}
                </Swiper>
            </div>
        </section>
    )
}

export default ProductDetailsPage