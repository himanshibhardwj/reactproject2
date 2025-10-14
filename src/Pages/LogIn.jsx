import React from 'react'
import Login from '../assets/Login.png'
import { FaArrowRight, FaChevronDown } from 'react-icons/fa'
import { Link } from 'react-router-dom'

const LogIn = () => {
    return (
        <section className='container_box public_sans'>
            <div className='flex justify-center'>
                <div className='w-9/12'>
                    <div className='shadow-md mt-20 p-10 flex justify-between'>
                        <div>
                            <img src={Login} />
                        </div>
                        <div className='flex-col flex gap-4 w-2/5'>
                            <h2 className='2xl:text-xl md:text-md lg:text-base xl:text-xl sm:text-sm text-[#191C1F] font-bold text-center'>Login to your Mobile Number</h2>
                            <p className='text-[#5F6C72] text-center'>We will send you the 4 digit verification code</p>
                            <div className='flex flex-col gap-3'>
                                <p>Enter Mobile Number</p>
                                <div className='flex gap-5'>
                                    <div className='flex items-center gap-2 w-2/12 border-1 border-[#D8E0F0] p-3 justify-center rounded-md'>
                                        <span>+91</span>
                                        <span><FaChevronDown /></span>
                                    </div>
                                    <div className='w-10/12 border-1 border-[#D8E0F0] py-2 px-3 rounded-md'>
                                        <input type='text' className='w-full h-full outline-none' placeholder='345 567-23-56' />
                                    </div>
                                </div>
                                <Link to={'/mobileverification'}>
                                <div className='flex justify-center pt-20 cursor-pointer'>
                                    <div className='flex w-6/12 py-2 justify-center text-white items-center bg-[#0070BC] gap-2 rounded-md'>
                                        <button className='cursor-pointer'>GENERATE OTP</button>
                                        <span><FaArrowRight /></span>
                                    </div>
                                </div>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default LogIn