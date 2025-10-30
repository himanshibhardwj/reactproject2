import React from 'react'

const DashboardPassword = () => {
    return (
        <div className='border-1 border-[#E4E7E9] w-9/12'>
            <h3 className='text-sm text-[#191C1F] uppercase px-3 py-3 border-b-1 border-[#E4E7E9] font-semibold'> Update Password</h3>
            <div className='border-1 border-[#E4E7E9] rounded mt-3 mx-4 mb-4'>
                <h3 className='text-sm text-[#191C1F] uppercase px-3 py-3 border-b-1 border-[#E4E7E9] font-semibold'> Change Password</h3>
                <form className='p-5 flex flex-col gap-3'>
                    <div className='w-full'>
                        <label>Current Password</label>
                        <div className='flex gap-5 mt-2'><input type="password" placeholder='Current Password' className='outline-none border-1 border-[#E4E7E9] px-3 py-2 text-sm w-full rounded' /></div>
                    </div>
                    <div className='w-full'>
                        <label>New Password</label>
                        <div className='flex gap-5 mt-2'><input type="password" placeholder='New Password' className='outline-none border-1 border-[#E4E7E9] px-3 py-2 text-sm w-full rounded' /></div>
                    </div>
                    <div className='w-full'>
                        <label>Confirm Password</label>
                        <div className='flex gap-5 mt-2'><input type="password" placeholder='Confirm Password' className='outline-none border-1 border-[#E4E7E9] px-3 py-2 text-sm w-full rounded' /></div>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default DashboardPassword