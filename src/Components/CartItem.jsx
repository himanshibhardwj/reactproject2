import React from 'react'
import CartItemsBuy from './CartItemsBuy'
import { cart_box } from '../assets/data'


const CartItem = () => {

  return (
    <div className='shadow px-3 py-2 '>
      <div className='flex flex-col gap-3 shadow px-4 py-3 nnt'>
        <p className='text-xl font-semibold'>Cart (2 items)</p>
        {cart_box.map((item, index) => {
          return (<div key={index}><CartItemsBuy data={item} /></div>)
        })}
      </div>
    </div>
  )
}

export default CartItem