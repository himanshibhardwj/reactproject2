import React from 'react'

const Items = (props) => {
    return (
        <div className='flex flex-col gap-2 items-center justify-center'>
            <div className='w-8/12  group mt-5 cursor-pointer ayurveda_top_brands'>
                <img src={props.image} className='w-full h-full group-hover:scale-90' />
            </div>
            <h2 className='text-xl text-center concern_title font-bold'>{props.title}</h2>
        </div>
    )
}

export default Items