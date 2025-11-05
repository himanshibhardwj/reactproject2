import React, { useState } from 'react'
import { FaEye, FaEyeSlash } from 'react-icons/fa6';

const EditProfileForm = () => {
    const [showPassword, setShowPassword] = useState(null);

    return (
        <form className='w-full roboto'>
            <div className='flex gap-3 mb-2'>
                <div className='fst_name'>
                    <label>First Name</label><br />
                    <input type='text' placeholder='Aniket' className='border-1 border-[#E4E7E9] rounded w-full' />
                </div>
                <div className='lst_name'>
                    <label>Last Name</label><br />
                    <input type='text' placeholder='Display name' className='border-1 border-[#E4E7E9] rounded w-full' />
                </div>
            </div>
            <div className='flex gap-3 mb-2'>
                <div className='phne_num'>
                    <label>Phone Number</label><br />
                    <input type='text' placeholder='+1-202-555-0118' className='border-1 border-[#E4E7E9] rounded w-full' />
                </div>
                <div className='email'>
                    <label>Email</label><br />
                    <input type='text' placeholder='Aniket@gmail.com' className='border-1 border-[#E4E7E9] rounded w-full' />
                </div>
            </div>
            <div className='flex gap-3 mb-2'>
                <div className='w-6/12 cntry_adress'>
                    <label>Country
                    </label><br />
                    <select className='border-1 rounded border-[#E4E7E9] mt-2 w-full py-1 outline-none text-[#929FA5]'>
                        <option value='Select'>Select..</option>
                        <option value="India">India</option>
                    </select>
                </div>
                <div className='w-3/12 cntry_adress'>
                    <label>Country
                    </label><br />
                    <select className='border-1 rounded border-[#E4E7E9] mt-2 w-full py-1 outline-none text-[#929FA5]'>
                        <option value='Select'>Select..</option>
                        <option value="India">India</option>
                    </select>
                </div>
                <div className='w-3/12 cntry_adress'>
                    <label>Country
                    </label><br />
                    <select className='border-1 rounded border-[#E4E7E9] mt-2 w-full py-1 outline-none text-[#929FA5]'>
                        <option value='Select'>Select..</option>
                        <option value="India">India</option>
                    </select>
                </div>
            </div>
            <div className='border-1 border-[#E4E7E9] px-2 py-2 flex flex-col gap-2'>
                <div className='w-full '>
                    <label>Current Password</label>
                    <div className='flex gap-5 relative'><input type={showPassword == 0 ? "password" : "text"} placeholder='Current Password' className={`outline-none border-1 border-[#E4E7E9] px-3 py-2 text-sm w-full rounded 
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
                    <div className='flex gap-5  relative'><input type="password" placeholder='New Password' className='outline-none border-1 border-[#E4E7E9] px-3 py-2 text-sm w-full rounded' />
                        {showPassword == 2 ? <span className={`absolute right-5 top-3 cursor-pointer`} onClick={() => setShowPassword(2)} ><FaEye /></span> : <span className={`absolute right-5 top-3 cursor-pointer`} onClick={() => setShowPassword(3)} ><FaEyeSlash /></span>}
                    </div>
                </div>
                <div className='w-full'>
                    <label>Confirm Password</label>
                    <div className='flex gap-5  relative'><input type="password" placeholder='Confirm Password' className='outline-none border-1 border-[#E4E7E9] px-3 py-2 text-sm w-full rounded' />
                        {showPassword == 3 ? <span className={`absolute right-5 top-3 cursor-pointer`} onClick={() => setShowPassword(3)} ><FaEye /></span> : <span className={`absolute right-5 top-3 cursor-pointer`} onClick={() => setShowPassword(4)} ><FaEye /></span>}
                    </div>
                </div>
            </div>
            <button className='w-3/12 bg-[#DB3030] cursor-pointer rounded py-2 text-white mt-3 sve_chnges_pssword'>
                Save Changes
            </button>
        </form>
    )
}

export default EditProfileForm