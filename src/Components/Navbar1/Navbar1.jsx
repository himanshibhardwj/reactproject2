import React from 'react'
import { FiPhoneCall } from 'react-icons/fi'
import LanguageDropdown from '../LanguageDropdown/LanguageDropdown'
import { FaRegUser } from 'react-icons/fa'
import './Navbar1.css'
import { IoLocationOutline } from 'react-icons/io5'
import { Link } from 'react-router-dom'

const Navbar1 = () => {
  return (
    <div className='border-b relative'>
      <div className=' flex justify-between items-center text-[#56778F] font-bold container '>
        <div className='flex items-center gap-30'>
          <div className='flex items-center gap-3'>
            <span className='icon_clr1'>
              <IoLocationOutline size={16} />
            </span>
            <span className='text-sm color1'>Laxmi Nagar, New Delhi - 110092, Delhi, India</span>
          </div>
          <div className='flex items-center gap-3 py-3'>
            <span className='icon_clr1'>
              <FiPhoneCall size={16} />
            </span>
            <span className='text-sm color1'>Sales & Service Support / 07942790587</span>
          </div>
        </div>
        <div className='flex items-center gap-8'>
          <div className='flex items-center gap-2 py-3'>
            <span className='icon_clr1'>
              <FaRegUser size={16} />
            </span>
            <span className='text-sm font-bold'> <Link to='/signup'>My account</Link></span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Navbar1