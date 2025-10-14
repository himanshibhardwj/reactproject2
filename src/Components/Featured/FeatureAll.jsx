import React from 'react'
import { heading } from '../../assets/data'
import Header from '../Header/Header'
import ViewAll from './ViewAll'
import ItemsSlider from '../ItemsSlider'


const FeatureAll = () => {
    return (
        <>
            <div className='mt-40 '>
                <div className='container_box nnt '>
                    <div className='mb-5 flex items-center justify-between'><Header title={heading[0].title} />
                        <div className='view_all cursor-pointer'><ViewAll /></div>
                    </div>
                        <ItemsSlider id={item.id} image={item.img} name={image} deliver_time = {item.deliver_time} time= {item.time} star_content = {item.star_content} old_price={item.old_price} new_price={item.new_price} discount= {item.discount}/>
                </div>
            </div>
        </>
    )
}

export default FeatureAll