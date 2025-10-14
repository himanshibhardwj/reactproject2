import React from 'react'

const Items_HealthConcern = () => {
    return (

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

            <SwiperSlide>
                <div className='flex items-center flex-col gap-3 mt-5 health_cncern2'>
                    <div className='w-7/12 cursor-pointer group'>
                        <img src={item.image} className='w-full h-full object-contain group-hover:scale-110' />
                    </div>
                    <h3 className='text-center text-[15px] 2xl:text-[18px] xl:text-[17px] md:text-[18px] lg:text-[15px] font-bold text-[#020A13]'>{item.title}</h3>
                </div>
            </SwiperSlide>
        </Swiper>

    )
}

export default Items_HealthConcern