import React from 'react'
import { FaStar } from 'react-icons/fa'
import ProgressBar from './ProgressBar'
import ReviewContent from './ReviewContent'

const Review = () => {
    return (
        <div className='nnt'>
            <div className='flex justify-between 2xl:justify-between xl:justify-between md:justify-between lg:justify-between 2xl:flex-row lg:flex-row md:flex-row xl:flex-row flex-col'>
                <div className='2xl:w-[40%] xl:w-[40%] md:w-[40%] lg:w-[40%] w-full'>
                    <div className='flex items-center 2xl:flex-row lg:flex-row md:flex-row '>
                        <h3 className='text-[#020A13] text-[46px] font-bold italic 2xl:text-[90px] xl:text-[60px] lg:text-[50px] md:text-[40px]'>4.0 </h3>
                        <span className='text-[#FEB92D]'><FaStar size={30} /></span>
                    </div>
                    <div>
                        <ProgressBar />
                    </div>
                </div>
                <div className='2xl:w-[45%] xl:w-[45%] md:w-[45%] lg:w-[45%] w-full '>
                    <h2 className='font-bold 2xl:text-[18px] xl:text-[15px] lg:text-[13px] md:text-[12px]'>All Reviews (2)</h2>
                    <div>
                        <ReviewContent />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Review