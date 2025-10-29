import React from 'react'
import { FaArrowRight } from 'react-icons/fa6'
import { Link } from 'react-router-dom'
import { cart_box } from '../assets/data'

const OrderSummary = () => {
  return (
    <>
      <div className='w-9/12 cart_right_box public_sans border-1 p-3 border-[#E4E7E9] rounded '>
        <div className=' px-3 py-5 cart_total'>
          <h4 className='text-lg font-semibold mb-2 inter text-[#191C1F]'>Order Summery</h4>
          {cart_box.slice(0, 3).map((item, index) => {
            return (
              <div key={index} className='flex gap-4 mb-4'>
                <div className='cart_smry_image'>
                  <img src={item.cart_img} />
                </div>
                <div className='flex flex-col gap-1'>
                  <p className='text-sm text-[#020A13]'>{item.item_name}</p>
                  <p className=' text-[#3D3C3F] font-medium flex gap-2'>{item.price}
                     <span className='text-[#5F6C72]'>x 1</span></p>
                </div>
              </div>

            )
          })}
        </div>
        <div className='relative'>
          <ul className='list-unstyled flex flex-wrap items-center justify-between cart_total_items gap-3 mb-3 '>
            <li className='w-full max-w-9/12 text-[#5F6C72] text-sm'>Subtotal:</li>
            <li className='w-full max-w-2/12  font-medium'>$1450</li>
            <li className='w-full max-w-9/12 text-[#5F6C72] text-sm'>Shipping:</li>
            <li className='w-full max-w-2/12  font-medium'>Free</li>
            <li className='w-full max-w-9/12 text-[#5F6C72] text-sm'>Discount:</li>
            <li className='w-full max-w-2/12  font-medium'>$909</li>
            <li className='w-full max-w-9/12 text-[#5F6C72] text-sm'>Tax:</li>
            <li className='w-full max-w-2/12  font-medium'>$909</li>
            <li className='w-full max-w-9/12 text-[#191C1F] text-base'>Total:</li>
            <li className='w-full max-w-2/12  font-medium'>$1450</li>
          </ul>

          <div className='bg-[#DB3030] cursor-pointer flex items-center justify-center gap-3 text-white py-2 proceed_checkout'>
            <Link to={'/checkout'}><button className='cursor-pointer font-bold uppercase py-1'>Place order</button></Link>
            <span><FaArrowRight /></span>
          </div>
          <div className='line absolute bottom-22 left-0 overflow-hidden w-full h-[1px] bg-[#E4E7E9]'></div>
        </div>
      </div>
    </ >
  )
}

export default OrderSummary