import React from 'react'
import { BsShieldLock } from 'react-icons/bs'
import { TbLockCheck } from 'react-icons/tb'
import { FaBox } from 'react-icons/fa'

const HeroBox = () => {
    return (
        <div className='box flex bg-white  w-9/12 p-4 rounded-md items-center justify-center box gap-10 shadow-lg drop-shadow -mb-[60px]'>
            <div className='flex items-center gap-2'>
                <div>
                    <span className='w-[76px] bg-[#0070BC] h-[76px] box_1 rounded-full block flex items-center justify-center text-white'><BsShieldLock size={30} /></span>
                </div>
                <div className='home_box_1'>
                    <h3 className='font-bold nnt text-2xl text-[#020A13]'>Reliable</h3>
                    <p className='text-[#565656] text-xl'>All Products are 100% genuine and reliable</p>
                </div>
            </div>
            <div className='flex items-center gap-2'>
                <div>
                    <span className='w-[76px] bg-[#0070BC] h-[76px] box_1 rounded-full block flex items-center justify-center text-white'><TbLockCheck size={30} /></span>
                </div>
                <div className='home_box_1'>
                    <h3 className='font-bold nnt text-2xl text-[#020A13]'>Secure</h3>
                    <p className='text-[#565656] text-xl'>All Products are 100% genuine and reliable</p>
                </div>
            </div>
            <div className='flex items-center gap-2'>
                <div>
                    <span className='w-[76px] bg-[#0070BC] h-[76px] box_1 rounded-full block flex items-center justify-center text-white'><FaBox size={30} /></span>
                </div>
                <div className='home_box_1'>
                    <h3 className='font-bold text-2xl nnt text-[#020A13]'>Affordable</h3>
                    <p className='text-[#565656] text-xl'>All Products are 100% genuine and reliable</p>
                </div>
            </div>
        </div>
    )
}

export default HeroBox