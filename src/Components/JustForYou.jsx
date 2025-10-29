import React from 'react'
import { featured_Products, heading } from '../assets/data'
import ItemsSlider from './ItemsSlider'
import { Link } from 'react-router-dom'
import Header from './Header/Header'
import ViewAll from './Featured/ViewAll'

const JustForYou = () => {
    return (
        <section className='mt-20'>
            <div className='mb-5 flex heading_view justify-between'><Header title={heading[14].title} />
                <div className='view_all cursor-pointer'><Link to={'/ourproducts'}><ViewAll /></Link></div>
            </div>
            <div className='grid grid-cols-5 gap-7 our_products_cntainer'>
                {featured_Products.slice(34, 39).map((item, index) => {
                    return (<ItemsSlider key={index} id={item.id} image={item.image} name={item.name} deliver_time={item.deliver_time} time={item.time} star_content={item.star_content} old_price={item.old_price} new_price={item.new_price} discount={item.discount} />)
                }
                )}
            </div>
        </section>
    )
}

export default JustForYou