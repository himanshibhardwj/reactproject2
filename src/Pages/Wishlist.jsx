import React from 'react'
import Header from '../Components/Header/Header'
import ViewAll from '../Components/Featured/ViewAll'
import { Link } from 'react-router-dom'
import { featured_Products, heading } from '../assets/data'
import ItemsSlider from '../Components/ItemsSlider'
import JustForYou from '../Components/JustForYou'

const Wishlist = () => {
  return (
    <section>
      <div className='mt-20'>
        <div className='container_box nnt'>
          <div className='mb-5 flex heading_view justify-between'><Header title={heading[13].title} />
          </div>
          <div className='grid grid-cols-5 gap-7 our_products_cntainer'>
            {featured_Products.slice(25, 30).map((item, index) => {
              return (<ItemsSlider key={index} id={item.id} image={item.image} name={item.name} deliver_time={item.deliver_time} time={item.time} star_content={item.star_content} old_price={item.old_price} new_price={item.new_price} discount={item.discount} />)
            }
            )}
          </div>
          <JustForYou/>
        </div>
      </div>
    </section>
  )
}

export default Wishlist