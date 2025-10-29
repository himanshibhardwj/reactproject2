import React from 'react'
import { FaArrowRight } from 'react-icons/fa6'
import { Link } from 'react-router-dom'

const CartButtonDown = () => {
    return (
        <div className='w-5/12 cart_right_box '>
            <div className=' px-3 py-5 cart_total shadow'>
                <h4 className='text-xl font-semibold mb-2 inter text-[#44404B]'>The total amount of</h4>
                <div className='roboto'>
                    <ul className='list-unstyled flex flex-wrap items-center justify-between cart_total_items gap-3 mb-3'>
                        <li className='w-full max-w-9/12 text-[#5F6C72] text-sm'>Subtotal:</li>
                        <li className='w-full max-w-2/12  font-medium'>$1450</li>
                        <li className='w-full max-w-9/12 text-[#5F6C72] text-sm'>Shipping:</li>
                        <li className='w-full max-w-2/12  font-medium'>Free</li>
                        <li className='w-full max-w-9/12 text-[#5F6C72] text-sm'>Discount:</li>
                        <li className='w-full max-w-2/12  font-medium'>$909</li>
                        <li className='w-full max-w-9/12 text-[#5F6C72] text-sm'>Tax:</li>
                        <li className='w-full max-w-2/12  font-medium'>$909</li>
                        <li className='w-full max-w-9/12 text-[#5F6C72] text-sm'>Total:</li>
                        <li className='w-full max-w-2/12  font-medium'>$1450</li>
                    </ul>
                    
                    <Link to={'/checkout'}><div className='bg-[#DB3030] cursor-pointer flex items-center justify-center gap-3 text-white py-2 proceed_checkout'>
                        <button className='cursor-pointer font-bold uppercase'>Proceed to CheckOut</button>
                        <span><FaArrowRight/></span>
                    </div>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default CartButtonDown