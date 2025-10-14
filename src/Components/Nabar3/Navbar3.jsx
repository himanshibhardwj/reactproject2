import React, { useState } from 'react'
import logo from '../../assets/logo.png'
import { Link } from 'react-router-dom'

const Navbar3 = ({ openMenuNav }) => {
  const [activeBorder, setActiveBorder] = useState('Health Resource Center')
  const nav_itm = [
    {
      title: 'Health Resource Center'
    },
    {
      title: 'Winter Care Essentials'
    },
    {
      title: 'Vitamins & Nutrition'
    },
    {
      title: 'Nutritional Drinks'
    },
    {
      title: 'Sexual Wellness'
    },
    {
      title: 'Stomach Care'
    },
    {
      title: 'Fitness Supplements'
    },
    {
      title: 'Pain Relief'
    },
    {
      title: 'Healthy Snacks'
    }
  ]
  return (
    <>
      <div className='py-[18px] px-4 category_nav_1 bg-[#EDF4F6]'>
        <div className=' flex cat_nav_items gap-10  justify-center'>
          {nav_itm.map((item, index) => {
            return (
              <div key={index} onClick={()=>{setActiveBorder(item.title)}}>
                <div className={`cursor-pointer ${activeBorder === item.title ? 'text-[#0070BC]':'text-[#184363]'}`}>
                <h5 className={ `font-bold text-[15px] whitespace-nowrap }`}>{item.title}</h5>
                </div>
              </div>
            )
          })}
        </div>
      </div>
      {openMenuNav && (
        <div className='category_nav_2'>
          <div className='absolute top-0 left-0 category_nav flex gap-5 px-5 flex-col w-4/11 z-100 bg-gray-100 p-4'>
            <div className=' w-10/12'>
              <div className='w-full  flex items-center cursor-pointer w-full h-full '>
                <Link to={'/'}>
                  <img src={logo} className='w-full h-full' />
                </Link>
              </div>
            </div>
            <div className='w-full overflow-scroll h-[300px]'>
              {nav_itm.map((item, index) => {
                return (
                  <div key={index} className={'bg-indigo-200 w-full p-2  '}>
                    <div className={` ${activeBorder === item.title ? 'bg-red-500 text-white' : 'bg-white text-[#0070BC]'} `}>
                      <button onClick={() => { setActiveBorder(item.title) }} className={`w-full  font-bold text-[12px] 2xl:text-[15px] text-start py-2 px-2 xl:text-[14px] md:text-[11px] lg:text-[11px] cursor-pointer `}>{item.title} </button>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        </div>
      )}
    </>
  )
}

export default Navbar3