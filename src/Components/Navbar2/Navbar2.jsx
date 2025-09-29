import React from 'react'
import logo from '../../assets/logo.png'
import './Navbar2.css'
import { IoCartOutline, IoReorderFourOutline } from 'react-icons/io5'
import { CiSearch } from 'react-icons/ci'
import { FaRegHeart } from 'react-icons/fa'
import { IoIosGitCompare } from 'react-icons/io'

const Navbar2 = () => {
  return (
    <div className='flex justify-between py-3 container text-[#184363]'>
      <div className='logo_image'>
        <img src={logo} />
      </div>
      <div className='flex items-center gap-3'>
        <div className='flex items-center font-bold text-base'>
          <button className='border-1 border-[#0071BC1A] rounded-full px-5 flex items-center gap-3 py-2'>
            <span><IoReorderFourOutline /></span>All Categories
          </button>
        </div>
        <div className='search-input relative'>
          <div className='w-[833px] h-[47px] border-[#0071BC1A] border-1 rounded-full flex items-center'>
            <input type='text' placeholder='What are you looking for?' className='border-0  px-5 outline-none rounded-full text-[#184363]' />
          </div>
          <span className='absolute top-0 flex items-center justify-center right-0 text-white rounded-r-[45px] w-[56px] h-[47px] bg-[#0070BC]'><CiSearch size={25} /></span>
        </div>
      </div>
      <div className='flex items-center gap-5'>
        <span>
          <IoIosGitCompare size={20} />
        </span>
        <span>
          <FaRegHeart size={18} />
        </span>
        <span>
          <IoCartOutline size={21} />
        </span>
      </div>
    </div>
  )
}

export default Navbar2