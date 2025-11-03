import React, { useState } from 'react'
import { FiPhoneCall } from 'react-icons/fi'
import { FaRegUser } from 'react-icons/fa'
import { IoLocationOutline } from 'react-icons/io5'
import logo from '../../assets/logo.png'
import { IoCartOutline, IoReorderFourOutline } from 'react-icons/io5'
import { CiHeart, CiSearch } from 'react-icons/ci'
import { FaRegHeart } from 'react-icons/fa'
import { IoIosGitCompare } from 'react-icons/io'
import { Link } from 'react-router-dom'
import { RxCross1, RxHamburgerMenu } from 'react-icons/rx'
import Navbar3 from '../Nabar3/Navbar3'
import AllCategoriesNav from './AllCategoriesNav'
import { FaChevronDown } from 'react-icons/fa6'



const Navbar = () => {

  const [openMenu, setOpenMenu] = useState(false);
  const [openCategories, setOpenCategories] = useState(false);
  const [openLanguage, setOpenLanguage] = useState(false);

  return (
    <section className='pt relative'>
      <nav>
        <div className='border-b border-b-[#EAEAEA]'>
          <div className='container_box'>
            <div className='box_container'>
              <div className=' flex md:flex-row flex-col  justify-between items-center text-[#56778F] font-bold p-3  lg:p-1 '>
                <div className='flex items-center justify-center gap-10 location_sales'>
                  <div className='flex items-center gap-3'>
                    <span className='icon_clr1'>
                      <IoLocationOutline size={16} />
                    </span>
                    <span className='text-[12px] 2xl:text-[14px] xl:text-[13px] md:text-[12px] lg:text-[13px] font-normal location'>Laxmi Nagar, New Delhi - 110092, Delhi, India</span>
                  </div>
                  <div className='flex items-center gap-3 py-3'>
                    <span className='icon_clr1'>
                      <FiPhoneCall size={16} />
                    </span>
                    <span className='font-normal text-[12px] 2xl:text-[14px] xl:text-[13px] md:text-[12px] lg:text-[13px]'>Sales & Service Support / 07942790587</span>
                  </div>
                </div>
                <div className='flex items-center account_user gap-4'>
                  <div className='relative'>
                    <div className='flex gap-2 items-center justify-center cursor-pointer' onClick={() => { setOpenLanguage(!openLanguage) }}>
                      <span className='text-[12px] 2xl:text-[14px] xl:text-[13px] md:text-[12px] lg:text-[13px]'>EN</span>
                      <span><FaChevronDown size={12} /></span>
                    </div>
                    {openLanguage && (
                      <div className='absolute top-10 p-2 border-1 rounded-md left-0 z-50 bg-white'>
                        <ul>
                          <li>English</li>
                          <li>Hindi</li>
                        </ul>
                      </div>
                    )
                    }
                  </div>
                  <div>
                    <Link to={'/loginsignup'}>Login/Register</Link>
                  </div>
                  <div className='flex  items-center gap-2 py-3'>
                    <span className='icon_clr1'>
                      <Link to={'/dashboard'}><FaRegUser size={17} /></Link>
                    </span>
                    <span className='text-[12px] my_account 2xl:text-[14px] xl:text-[13px] md:text-[12px] lg:text-[13px] font-bold'> <Link to={'/dashboard'}>My account</Link></span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className='container_box'>
            <div className='py-5 text-[#184363]'>
              <div className='flex items-center justify-between search_nav 2xl:justify-between xl:justify-between md:gap-3 lg:gap-5'>
                <div className=' w-2/12 logo_nav'>
                  <div className='w-full  flex items-center cursor-pointer w-full h-full '>
                    <Link to={'/'}>
                      <img src={logo} className='w-full h-full' />
                    </Link>
                  </div>
                </div>
                <div className='w-full flex items-center justify-center 2xl:gap-3 lg:gap-3 md:gap-3 gap-4 '>
                  <div className='flex w-[156px] all_category_btn items-center font-bold justify-center text-base border-1 border-[#0071BC1A] rounded-full relative'>

                    <button className='cursor-pointer text-[12px] 2xl:text-[15px] xl:text-[14px] md:text-[11px] all_category_button lg:text-[11px] w-full flex items-center justify-center gap-2 whitespace-nowrap py-3' onClick={() => setOpenCategories(!openCategories)}>
                      <IoReorderFourOutline size={20} />All Categories
                    </button>
                    <AllCategoriesNav openCat={openCategories} />
                  </div>
                  <div className=' relative w-7/12 search_nav'>
                    <div className='w-full border-[#0071BC1A] border-1 rounded-full py-3 flex items-center nav_search'>
                      <input type='text' placeholder='What are you looking for?' className='border-0 w-full px-5 outline-none w-full rounded-full text-sm' />
                    </div>
                    <span className='absolute py-1.5 top-0 search_button flex items-center justify-center right-0 text-white rounded-r-[45px] h-full w-1/12 bg-[#0070BC]'><CiSearch size={25} /></span>
                  </div>
                </div>

                <div className='relative flex items-center justify-between icons_nav'>
                  <div className='flex items-center justify-between gap-5 '>
                    <span className='compare-icon'>
                      <Link><IoIosGitCompare size={30} /></Link>
                    </span>
                    <span className='wishlist_icon'>
                      <Link to={'/wishlist'}><CiHeart size={34} /></Link>
                    </span>
                    <span className='cart_icon'>
                      <Link to={'/cart'}><IoCartOutline size={32} /></Link>
                    </span>
                    <div className='flex items-center justify-center hamburger_menu'>
                      <button className='cursor-pointer' onClick={() => { setOpenMenu(!openMenu) }} >
                        <RxHamburgerMenu />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div>
            <Navbar3 openMenuNav={openMenu} />
          </div>
        </div>
      </nav>
    </section>
  )
}

export default Navbar