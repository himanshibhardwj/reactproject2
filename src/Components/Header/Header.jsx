import React from 'react'
import { heading } from '../../assets/data'

const Header = ({ title }) => {
  return (
    <div>
      <h1 className='heading_text nnt text-[32px] text-[#020A13] font-bold'>{title}</h1>
    </div>)
}

export default Header