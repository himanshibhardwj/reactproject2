import React from 'react'
import Header from '../Header/Header'
import ViewAll from '../Featured/ViewAll.jsx'

const SuperSavingDeals = () => {
    const displayedItems = featured_Products.slice(36, 43);
    return (
        <>
            <div className='mt-40 '>
                <div className='container_box nnt '>
                    <div className='mb-5 flex items-center justify-between'><Header title={heading[7].title} />
                        <div className='view_all'><ViewAll /></div>
                    </div>
                    
                </div>
            </div>
        </>
    )
}

export default SuperSavingDeals