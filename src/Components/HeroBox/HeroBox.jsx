import React from 'react'
import { BsShieldLock } from 'react-icons/bs'
import { TbLockCheck } from 'react-icons/tb'
import { FaBox } from 'react-icons/fa'

const HeroBox = () => {
  return (
    <div className='flex items-center justify-center box gap-10 shadow-lg drop-shadow '>
        <div className='flex items-center gap-2'>
            <div>
                <span className='w-[76px] bg-[#0070BC] h-[76px] rounded-full block flex items-center justify-center text-white'><BsShieldLock size={30}/></span>
            </div>
            <div>
                <h3 className='text-2xl font-bold nnt'>Reliable</h3>
                <p className='text-xl text-[#565656]'>All Products are 100% genuine and reliable</p>
            </div>
        </div>
        <div className='flex items-center gap-2'>
            <div>
                <span className='w-[76px] bg-[#0070BC] h-[76px] rounded-full block flex items-center justify-center text-white'><TbLockCheck size={30}/></span>
            </div>
            <div>
                <h3 className='text-2xl font-bold nnt'>Secure</h3>
                <p className='text-xl text-[#565656]'>All Products are 100% genuine and reliable</p>
            </div>
        </div>
        <div className='flex items-center gap-2'>
            <div>
                <span className='w-[76px] bg-[#0070BC] h-[76px] rounded-full block flex items-center justify-center text-white'><FaBox size={30}/></span>
            </div>
            <div>
                <h3 className='text-2xl font-bold nnt text-[#020A13]'>Affordable</h3>
                <p className='text-xl text-[#565656]'>All Products are 100% genuine and reliable</p>
            </div>
        </div>
    </div>
  )
}

export default HeroBox