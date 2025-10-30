import React from 'react'
import { dashboard_button } from '../assets/data'

const DashboardRightButton = () => {
  return (
    <div className='grid grid-cols-2 mt-10 gap-10 roboto'>
      {dashboard_button.slice(0, 4).map((item, index) => {
        return (
          <div className='flex w-full shadow-md justify-between items-center px-3 py-4' key={index} >
            <div>
              <img src={item.btn_img} />
            </div>
            <div className='w-8/12'>
              <p className='text-sm text-[#475156]'>{item.order_txt}</p>
              <span className='font-semibold text-xl'>{item.order_num}</span>
            </div>
          </div>
        )
      })}
    </div>
  )
}

export default DashboardRightButton