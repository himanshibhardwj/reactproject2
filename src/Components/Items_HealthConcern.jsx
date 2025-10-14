import React from 'react'

const Items_HealthConcern = () => {
    return (
        <div>
            <div className='flex items-center flex-col gap-3 mt-5 health_cncern2'>
                <div className='w-7/12 cursor-pointer group'>
                    <img src={item.image} className='w-full h-full object-contain group-hover:scale-110' />
                </div>
                <h3 className='text-center text-[15px] 2xl:text-[18px] xl:text-[17px] md:text-[18px] lg:text-[15px] font-bold text-[#020A13]'>{item.title}</h3>
            </div>
        </div>
    )
}

export default Items_HealthConcern