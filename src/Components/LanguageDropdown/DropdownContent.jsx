import React from 'react'

const DropdownContent = () => {
    const dropdown_itm = ['English', 'Eng']
    return (
            dropdown_itm.map((item, index) => {
                return (<div key={index} className='color1'>
                    <span>{item}</span>
                </div>)
            })
    )
}

export default DropdownContent