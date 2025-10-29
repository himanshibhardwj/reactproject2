import React from 'react'
import FormCheckOut from '../Components/FormCheckOut'
import OrderSummary from '../Components/OrderSummary'
import CartBreadcrum from '../Components/CartBreadcrum'
import { breadcrum_cntnt } from '../assets/data'


const CheckOut = () => {
    return (
        <>
            <CartBreadcrum  breadcrum_cntnt = {breadcrum_cntnt[1].brdcrum_txt}/>
            <div className='container_box flex justify-between '>
                <div className='w-7/12 mt-5'>
                    <FormCheckOut />
                </div>
                <div className='w-4/12 mt-5'>
                    <OrderSummary />
                </div>
            </div>

        </>
    )
}

export default CheckOut