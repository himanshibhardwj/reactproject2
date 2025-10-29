import React from 'react'
import { RiDeleteBinLine } from 'react-icons/ri'
import { FaHeart } from 'react-icons/fa6'
import { Link } from 'react-router-dom'
import IncreDecre from '../Components/IncreDecre'

const CartItemsBuy = ({ data }) => {
  return (
    <div className='flex justify-between items-center cart_items_tble public_sans'>
      <div className='cart_image w-2/12'>
        <Link><img src={data.cart_img} /></Link>
      </div>
      <div className='cart_left_cntent w-6/12'>
        <h5 className='flex items-center'>{data.item_name}</h5>
        <span className='text-[#605F64]'>${data.price}</span>
        <div className='flex justify-between mt-2'>
        <div className='flex w-5/12 rounded-md px-1 cursor-pointer py-2 items-center justify-center gap-2 border-1 border-[#777777] rounded remove_itm_btn'>
          <span><RiDeleteBinLine /></span>
          <Link><button className='cursor-pointer'>Remove Item</button></Link>
        </div>
        <div className='flex w-6/12 rounded-md px-1 cursor-pointer py-2 items-center justify-center gap-2 border-1 border-[#777777] rounded wishlist_btn'>
          <span><FaHeart /></span>
          <Link to={'/wishlist'}><button className='cursor-pointer'>Move to Wishlist</button></Link>
        </div>
        </div>
      </div>
      <div className='flex incre_decre'><IncreDecre/></div>
    </div>
  )
}

export default CartItemsBuy