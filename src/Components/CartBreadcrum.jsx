import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const CartBreadcrum = () => {
  return (
    <div className='bg-[#F2F4F5] px-20 py-2 mt-2'>
      <ul className='breadcrumb flex'>
        <li><Link to={'/'}>Home</Link></li>
        <li className='text-[#DB3030]'>{brdcrmName}</li>
      </ul>
    </div>
  )
}

export default CartBreadcrum