import React from 'react'
import footer_logo from '../../assets/Home/Footer_logo.png'
import { Link } from 'react-router-dom'
import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter, FaYoutube } from 'react-icons/fa'
import { CiMail } from 'react-icons/ci'

const Footer = () => {
  return (
    <section className='bg-[#184363] text-white '>
      <footer className=''>
        <div className='pt-20'>
          <div className='container flex gap-10 text-[14px]'>
            <div className='w-[517px]'>
              <div className='w-full flex flex-col gap-3'>
                <div className='w-[257px] h-[84px]'>
                  <img src={footer_logo} className='w-full h-full' />
                </div>
                <p>Stay tuned for latest updates and new features</p>
                <div className='w-[425px] h-[42px] flex items-center'>
                  <div className='w-[282px] h-[42px]'>
                    <input type='text' className='w-full h-full border-1 text-black bg-white border-white outline-none rounded-tl-[48px] rounded-bl-[48px] px-3' placeholder='Email address' />
                  </div>
                  <span className='w-[143px] h-[42px] rounded-tr-[48px] rounded-br-[48px] flex items-center justify-center gap-2 bg-[#0070BC] text-white'>Subscribe</span>
                </div>
                <div className='flex items-center gap-4'>
                  <input type='checkbox' />
                  <span className='text-[11px]'>I accept terms and conditions & privacy policy</span>
                </div>
              </div>
            </div>
            <div className='gs w-[142px]'>
              <div className='w-full'>
                <h3 className='text-[16px] font-semibold'>Company Profile</h3>
                <ul className='flex flex-col gap-3 mt-5'>
                  <Link to={'/home'}><li className='text-[#E0EEF9] text-[14px]'>Home</li></Link>
                  <Link to={'/aboutus'}><li className='text-[#E0EEF9] text-[14px]'>About Us</li></Link>
                  <Link to={'/ourproducts'}><li className='text-[#E0EEF9] text-[14px]'>Our Products</li></Link>
                  <Link to={'/contactus'}><li className='text-[#E0EEF9] text-[14px]'>Contact Us</li></Link>
                </ul>
              </div>
            </div>
            <div className='gs w-[500px]'>
              <div className='w-full'>
                <h3 className='text-[16px] font-semibold'>Products & Services</h3>
                <div className='mt-5'>
                  <ul className='flex flex-wrap gap-3'>
                    <li className='text-[#E0EEF9] text-[14px] w-full max-w-[221px]'><Link to={'/home'}>Blood Pressure Monitor</Link></li>
                    <li className='text-[#E0EEF9] text-[14px] w-full max-w-[192px]'><Link to={'/ourproducts'}>Aneroid Sphygmomanometer</Link></li>
                    <li className='text-[#E0EEF9] text-[14px] w-full max-w-[221px]'><Link to={'/home'}>Stethoscope</Link></li>
                    <li className='text-[#E0EEF9] text-[14px] w-full max-w-[192px]'><Link to={'/ourproducts'}>Pulse Oximeter</Link></li>
                    <li className='text-[#E0EEF9] text-[14px] w-full max-w-[221px]'><Link to={'/home'}>Blood Glucose Test Strip</Link></li>
                    <li className='text-[#E0EEF9] text-[14px] w-full max-w-[192px]'><Link to={'/ourproducts'}>Fingertip Pulse Oximeter</Link></li>
                    <li className='text-[#E0EEF9] text-[14px] w-full max-w-[221px]'><Link to={'/home'}>Digital Thermometer</Link></li>
                    <li className='text-[#E0EEF9] text-[14px] w-full max-w-[192px]'><Link to={'/ourproducts'}>Test Strips</Link></li>
                    <li className='text-[#E0EEF9] text-[14px] w-full max-w-[221px]'><Link to={'/ourproducts'}>Blood Glucose Monitoring System</Link></li>
                    <li className='text-[#E0EEF9] text-[14px] w-full max-w-[192px]'><Link to={'/ourproducts'}>Kitchen Tools</Link></li>
                    <li className='text-[#E0EEF9] text-[14px] w-full max-w-[221px]'><Link to={'/ourproducts'}>Medical Stethoscope</Link></li>
                    <li className='text-[#E0EEF9] text-[14px] w-full max-w-[192px]'><Link to={'/ourproducts'}>Nebulizer Machine</Link></li>
                    <li className='text-[#E0EEF9] text-[14px] w-full max-w-[221px]'><Link to={'/ourproducts'}>Weighing Scale</Link></li>
                    <li className='text-[#E0EEF9] text-[14px] w-full max-w-[192px]'><Link to={'/ourproducts'}>Blood Lancet</Link></li>
                    <li className='text-[#E0EEF9] text-[14px] w-full max-w-[221px]'><Link to={'/ourproducts'}>Sugar Test Strips</Link></li>
                  </ul>
                </div>
              </div>
            </div>
            <div className=' w-[257px] footer_email'>
              <div className='w-full flex flex-col gap-4'>
                <h3 className='font-semibold text-[16px]'>About / Contacts</h3>
                <div className='flex items-center gap-4'>
                  <span><CiMail size={20}/></span>
                  <span>firstmed@gmail.com</span>
                </div>
                <div className='flex items-center gap-3'>
                  <span className='w-[40px] h-[40px] bg-[#0070BC] rounded-md text-white flex items-center justify-center'><FaFacebook size={20} /></span>
                  <span className='w-[40px] h-[40px] bg-[#0070BC] rounded-md text-white flex items-center justify-center'><FaInstagram size={20} /></span>
                  <span className='w-[40px] h-[40px] bg-[#0070BC] rounded-md text-white flex items-center justify-center'><FaLinkedin size={20} /></span>
                  <span className='w-[40px] h-[40px] bg-[#0070BC] rounded-md text-white flex items-center justify-center'><FaTwitter size={20} /></span>
                  <span className='w-[40px] h-[40px] bg-[#0070BC] rounded-md text-white flex items-center justify-center'><FaYoutube size={20} /></span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </section>
  )
}

export default Footer