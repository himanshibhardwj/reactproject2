import React, { useState } from 'react'
import { payment_checkout } from '../assets/data'

const PaymentOptionsCart = () => {
    const [activeCircle,setActiveCircle] = useState(0);
    return (
        <div className='border-1 mt-3 p-2 border-[#E4E7E9]'>
            <h5 className='mb-2'>Payment Option</h5>
            <div className='flex justify-between items-center mb-2 px-15 pt-5 pb-10'>
                {payment_checkout.slice(0, 4).map((item, index) => {
                    return (
                        <div key={index} className='flex flex-col items-center pymnt_otn'>
                            <img src={item.pay} />
                            <p>{item.img_txt}</p>
                            <span className={`circle cursor-pointer mt-3 ${index == activeCircle ?'border-5 border-black':'border-2 border-[#C9CFD2]'}`} onClick={()=>{setActiveCircle(index)}}></span>
                        </div>
                    )
                })}
            </div>
            <div className='mb-3'>
                <label>Name on Card</label><br />
                <input className='outline-none border-1 border-[#E4E7E9] rounded-md px-2 py-2 w-full mt-2' />
            </div>
            <div className='mb-3'>
                <label>Card Number</label><br />
                <input className='outline-none border-1 border-[#E4E7E9] rounded-md px-2 py-2 w-full mt-2' />
            </div>
            <div className='flex gap-3'>
                <div className='w-6/12'>
                    <label>Expire Date</label><br />
                    <input className='outline-none border-1 border-[#E4E7E9] rounded-md px-2 py-2 w-full mt-2' placeholder='DD/YY' />
                </div>
                <div className='w-6/12'>
                    <label>CVC</label><br />
                    <input className='outline-none border-1 border-[#E4E7E9] rounded-md px-2 py-2 w-full mt-2' />
                </div>
            </div>
        </div>
    )
}

export default PaymentOptionsCart