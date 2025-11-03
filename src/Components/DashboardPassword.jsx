import React, { useState } from 'react'
import { FaEye, FaEyeSlash } from 'react-icons/fa6'

const DashboardPassword = () => {
    const [showPassword, setShowPassword] = useState(null);
    return (
        <div className='border-1 border-[#E4E7E9] w-9/12 dshbrd_passwrd'>
            <h3 className='text-sm text-[#191C1F] uppercase px-3 py-3 border-b-1 border-[#E4E7E9] font-semibold'> Update Password</h3>
            <div className='border-1 border-[#E4E7E9] rounded mt-3 mx-4 mb-4'>
                <h3 className='text-sm text-[#191C1F] uppercase px-3 py-3 border-b-1 border-[#E4E7E9] font-semibold'> Change Password</h3>
                <form className='p-5 flex flex-col gap-3'>
                    <div className='w-full '>
                        <label>Current Password</label>
                        <div className='flex gap-5 mt-2 relative'><input type={showPassword == 0 ? "password" : "text"} placeholder='Current Password' className={`outline-none border-1 border-[#E4E7E9] px-3 py-2 text-sm w-full rounded 
                            `} />
                            {showPassword == 0 ?
                                <span className={`absolute right-5 top-3 cursor-pointer`} onClick={() => setShowPassword(0)} ><FaEye /></span>
                                :
                                <span className={`absolute right-5 top-3 cursor-pointer`} onClick={() => setShowPassword(1)}><FaEyeSlash /></span>
                            }
                        </div>
                    </div>
                    <div className='w-full'>
                        <label>New Password</label>
                        <div className='flex gap-5 mt-2 relative'><input type="password" placeholder='New Password' className='outline-none border-1 border-[#E4E7E9] px-3 py-2 text-sm w-full rounded' />
                            {showPassword == 2 ? <span className={`absolute right-5 top-3 cursor-pointer`} onClick={() => setShowPassword(2)} ><FaEye /></span> : <span className={`absolute right-5 top-3 cursor-pointer`} onClick={() => setShowPassword(3)} ><FaEyeSlash /></span>}
                        </div>
                    </div>
                    <div className='w-full'>
                        <label>Confirm Password</label>
                        <div className='flex gap-5 mt-2 relative'><input type="password" placeholder='Confirm Password' className='outline-none border-1 border-[#E4E7E9] px-3 py-2 text-sm w-full rounded' />
                            {showPassword == 3 ? <span className={`absolute right-5 top-3 cursor-pointer`} onClick={() => setShowPassword(3)} ><FaEye /></span> : <span className={`absolute right-5 top-3 cursor-pointer`} onClick={() => setShowPassword(4)} ><FaEye /></span>}
                        </div>
                    </div>
                    <button className='w-3/12 bg-[#DB3030] cursor-pointer rounded py-2 text-white mt-3 sve_chnges_pssword'>
                        Save Changes
                    </button>
                </form>
            </div>
        </div>
    )
}

export default DashboardPassword