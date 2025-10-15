import React from 'react'
import Vitamin from '../../assets/Home/Banner/Vitamin.png'
import Capsule from '../../assets/Home/Banner/Capsule.png'
import { FaGreaterThan } from 'react-icons/fa'

const Vitamins_Supplements = () => {
  return (
    <div className='container_box'>
        <div className='vitamins_banner mt-20 pt bg-[#A8E0F5] flex 2xl:flex-row md:flex-ro xl:flex-row lg:flex-row flex-col items-center justify-center rounded-md'>
            <div className='w-7/12 vitamin_image p-10'>
                <img src={Vitamin} className='w-full h-full object-contain'/>
            </div>
            <div className='flex flex-col items-center supplement_content gap-2'>
                <h3 className='text-xl text-[#184363]'>Pyridoxine Vitamin B6</h3>
                <h2 className='text-[32px] font-bold text-center text-[#184363]'>Vitamins & Supplements</h2>
                <button className='text-white bg-[#39CB74] w-[110px] h-[40px] rounded-[72px] flex items-center gap-2 justify-center'>View more <FaGreaterThan size={11}/></button>
            </div>
            <div className='w-7/12 capsule_image p-10'>
                <img src={Capsule} className='w-full h-full object-contain'/>
            </div>
        </div>
    </div>
  )
}

export default Vitamins_Supplements