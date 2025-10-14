import React from 'react'
import { FaStar, FaUser } from 'react-icons/fa'
import { Reviews_content } from '../assets/data'
import Items from './Items'

const ReviewContent = () => {
    return (
        <div className='mt-5 flex flex-col gap-4'>
            <Items/>
        </div>
    )
}

export default ReviewContent