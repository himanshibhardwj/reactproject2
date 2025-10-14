import React from 'react'

const ItemsSlider = (props) => {
  return (
    
    <div className='flex gap-4 2xl:flex-row lg:flex-row md:flex-row flex-col'>
      <div><span className='w-[70px] h-[70px] rounded-full flex items-center justify-center bg-[#777777]'><FaUser size={30} style={{ color: "white" }} /></span></div>
      <div className='flex flex-col gap-2 '>
        <h3 className='text-[#020A13] font-bold 2xl:text-[18px] xl:text-[15px] lg:text-[13px] md:text-[12px]'>{props.name}</h3>
        <div className='flex gap-3 2xl:flex-row xl:flex-row lg:flex-row md:flex-row flex-col'>
          <ul className='flex gap-2'>
            <li><FaStar style={{ color: '#FEB92D' }} /></li>
            <li><FaStar style={{ color: '#FEB92D' }} /></li>
            <li><FaStar style={{ color: '#FEB92D' }} /></li>
            <li><FaStar style={{ color: '#CCCCCC' }} /></li>
            <li><FaStar style={{ color: '#CCCCCC' }} /></li>
          </ul>
          <div className='flex gap-3 2xl:flex-row lg:flex-row md:flex-col xl:flex-row flex-col'>
            <span className='2xl:text-[18px] xl:text-[15px] lg:text-[13px] md:text-[12px]'>{props.date_review}</span>
            <span className='2xl:text-[18px] xl:text-[15px] lg:text-[13px] md:text-[12px]'>{props.time_review}</span>
          </div>
        </div>
        <p className='2xl:text-[18px] xl:text-[15px] lg:text-[13px] md:text-[12px]'>{props.info}</p>
      </div>
    </div>
  )
}

export default ItemsSlider