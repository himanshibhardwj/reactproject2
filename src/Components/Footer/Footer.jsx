import React from 'react'
import logo from '../../assets/Home/Footer_logo.png'
import { IoIosSend } from 'react-icons/io'
import { Link } from 'react-router-dom'
import { MdOutlineMail } from 'react-icons/md'
import { FaFacebook } from 'react-icons/fa'
import { FaInstagram, FaLinkedin, FaTelegram, FaYoutube } from 'react-icons/fa6'

const Footer = () => {
  return (
    <section className='bg-[#184363]'>
      <div className='container_box'>
        <div className='footer_section grid grid-cols-2 md:grid-cols-3 2xl:grid-cols-4 xl:grid-cols-3 lg:grid-cols-3 gap-5 p-4'>
          <div className='text-white w-full pt flex flex-col gap-2'>
            <div>
              <img src={logo} />
            </div>
            <span className='text-[14px]'>Stay tuned for latest updates and new features</span>
            <div className='relative'>
              <div className=' w-full rounded-full bg-white px-3 py-2'>
                <input type='text' placeholder='Email address' className='outline-none text-black' />
              </div>
              <div className='absolute top-0 right-0 bg-[#0070BC] flex gap-2 h-full rounded-r-full justify-center items-center p-3'>
                <span><IoIosSend /></span>
                <span className='text-[14px]'>Subscribe</span>
              </div>
            </div>
            <div className='flex gap-3'>
              <input type='checkbox' />
              <span className='text-[11px]'>I accept terms and conditions & privacy policy</span>
            </div>
          </div>
          <div className='text-white flex flex-col items-start w-full flex flex-col gap-3 gs'>
            <h3 className='text-[16px] font-semibold'>Company Profile</h3>
            <ul className='flex text-[14px] text-[#E0EEF9] font-500 flex-col gap-2'>
              <li><Link>Home</Link></li>
              <li><Link>About Us</Link></li>
              <li><Link>Our Products</Link></li>
              <li><Link>Contact Us</Link></li>
            </ul>
          </div>

          <div className='text-white flex flex-col gap-3 text-start w-full gs prodct_servces'>
            <h3 className='text-[16px] font-semibold'>Products & Services</h3>
            <ul className='grid 2xl:grid-cols-2 xl:grid-cols-2 lg-grid-cols-2 md:grid-cols-1 gap-2 text-[14px] font-500 gap-3 public_sans text-[#E0EEF9] items-start items_services'>
              <li className='  text-[14px]'><Link>Blood Pressure Monitor</Link></li>
              <li className='  text-[14px]'><Link >Stethoscope</Link></li>
              <li className='  text-[14px]'><Link>Blood Glucose Test Strip</Link></li>
              <li className='  text-[14px]'><Link>Digital Thermometer</Link></li>
              <li className='  text-[14px]'><Link>Blood Glucose Monitoring System</Link></li>
              <li className='  text-[14px]'><Link>Medical Stethoscope</Link></li>
              <li className='  text-[14px]'><Link>Weighing Scale</Link></li>
              <li className='  text-[14px]'><Link>Sugar Test Strips</Link></li>
              <li className='  text-[14px]'><Link>Aneroid Sphygmomanometer</Link></li>
              <li className='  text-[14px]'><Link>Pulse Oximeter</Link></li>
              <li className='  text-[14px]'><Link>Fingertip Pulse Oximeter</Link></li>
              <li className='  text-[14px]'><Link>Test Strips</Link></li>
              <li className='  text-[14px]'><Link>Kitchen Tools</Link></li>
              <li className='  text-[14px]'><Link>Nebulizer Machine</Link></li>
              <li className='  text-[14px]'><Link>Blood Lancet</Link></li>
            </ul>
          </div>
          <div className='email_footer text-white items-start flex flex-col gap-3 w-full  pt'>
            <h3 className='text-[16px] font-semibold'>About / Contacts</h3>
            <div className='flex gap-3 justify-center items-center'>
              <span><MdOutlineMail size={20} /></span>
              <span>firstmed@gmail.com</span>
            </div>
            <div className='flex gap-4'>
              <span><FaFacebook size={25} /></span>
              <span><FaInstagram size={25} /></span>
              <span><FaLinkedin size={25} /></span>
              <span><FaTelegram size={25} /></span>
              <span><FaYoutube size={25} /></span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Footer