import React from 'react'
import CartBreadcrum from '../Components/CartBreadcrum'
import CartItem from '../Components/CartItem'
import CartButtonDown from '../Components/CartButtonDown'
import { Link } from 'react-router-dom'

const Cart = () => {
  return (
    <>
      <CartBreadcrum />
      <div className='container_box'>
        <div className='flex justify-between mt-5 gap-5 cart_right_left'>
          <CartItem />
          <CartButtonDown />
        </div>
        <div className='mt-4 w-[160px] border-1 py-2 rounded-md cursor-pointer continue_shppng'>
          <Link to={'/ourproducts'}><button className='w-full text-[#4B5966] cursor-pointer'>Continue Shopping</button></Link>
        </div>
      </div>
    </>
  )
}

export default Cart