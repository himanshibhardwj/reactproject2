import React from 'react'
import Navbar from '../Navbar/Navbar'
import { FaArrowRight } from 'react-icons/fa'

const LoginSignup = () => {
    return (
        <>
            <div className='login'>
                <span>Enter Mobile Number</span>
                <div>
                    <input type='text' />
                </div>
                <p>Don't have an Account? <span>SignUp</span></p>
                <button>LOG IN <FaArrowRight/></button>
            </div>
        </>
    )
}

export default LoginSignup