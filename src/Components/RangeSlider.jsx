import React from 'react'

const RangeSlider = () => {
  return (
    <div className='range_price relative  '>
    <input type="range" id="min" min="0" max="100" value="0" className=' range_input'/>
    <input type="range" className='absolute top-0 left-0 range_input' id="max" min="0" max="100" value="100"/>
    </div>
  )
}

export default RangeSlider