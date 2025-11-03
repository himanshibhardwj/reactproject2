import React, { useState } from 'react'
import { RxTriangleDown, RxTriangleUp } from 'react-icons/rx'
import { Link } from 'react-router-dom'

const DashboardReturnList = () => {
    const [viewProductButn, setViewProductButn] = useState(0)

    return (
        <>
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
        </>

    )
}

export default DashboardReturnList