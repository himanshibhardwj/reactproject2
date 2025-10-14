import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/navigation';
import 'swiper/css/thumbs';

// import required modules
import { FreeMode, Navigation, Thumbs } from 'swiper/modules';
import { FaFacebook, FaInstagram, FaPinterest, FaShoppingCart, FaStar, FaTwitter } from 'react-icons/fa';
import { flavour_and_Size, product_detail_page_slider } from '../assets/data';
import { RxHeart } from 'react-icons/rx';

function ProductDetailSlider() {
    const [smallSwiper, setSmallSwiper] = useState(null);
    const sliceSlider = product_detail_page_slider.slice(0, 5);

    const [active, setActive] = useState(null);
    const [activeButton, setActiveButton] = useState(null);


    return (

        <div>
            <div className='flex 2xl:flex-row xl:flex-row md:flex-row lg:flex-row flex-col justify-between public_sans product_details_slider_container'>
                <div className='2xl:w-[50%] lg:w-[50%] md:w-[50%] xl:w-[50%] w-full'>
                    <Swiper
                        spaceBetween={10}
                        thumbs={{ swiper: smallSwiper }}
                        modules={[FreeMode, Navigation, Thumbs]}
                        className="mySwiper2 border-1"
                    >
                        {sliceSlider.map(({ image }, index) => {
                            return (<SwiperSlide key={index} className='product_details_slider'>
                                <div className='p-5 product_details_image' style={{ height: '500px' }}>
                                    <img src={image} style={{ height: '100%' }} />
                                </div>
                            </SwiperSlide>)
                        })}
                    </Swiper>
                    <Swiper
                        onSwiper={setSmallSwiper}
                        breakpoints={{
                            640: {
                                slidesPerView: 3,
                            },
                            768: {
                                slidesPerView: 3,
                            },
                            1024: {
                                slidesPerView: 4,
                            },

                            1400: {
                                slidesPerView: 5,
                            },
                            1536: {
                                slidesPerView: 5,
                            }
                        }}
                        spaceBetween={10}
                        slidesPerView={5}
                        freeMode={true}
                        watchSlidesProgress={true}
                        modules={[FreeMode, Navigation, Thumbs]}
                        navigation={true}
                        className="mySwiper_1 mt-3"
                    >
                        <SwiperSlide className='border-1 w-[300px]' key={index}>
                            
                        </SwiperSlide>
                    </Swiper>
                </div>
            </div>
        </div>
    );
}

export default ProductDetailSlider;