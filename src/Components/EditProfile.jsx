import React from 'react'
import CartBreadcrum from './CartBreadcrum'
import EditProfileBreadcrum from './EditProfileBreadcrum'
import profile_img from '../assets/Home/profile_img.png'
import EditProfileForm from './EditProfileForm'

const EditProfile = ({ brdcrmName }) => {
    return (
        <section>
            <EditProfileBreadcrum />
            <div className='flex item-center justify-center'>
                <div className='w-5/12 mt-5 border-1 border-[#E4E7E9] px-2 py-2 edt_prfle_frm'>
                    <h3 className='text-sm text-[#191C1F] uppercase px-3 py-3 border-b-1 border-[#E4E7E9]'> Your Profile</h3>
                    <div className='mt-3 flex edt_prfle_cntaner'>
                        <div className='w-full max-w-2/12 edt_prfle_img'>
                            <img src={profile_img} alt='profile imagee' className='w-full rounded-full' />
                        </div>
                        <div className='w-9/12 edt_profile_form'>
                            <EditProfileForm />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default EditProfile