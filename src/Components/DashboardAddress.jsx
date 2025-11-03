import React, { useState } from 'react'
import { HiPlus } from 'react-icons/hi'
import { address_cntent } from '../assets/data'
import { FiEdit } from 'react-icons/fi'
import { MdDelete } from 'react-icons/md'
import { Link } from 'react-router-dom'
import DashboardModalAddress from './DashboardModalAddress'

const DashboardAddress = () => {
    const [isOpenModal, setIsOpenModal] = useState(false)
    const [deleteBox, setDeleteBox] = useState(false)

    const handleOpenModal = () => {
        setIsOpenModal(true)
    }

    return (
        <div className='outfit text-sm'>
            <div className='grid grid-cols-3 gap-5 dshbrd_addrses'>
                <div className='shadow flex items-center flex-col gap-3 p-3 cursor-pointer justify-center' onClick={() => { handleOpenModal(true) }}>
                    <button className='w-[35px] h-[35px] plus_icn_addrss  flex items-center justify-center cursor-pointer rounded-full shadow border-1'>
                        <HiPlus size={20} />
                    </button>
                    <div className='w-full cursor-pointer add_addrss'>
                        <Link><button className='w-full border-1 py-2 rounded cursor-pointer'>Add Address</button></Link>
                    </div>
                </div>
                {
                    address_cntent.slice(0, 4).map((item, index) => {
                        return (
                            <div className='border-1 rounded border-[#D2D2D2] p-3 h-full' key={index}>
                                <div className='flex items-center justify-between'>
                                    <span className='font-semibold bling_addrss'>Billing Address</span>
                                    <div className='flex items-center gap-2 opn_clse'>
                                        <span className='cursor-pointer' onClick={() => { handleOpenModal(true) }}><FiEdit size={20} /></span>
                                        <span className='cursor-pointer'><MdDelete size={20} /></span>
                                    </div>
                                </div>
                                <div className='name_address'>
                                    <span className='text-[#DB3030] font-semibold text-[13px]'>{item.hdng_1}</span>
                                    <p>{item.address}</p>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
            {isOpenModal && (
                <DashboardModalAddress onClose={() => setIsOpenModal(false)} />
            )}
        </div>
    )
}

export default DashboardAddress