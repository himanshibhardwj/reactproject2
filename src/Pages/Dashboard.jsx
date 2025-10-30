import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import DashboardRight from '../Components/DashboardRight'
import { dashboard_tabs } from '../assets/data'
import { FiLayers } from 'react-icons/fi'


const Dashboard = () => {
    const [isActiveDashboard, setIsActiveDashboard] = useState(0);
    return (
        <section className=''>
            <ul className='breadcrumb flex bg-[#F2F4F5] px-20 py-2 mt-2'>
                <li><Link>Home</Link></li>
                <li><Link>User Account</Link></li>
                <li className='text-[#DB3030]'><Link>{}</Link></li>
            </ul>

            <div className='container_box'>
                <div className='flex gap-10 bg-white py-3 mt-10'>
                    <div className='flex w-[20%] flex-col gap-2 py-3 shadow h-full'>
                        {dashboard_tabs.map((item, index) => {
                            return (
                                <div className={`mb-3 py-2 cursor-pointer ${index == isActiveDashboard ? 'bg-[#DB3030] text-white ' : 'bg-white text-black'}`} onClick={() => { setIsActiveDashboard(index) }} key={index}>
                                    <p className='flex items-center gap-3 justify-center'><img src={item.img} />
                                        <span className='w-7/12'>{item.tab}</span></p>
                                </div>
                            )
                        })}
                    </div>
                    <div className='w-[75%]'>
                        <DashboardRight isActiveDashboard={isActiveDashboard} />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Dashboard