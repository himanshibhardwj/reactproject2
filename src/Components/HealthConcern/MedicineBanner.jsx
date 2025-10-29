import React from 'react'
import { FaArrowRight } from 'react-icons/fa'
import medicine from '../../assets/Home/Banner/medicine.png'
import { Link } from 'react-router-dom'

const MedicineBanner = () => {
  return (
    <div className='container_box '>
      <div className='vitamins_banner mt-20 rounded-md  p-5'>
        <div className='vitamin_bannr flex 2xl:flex-row xl:flex-row md:flex-row lg:flex-row sm:flex-col flex-col items-center justify-between'>
          <div className='w-8/12 flex flex-col gap-3 p-5 vitamin_banner_left'>
            <h3 className='prompt text-[15px] 2xl:text-[18px] xl:text-[17px] md:text-[18px] lg:text-[15px]'>Todays Hot Offer</h3>
            <h2 className='nnt text-[17px] 2xl:text-[27px] xl:text-[25px] md:text-[24px] lg:text-[24px] font-extrabold'>Unlock 50% Off on Essential Medicines!</h2>
            <p className='poppins text-[12px] 2xl:text-[18px] xl:text-[17px] md:text-[18px] lg:text-[15px] medicine_info'>Embrace wellness without breaking the bank! Enjoy a generous 25% discount on a wide range of vital medicines at our online pharmacy. Your health matters, and so does your budget.</p>
            <div className='w-6/12 '>
              <button className='cursor-pointer poppins text-[12px] 2xl:text-[20px] xl:text-[18px] md:text-[15px] lg:text-[15px] sm:text-[12px] w-full py-3 flex items-center gap-2 bg-[#0071BC] rounded-sm  text-white justify-center place_order_button'>Place An Order Now <FaArrowRight /></button>
            </div>
          </div>
          <div className='w-7/12 medicine_banner_image'>
            <Link><img src={medicine} className='w-full h-full object-contain' /></Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default MedicineBanner