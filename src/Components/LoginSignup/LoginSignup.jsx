import React, { useState } from 'react'
import { FaArrowRight } from 'react-icons/fa'
import { Link } from 'react-router-dom'

const LoginSignup = () => {
    const [isLogin, setIsLogin] = useState(0)
    return (
        <div className='mt-20 flex justify-center'>
            <div className='shadow-md w-[50%]  justify-center items-center drop-shadow-md'>
                <div className=''>
                    <div className='flex'>
                        <div className={`w-2/4 text-center text-lg  py-2 ${isLogin === 0 ? 'text-[#191C1F] border-b-2 border-[#0070BC]' : 'text-[#77878F]'}`} onClick={() => { setIsLogin(0) }}>
                            <button className='cursor-pointer'>Log In</button>
                        </div>
                        <div className={`w-2/4 text-center text-lg py-2 ${isLogin === 1 ? 'text-[#191C1F] border-b-2 border-[#0070BC]' : 'text-[#77878F]'}`} onClick={() => { setIsLogin(1) }}>
                            <button className='cursor-pointer'>Sign Up</button>
                        </div>
                    </div>

                    {
                        isLogin === 0 && (
                            <div className='flex flex-col gap-5 p-5'>
                                <div className='flex flex-col gap-3'>
                                    <label>Enter Mobile Number</label>
                                    <div className='w-full border border-[#E4E7E9] rounded-md'>
                                        <input type='text' className='outline-none py-2 px-2' />
                                    </div>
                                    <div className='flex justify-end'>
                                        <p>Already have an Account? <Link to={'/loginsignup'}><span className='text-[#2DA5F3]'>Sign Up</span></Link></p>
                                    </div>
                                </div>
                                <div className='flex justify-center'>
                                    <div className='flex justify-center items-center gap-3 bg-[#0070BC] text-white w-25 py-2 rounded-md'>
                                        <button>Sign Up</button>
                                        <span><FaArrowRight /></span>
                                    </div>
                                </div>
                            </div>
                        )
                    }


                    {
                        isLogin === 1 && (
                            <div className='flex flex-col gap-5 p-5'>
                                <div className='flex flex-col gap-3'>
                                    <label>Enter Mobile Number</label>
                                    <div className='w-full border border-[#E4E7E9] rounded-md'>
                                        <input type='text' className='outline-none py-2 px-2' />
                                    </div>
                                    <div className='flex justify-end'>
                                        <p>Already have an Account? <Link to={'/login'}><span className='text-[#2DA5F3]'>Log In</span></Link></p>
                                    </div>
                                </div>
                                <div className='flex justify-center'>
                                    <div className='flex justify-center items-center gap-3 bg-[#0070BC] text-white w-25 py-2 rounded-md'>
                                        <button>Log in</button>
                                        <span><FaArrowRight /></span>
                                    </div>
                                </div>
                            </div>
                        )
                    }
                </div>

            </div>
        </div>
    )
}

export default LoginSignup