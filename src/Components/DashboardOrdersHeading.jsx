import React from 'react'

const DashboardOrdersHeading = () => {
    return (
        <div className='flex justify-between dashbrd_two_hdng'>
            <p className='text-[30px] font-medium'>Orders</p>
            <select id="months" name="months" className='border-1 rounded cursor-pointer outline-none text-[12px] w-2/12 px-2 py-2 h-full'>
                <option value="last 6 Months" className='text-sm '>Last 6 Months</option>
            </select>
        </div>
    )
}

export default DashboardOrdersHeading