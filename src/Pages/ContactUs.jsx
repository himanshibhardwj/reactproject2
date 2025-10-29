import React from 'react'
import { FaPhoneAlt, FaUserCircle } from 'react-icons/fa'
import { FaLocationPin } from 'react-icons/fa6'
import user from '../assets/Home/Contactus/user.png'
import call from '../assets/Home/Contactus/call.png'
import location from '../assets/Home/Contactus/location.png'

const ContactUs = () => {
    return (
        <section className='pt container_box'>
            <h1 className='text-[#0070BC] text-[40px] font-bold text-center mt-3'>Get In Touch</h1>
            <div className='flex sm:flex-col 2xl:flex-row lg:flex-row md:flex-col xl:flex-row gap-2 bg-white shadow-md mt-10 p-5 rounded-[10px] flex-col'>
                <div className='w-1/2'>
                    <div className='flex flex-col gap-5'>
                        <h2 className='text-[#0F001A] 2xl:text-3xl xl:text-2xl md:text-xl lg:text-llg sm:text-sm font-bold'>Leave us a message</h2>
                        <form className='flex flex-col gap-3 contact_us_form'>
                            <div class="relative">
                                <input type="text" id="mobile_number" class=" 2xl:w-120 md:w-100 lg:w-80 xl:w-100 w-80 px-2 py-2 border-1 border-[#B4BEC8] text-base block px-2.5 pb-2 pt-4 rounded appearance-none dark:text-white outline-none  peer" placeholder="Enter Your phone " />
                                <label for="outlined_success" class="absolute text-base text-[#878787] duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white dark:bg-gray-900 px-2 peer-focus:px-2 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 start-1 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto">Your Mobile Number</label>
                            </div>
                            <div class="relative">
                                <input type="text" id="mobile_number" class=" 2xl:w-120 md:w-100 lg:w-80 xl:w-100 w-80 px-2 py-2 border-1 border-[#B4BEC8] text-base block px-2.5 pb-2 pt-4 rounded appearance-none dark:text-white outline-none  peer" placeholder="Enter Your Name" />
                                <label for="outlined_success" class="absolute text-base text-[#878787] duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white dark:bg-gray-900 px-2 peer-focus:px-2 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 start-1 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto">Enter Your Name</label>
                            </div>
                            <div className='border-1 border-[#B4BEC8] 2xl:w-120 md:w-100 lg:w-80 xl:w-100 w-80 px-2 py-2 '>
                                <textarea placeholder='Describe you requirement in detail' className='outline-none w-full' />
                            </div>
                            <div className='bg-[#0070BC] 2xl:w-120 md:w-100 lg:w-80 xl:w-100 w-80 py-2 '>
                                <button className='w-full h-full text-center text-white cursor-pointer'>Send Message</button>
                            </div>
                        </form>
                    </div>
                </div>
                <div className='w-1/3'>
                    <h2 className='text-[#0F001A] 2xl:text-3xl xl:text-2xl md:text-xl lg:text-llg sm:text-sm font-bold'>Contact Us</h2>
                    <p className='#0F001A 2xl:text-lg xl:text-lg md:text-md lg:text-base sm:text-sm'>Give us a call or drop by anytime, we endeavour to answer all enquiries within 24 hours on business days. We will be happy to answer your questions.</p>
                    <div className='flex flex-col gap-3'>
                        <div className='flex gap-3 mt-3'>
                            <div>
                                <img src={user}/>
                            </div>
                            <div>
                                <p className='text-[#0F001A] 2xl:text-lg xl:text-lg md:text-md lg:text-base sm:text-sm'>Contact Person</p>
                                <p className='text-[#0F001A] font-bold'>Kunal Kumar (Co Founder)</p>
                            </div>
                        </div>

                        <div className='flex gap-3'>
                            <div className='w-full max-w-[30px]'>
                                <img src={location} className='w-full'/>
                            </div>
                            <div>
                                <p className='text-[#0F001A] 2xl:text-lg xl:text-lg md:text-md lg:text-base sm:text-sm'>Address</p>
                                <p className='text-[#0F001A] font-bold 2xl:text-lg xl:text-lg md:text-md lg:text-base sm:text-sm'>Alphonic India Private Limited
                                    G/F Gali No -1,413, Sarpanch,Ka, Bara Madawali Fazalpur,Near, Main, Road East Delhi, Laxmi Nagar, New Delhi - 110092, Delhi, India
                                    Get Directions</p>
                            </div>
                        </div>
                        <div className='flex gap-3'>
                            <div className='w-full max-w-[30px]'>
                                <img src={call}/>
                            </div>
                            <div>
                                <p className='text-[#0F001A] 2xl:text-lg xl:text-lg md:text-md lg:text-base sm:text-sm'>Call Us</p>
                                <p className='text-[#0F001A] font-bold 2xl:text-lg xl:text-lg md:text-md lg:text-base sm:text-sm'>07942790587</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default ContactUs