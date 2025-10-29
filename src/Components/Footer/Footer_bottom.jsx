import React from 'react'
import payment_options from '../../assets/Home/payment_options.png'
import { Link } from 'react-router-dom'

const Footer_bottom = () => {
    return (
        <div className='text-white flex justify-between p-3 container_box bottom_fter'>
            <div className='copyright_text'>
                <span>Copyright © 2025 Tech Alphonic.All Rights Reserved.</span>
            </div>
            <div className='paymnt_optns flex items-center justify-center'>
                <Link><img src={payment_options} className='w-full h-full'/></Link>
            </div>
        </div>
    )
}

export default Footer_bottom