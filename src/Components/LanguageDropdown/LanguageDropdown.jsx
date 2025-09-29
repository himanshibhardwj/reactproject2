import React, { useState } from 'react'
import DropdownContent from './DropdownContent'
import './LanguageDropdown.css'
import { IoChevronDown, IoChevronUp } from 'react-icons/io5';

const LanguageDropdown = () => {
    const [open, setOpen] = useState(false);

    const handleDropdown = () => {
        setOpen(open => !open)
    }

    return (
        <div>
            <button onClick={handleDropdown} className={`flex items-center gap-1.5 relative font-bold cursor-pointer ${open ? 'button-open' : null}`}>
                EN
                <span> {open ? <IoChevronUp size={10} /> : <IoChevronDown size={10} />} </span>
            </button>
            <div className={`absolute opacity-0 bg-white w-[200px] z-10 px-5 py-2 rounded-md shadow-md top-15 ${open ? 'show' : null}`} >
                <DropdownContent />
            </div>
        </div>
    )
}

export default LanguageDropdown