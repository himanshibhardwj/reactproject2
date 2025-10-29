import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { prodct_details_tabs_content } from '../assets/data';
import ProductDetailsTabContent from './ProductDetailsTabContent';

const ProductDetailsDisplay = () => {
  const [isActiveTab, setIsActiveTab] = useState(0);
  
  return (
    <div className='border-1 border-[#E4E7E9] tab_maincntner py-3 px-4'>
      <div className=' flex items-center tabs_container 2xl:gap-10 lg:gap-8 md:gap-7 xl:gap-6 '>
        {prodct_details_tabs_content.map((item, index) => {
          return(<div key={index} className={` py-[12px] flex tab_1 gap-4 text-[20px] font-medium  cursor-pointer border-b-2  ${isActiveTab === item.index ? 'text-[#191C1F] border-b-2 border-[#0071BC]':'text-[#5F6C72] border-white '}`} onClick={() => setIsActiveTab(index)}>
            <button className='w-full h-full uppercase whitespace-nowrap text-[14px] text-[#5F6C72]'><Link>{item.tab}</Link></button>
          </div>)
        })}
      </div>
      <ProductDetailsTabContent isActiveTab={isActiveTab}/>
    </div>
  )
}

export default ProductDetailsDisplay