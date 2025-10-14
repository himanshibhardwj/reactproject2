import React from 'react'
import { Link } from 'react-router-dom'
import About_ProfileData from './About_ProfileData'

const AboutUsInformation = () => {
    return (
        <div className='container_box nnt'>
            <div className='mt-5'>
                <h3 className='text-[#0070BC] font-bold text-[48px]'>Factsheet</h3>
                <div className='p-3'>
                    <h4 className='text-[#020A13] font-semibold  text-[32px]'>Basic Information</h4>
                    <ul className='flex flex-wrap gap-3 public_sans p-5 '>
                        <li className='text-[#191C1F] font-semibold text-[24px] w-full max-w-6/12'><Link>Nature of Business</Link></li>
                        <li className='text-[#5F6C72] text-[24px] w-full max-w-5/12'><Link >Service Provider and Others</Link></li>
                        <li className='text-[#191C1F] font-semibold text-[24px] w-full max-w-6/12'><Link>Additional Business</Link></li>
                        <li className='text-[#5F6C72] text-[24px] w-full max-w-5/12'><Link>Retail Business
                            Works Contract
                            Import<br />
                            Export<br />
                            Supplier of Services<br />
                            Wholesale Business<br />
                            Office / Sale Office

                        </Link></li>
                        <li className='text-[#191C1F] font-semibold text-[24px] w-full max-w-6/12'><Link>Company CEO</Link></li>
                        <li className='text-[#5F6C72] text-[24px] w-full max-w-5/12'><Link>Ravi Ranjan Kumar</Link></li>
                        <li className='text-[#191C1F] font-semibold text-[24px] w-full max-w-6/12'><Link>Registered Address</Link></li>
                        <li className='text-[#5F6C72] text-[24px] w-full max-w-5/12'><Link>G/f Gali No -1, 413, Madawali,, Delhi- 110092, Delhi, India</Link></li>
                        <li className='text-[#191C1F] font-semibold text-[24px] w-full max-w-6/12'><Link>Total Number of Employees</Link></li>
                        <li className='text-[#5F6C72] text-[24px] w-full max-w-5/12'><Link>501 to 1000 People</Link></li>
                        <li className='text-[#191C1F] font-semibold text-[24px] w-full max-w-6/12'><Link>GST Registration Date</Link></li>
                        <li className='text-[#5F6C72] text-[24px] w-full max-w-5/12'><Link>01-06-2020</Link></li>
                        <li className='text-[#191C1F] font-semibold text-[24px] w-full max-w-6/12'><Link>Legal Status of Firm</Link></li>
                        <li className='text-[#5F6C72] text-[24px] w-full max-w-5/12'><Link>Private Limited Company</Link></li>
                        <li className='text-[#191C1F] font-semibold text-[24px] w-full max-w-6/12'><Link>Annual Turnover</Link></li>
                        <li className='text-[#5F6C72] text-[24px] w-full max-w-5/12'><Link>5 - 25 Cr Strips</Link></li>
                    </ul>
                </div>
                <About_ProfileData/>
            </div>
        </div>
    )
}

export default AboutUsInformation