import React from 'react'
import { FaPhoneAlt, FaUserCircle } from 'react-icons/fa'
import { FaLocationPin } from 'react-icons/fa6'

const ContactUs = () => {
    return (
        <section className='pt container_box'>
            <h1 className='text-[#0070BC] text-[40px] font-bold text-center'>Get In Touch</h1>
            <div className='flex sm:flex-col 2xl:flex-row lg:flex-row md:flex-col xl:flex-row gap-2 bg-white shadow-md mt-10 p-5 rounded-[10px] flex-col'>
                <div className='w-1/2'>
                    <div className='flex flex-col gap-5'>
                        <h2 className='text-[#0F001A] 2xl:text-3xl xl:text-2xl md:text-xl lg:text-llg sm:text-sm font-bold'>Leave us a message</h2>
                        <form className='flex flex-col gap-3 contact_us_form'>
                            <div className='relative'>
                                <div className='2xl:w-120 md:w-100 lg:w-80 xl:w-100 w-80 px-2 py-2 border-1 border-[#B4BEC8]'>
                                    <input type="text" name="number" className='outline-none' placeholder='Enter Your Mobile Number' />
                                </div>
                                <span className='bg-white text-[#0F001A] absolute -top-2 text-[12px] left-2'>Your Mobile Number</span>
                            </div>
                            <div className='2xl:w-120 md:w-100 lg:w-80 xl:w-100 w-80 px-2 py-2 border-1 border-[#B4BEC8]'>
                                <input type='name' placeholder='Enter Your Name' className='outline-none' />
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
                    <p className='#0F001A 2xl:text-xl xl:text-lg md:text-md lg:text-base sm:text-sm'>Give us a call or drop by anytime, we endeavour to answer all enquiries within 24 hours on business days. We will be happy to answer your questions.</p>
                    <div className='flex flex-col gap-3'>
                    <div className='flex gap-3 mt-3'>
                        <div><span className='text-[#0070BC]'><FaUserCircle size={30} /></span></div>
                        <div>
                            <p>Contact Person</p>
                            <p className='text-[#0F001A] font-bold'>Kunal Kumar (Co Founder)</p>
                        </div>
                    </div>
                    
                    <div className='flex gap-3'>
                        <div><span className='text-[#0070BC]'><FaLocationPin size={20} /></span></div>
                        <div>
                            <p className='text-[#0F001A] 2xl:text-lg xl:text-lg md:text-md lg:text-base sm:text-sm'>Address</p>
                            <p className='text-[#0F001A] font-bold 2xl:text-lg xl:text-lg md:text-md lg:text-base sm:text-sm'>Alphonic India Private Limited
                                G/F Gali No -1,413, Sarpanch,Ka, Bara Madawali Fazalpur,Near, Main, Road East Delhi, Laxmi Nagar, New Delhi - 110092, Delhi, India
                                Get Directions</p>
                        </div>
                    </div>
                    <div className='flex gap-3'>
                        <div><span className='text-[#0070BC]'><FaPhoneAlt size={20}/></span></div>
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