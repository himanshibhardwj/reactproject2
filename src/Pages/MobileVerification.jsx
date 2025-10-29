import React from 'react'
import { FaArrowRight } from 'react-icons/fa'
import { Link } from 'react-router-dom'

const MobileVerification = () => {
    return (
        <div className='mt-20 flex justify-center rounded-md'>
            <div className='shadow-md w-5/12  justify-center items-center drop-shadow-md'>
                <div className='p-4 flex-col gap-4 flex-justify-center'>
                    <h2 className='2xl:text-xl md:text-md lg:text-base xl:text-xl sm:text-sm text-[#191C1F] font-bold text-center'>Verify Your Mobile Number</h2>
                    <p className='text-[#5F6C72] text-center'>We will send you the 4 digit verification code</p>
                    <div className='flex flex-col gap-3 pt-4'>
                        <div className='flex justify-between'>
                            <span>Verification Code</span>
                            <span className='text-[#2DA5F3] cursor-pointer'>Resend Code</span>
                        </div>
                        <div className='w-full border-1 border-[#E4E7E9] py-2 px-2'>
                            <input type='text' className='outline-none w-full h-full' />
                        </div>
                    </div>
                    <Link to={''}>
                        <div className='flex flex-col items-center pt-10'>
                            <div className='flex justify-center items-center w-3/12 text-white py-2 gap-2 bg-[#0070BC] rounded-md'>
                                <button>Verify me</button>
                                <span><FaArrowRight /></span>
                            </div>
                        </div>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default MobileVerification