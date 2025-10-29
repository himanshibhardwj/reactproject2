import React, { useState } from 'react'
import { prodct_details_tabs_content } from '../assets/data'
import { PiMedalLight } from 'react-icons/pi'
import { FaHandshake, FaHeadphones, FaStar, FaTruck, FaWallet } from 'react-icons/fa'


const ProductDetailsTabContent = ({ isActiveTab }) => {
    const data = prodct_details_tabs_content[isActiveTab]
    const [isActivePost, setIsActivePost] = useState(0);

    return (
        <div>
            {isActiveTab === 0 && (
                <div className='flex gap-10 text-[#5F6C72] public_sans 2xl:flex-row xl:flex-row lg:flex-row md:flex-row flex-col whole_tab_cntnt'>
                    <div className=' w-6/12 description'>
                        <div className='flex flex-col gap-3'>
                            <h2 className='text-[#191C1F] font-semibold'>Description</h2>
                            <p>{data.info1}</p>
                            <p>{data.info2}</p>
                        </div>
                    </div>
                    <div className='w-4/12 feature flex flex-col gap-2 border-r-1 border-[#E4E7E9]'>
                        <h2 className='text-[#191C1F] font-semibold'>Feature</h2>
                        <div className='flex fture flex-col gap-2'>
                            <p className='flex items-center gap-2'><span className='text-[#0071BC]'><PiMedalLight size={25} /></span>{data.feature_1}</p>
                            <p className='flex items-center gap-2 '><span className='text-[#0071BC]'><FaTruck size={25} /></span>{data.feature_2}</p>
                            <p className='flex items-center gap-2 '><span className='text-[#0071BC]'><FaHandshake size={25} /></span>{data.feature_3}</p>
                            <p className='flex items-center gap-2 '><span className='text-[#0071BC]'><FaHeadphones size={25} /></span>{data.feature_4}</p>
                            <p className='flex items-center gap-2 '><span className='text-[#0071BC]'><FaWallet size={25} /></span>{data.feature_5}</p>
                        </div>
                    </div>
                    <div className='w-4/12 hghlght_prdct flex flex-col gap-3'>
                        <h2 className='text-[#191C1F] = font-semibold'>Product Highlight</h2>
                        <ul className='flex flex-col gap-2 '>
                            <li>{data.product_highlight_1}</li>
                            <li>{data.product_highlight_2}</li>
                            <li>{data.product_highlight_3}</li>
                            <li>{data.product_highlight_4}</li>
                        </ul>
                    </div>
                </div>
            )}

            {isActiveTab === 1 && (
                <div className='flex gap-5 add_tch_details 2xl:flex-row lg:flex-row md:flex-row xl:flex-row flex-col'>
                    <div className='w-[748px] addtnl_info flex flex-col gap-3'>
                        <h2 className='text-[16px] font-semibold'>Additional Information</h2>
                        <div className='text-[#5F6C72] aditnl_info public_sans flex flex-col gap-2 '>
                            <p className='flex  gap-4 text-[#5F6C72] public_sans '><span className='w-full max-w-[250px]'>{data.title_1}</span>{data.para_1}</p>
                            <p className='flex gap-4 text-[#5F6C72] public_sans'><span className='w-full max-w-[250px]'>{data.title_2}</span>{data.para_2}</p>
                            <p className='flex gap-4 text-[#5F6C72] public_sans'><span className='w-full max-w-[250px]'>{data.title_3}</span>{data.para_3}</p>
                            <p className='flex gap-4 text-[#5F6C72] public_sans '><span className='w-full max-w-[250px]'>{data.title_4}</span>{data.para_4}</p>
                        </div>
                    </div>
                    <div className='w-[400px] flex flex-col gap-3 '>
                        <h2 className='text-[16px] font-semibold'>Technical Details</h2>
                        <div className='text-[#5F6C72] public_sans tchncl_dtals flex flex-col gap-2'>
                            <p className='flex text-[13px]'><span className='w-full max-w-[200px]'>{data.Technical_detail_1_title}</span>{data.Technical_detail_1_info}</p>
                            <p className='flex text-[13px]'><span className='w-full max-w-[200px]'>{data.Technical_detail_2_title}</span>{data.Technical_detail_2_info}</p>
                            <p className='flex text-[13px]'><span className='w-full max-w-[200px]'>{data.Technical_detail_3_title}</span>{data.Technical_detail_3_info}</p>
                            <p className='flex text-[13px]'><span className='w-full max-w-[200px]'>{data.Technical_detail_4_title}</span>{data.Technical_detail_4_info}</p>
                        </div>
                    </div>
                </div>
            )}
            {isActiveTab === 2 && (
                <div className='w-[748px] addtnl_info flex flex-col'>
                    <h2 className='text-[16px] font-semibold'>Technical Details</h2>
                    <div className='mt-3'>
                        <ul className='flex flex-wrap gap-3 public_sans'>
                            <li className='text-[#191C1F] font-semibold text-[14px] w-full max-w-6/12'>Product Dimensions</li>
                            <li className='text-[#5F6C72] text-[14px] w-full max-w-5/12'>{data.prdct_dmnsion}</li>
                            <li className='text-[#191C1F] font-semibold text-[14px] w-full max-w-6/12'>Date First Available</li>
                            <li className='text-[#5F6C72] text-[14px] w-full max-w-5/12'>{data.date_fst_avail}</li>
                            <li className='text-[#191C1F] font-semibold text-[14px] w-full max-w-6/12'>ASIN</li>
                            <li className='text-[#5F6C72] text-[14px] w-full max-w-5/12'>{data.asin}</li>
                            <li className='text-[#191C1F] font-semibold text-[14px] w-full max-w-6/12'>Item part number</li>
                            <li className='text-[#5F6C72] text-[14px] w-full max-w-5/12'>{data.Item_part_number}</li>
                            <li className='text-[#191C1F] font-semibold text-[14px] w-full max-w-6/12'>Country of Origin</li>
                            <li className='text-[#5F6C72] text-[14px] w-full max-w-5/12'>{data.cntry_of_orgn}</li>
                            <li className='text-[#191C1F] font-semibold text-[14px] w-full max-w-6/12'>Manufacturer</li>
                            <li className='text-[#5F6C72] text-[14px] w-full max-w-5/12'>{data.Manufacturer_2}</li>
                            <li className='text-[#191C1F] font-semibold text-[14px] w-full max-w-6/12'>Packer</li>
                            <li className='text-[#5F6C72] text-[14px] w-full max-w-5/12'>{data.Packer}</li>
                            <li className='text-[#191C1F] font-semibold text-[14px] w-full max-w-6/12'>Item Weight</li>
                            <li className='text-[#5F6C72] text-[14px] w-full max-w-5/12'>{data.Item_weight}</li>
                            <li className='text-[#191C1F] font-semibold text-[14px] w-full max-w-6/12'>Packer</li>
                            <li className='text-[#5F6C72] text-[14px] w-full max-w-5/12'>{data.Packer}</li>
                            <li className='text-[#191C1F] font-semibold text-[14px] w-full max-w-6/12'>Item Weight</li>
                            <li className='text-[#5F6C72] text-[14px] w-full max-w-5/12'>{data.Item_weight}</li>
                            <li className='text-[#191C1F] font-semibold text-[14px] w-full max-w-6/12'>Item Dimensions LxWxH</li>
                            <li className='text-[#5F6C72] text-[14px] w-full max-w-5/12'>{data.itm_dmsn}</li>
                            <li className='text-[#191C1F] font-semibold text-[14px] w-full max-w-6/12'>Net Quantity</li>
                            <li className='text-[#5F6C72] text-[14px] w-full max-w-5/12'>{data.net_qnty}</li>
                            <li className='text-[#191C1F] font-semibold text-[14px] w-full max-w-6/12'>Included Components</li>
                            <li className='text-[#5F6C72] text-[14px] w-full max-w-5/12'>{data.inclded_cmpnts}</li>
                            <li className='text-[#191C1F] font-semibold text-[14px] w-full max-w-6/12'>Generic Name</li>
                            <li className='text-[#5F6C72] text-[14px] w-full max-w-5/12'>{data.genrc_name}</li>
                            <li className='text-[#191C1F] font-semibold text-[14px] w-full max-w-6/12'>Best Sellers Rank</li>
                            <li className='text-[#5F6C72] text-[14px] w-full max-w-5/12'>{data.rank}</li>
                        </ul>
                    </div>
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
    )
}

export default ProductDetailsTabContent