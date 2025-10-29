import React from 'react'
import Header from '../Components/Header/Header'
import { featured_Products, heading } from '../assets/data'
import ItemsSlider from '../Components/ItemsSlider'
import Newsletter from '../Components/Newsletter'

const OurProduct = () => {
    return (
        <div className='mt-10'>
            <div className='container_box'>
                <div className='mb-5 flex items-center justify-between'>
                    <Header title={heading[12].title} />
                </div>
                <div className='grid grid-cols-5 gap-7 our_products_cntainer'>
                    {featured_Products.slice(20, 40).map((item, index) => {
                        return (<ItemsSlider key={index} id={item.id} image={item.image} name={item.name} deliver_time={item.deliver_time} time={item.time} star_content={item.star_content} old_price={item.old_price} new_price={item.new_price} discount={item.discount} />)
                    }
                    )}
                </div>
                <div className='mt-10'>
                    <Newsletter />
                </div>
            </div>
        </div>
    )
}

export default OurProduct