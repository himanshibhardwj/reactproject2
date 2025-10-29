import React from 'react'
import CartBreadcrum from '../Components/CartBreadcrum'
import { Link } from 'react-router-dom'
import DashboardRight from '../Components/DashboardRight'
import DashboardLeft from '../Components/DashboardLeft'

const Dashboard = () => {
    return (
        <section className=''>
            <ul className='breadcrumb flex bg-[#F2F4F5] px-20 py-2 mt-2'>
                <li><Link>Home</Link></li>
                <li><Link>User Account</Link></li>
                <li className='text-[#DB3030]'><Link>Dashboard</Link></li>
            </ul>
            <div className='mt-10'>
                <div className='flex justify-between container_box rounded'>
                    <div className='w-2/12 bg-white shadow py-3'><DashboardLeft /></div>
                    <div className='w-8/12'><DashboardRight /></div>
                </div>
            </div>
        </section>
    )
}

export default Dashboard