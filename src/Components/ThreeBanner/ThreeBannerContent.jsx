import React from 'react'
import ThreeBaner_1 from '../../assets/Home/Banner/ThreeBaner_1.png'
import ThreeBaner_2 from '../../assets/Home/Banner/ThreeBaner_2.png'
import ThreeBaner_3 from '../../assets/Home/Banner/ThreeBaner_3.png'


const ThreeBannerContent = () => {
    return (
        <div className='container'>
            <div className='grid grid-cols-2 mt-20 gap-2'>
                <div className='flex justify-between bg-[#F1FAFE] rounded-md pt-25 three_banner1'>
                    <div className=' flex flex-col gap-2 px-4 pt-20 '>
                        <button className='text-xl font-medium bg-[#0071BC] text-white w-[114px] h-[42px] rounded-md poppins'>25% OFF</button>
                        <h2 className='nnt text-4xl font-bold'>BLACK GARLIC OIL</h2>
                        <h1 className='nnt text-[32px] text-[#020A13] font-semibold'>Stronger and Thicker Hair With Black Garlic Oil.</h1>
                        <span className='line-through text-[#373D45]'>₹478</span>
                        <div className='flex items-center gap-4 text-[#020A13]'>
                            <span className='text-[32px] nnt font-extrabold '>₹378.00</span>
                            <span className='poppins'>Including Tax</span>
                        </div>
                    </div>
                    <div className='w-[320px] flex items-center justify-center'>
                        <img src={ThreeBaner_1}/>
                    </div>
                </div>
                <div className='flex flex-col gap-3'>
                    <div className='flex justify-between gap-3 bg-[#FDF7E8] rounded-md three_banner1'>
                        <div className='flex flex-col gap-2 pt-10 px-5'>
                            <button className='text-xl font-medium bg-[#0071BC] text-white w-[114px] h-[42px] rounded-md poppins'>25% OFF</button>
                            <h2 className='nnt text-[24px] font-semibold'>Dental Care Set for Vivid and Bright Smiles</h2>
                            <span className='line-through text-[#373D45]'>₹478</span>
                            <div className='flex items-center gap-4 text-[#020A13]'>
                                <span className='text-[32px] nnt font-extrabold '>₹278.00</span>
                                <span className='poppins'>Including Tax</span>
                            </div>
                        </div>
                        <div className='flex items-center justify-center'>
                            <img src={ThreeBaner_2} />
                        </div>
                    </div>
                    <div className='flex justify-center gap-3 bg-[#FDF7E8] rounded-md three_banner1'>
                        <div className='flex flex-col gap-2 pt-10 px-5'>
                            <button className='text-xl font-medium bg-[#0071BC] text-white w-[114px] h-[42px] rounded-md poppins'>25% OFF</button>
                            <h2 className='nnt text-[24px] font-semibold'>BANANA FLAVOURED TOOTHPASTE</h2>
                            <span className='line-through text-[#373D45]'>₹478</span>
                            <div className='flex items-center gap-4 text-[#020A13]'>
                                <span className='text-[32px] nnt font-extrabold '>₹278.00</span>
                                <span className='poppins'>Including Tax</span>
                            </div>
                        </div>
                        <div className='flex items-center justify-center'>
                            <img src={ThreeBaner_3} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ThreeBannerContent