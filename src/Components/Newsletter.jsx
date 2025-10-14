import React from 'react'
import Newsletter_image from '../assets/Newsletter_image.png'
import { IoIosSend } from 'react-icons/io'

const Newsletter = () => {
  return (
    <div className='pt bg-[#0070BC1A] p-5'>
      <div className='container_box '>
        <div className='flex justify-between'>
          <div className='w-full max-w-4/12'>
            <img src={Newsletter_image} className='w-full' />
          </div>
          <div className='flex flex-col justify-center gap-3 w-full max-w-6/12'>
            <h3 className='text-[#184363] text-[32px] font-bold'>Join Our Newsletter</h3>
            <span className='text-[#232323] text-[16px]'>Signup to get the latest offers and news and stay updated</span>
            <div className=' relative search_nav mt-3'>
              <div className='w-full border-[#0071BC1A] bg-white border-1 rounded-full py-3 flex items-center nav_search'>
                <input type='text' placeholder='Email address' className='border-0 w-full px-5 outline-none w-full rounded-full text-[16px] text-[#56778F]  /' />
              </div>
              <span className='absolute py-1.5 top-0 flex items-center justify-center right-0 text-white rounded-r-[45px] h-full w-2/12 bg-[#0070BC] font-bold '><IoIosSend size={20} />Subscribe</span>
            </div>
             <div className='flex gap-4'>
                <input type='checkbox' className=''/>
                <p>I accept terms and conditions & privacy policy</p>
              </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Newsletter