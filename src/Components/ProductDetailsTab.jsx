import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { PiMedalLight } from 'react-icons/pi'
import { FaHandshake, FaHeadphones, FaStar, FaTruck, FaWallet } from 'react-icons/fa'
import { prodct_details_tabs_content } from '../assets/data'

const ProductDetailsTab = () => {
    const [isActiveTab, setIsActiveTab] = useState(0);
    const [isActivePost, setIsActivePost] = useState(0);

    const data = prodct_details_tabs_content[isActiveTab];
    return (
        <div className='border-1 border-[#E4E7E9]'>
            <div className=' flex items-center 2xl:gap-4 lg:gap-4 md:gap-4 xl:gap-4 justify-between'>
                <div className={`2xl:w-[200px] lg:w-[180px] md:w-[160px] xl:w-[120px] w-[150px] py-[12px] 2xl:text-[23px] xl:text-[21px] lg:text-[20px] md:text-[18px] flex items-center gap-4 text-[13px] font-medium justify-center cursor-pointer border-b-2  ${isActiveTab === 0 ? 'text-[#191C1F] border-b-2 border-[#0071BC]' : 'text-[#5F6C72] border-white '}`} onClick={() => setIsActiveTab(0)}>
                    <button className='w-full h-full'><Link>Description</Link></button>
                </div>
                <div className={`2xl:w-[200px] lg:w-[180px] md:w-[160px] xl:w-[120px] w-[150px] py-[12px] 2xl:text-[21px] xl:text-[21px] lg:text-[20px] md:text-[18px] flex items-center gap-4 text-[13px] font-medium justify-center cursor-pointer border-b-2  ${isActiveTab === 1 ? 'text-[#191C1F] border-b-2 border-[#0071BC]' : 'text-[#5F6C72] border-white '}`} onClick={() => setIsActiveTab(1)}>
                    <button className='w-full h-full'><Link>Additional information</Link></button>
                </div>
                <div className={`2xl:w-[200px] lg:w-[180px] md:w-[160px] xl:w-[120px] w-[150px] py-[12px] 2xl:text-[21px] xl:text-[21px] lg:text-[20px] md:text-[18px] flex items-center gap-4 text-[13px] font-medium justify-center cursor-pointer border-b-2  ${isActiveTab === 2 ? 'text-[#191C1F] border-b-2 border-[#0071BC]' : 'text-[#5F6C72] border-white '}`} onClick={() => setIsActiveTab(2)}>
                    <button className='w-full h-full'><Link>Specification</Link></button>
                </div>
                <div className={`2xl:w-[200px] lg:w-[180px] md:w-[160px] xl:w-[120px] w-[150px] py-[12px] 2xl:text-[21px] xl:text-[21px] lg:text-[20px] md:text-[18px] flex items-center gap-4 text-[13px] font-medium justify-center cursor-pointer border-b-2  ${isActiveTab === 3 ? 'text-[#191C1F] border-b-2 border-[#0071BC]' : 'text-[#5F6C72] border-white '}`} onClick={() => setIsActiveTab(3)}>
                    <button className='w-full h-full'><Link>Review</Link></button>
                </div>
            </div>
            <div className='p-3'>
                {isActiveTab === 0 && (
                    <div className='flex gap-4 text-[#5F6C72] public_sans 2xl:flex-row xl:flex-row lg:flex-row md:flex-row flex-col'>
                        <div className='2xl:w-[748px] xl:w-[650px] md-w-[600px] lg:w-[550] w-[300px] flex flex-col gap-3'>
                            <h2>Description</h2>
                            <p className='2xl:text-[18px] text-[13px] xl:text-[15px] lg:text-[13px] md:text-[12px]'>{data.info1}</p>
                            <p className='2xl:text-[18px] xl:text-[15px] text-[13px] lg:text-[13px] md:text-[12px]'>{data.info2}</p>
                        </div>
                        <div className='w-[280px] flex flex-col gap-2'>
                            <h2>Feature</h2>
                            <div className='flex flex-col gap-2'>
                                <p className='flex items-center gap-2 2xl:text-[18px] xl:text-[15px] lg:text-[13px] md:text-[12px]'><span className='text-[#0071BC]'><PiMedalLight size={25} /></span>{data.feature_1}</p>
                                <p className='flex items-center gap-2 2xl:text-[18px] xl:text-[15px] lg:text-[13px] md:text-[12px]'><span className='text-[#0071BC]'><FaTruck size={25} /></span>{data.feature_2}</p>
                                <p className='flex items-center gap-2 2xl:text-[18px] xl:text-[15px] lg:text-[13px] md:text-[12px]'><span className='text-[#0071BC]'><FaHandshake size={25} /></span>{data.feature_3}</p>
                                <p className='flex items-center gap-2 2xl:text-[18px] xl:text-[15px] lg:text-[13px] md:text-[12px]'><span className='text-[#0071BC]'><FaHeadphones size={25} /></span>{data.feature_4}</p>
                                <p className='flex items-center gap-2 2xl:text-[18px] xl:text-[15px] lg:text-[13px] md:text-[12px]'><span className='text-[#0071BC]'><FaWallet size={25} /></span>{data.feature_5}</p>
                            </div>
                        </div>
                        <div className='flex flex-col gap-3'>
                            <h2>Product Highlight</h2>
                            <ul className='flex flex-col gap-2 2xl:text-[18px] xl:text-[15px] lg:text-[13px] md:text-[12px]'>
                                <li>{data.product_highlight_1}</li>
                                <li>{data.product_highlight_2}</li>
                                <li>{data.product_highlight_3}</li>
                                <li>{data.product_highlight_4}</li>
                            </ul>
                        </div>
                    </div>
                )}
                {isActiveTab === 1 && (
                    <div className='flex gap-5 2xl:flex-row lg:flex-row md:flex-row xl:flex-row flex-col '>
                        <div className='2xl:w-[748px] xl:w-[700px] md-w-[680px] lg:w-[550] w-[300px] flex flex-col gap-3'>
                            <h2 className='text-[16px] font-semibold'>Additional Information</h2>
                            <div className='text-[#5F6C72] public_sans flex flex-col gap-2 '>
                                <p className='flex 2xl:text-[18px] xl:text-[14px] lg:text-[13px] md:text-[12px] gap-4 text-[#5F6C72] public_sans 2xl:flex-row xl:flex-row lg:flex-row md:flex-row flex-col'><span className='w-full max-w-[250px]'>{data.title_1}</span>{data.para_1}</p>
                                <p className='flex 2xl:text-[18px] xl:text-[15px] lg:text-[13px] md:text-[12px] gap-4 text-[#5F6C72] public_sans 2xl:flex-row xl:flex-row lg:flex-row md:flex-row flex-col'><span className='w-full max-w-[250px]'>{data.title_2}</span>{data.para_2}</p>
                                <p className='flex 2xl:text-[18px] xl:text-[15px] lg:text-[13px] md:text-[12px] gap-4 text-[#5F6C72] public_sans 2xl:flex-row xl:flex-row lg:flex-row md:flex-row flex-col'><span className='w-full max-w-[250px]'>{data.title_3}</span>{data.para_3}</p>
                                <p className='flex 2xl:text-[18px] xl:text-[15px] lg:text-[13px] md:text-[12px] gap-4 text-[#5F6C72] public_sans 2xl:flex-row xl:flex-row lg:flex-row md:flex-row flex-col'><span className='w-full max-w-[250px]'>{data.title_4}</span>{data.para_4}</p>
                            </div>
                        </div>
                        <div className='2xl:w-[400px] lg:w-[380px] md:w-[250px] xl:w-[200px] w-[230px] flex flex-col gap-3'>
                            <h2 className='text-[16px] font-semibold'>Technical Details</h2>
                            <div className='text-[#5F6C72] public_sans flex flex-col gap-2'>
                                <p className='flex 2xl:text-[18px] xl:text-[15px] lg:text-[14px] md:text-[13px] text-[13px]'><span className='w-full max-w-[200px]'>{data.Technical_detail_1_title}</span>{data.Technical_detail_1_info}</p>
                                <p className='flex 2xl:text-[18px] xl:text-[15px] lg:text-[14px] md:text-[13px] text-[13px]'><span className='w-full max-w-[200px]'>{data.Technical_detail_2_title}</span>{data.Technical_detail_2_info}</p>
                                <p className='flex 2xl:text-[18px] xl:text-[15px] lg:text-[14px] md:text-[13px] text-[13px]'><span className='w-full max-w-[200px]'>{data.Technical_detail_3_title}</span>{data.Technical_detail_3_info}</p>
                                <p className='flex 2xl:text-[18px] xl:text-[15px] lg:text-[14px] md:text-[13px] text-[13px]'><span className='w-full max-w-[200px]'>{data.Technical_detail_4_title}</span>{data.Technical_detail_4_info}</p>
                            </div>
                        </div>
                    </div>
                )}
                {isActiveTab === 2 && (
                    <div className='2xl:w-[748px] xl:w-[650px] md-w-[600px] lg:w-[550] w-[300px] flex flex-col gap-3'>
                        <h2 className='text-[16px] font-semibold'>Technical Details</h2>
                        {data.txt};
                    </div>
                )}
                {isActiveTab === 3 && (
                    <div className='flex flex-col gap-3 nnt'>
                        <h2 className='font-bold text-black'>Rate and review</h2>
                        <h3 className='font-semibold text-[#414141]'>Your review will be posted publicly on the web.</h3>
                        <ul className='flex gap-3'>
                            <li><FaStar size={20} /></li>
                            <li><FaStar size={20} /></li>
                            <li><FaStar size={20} /></li>
                            <li><FaStar size={20} /></li>
                            <li><FaStar size={20} /></li>
                        </ul>
                        <div className='border-1 border-[#E4E7E9] h-[110px] p-3 '>
                            <div className='w-full'>
                                <input className='text-[#A9A9A9] font-semibold w-full outline-none' type='text' placeholder='Share details of your own experience at this place' />
                            </div>
                        </div>
                        <div className='flex gap-4 justify-center '>
                            <button className={`w-[182px] py-[8px] font-bold cursor-pointer border-2 ${isActivePost === 0 ? 'bg-[#0070BC] text-white border-2 border-[#0070BC]' : 'bg-white border-[#0070BC]'}`} onClick={() => { setIsActivePost(0) }}>Post</button>
                            <button className={`w-[182px] px-[32px] font-bold border-2 cursor-pointer ${isActivePost === 1 ? ' border-2 border-[#0070BC] bg-[#0070BC] text-white' : 'bg-white border-[#0070BC]'}`} onClick={() => { setIsActivePost(1) }}>Cancel</button>
                        </div>
                    </div>
                )}
            </div>
        </div>
    )
}

export default ProductDetailsTab;