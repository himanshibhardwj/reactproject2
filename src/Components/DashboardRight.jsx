import React from 'react'
import user from '../assets/Home/DashboardImages/user.png'

const DashboardRight = () => {
  return (
    <div>
        <div className='shadow flex gap-3'>
            <img src={user}/>
            <div className='flex flex-col justify-center'>
            <h4>Aniket mishra</h4>
            <p>Aniket mishra95@gmail.com</p>
            <p>+82 8057212546</p>
            </div>
        </div>
    </div>
  )
}

export default DashboardRight