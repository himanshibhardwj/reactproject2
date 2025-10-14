import React from 'react'

import { featured_Products, heading } from '../../assets/data'
import Header from '../Header/Header';
import ViewAll from '../Featured/ViewAll';


const SkinCareProducts = () => {
    const displayedItems = featured_Products.slice(18, 27);
    return (
        <>
            <div className='mt-20 '>
                <div className='container_box nnt '>
                    <div className='mb-5 flex items-center justify-between'><Header title={heading[4].title} />
                        <div className='view_all'><ViewAll /></div>
                    </div>

                </div>
            </div>
        </>
    )
}

export default SkinCareProducts