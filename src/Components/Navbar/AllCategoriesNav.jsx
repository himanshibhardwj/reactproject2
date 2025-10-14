import React from 'react'
import { Link } from 'react-router-dom'

const AllCategoriesNav = ({openCat}) => {
    return (
        openCat && (
        <div className='w-[300px] h-[200px] bg-white scroll overflow-y-scroll bg-white rounded-md absolute top-15 left-0 z-100 p-2 border-1 border-[rgba(0,0,0,0.3)]'>
            <ul className='flex flex-col gap-3'>
                <li className='hover:bg-indigo-100 p-1'><Link>Health Resource Center</Link></li>
                <li className='hover:bg-indigo-100 p-1'><Link>Winter Care Essentials</Link></li>
                <li className='hover:bg-indigo-100 p-1'><Link>Vitamins & Nutrition</Link></li>
                <li className='hover:bg-indigo-100 p-1'><Link>Nutritional Drinks</Link></li>
                <li className='hover:bg-indigo-100 p-1'><Link>Sexual Wellness</Link></li>
                <li className='hover:bg-indigo-100 p-1'><Link>Stomach Care</Link></li>
                <li className='hover:bg-indigo-100 p-1'><Link>Fitness Supplements</Link></li>
                <li className='hover:bg-indigo-100 p-1'><Link>Pain Relief</Link></li>
                <li className='hover:bg-indigo-100 p-1'><Link>Healthy Snacks </Link></li>
            </ul>
        </div>
        )
    )
}

export default AllCategoriesNav