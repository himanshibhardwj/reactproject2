import React, { useState } from 'react'
import { FaMinus, FaPlus } from 'react-icons/fa6'

const IncreDecre = () => {
    const [count, setCount] = useState(1)

    const IncreItem = () => {
        setCount(prev => prev + 1)
    }

    const DecreItem = () => {
        if (count > 1) setCount(prev => prev - 1);
    }
    return (
        <div className='w-[164px] border-2 border-[#E4E7E9] flex justify-center gap-5 items-center poppins text-[#4B5966] py-2 rounded-sm plus_minus'>
            <button className='w-[25px] h-[25px] cursor-pointer flex items-center justify-center minus_item' onClick={
                DecreItem
            }><FaMinus size={17} color='#191C1F' /></button>
            <span className='w-[25px] h-[25px] text-[16px] flex items-center justify-center'>{count}</span>
            <button className='w-[25px] h-[25px] text-[20px] cursor-pointer flex items-center justify-center plus_item' onClick={IncreItem}><FaPlus size={17} color='#191C1F' /></button>
        </div>
    )
}

export default IncreDecre