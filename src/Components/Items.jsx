import React from 'react'

const Items = (props) => {
    return (
        <div className='w-[150px] h-[150px] group mt-5 cursor-pointer ayurveda_top_brands'>
            <img src={props.image} className='w-full h-full group-hover:scale-90' />
        </div>
    )
}

export default Items