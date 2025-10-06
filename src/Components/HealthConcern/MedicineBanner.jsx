import React from 'react'
import { FaArrowRight } from 'react-icons/fa'
import medicine from '../../assets/Home/Banner/medicine.png'

const MedicineBanner = () => {
  return (
    <div className='container '>
        <div className='vitamins_banner mt-20 rounded-md flex items-center justify-between p-5'>
            <div className='w-[650px] flex flex-col gap-3 p-5 vitamin_banner_left'>
                <h3 className='prompt'>Todays Hot Offer</h3>
                <h2 className='nnt text-5xl font-extrabold'>Unlock 50% Off on Essential Medicines!</h2>
                <p className='poppins '>Embrace wellness without breaking the bank! Enjoy a generous 25% discount on a wide range of vital medicines at our online pharmacy. Your health matters, and so does your budget.</p>
                <button className='poppins flex items-center gap-2 bg-[#0071BC] rounded-sm w-[240px] h-[45px] text-white justify-center'>Place An Order Now <FaArrowRight/></button>
            </div>
            <div className='w-[510px] h-[375px]'>
                <img src={medicine} className='w-full h-full object-contain'/>
            </div>
        </div>
        
    </div>
  )
}

export default MedicineBanner