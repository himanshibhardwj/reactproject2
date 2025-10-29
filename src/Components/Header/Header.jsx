import React from 'react'
import { heading } from '../../assets/data'

const Header = ({ title }) => {
  return (
    <div>
      <h2 className='heading_text nnt text-[30px] text-[#020A13] font-bold'>{title}</h2>
    </div>)
}

export default Header