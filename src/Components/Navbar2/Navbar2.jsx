import React, { useState } from 'react'
import logo from '../../assets/logo.png'
import './Navbar2.css'
import { IoCartOutline, IoReorderFourOutline } from 'react-icons/io5'
import { CiSearch } from 'react-icons/ci'
import { FaRegHeart } from 'react-icons/fa'
import { IoIosGitCompare } from 'react-icons/io'
import { Link } from 'react-router-dom'

const Navbar2 = () => {

  return (
    <nav className='container pt'>
      <div className='flex gap-10 py-3 text-[#184363] '>
        <div className='w-[20%]'>
          <div className=' logo_image cursor-pointer w-[120px] h-[60px]'>
            <Link to={'/'}>
              <img src={logo} className='w-full h-full object-contain ' />
            </Link>
          </div>
        </div>
        <div className='flex items-center gap-3 w-[75%]'>
          <div className='flex w-[25%] items-center font-bold justify-center text-base h-[45px] border-1 border-[#0071BC1A] rounded-full'>
            <button className='all_cat_btn flex items-center justify-center gap-2 w-full h-full text-[15px] '>
              <IoReorderFourOutline size={20} />All Categories
            </button>
          </div>
          <div className='search-input relative'>
            <div className='w-[833px] h-[47px] border-[#0071BC1A] border-1 rounded-full flex search_input_box items-center'>
              <input type='text' placeholder='What are you looking for?' className='border-0 w-full px-5 outline-none rounded-full text-[#184363]' />
            </div>
            <span className='absolute top-0 flex items-center justify-center right-0 text-white rounded-r-[45px] w-[56px] h-[47px] bg-[#0070BC]'><CiSearch size={25} /></span>
          </div>
        </div>
        <div className='flex items-center gap-5 w-[10%] cart_section'>
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
    </nav>
  )
}

export default Navbar2