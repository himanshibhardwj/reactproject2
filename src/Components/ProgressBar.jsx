import React from 'react'

const ProgressBar = () => {
    return (
        <div className='flex flex-col gap-3'>
            <div className='flex items-center gap-5'>
                <span className='text-[#020A13] font-bold'>5</span>
                <progress value={50} max={100} style={{width:'100%'}} />
                <span className='text-[#666666] font-bold'>50%</span>
            </div>
            <div className='flex items-center gap-5'>
                <span className='text-[#020A13] font-bold'>4</span>
                <progress value={40} max={100} style={{width:'100%'}} />
                <span className='text-[#666666] font-bold'>40%</span>
            </div>
            <div className='flex items-center gap-5'>
                <span className='text-[#020A13] font-bold'>3</span>
                <progress value={30} max={100} style={{width:'100%'}} />
                <span className='text-[#666666] font-bold'>30%</span>
            </div>
            <div className='flex items-center gap-5'>
                <span className='text-[#020A13] font-bold'>2</span>
                <progress value={20} max={100} style={{width:'100%'}} />
                <span className='text-[#666666] font-bold'>20%</span>
            </div>
            <div className='flex items-center gap-5'>
                <span className='text-[#020A13] font-bold'>1</span>
                <progress value={10} max={100} style={{width:'100%'}} />
                <span className='text-[#666666] font-bold'>10%</span>
            </div>
        </div>
    )
}

export default ProgressBar