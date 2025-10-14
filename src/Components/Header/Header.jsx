import React from 'react'
import { heading } from '../../assets/data'

const Header = ({ title }) => {
  return (
    <div>
      <h2 className='heading_text nnt text-[28px] 2xl:text-[35px] xl:text-[32px] md:text-[27px] lg:text-[24px] text-[#020A13] font-bold'>{title}</h2>
    </div>)
}

export default Header