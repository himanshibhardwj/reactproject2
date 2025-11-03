import React from 'react'
import user from '../assets/Home/DashboardImages/user.jpg'
import DashboardRightButton from './DashboardRightButton'
import DashboardOrdersRight from './DashboardOrdersRight'
import DashboardAddress from './DashboardAddress'
import DashboardOrdersHeading from './DashboardOrdersHeading'
import Wishlist from '../Pages/Wishlist'
import DashboardAccountDetails from './DashboardAccountDetails'
import { Link } from 'react-router-dom'
import DashboardReturn from './DashboardReturn'
import DashboardPassword from './DashboardPassword'

const DashboardRight = ({ isActiveDashboard }) => {
    return (
        <>
            {isActiveDashboard === 0 && (
                <div className='roboto dashbrd_1'>
                    <div className='shadow-lg flex justify-between px-3 py-3 '>
                        <div className='user_dshbrd shadow'>
                            <img src={user} className='w-full rounded-full' />
                        </div>
                        <div className='flex flex-col justify-center w-8/12 dashbrd_name_data'>
                            <h4 className='text-[#525252] font-semibold text-base'>Aniket mishra</h4>
                            <Link><p className='text-[#525252] email'>Aniket mishra95@gmail.com</p></Link>
                            <Link><p className='text-[#525252] font-medium phone'>8057212546</p></Link>
                        </div>
                        <div className='w-2/12 dshbrd_btn'>
                            <Link to={'/'}><button className='border-1 border-[#898989] text-[13px] px-3 py-1 '>Edit Profile</button></Link>
                        </div>
                    </div>
                    <DashboardRightButton />
                </div>
            )}

            {isActiveDashboard === 1 && (
                <div className='roboto w-full orders_dshbrd'>
                    <DashboardOrdersHeading />
                    <DashboardOrdersRight />
                </div>
            )}

            {isActiveDashboard === 2 && (
                <DashboardAddress />
            )}

            {isActiveDashboard === 3 && (
                <DashboardReturn />
            )}

            {isActiveDashboard === 4 && (
                <DashboardAccountDetails />
            )}

            {isActiveDashboard === 5 && (
                <DashboardPassword />
            )}
        </>
    )
}

export default DashboardRight