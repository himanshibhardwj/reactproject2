import React, { useState } from 'react'
import DashboardOrdersHeading from './DashboardOrdersHeading'
import { Link } from 'react-router-dom'
import { RxTriangleDown, RxTriangleUp } from 'react-icons/rx'

const DashboardReturn = () => {
    const [viewProductButn, setViewProductButn] = useState(0)
    return (
        <div className='w-9/12 orders_retrn'>
            <DashboardOrdersHeading />
            <div className='flex gap-4 flex-col mt-4 dashbrd_fr'>
                <div className='flex justify-between shadow border-1 px-3 py-3 rounded border-[#D2D2D2] ' >
                    <ul className='w-4/12 flex flex-wrap orders_list'>
                        <li className='w-5/12'>Order ID</li>
                        <li className='w-5/12'>200</li>
                        <li className='w-5/12'>Status</li>
                        <li className='w-5/12'>Approved</li>
                        <li className='w-5/12'>Amount</li>
                        <li className='w-5/12'>₹200</li>
                        <li className='w-5/12'>Date</li>
                        <li className='w-5/12'>12 march</li>
                    </ul>
                    <div className={`flex flex-col justify-center gap-2 view_download `}>
                        <button className={`border w-full flex justify-center items-center gap-2 view_prdct cursor-pointer px-2 py-1 rounded `} onClick={() => { setViewProductButn(0) }}>
                            {viewProductButn === 0 ? <><RxTriangleDown /> <span>Hide Product</span></> : <> <RxTriangleUp /> <span>View Product</span></>}</button>
                        <Link><button className={`border downld_prdct w-full cursor-pointer px-2 py-1 rounded bg-[#DB3030] text-white`}>Download Invoice</button></Link>
                    </div>
                    <div className={`flex flex-col justify-center gap-2 view_download `}>
                        <button className={`border w-full flex justify-center items-center gap-2 view_prdct cursor-pointer px-2 py-1 rounded `} onClick={() => { setViewProductButn(1) }}>
                            {viewProductButn === 1 ? <><RxTriangleDown /> <span>Hide Product</span></> : <> <RxTriangleUp /> <span>View Product</span></>}</button>
                        <Link><button className={`border downld_prdct w-full cursor-pointer px-2 py-1 rounded bg-[#DB3030] text-white`}>Download Invoice</button></Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default DashboardReturn


{/* <div className={`flex flex-col justify-center gap-2 view_download `}>
                        <button className={`border w-full flex justify-center items-center gap-2 view_prdct cursor-pointer px-2 py-1 rounded `} onClick={() => { setViewProductButn(1) }}>
                            {viewProductButn === 1 ? <><RxTriangleDown /> <span>Hide Product</span></> : <> <RxTriangleUp /> <span>View Product</span></>}</button>
                        <Link><button className={`border downld_prdct w-full cursor-pointer px-2 py-1 rounded bg-[#DB3030] text-white`}>Download Invoice</button></Link>
                    </div> */}