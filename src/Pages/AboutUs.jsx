import React from 'react'
import medicine from '../assets/Home/Banner/medicine.png'
import AboutUsInformation from '../Components/AboutUsInformation'
import CompanyAlbum from '../Components/CompanyAlbum'
import Newsletter from '../Components/Newsletter'

const AboutUs = () => {
    return (
        <section>
            <div className='nnt mt-5'>
                <div className=' container_box about_us '>
                    <div className=' flex items-center justify-center'>
                        <div className='w-5/12'>
                            <h2 className='text-[64px] font-[800] text-[#0070BC]'>About Us</h2>
                            <p className='text-[20px] font-medium text-[#373D45]'>We make healthcare </p>
                            <p className='text-[20px] font-medium text-[#373D45]'>Understandable, Accessible and Affordable.</p>
                        </div>
                        <div className='5/12'>
                            <img src={medicine} />
                        </div>
                    </div>
                </div>
                <AboutUsInformation />
                <Newsletter />
                <CompanyAlbum/>
            </div>
        </section>
    )
}

export default AboutUs