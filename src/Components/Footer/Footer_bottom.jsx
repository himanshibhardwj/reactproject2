import React from 'react'
import payment_options from '../../assets/Home/payment_options.png'

const Footer_bottom = () => {
    return (
        <div className='text-white flex justify-between p-3 container_box'>
            <div>
                <span>Copyright © 2025 Tech Alphonic.All Rights Reserved.</span>
            </div>
            <div>
                <img src={payment_options}/>
            </div>
        </div>
    )
}

export default Footer_bottom