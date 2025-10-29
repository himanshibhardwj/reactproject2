import React from 'react'
import { Link } from 'react-router-dom'

const About_ProfileData = () => {
    return (
        <div>
            <div className='p-3 statnry_prfile'>
                <h4 className='text-[#020A13] font-semibold  text-[25px] '>Statutory Profile</h4>
                <ul className='flex flex-wrap gap-3 public_sans p-5 about_profile_dta '>
                    <li className='text-[#191C1F] font-semibold text-[17px] w-full max-w-6/12'><Link>Import Export Code (IEC)	</Link></li>
                    <li className='text-[#5F6C72] text-[17px] w-full max-w-5/12'><Link >AATCA*****</Link></li>
                    <li className='text-[#191C1F] font-semibold text-[17px] w-full max-w-6/12'><Link>Banker	</Link></li>
                    <li className='text-[#5F6C72] text-[17px] w-full max-w-5/12'><Link>IDFC FIRST Bank</Link></li>
                    <li className='text-[#191C1F] font-semibold text-[17px] w-full max-w-6/12'><Link>GST No.</Link></li>
                    <li className='text-[#5F6C72] text-[17px] w-full max-w-5/12'><Link>07AATCA3970F1ZE</Link></li>
                    <li className='text-[#191C1F] font-semibold text-[17px] w-full max-w-6/12'><Link>CIN No.</Link></li>
                    <li className='text-[#5F6C72] text-[17px] w-full max-w-5/12'><Link>U85320DL2020PTC362877</Link></li>
                </ul>
            </div>
        </div>
    )
}

export default About_ProfileData