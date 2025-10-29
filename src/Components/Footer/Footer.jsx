import React from 'react'
import logo from '../../assets/Home/Footer_logo.png'
import { IoIosSend } from 'react-icons/io'
import { Link } from 'react-router-dom'
import { MdOutlineMail } from 'react-icons/md'
import { FaFacebook } from 'react-icons/fa'
import { FaInstagram, FaLinkedin, FaTelegram, FaYoutube } from 'react-icons/fa6'
import Footer_bottom from './Footer_bottom'

const Footer = () => {
  return (
    <section className='bg-[#184363] '>
      <div className='footer_container'>
        <div className='container_box'>
          <div className='footer_section pt-10 pb-5 flex'>
            <div className='w-5/12 footer_col_1 flex justify-between'>
              <div className='text-white footer_subclm w-full max-w-9/12 pt flex flex-col gap-2'>
                <div className='footr_logo'>
                  <img src={logo} />
                </div>
                <span className='text-[14px] stay_alert'>Stay tuned for latest updates and new features</span>
                <div className='relative input_container'>
                  <div className=' w-8/12 input_box rounded-full bg-white px-3 py-2'>
                    <input type='text' placeholder='Email address' className='outline-none text-black w-full px-3' />
                  </div>
                  <div className='subscribe_btn absolute top-0 right-15 bg-[#0070BC] flex gap-2 h-full rounded-r-full justify-center items-center p-3'>
                    <span><IoIosSend /></span>
                    <button className='text-[14px]'>Subscribe</button>
                  </div>
                </div>
                <div className='flex gap-3 poilicy'>
                  <input type='checkbox' />
                  <span className='text-[11px]'>I accept terms and conditions & privacy policy</span>
                </div>
              </div>
              <div className='text-white flex w-full max-w-4/12 flex-col items-start w-full flex flex-col gap-3 gs cmpny_prfile_footer'>
                <h3 className='text-[16px] font-semibold'>Company Profile</h3>
                <ul className='flex text-[14px] text-[#E0EEF9] font-500 flex-col gap-2'>
                  <li><Link to={'/'}>Home</Link></li>
                  <li><Link to={'/aboutus'}>About Us</Link></li>
                  <li><Link to={'/productview'}>Our Products</Link></li>
                  <li><Link to={'/contactus'}>Contact Us</Link></li>
                </ul>
              </div>
            </div>
            <div className='w-7/12 footer_col_2 flex '>
              <div className='text-white flex flex-col gap-3 text-start w-full max-w-8/12 gs prodct_servces'>
                <h3 className='text-[16px] font-semibold'>Products & Services</h3>
                <ul className=' grid gap-2 text-[14px] font-500 gap-3 public_sans text-[#E0EEF9] items-start items_services w-full'>
                  <li className='text-[14px]'><Link>Blood Pressure Monitor</Link></li>
                  <li className='text-[14px]'><Link >Stethoscope</Link></li>
                  <li className='text-[14px]'><Link>Blood Glucose Test Strip</Link></li>
                  <li className='text-[14px]'><Link>Digital Thermometer</Link></li>
                  <li className='text-[14px]'><Link>Blood Glucose Monitoring System</Link></li>
                  <li className='text-[14px]'><Link>Medical Stethoscope</Link></li>
                  <li className='text-[14px]'><Link>Weighing Scale</Link></li>
                  <li className='text-[14px]'><Link>Sugar Test Strips</Link></li>
                  <li className='text-[14px]'><Link>Aneroid Sphygmomanometer</Link></li>
                  <li className='text-[14px]'><Link>Pulse Oximeter</Link></li>
                  <li className='text-[14px]'><Link>Fingertip Pulse Oximeter</Link></li>
                  <li className='text-[14px]'><Link>Test Strips</Link></li>
                  <li className='text-[14px]'><Link>Kitchen Tools</Link></li>
                  <li className='text-[14px]'><Link>Nebulizer Machine</Link></li>
                  <li className='text-[14px]'><Link>Blood Lancet</Link></li>
                </ul>
              </div>
              <div className='email_footer text-white items-start flex flex-col gap-3 w-full max-w-3/12  pt'>
                <h3 className='text-[16px] about_cntact font-semibold'>About / Contacts</h3>
                <div className='flex email gap-3 justify-center items-center'>
                  <Link><span><MdOutlineMail size={20} /></span></Link>
                  <Link><span>firstmed@gmail.com</span></Link>
                </div>
                <div className='flex gap-4 footer_social_icons'>
                  <span><Link to={'/facebook'}><FaFacebook size={25} /></Link></span>
                  <span><Link to={'/instagram'}><FaInstagram size={25} /></Link></span>
                  <span><Link to={'/linkedin'}><FaLinkedin size={25} /></Link></span>
                  <span><Link to={'/telegram'}><FaTelegram size={25} /></Link></span>
                  <span><Link to={'youtube.com'}><FaYoutube size={25} /></Link></span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <hr />
        <Footer_bottom />
      </div>
    </section>
  )
}

export default Footer