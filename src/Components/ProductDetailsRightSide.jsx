import React from 'react'
import { FaStar } from 'react-icons/fa6'
import Flvr_PacketSize from './Flvr_PacketSize'
import CartButton from './CartButton'

const ProductDetailsRightSide = () => {
    return (
        <div className='public_sans'>
            <div className='flex gap-3 reviw_star'>
                <ul className='flex gap-2 text-[#FEB92D]'>
                    <li><FaStar /></li>
                    <li><FaStar /></li>
                    <li><FaStar /></li>
                    <li><FaStar /></li>
                    <li><FaStar /></li>
                </ul>
                <span className='text-[#191C1F] text-[14px] font-semibold whitespace-nowrap'>4.7 Star Rating</span>
                <span className='text-[#5F6C72] text-[14px] whitespace-nowrap'>569 Ratings & 77 Reviews</span>
            </div>
            <div className='flex flex-col gap-2 right_content'>
                <p className='text-[#191C1F] text-[20px] title'>Protinex Diabetes Care Protein Powder with Vitamins | For Strength, Blood Sugar & Weight Management | Nutrition Formula Creamy Vanilla Powder    </p>
                <span className='text-[#5F6C72]'>Nutricia International Pvt Ltd</span>
                <div className='flex gap-3 prices'>
                    <span className='text-[24px] text-[#2DA5F3] new_price'>₹ 646</span>
                    <span className='text-[24px] text-[#77878F] old_price line-through'>₹ 760</span>
                    <button className='w-[79px] cursor-pointer rounded-sm text-[14px] bg-[#EDDD1D] text-[#191C1F] font-semibold'>15% OFF</button>
                </div>
            </div>
            <div className='mt-4'>
                <hr />
            </div>
            <Flvr_PacketSize/>
            <CartButton/>
        </div>
    )
}

export default ProductDetailsRightSide