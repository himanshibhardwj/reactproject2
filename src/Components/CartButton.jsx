import React, { useState } from 'react'
import { FaFacebook, FaPinterest, FaRegCopy, FaRegHeart, FaTwitter } from 'react-icons/fa6'
import { TiMinus, TiPlus } from 'react-icons/ti'
import payment_optns from '../assets/Home/payment_options.png'
import IncreDecre from './IncreDecre'
import { FiShoppingCart } from 'react-icons/fi'
import { Link } from 'react-router-dom'

const CartButton = () => {
    
    return (
        <div>
            <div className='mt-7 flex cart_add_sub items-center gap-3'>
                <IncreDecre/>
                <Link><div className='flex items-center cursor-pointer add_crt gap-2 bg-[#0070BC] w-[240px] text-white justify-center py-2 rounded-sm'>
                    <button className='uppercase cursor-pointer'>Add to cart</button>
                    <span><FiShoppingCart size={20}/></span>
                </div>
                </Link>
                <div className='flex items-center buy_now gap-2 border-2 border-[#0070BC] uppercase w-[240px] text-[#0070BC] justify-center py-2 rounded-sm cursor-pointer'>
                    Buy now
                </div>
            </div>
            <div className='flex justify-between mt-5 wishlst_shreprdt'>
                <div className='flex items-center gap-2 mt-3 wishlist cursor-pointer'>
                    <span><FaRegHeart/></span>
                    <p>Add to Wishlist</p>
                </div>
                <div className='flex gap-3 items-center share_prdct'>
                    <span className='shre_prdt_ttle'>Share product:</span>
                    <span><FaRegCopy color='#5F6C72'/></span>
                    <span><FaFacebook color='#0070BC'/></span>
                    <span><FaTwitter color='#5F6C72'/></span>
                    <span><FaPinterest color='#5F6C72'/></span>
                </div>
            </div>
            <div className='mt-3 border-1 border-[#E4E7E9] px-3 py-2 rounded'>
                <p className='text-[14px] grntee'>100% Guarantee Safe Checkout</p>
                <div className='pymnet_optns mt-3'>
                    <img src={payment_optns} />
                </div>
            </div>
        </div>
    )
}

export default CartButton