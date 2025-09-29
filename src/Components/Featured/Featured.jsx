import React from 'react'
import { featured_Products, heading } from '../../assets/data'
import { FaShoppingBag, FaStar } from 'react-icons/fa'
import Header from '../Header/Header'
import ViewAll from './ViewAll'


const Featured = () => {
  return (
    <div className='mt-40 mb-5 '>

      <div className='container nnt'>
        <div className='mb-5 flex items-center justify-between'><Header title={heading[0].title} />
          <div><ViewAll /></div></div>
        <div className='grid grid-cols-6 text-center gap-5 cursor-pointer '>
          {featured_Products.map((item, index) => {
            return (
              <div key={index} className='group shadow-md bg-white flex flex-col items-center gap-5 relative drop-shadow rounded-2xl pt-10'>
                <div className=' w-[200px] h-[200px] flex items-center justify-center'>
                  <img src={item.image} className='' />
                </div>
                <div className='w-full h-[250px] flex flex-col items-center gap-2 p-3'>
                  <h1 className='text-base font-bold'>{item.name}</h1>
                  <p className='font-medium text-[#666666] flex items-center gap-1'>{item.deliver_time}<span className='text-[15px] text-[#000000] font-bold'>{item.time}</span></p>
                  <div>
                    <ul className='flex items-center gap-2 text-[#FEB92D]'>
                      <li><FaStar size={15} /></li>
                      <li><FaStar size={15} /></li>
                      <li><FaStar size={15} /></li>
                      <li><FaStar size={15} /></li>
                      <li><FaStar size={15} /></li>
                    </ul>
                    <span>{item.star_content}</span>
                  </div>
                  <div className='flex items-center gap-2'>
                    <span className='font-medium line-through'>₹{item.old_price}</span>
                    <span className='font-bold'>₹{item.new_price}</span>
                  </div>
                  <button className='opacity-0 group-hover:opacity-100 absolute bottom-0 text-white w-full h-[42px] bg-[#0071BC] flex items-center justify-center rounded-b-[12px] text-base gap-3 font-bold'>Add to Cart <span><FaShoppingBag /></span></button>
                  <span className='absolute top-5 w-[48px] h-[25px] left-5 text-white font-bold text-[10px] flex items-center justify-center bg-[#0070BC]'>-{item.discount}%</span>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </div>

  )
}

export default Featured