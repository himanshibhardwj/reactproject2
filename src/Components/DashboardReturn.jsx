import React, { useState } from 'react'
import DashboardOrdersHeading from './DashboardOrdersHeading'
import { order_cntnt } from '../assets/data'
import { Link } from 'react-router-dom'
import { RxTriangleDown, RxTriangleUp } from 'react-icons/rx'

const DashboardReturn = () => {
    const [viewProductButn, setViewProductButn] = useState(null)
    return (
        <div className='w-9/12'>
            <DashboardOrdersHeading />
            <div className='flex gap-4 flex-col mt-4'>
                {order_cntnt.map((item, index) => {
                    return (
                        <div key={index}>
                            <div className='flex justify-between shadow border-1 px-3 py-3 rounded border-[#D2D2D2]'>
                                <ul className='w-4/12 flex flex-wrap'>
                                    <li className='w-5/12'>Order ID</li>
                                    <li className='w-5/12'>{item.id}</li>
                                    <li className='w-5/12'>Status</li>
                                    <li className='w-5/12'>{item.status}</li>
                                    <li className='w-5/12'>Amount</li>
                                    <li className='w-5/12'>₹{item.price}</li>
                                    <li className='w-5/12'>Date</li>
                                    <li className='w-5/12'>{item.date}</li>
                                </ul>
                                <div className={`flex flex-col justify-center gap-2 `}>
                                    <button className={`border w-full flex justify-center items-center gap-2 cursor-pointer px-2 py-1 rounded `} onClick={() => { setViewProductButn(index) }}>
                                        {viewProductButn === index ? <><RxTriangleDown /> <span>Hide Product</span></> : <> <RxTriangleUp /> <span>View Product</span></>}</button>
                                    <Link><button className={`border w-full cursor-pointer px-2 py-1 rounded bg-[#DB3030] text-white`}>Download Invoice</button></Link>
                                </div>
                            </div>
                            {viewProductButn === index && (
                                <div className='border-1 px-3 py-2 flex justify-between border-[#E4E7E9] rounded'>
                                    <div>
                                        <img />
                                        <p>Printed Tshirt</p>
                                        <p>₹899 × 1</p>
                                        <button className='border-1 px-2 cursor-pointer mt-2' onClick={() => { setViewProductButn(false) }}>Close</button>
                                    </div>
                                    <div className='flex flex-col gap-2'>
                                        <button className='bg-[#DB3030] px-2 py-1 text-white'>Track Order</button>
                                        <button className='border-1 px-2 py-1'>Cancel Order</button>
                                    </div>
                                </div>
                            )}

                        </div>
                    )
                })}
            </div>

        </div>
    )
}

export default DashboardReturn