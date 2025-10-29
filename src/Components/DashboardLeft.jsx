import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import {dashboard_tabs} from '../assets/data'
import Dashboard from '../Pages/Dashboard'
import { FiLayers } from 'react-icons/fi'


const DashboardLeft = () => {
    const [activeTab,setActiveTab] = useState(0)
    return (
        <div className='flex flex-col gap-2'>
            {dashboard_tabs.map((item, index) => {
                return (
                    <div className={`mb-3 py-2 ${index == activeTab ? 'bg-[#DB3030] text-white ': 'bg-white text-black'}`} onClick={()=>{setActiveTab(index)}} key={index}>
                        <Link>
                        <p className='flex items-center gap-3 justify-center'><img src={item.img} />
                            <span className='w-7/12'>{item.tab}</span></p>
                        </Link>
                    </div>
                )
            })}
        </div>
    )
}

export default DashboardLeft