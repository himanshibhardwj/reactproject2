import React from 'react'
import ThreeBaner_1 from '../../assets/Home/Banner/ThreeBaner_1.png'
import ThreeBaner_2 from '../../assets/Home/Banner/ThreeBaner_2.png'
import ThreeBaner_3 from '../../assets/Home/Banner/ThreeBaner_3.png'


const ThreeBannerContent = () => {
    return (
        <div className='container_box'>
            <div className='grid 2xl:grid-cols-2 xl:grid-cols-2 md:grid-rows lg:grid-cols-2  mt-20 gap-2 three_banner_content'>
                <div className='flex flex-row justify-between items-center bg-[#F1FAFE] rounded-md three_banner1'>
                    <div className=' flex flex-col gap-2 px-4 pt-20 '>
                        <button className='text-[15px] 2xl:text-[20px] xl:text-[18px] md:text-[16px] lg:text-[16px] font-medium bg-[#0071BC] text-white w-5/12 py-2 rounded-md poppins'>25% OFF</button>
                        <h3 className='nnt 2xl:text-4xl xl:text-3xl md:text-[23px] lg:text-[20px] sm:text-sm text-sm font-bold'>BLACK GARLIC OIL</h3>
                        <h1 className='nnt text-base 2xl:text-2xl lg:text-lg md:text-md sm:text-sm xl:text-xl text-[#020A13] font-semibold'>Stronger and Thicker Hair With Black Garlic Oil.</h1>
                        <span className='line-through text-[#373D45]'>₹478</span>
                        <div className='flex gap-4 text-[#020A13] 2xl:flex-row lg:flex-row md:flex-col xl:flex-row flex-col'>
                            <span className=' nnt font-extrabold '>₹278.00</span>
                                <span className='poppins tax'>Including Tax</span>
                        </div>
                    </div>
                    <div className='w-8/12 flex items-center justify-center'>
                        <img src={ThreeBaner_1} className='w-full'/>
                    </div>
                </div>
                <div className='flex flex-col gap-3'>
                    <div className='flex 2xl:flex-row lg:flex-row md:flex-row xl:flex-row flex-row justify-between gap-3 bg-[#FDF7E8] rounded-md three_banner1'>
                        <div className='flex flex-col gap-2 pt-10 px-5'>
                            <button className='text-[15px] 2xl:text-[20px] xl:text-[18px] md:text-[16px] lg:text-[16px] font-medium bg-[#0071BC] text-white w-5/12 py-2 rounded-md poppins'>25% OFF</button>
                            <h2 className='nnt text-base 2xl:text-2xl lg:text-lg md:text-md sm:text-sm xl:text-xl font-semibold'>Dental Care Set for Vivid and Bright Smiles</h2>
                            <span className='line-through text-[#373D45]'>₹478</span>
                            <div className='flex gap-4 text-[#020A13] flex 2xl:flex-row lg:flex-row md:flex-col xl:flex-row flex-col'>
                                <span className=' nnt font-extrabold '>₹278.00</span>
                                <span className='poppins tax'>Including Tax</span>
                            </div>
                        </div>
                        <div className='w-8/12 flex items-center justify-center'>
                            <img src={ThreeBaner_2} className='w-full'/>
                        </div>
                    </div>
                    <div className='flex gap-3 bg-[#FDF7E8] flex-row rounded-md three_banner1'>
                        <div className='flex flex-col gap-2 pt-10 px-5'>
                            <button className='text-[15px] 2xl:text-[20px] xl:text-[18px] md:text-[16px] lg:text-[16px] font-medium bg-[#0071BC] text-white w-5/12 py-2 rounded-md poppins'>25% OFF</button>
                            <h2 className='nnt text-base 2xl:text-2xl lg:text-lg md:text-md sm:text-sm xl:text-xl font-semibold'>BANANA FLAVOURED TOOTHPASTE</h2>
                            <span className='line-through text-[#373D45]'>₹478</span>
                            <div className='flex flex 2xl:flex-row lg:flex-row md:flex-col xl:flex-row flex-col gap-4 text-[#020A13]'>
                                <span className=' nnt font-extrabold '>₹278.00</span>
                                <span className='poppins tax'>Including Tax</span>
                            </div>
                        </div>
                        <div className='w-7/12 flex items-center justify-center'>
                            <img src={ThreeBaner_3} className='w-full'/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ThreeBannerContent