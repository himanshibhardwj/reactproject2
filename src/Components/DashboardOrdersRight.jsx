import React from 'react'
import proteinX from '../assets/Home/Similar_Products/proteinX_1.png'

const DashboardOrdersRight = () => {
  return (
    <div>
      <div className='flex gap-5 mt-4 border-1 rounded border-[#D2D2D2]'>
        <div className='w-full max-w-[20%] h-full'>
          <img src={proteinX} className='w-full' />
        </div>
        <div className='w-6/12 flex flex-col justify-center gap-2 mt-2 mb-2'>
          <p className='text-[15px] text-[#191C1F] font-semibold'>Protinex High Quality Protein | Nutritional Drink for Immunity & Strength</p>
          <ul className='flex flex-wrap gap-2'>
            <li className='w-5/12 text-sm font-semibold'>Delivered on :</li>
            <li className='w-5/12 text-sm '>9/29/2025</li>
            <li className='w-5/12 text-sm font-semibold'>Status :</li>
            <li className='w-5/12 text-sm'>received</li>
            <li className='w-5/12 text-sm font-semibold'>Order ID</li>
            <li className='w-5/12 text-sm '>56</li>
            <li className='w-5/12 text-sm font-semibold'>Quantity</li>
            <li className='w-5/12 text-sm '>11</li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default DashboardOrdersRight