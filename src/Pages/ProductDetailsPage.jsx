import React from 'react'
import ProductDetailSlider from './ProductDetailSlider'
import ProductDetailsTab from '../Components/ProductDetailsTab'
import Review from '../Components/Review'
import SimilarProducts from '../Components/SimilarProducts'

const ProductDetailsPage = () => {

    return (
        <section className='container_box'>
            <div className='mt-10'>
                <div>
                    <ProductDetailSlider />
                </div>
                <div className='mt-20 public_sans'>
                    <ProductDetailsTab />
                </div>
                <div className='mt-10'>
                    <Review />
                </div>
                {/* <div>
                    <SimilarProducts />
                </div> */}
            </div>
        </section>
    )
}

export default ProductDetailsPage