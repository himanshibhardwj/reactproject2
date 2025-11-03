import React from 'react'
import { IoClose } from 'react-icons/io5'

const DashboardModalAddress = ({ onClose }) => {

  return (
    <div className='modal-overlay inset-0'>
      <div className=" fixed border-1 border-[#E4E7E9] modal_cntnt rounded-md z-100 flex flex-col justify-center bg-white w-5/12" >
        <div className='flex justify-between items-center border-b-1 border-[#E4E7E9]'>
          <h3 className='text-[#191C1F] px-3 py-3 modal_hdng font-semibold'> Add Address</h3>
          <span onClick={onClose} className='cursor-pointer mx-3 modal_close_icn'><IoClose size={20} /></span>
        </div>
        <div className="modal-content p-4" >
          <form className='flex flex-col modal_box gap-2'>
            <div className='flex gap-3 mb-2'>
              <div className='w-full'>
                <label>Full name</label>
                <div className='flex gap-5 mt-2 frst_nme'><input type="text" placeholder=' Full name' className='outline-none border-1 border-[#E4E7E9] px-3 py-2 w-full rounded' />
                </div>
              </div>
              <div className='w-full'>
                <label>Phone Number</label>
                <div className='flex gap-5 mt-2 phne_num'><input type="text" placeholder='Enter 10 digit Phone Number' className='outline-none border-1 border-[#E4E7E9] px-3 py-2 w-full rounded' />
                </div>
              </div>
            </div>
            <div className=''>
              <label>Address</label>
              <div className='flex gap-5 mt-2 adrss'><input type="text" placeholder='Road No. 13/x, House no. 1320/C, Flat No. 5D' className='outline-none border-1 border-[#E4E7E9] px-3 py-2 w-full rounded' />
              </div>
            </div>
            <div className='flex gap-3 ldmrk_adress'>
              <div className='w-8/12'>
                <label>Landmark</label>
                <div className='flex gap-5 mt-2'><input type="text" className='outline-none border-1 border-[#E4E7E9] px-3 py-2 text-sm w-full rounded' />
                </div>
              </div>
              <div className='w-4/12 cntry_adress'>
                <label>Country
                </label><br />
                <select className='border-1 rounded border-[#E4E7E9] mt-2 w-full py-2 outline-none text-[#929FA5]'>
                  <option value='Select'>Select..</option>
                  <option value="India">India</option>
                </select>
              </div>
            </div>
            <div className='flex gap-3 cty_adress'>
              <div className='w-4/12 '>
                <label>City
                </label><br />
                <select className='border-1 rounded border-[#E4E7E9] mt-2 w-full py-2 outline-none text-[#929FA5]'>
                  <option value='Select'>Select..</option>
                  <option value="India">India</option>
                </select>
              </div>
              <div className='w-4/12'>
                <label>Zip code</label>
                <div className='flex gap-5 mt-2'><input type="text" className='outline-none border-1 border-[#E4E7E9] px-3 py-2 text-sm w-full rounded' />
                </div>
              </div>
            </div>
          </form>
          <div className='flex justify-end gap-3 mt-3 close_sve_modal'>
            <button className='cursor-pointer text-white px-3 py-1 rounded bg-blue-700' onClick={onClose}>Close</button>
            <button className='cursor-pointer border-1 px-3 py-1 rounded bg-white'>Save</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default DashboardModalAddress