import React from 'react'
import hero_image from '../../assets/Home/Hero_image.png'
import './Hero.css'
import HeroBox from '../HeroBox/HeroBox'

const Hero = () => {
  return (
    <div className='hero_container pt'>
      <div className='flex hero_banner gap-20'>
        <div className='banner_content'>
          <h3 className='text-[42px] font-bold text-[#0070BC]'>Your Prescription for Affordable Health Solutions!</h3>
          <p className='text-xl text-[#565656]'>Elevate your health journey with exclusive discounts and unparalleled convenience. Your path to well-being starts here, where every purchase is a prescription for savings.</p>
          <button className='text-[15px] font-bold text-[#0070BC] bg-white rounded-full w-[150px] h-[45px]'>Buy it now </button>
        </div>
        <div className='hero_img'>
          <img src={hero_image} />
        </div>
      </div>
      <div className='box'>
        <HeroBox />
      </div>
    </div>
  )
}

export default Hero