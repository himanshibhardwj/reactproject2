import React from 'react'
import user from '../assets/Home/DashboardImages/user.png'

const DashboardAccountDetails = () => {
    return (
        <div className='roboto text-sm border-1 border-[#FFFFFF] shadow flex flex-col justify-center '>
            <h3 className='text-sm text-[#191C1F] uppercase px-3 py-3 border-b-1 border-[#E4E7E9]'> Your Profile</h3>

            <div className='flex items-center'>
                <div className='w-full max-w-2/12 flex items-center mx-3 shadow p-5 h-full rounded-full justify-center'>
                    <img src={user} className='w-full' />
                </div>
                <form className='border-1 border-[#FFFFFF] px-10 w-full py-5 flex flex-col gap-3 justify-center'>
                    <div className='flex gap-3'>
                        <div className='flex gap-2 w-full'>
                            <div className='w-full'>
                                <label>First Name</label>
                                <div className='flex gap-5 mt-2'><input type="text" placeholder='First name' className='outline-none border-1 border-[#E4E7E9] px-3 py-2 text-sm w-full rounded' /></div>
                            </div>
                            <div className='w-full'>
                                <label>Last Name</label>
                                <div className='flex gap-5 mt-2'><input type="text" placeholder='Last name' className='outline-none border-1 border-[#E4E7E9] px-3 py-2 text-sm w-full rounded' /></div>
                            </div>
                        </div>
                    </div>
                    <div className='flex gap-3'>
                        <div className='w-6/12'>
                            <label>
                                Email
                            </label>
                            <div className='w-full mt-2'><input className='rounded outline-none w-full border-1 border-[#E4E7E9] px-3 py-2' /></div>
                        </div>
                        <div className='w-6/12'>
                            <label>
                                Phone Number
                            </label>
                            <div className='w-full mt-2'><input className='rounded outline-none w-full border-1 border-[#E4E7E9] px-3 py-2' /></div>
                        </div>
                    </div>
                    <button className='w-3/12 bg-[#DB3030] cursor-pointer rounded py-2 text-white mt-3'>
                        Save Changes
                    </button>
                </form>
            </div>
        </div>
    )
}

export default DashboardAccountDetails