import React from 'react'
import './Hero.css'
import image_1 from '../../assets/Home/Hero_image/image_1.png'
import image_2 from '../../assets/Home/Hero_image/image_2.png'
import image_3 from '../../assets/Home/Hero_image/image_3.png'
import image_4 from '../../assets/Home/Hero_image/image_4.png'
import image_5 from '../../assets/Home/Hero_image/image_5.png'
import image_6 from '../../assets/Home/Hero_image/image_6.png'

import HeroBox from '../HeroBox/HeroBox'

const Hero = () => {
  return (
    <div className='hero_banner pt'>
      <div className='flex container_box  justify-between items-center flex-col 2xl:flex-row xl:flex-row lg:flex-row md:flex-col sm:flex-col'>
        <div className=' flex flex-col gap-3 justify-center w-full max-w-5/12 hero_left_box '>
          <h1 className='text-[20px] 2xl:text-[40px] xl:text-[36px] md:text-[35px] lg:text-[25px] font-bold text-[#0070BC]'>Your Prescription for Affordable Health Solutions!</h1>
          <p className='text-[15px] 2xl:text-[20px] xl:text-[19px] md:text-[18px] lg:text-[15px] text-[#565656]'>Elevate your health journey with exclusive discounts and unparalleled convenience. Your path to well-being starts here, where every purchase is a prescription for savings.</p>
          <div className='hero_button'>
            <button className=' py-2 text-[11px] 2xl:text-[19px] xl:text-[15px] md:text-[18px] lg:text-[13px] font-bold text-[#0070BC] bg-white rounded-full'>Buy it now </button>
          </div>
        </div>
        <div className='w-full max-w-5/12 image_hero'>
          <div className='flex items-end justify-center'>
            <div className='w-full'>
              <img src={image_1} className='w-full' />
            </div>
            <div className='w-full'>
              <img src={image_2} className='w-full' />
            </div>
            <div className='w-full'>
              <img src={image_3} className='w-full' />
            </div>
          </div>
          <div className='flex items-start justify-center'>
            <div className='w-full'>
              <img src={image_4} className='w-full' />
            </div>
            <div className='w-full'>
              <img src={image_5} className='w-full' />
            </div>
            <div className='w-full'>
              <img src={image_6} className='w-full' />
            </div>
          </div>
        </div>
      </div>
      <div className='flex justify-center'>
        <HeroBox />
      </div>
    </div>
  )
}

export default Hero