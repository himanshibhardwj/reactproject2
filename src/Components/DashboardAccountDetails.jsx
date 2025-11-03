import React, { useState } from 'react'
import user from '../assets/Home/DashboardImages/user.jpg'
import { FaUpload } from 'react-icons/fa6'

const DashboardAccountDetails = () => {
    const [openFile, setOpenFile] = useState(false)
    const [file, setFile] = useState(null);

    function handleChange(e) {
        setFile(URL.createObjectURL(e.target.files[0]));
    }
    return (
        <div className='roboto text-sm border-1 border-[#FFFFFF] shadow flex flex-col justify-center dshbrd_accnt_detls'>
            <h3 className='text-sm text-[#191C1F] uppercase px-3 py-3 border-b-1 border-[#E4E7E9]'> Your Profile</h3>

            <div className='flex items-center justify-between px-5 profile_cntner'>
                <div className={` user_dshbrd_img shadow-md border-1 relative`}>
                    <span className='absolute top-0 right-6 w-[35px] h-[35px] shadow z-50 flex items-center justify-center cursor-pointer rounded-full bg-white' onClick={() => { setOpenFile(!openFile) }}>
                        <input type='file' className={`absolute top-0 right-0`} onChange={handleChange} />
                        <FaUpload size={18} /></span>
                        {file &&
                            <div className='preview_image'>
                                <img src={file} />
                            </div>
                        }
                    
                </div>
                <form className='border-1 border-[#FFFFFF] accunt_dtls_form w-10/12 px-5 py-5 flex flex-col gap-3 justify-center'>
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
                    <button className='w-3/12 bg-[#DB3030] cursor-pointer rounded py-2 text-white mt-3 sve_chnges'>
                        Save Changes
                    </button>
                </form>
            </div>
        </div>
    )
}

export default DashboardAccountDetails