import React, { useState } from 'react'

const Flvr_PacketSize = () => {
    const [activeBtn, setActiveBtn] = useState(null);

    const [activeIceCrm, setActiveIceCrm] = useState(null);
    return (
        <div className='mt-5'>
            <div className='flex flex-col gap-2'>
                <h4 className='text-[#191C1F] text-[14px]'>Flavour (2)</h4>
                <div className='flex gap-3'>
                    <button className={`w-[140px] py-2 border-1 border-[#E4E7E9] crmy_vnla_btn rounded-sm cursor-pointer ${activeIceCrm === 1 ? 'bg-[#E0EEF9] text-[#0071BC]' : 'bg-white text-[#475156]'} font-semibold text-[14px]`} onClick={() => { setActiveIceCrm(1) }}>
                        Creamy Vanilla
                    </button>
                    <button className={`w-[140px] py-2 border-1 border-[#E4E7E9] rounded-sm cursor-pointer vanilla_btn ${activeIceCrm === 2 ? 'bg-[#E0EEF9] text-[#0071BC]' : 'bg-white text-[#475156]'} font-semibold text-[14px]`} onClick={() => { setActiveIceCrm(2) }}>
                        Vanilla
                    </button>
                </div>
            </div>
            <div className='mt-3 flex flex-col gap-2'>
                <h4 className='text-[#191C1F] text-[14px]'>Pack Size (2)</h4>
                <div className='flex gap-3'>
                    <button className={`w-[140px] py-2 border-1 border-[#E4E7E9] rounded-sm cursor-pointer ${activeBtn === 1 ? 'bg-[#E0EEF9] text-[#0071BC]' : 'bg-white text-[#475156]'} font-semibold text-[14px]`} onClick={() => { setActiveBtn(1) }}>
                        200 gm Powder
                    </button>
                    <button className={`w-[140px] py-2 border-1 border-[#E4E7E9] rounded-sm cursor-pointer ${activeBtn === 2 ? 'bg-[#E0EEF9] text-[#0071BC]' : 'bg-white text-[#475156]'} font-semibold text-[14px]`} onClick={() => { setActiveBtn(2) }}>
                        400 gm Powder
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Flvr_PacketSize