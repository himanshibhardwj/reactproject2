import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import DashboardRight from '../Components/DashboardRight'
import { FiLayers } from 'react-icons/fi'
import { RiDashboard3Fill } from 'react-icons/ri'
import { PiKeyReturn } from 'react-icons/pi'
import { FaAddressBook, FaUser } from 'react-icons/fa6'
import { FaShoppingCart } from 'react-icons/fa'
import { IoIosLogOut } from 'react-icons/io'


const Dashboard = () => {
    const [isActiveDashboard, setIsActiveDashboard] = useState(0);
    const [breadcrumName, setBreadCrumName] = useState('Dashboard')
    return (
        <section className='roboto'>
            <ul className='breadcrumb flex bg-[#F2F4F5] px-20 py-2 mt-2'>
                <li><Link to={'/'}>Home</Link></li>
                <li className='text-[#DB3030]'>User Account</li>
                <li className='text-[#DB3030]'><Link>{breadcrumName}</Link></li>
            </ul>

            <div className='container_box'>
                <div className='flex gap-10 bg-white py-3 mt-10 dashboard_cntner'>
                    <div className='flex w-[20%] flex-col gap-2 py-3 shadow h-full dashbrd_left_cntaner'>
                        <div className={`flex flex-col gap-2 py-3  h-full dashbrd_tabs`}>
                            <div className={`flex gap-5 w-full cursor-pointer px-3 py-1  ${isActiveDashboard === 0 ? 'bg-[#DB3030] text-white ' : 'bg-white text-black hover:bg-gray-300'}`} onClick={() => { setIsActiveDashboard(0); setBreadCrumName('Dashboard') }}>
                                <span className='flex items-center'><RiDashboard3Fill /></span>
                                <button>Dashboard</button>
                            </div>
                            <div className={`flex gap-5 w-full cursor-pointer px-3 py-1 ${isActiveDashboard === 1 ? 'bg-[#DB3030] text-white ' : 'bg-white text-black hover:bg-gray-300'}`} onClick={() => { setIsActiveDashboard(1); setBreadCrumName('Order') }}>
                                <span className='flex items-center'><PiKeyReturn /></span>
                                <button>Order</button>
                            </div>
                            <div className={`flex gap-5 w-full cursor-pointer px-3 py-1 ${isActiveDashboard === 2 ? 'bg-[#DB3030] text-white ' : 'bg-white text-black hover:bg-gray-300'}`} onClick={() => { setIsActiveDashboard(2); setBreadCrumName('Addresses') }}>
                                <span className='flex items-center'><FaAddressBook /></span>
                                <button>Addresses</button>
                            </div>
                            <div className={`flex gap-5 w-full cursor-pointer px-3 py-1 ${isActiveDashboard === 3 ? 'bg-[#DB3030] text-white ' : 'bg-white text-black hover:bg-gray-300'}`} onClick={() => { setIsActiveDashboard(3); setBreadCrumName('Return/Refund') }}>
                                <span className='flex items-center'><FaShoppingCart /></span>
                                <button>Return/Refund</button>
                            </div>
                            <div className={`flex gap-5 w-full cursor-pointer px-3 py-1 ${isActiveDashboard === 4 ? 'bg-[#DB3030] text-white ' : 'bg-white text-black hover:bg-gray-300'}`} onClick={() => { setIsActiveDashboard(4); setBreadCrumName('Account details') }}>
                                <span className='flex items-center'><FaUser /></span>
                                <button>Account details</button>
                            </div>
                            <div className={`flex gap-5 w-full cursor-pointer px-3 py-1 ${isActiveDashboard === 5 ? 'bg-[#DB3030] text-white ' : 'bg-white text-black hover:bg-gray-300'}`} onClick={() => { setIsActiveDashboard(5); setBreadCrumName('Change Password') }}>
                                <span className='flex items-center'><FaUser /></span>
                                <button>Change Password</button>
                            </div>
                            <div className={`flex gap-5 w-full cursor-pointer px-3 py-1 ${isActiveDashboard === 6 ? 'bg-[#DB3030] text-white ' : 'bg-white text-black hover:bg-gray-300'}`} onClick={() => { setIsActiveDashboard(6); setBreadCrumName('Log-out') }}>
                                <span className='flex items-center'><IoIosLogOut /></span>
                                <button>Log-out</button>
                            </div>
                        </div>
                    </div>
                    <div className='w-[75%] dashbrd_ryt_cntaner'>
                        <DashboardRight isActiveDashboard={isActiveDashboard} />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Dashboard