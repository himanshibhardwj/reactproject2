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
import { featured_Products, flavour_and_Size, product_detail_page_slider } from '../assets/data';
import { RxHeart } from 'react-icons/rx';

function ProductDetailSlider() {
    const [smallSwiper, setSmallSwiper] = useState(null);
    const sliceSlider = product_detail_page_slider.slice(0, 5);

    const [active, setActive] = useState(null);
    const [activeButton, setActiveButton] = useState(null);

    return (

        <div className='w-[50%] public_sans product_details_slider_container'>
            <div className=''>
                <Swiper
                    slidesPerView={1}
                    thumbs={{ swiper: smallSwiper }}
                    modules={[FreeMode, Navigation, Thumbs]}
                    className="mySwiper2 border-1"
                >
                    {sliceSlider.map(({ image }, index) => {
                        return (<SwiperSlide key={index} className='product_details_slider'>
                            <div className='p-5 product_details_image'>
                                <img src={image} style={{ height: '100%' }} />
                            </div>
                        </SwiperSlide>)
                    })}
                </Swiper>
                <Swiper
                    onSwiper={setSmallSwiper}
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
                    {product_detail_page_slider.slice(0, 7).map((item, index) => {
                        return (<SwiperSlide className='small_big h-full' key={index} >
                            <img src={item.image} />
                        </SwiperSlide>)
                    })}
                </Swiper>
            </div>
        </div>
    );
}

export default ProductDetailSlider;