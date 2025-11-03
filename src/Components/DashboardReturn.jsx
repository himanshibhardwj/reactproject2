import React, { useState } from 'react'
import DashboardOrdersHeading from './DashboardOrdersHeading'
import { Link } from 'react-router-dom'
import { RxTriangleDown, RxTriangleUp } from 'react-icons/rx'
import DashboardReturnList from './DashboardReturnList'
import proteinX_1 from '../assets/Home/Similar_Products/proteinX_1.png'
import proteinX_3 from '../assets/Home/Similar_Products/proteinX_3.png'
import proteinX_4 from '../assets/Home/Similar_Products/proteinX_4.png'
import proteinX_5 from '../assets/Home/Similar_Products/proteinX_4.png'


const DashboardReturn = () => {
    const [viewProductButn, setViewProductButn] = useState(null)
    const [viewBtn, setViewBtn] = useState(null);


    return (
        <div className='w-9/12 orders_retrn'>
            <DashboardOrdersHeading />
            <div className='flex gap-4 flex-col mt-4 dashbrd_fr border-1 px-4 py-2 border-[#D2D2D2]'>
                <div className='flex justify-between shadow border-1 px-3 py-3 rounded border-[#D2D2D2] ' >
                    <DashboardReturnList />
                    <div className={`flex flex-col justify-center gap-2 view_download `}>
                        <button className={`border w-full flex justify-center items-center gap-2 view_prdct cursor-pointer px-2 py-1 rounded `} onClick={() => { setViewBtn(1) }}>
                            {viewBtn === 1 ? <><RxTriangleUp /> <span>Hide Product</span></> : <> <RxTriangleDown /> <span>View Product</span></>}
                        </button>
                        <Link><button className={`border downld_prdct w-full cursor-pointer px-2 py-1 rounded bg-[#DB3030] text-white`}>Download Invoice</button></Link>
                    </div>
                </div>
                {viewBtn === 1 && (
                    <div className='flex justify-between shadow border-1 px-3 py-3 rounded border-[#D2D2D2]'>
                        <div className='view_img'>
                            <img src={proteinX_1} />
                        </div>
                        <div>
                            <p>Printed Tshirt</p>
                            <span>₹899 × 1</span>
                        </div>
                        <div className={`flex flex-col justify-center gap-2 view_download `}>
                            <button className={`border w-full flex justify-center items-center gap-2 view_prdct cursor-pointer px-2 py-1 rounded `}>
                                <RxTriangleUp /> <span>Track Order</span>
                            </button>
                            <Link><button className={`border downld_prdct w-full cursor-pointer px-2 py-1 rounded bg-[#DB3030] text-white`}>Cancel Order</button></Link>
                        </div>
                    </div>
                )}
            </div>


            {/* Second box */}
            <div className='flex gap-4 flex-col mt-4 dashbrd_fr border-1 px-4 py-2 border-[#D2D2D2]'>
                <div className='flex justify-between shadow border-1 px-3 py-3 rounded border-[#D2D2D2] ' >
                    <DashboardReturnList />
                    <div className={`flex flex-col justify-center gap-2 view_download `}>
                        <button className={`border w-full flex justify-center items-center gap-2 view_prdct cursor-pointer px-2 py-1 rounded `} onClick={() => { setViewBtn(2) }}>
                            {viewBtn === 2 ? <><RxTriangleUp /> <span>Hide Product</span></> : <> <RxTriangleDown /> <span>View Product</span></>}
                        </button>
                        <Link><button className={`border downld_prdct w-full cursor-pointer px-2 py-1 rounded bg-[#DB3030] text-white`}>Download Invoice</button></Link>
                    </div>
                </div>
                {viewBtn === 2 && (
                    <div className='flex justify-between shadow border-1 px-3 py-3 rounded border-[#D2D2D2]'>
                        <div className='view_img'>
                            <img src={proteinX_3} />
                        </div>
                        <div>
                            <p>Printed Tshirt</p>
                            <span>₹899 × 1</span>
                        </div>
                        <div className={`flex flex-col justify-center gap-2 view_download `}>
                            <button className={`border w-full flex justify-center items-center gap-2 view_prdct cursor-pointer px-2 py-1 rounded `}>
                                <RxTriangleUp /> <span>Track Order</span>
                            </button>
                            <Link><button className={`border downld_prdct w-full cursor-pointer px-2 py-1 rounded bg-[#DB3030] text-white`}>Cancel Order</button></Link>
                        </div>
                    </div>
                )}
            </div>


            {/* Third box */}

            <div className='flex gap-4 flex-col mt-4 dashbrd_fr border-1 px-4 py-2 border-[#D2D2D2]'>
                <div className='flex justify-between shadow border-1 px-3 py-3 rounded border-[#D2D2D2] ' >
                    <DashboardReturnList />
                    <div className={`flex flex-col justify-center gap-2 view_download `}>
                        <button className={`border w-full flex justify-center items-center gap-2 view_prdct cursor-pointer px-2 py-1 rounded `} onClick={() => { setViewBtn(3) }}>
                            {viewBtn === 3 ? <><RxTriangleUp /> <span>Hide Product</span></> : <> <RxTriangleDown /> <span>View Product</span></>}
                        </button>
                        <Link><button className={`border downld_prdct w-full cursor-pointer px-2 py-1 rounded bg-[#DB3030] text-white`}>Download Invoice</button></Link>
                    </div>
                </div>
                {viewBtn === 3 && (
                    <>
                        <div className='flex justify-between shadow border-1 px-3 py-3 rounded border-[#D2D2D2]'>
                            <div className='view_img'>
                                <img src={proteinX_4} />
                            </div>
                            <div>
                                <p>Printed Tshirt</p>
                                <span>₹899 × 1</span>
                            </div>
                            <div className={`flex flex-col justify-center gap-2 view_download `}>
                                <button className={`border w-full flex justify-center items-center gap-2 view_prdct cursor-pointer px-2 py-1 rounded `}>
                                    <RxTriangleUp /> <span>Track Order</span>
                                </button>
                                <Link><button className={`border downld_prdct w-full cursor-pointer px-2 py-1 rounded bg-[#DB3030] text-white`}>Cancel Order</button></Link>
                            </div>
                        </div>

                        <div className='flex justify-between shadow border-1 px-3 py-3 rounded border-[#D2D2D2]'>
                            <div className='view_img'>
                                <img src={proteinX_4} />
                            </div>
                            <div>
                                <p>Printed Tshirt</p>
                                <span>₹899 × 1</span>
                            </div>
                            <div className={`flex flex-col justify-center gap-2 view_download `}>
                                <button className={`border w-full flex justify-center items-center gap-2 view_prdct cursor-pointer px-2 py-1 rounded `}>
                                    <RxTriangleUp /> <span>Track Order</span>
                                </button>
                                <Link><button className={`border downld_prdct w-full cursor-pointer px-2 py-1 rounded bg-[#DB3030] text-white`}>Cancel Order</button></Link>
                            </div>
                        </div>
                    </>
                )}
            </div>
        </div>
    )
}

export default DashboardReturn
