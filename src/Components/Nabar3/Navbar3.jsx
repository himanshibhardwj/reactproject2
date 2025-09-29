import React from 'react'

const Navbar3 = () => {
  const nav_itm = [
    {
      title: 'Health Resource Center'
    },
    {
      title: 'Winter Care Essentials'
    },
    {
      title: 'Vitamins & Nutrition'
    },
    {
      title: 'Nutritional Drinks'
    },
    {
      title: 'Sexual Wellness'
    },
    {
      title: 'Stomach Care'
    },
    {
      title: 'Fitness Supplements'
    },
    {
      title: 'Pain Relief'
    },
    {
      title: 'Healthy Snacks'
    }
  ]
  return (
    <div className='p-3 bg-[#0071BC33]'>
      <div className='container flex gap-8 px-5'>
        {nav_itm.map((item, index) => {
          return (
            <div key={index}>
              <span className='font-bold text-[15px] text-[#0070BC]'>{item.title}</span>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default Navbar3