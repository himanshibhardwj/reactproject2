import React from 'react'
import medicine from '../assets/Home/Banner/medicine.png'
import AboutUsInformation from '../Components/AboutUsInformation'
import CompanyAlbum from '../Components/CompanyAlbum'
import Newsletter from '../Components/Newsletter'

const AboutUs = () => {
    return (
        <section>
            <div className='nnt mt-5 aboutus_cntnr'>
                <div className='container_box'>
                    <div className='about_us'>
                        <div className=' container_box '>
                            <div className=' flex items-center aboutus_cntainer justify-center'>
                                <div className='w-5/12 about_us_box'>
                                    <h2 className='text-[64px] font-[800] text-[#0070BC]'>About Us</h2>
                                    <p className='text-[20px] font-medium text-[#373D45]'>We make healthcare </p>
                                    <p className='text-[20px] font-medium text-[#373D45]'>Understandable, Accessible and Affordable.</p>
                                </div>
                                <div className='5/12 aboutus_image'>
                                    <img src={medicine} className='w-full h-full' />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <AboutUsInformation />
                <Newsletter />
                <CompanyAlbum />
            </div>
        </section>
    )
}

export default AboutUs