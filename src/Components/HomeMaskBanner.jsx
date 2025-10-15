import React from 'react'
import { product_detail_page_slider } from '../assets/data'
import { FaAngleRight } from 'react-icons/fa'

const HomeMaskBanner = () => {
    return (
        <section className='mt-10'>
            <div className='container_box pt'>
                <div className='mask_page flex  gap-8 items-center'>
                    {product_detail_page_slider.slice(7, 9).map((item, index) => {
                        return (<div key={index} className='flex flex-col gap-2'>
                            <div className='relative'>
                                <img src={item.image} />
                                <div className='absolute mask_content top-5 left-10 top-15'>
                                    <button className='price_button px-4 mt-3 poppins py-2 bg-[#0070BC] text-white rounded-full fs-[12px] font-bold'>From
                                        ₹{item.button_content}
                                    </button>
                                    <div className='mt-3 mask_heading'>
                                        <h3 className='text-[#184363] text-[28px] font-bold'>{item.heading}</h3>
                                        <p className='text-[#184363] text-[28px]'>{item.title}</p>
                                    </div>
                                    <div className='mask_shop_now flex gap-1 bg-[#184363] text-white w-[110px] rounded-full py-2 mt-3 justify-center items-center'>
                                        <button>Shop Now</button>
                                        <FaAngleRight />
                                    </div>
                                </div>
                            </div>
                        </div>)
                    })}
                    <div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default HomeMaskBanner