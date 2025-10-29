import React from 'react'
import PaymentOptionsCart from './PaymentOptionsCart'

const FormCheckOut = () => {
  return (
    <div className='roboto text-sm'>
      <h3 className='mb-3 font-medium'>Billing Information</h3>
      <form>
        <div className='flex gap-3 mb-2'>
          <div className='w-7/12'>
            <label>User name</label>
            <div className='flex gap-5 mt-2'><input type="text" placeholder='First name' className='outline-none border-1 border-[#E4E7E9] px-3 py-2 text-sm w-full rounded' />
              <input type='text' placeholder='Last name' className='outline-none rounded border-1 border-[#E4E7E9] px-3 text-sm py-1 w-full' /></div>
          </div>
          <div className='w-6/12'>
            <label>Company Name (Optional)</label><br />
            <div className='flex gap-4 mt-2 w-full'><input type="text" className='rounded w-full outline-none border-1 border-[#E4E7E9] px-3 py-2' /></div>
          </div>
        </div>
        <div className='mt-2 flex gap-2 flex-col mb-2'>
          <label>Street Address
          </label>
          <div className=' w-full border-1 rounded border-[#E4E7E9] py-2'><input type="text" placeholder=' House no and street no' className='outline-none px-3  text-sm w-full ' /></div>
          <div className='w-full border-1 border-[#E4E7E9] rounded py-2'><input type='text' placeholder=' Apartment, suite, unit, etc (Optional)' className='outline-none px-3 text-sm w-full ' /></div>
        </div>
        <div className='flex justify-between mb-2'>
          <div className='w-3/12 '>
            <label>Country
            </label><br />
            <select className='border-1 rounded border-[#E4E7E9] mt-2 w-full py-2 outline-none text-[#929FA5]'>
              <option value='Select'>Select..</option>
              <option value="India">India</option>
            </select>
          </div>
          <div className='w-3/12'>
            <label>Region/State
            </label><br />
            <select className='border-1 rounded border-[#E4E7E9] mt-2 w-full py-2 outline-none text-[#929FA5]'>
              <option value='Select'>Select..</option>
              <option value="India">India</option>
            </select>
          </div>
          <div className='w-3/12'>
            <label>City
            </label><br />
            <select className='border-1 rounded border-[#E4E7E9] mt-2 w-full py-2 outline-none text-[#929FA5]'>
              <option value='Select'>Select..</option>
              <option value="India">India</option>
            </select>
          </div>
          <div className='w-2/12'>
            <label>Zip Code
            </label><br />
            <input className='outline-none rounded border-1 border-[#E4E7E9] mt-2 w-full px-3 py-2' />
          </div>
        </div>
        <div className='flex gap-3'>
          <div className='w-6/12'>
            <label>
              Email
            </label>
            <div className='w-full mt-2'><input className='rounded outline-none w-full border-1 border-[#E4E7E9] px-3 py-2' /></div>
          </div>
          <div className='w-6/12'>
            <label>
              Phone Number
            </label>
            <div className='w-full mt-2'><input className='rounded outline-none w-full border-1 border-[#E4E7E9] px-3 py-2' /></div>
          </div>
        </div>
        <PaymentOptionsCart />
      </form>
    </div>
  )
}

export default FormCheckOut