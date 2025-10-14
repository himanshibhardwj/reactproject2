import React from 'react'
import { heading } from '../assets/data'
import Header from '../Components/Header/Header';
import { health_concern } from '../assets/data';
import Items from './Items';



const CompanyAlbum = () => {
  const health = health_concern.slice(18, 24)
  return (
    <div className='container_box'>
      <div className='mt-5'>
        <Header title={heading[10].title} />
        <div className='flex items-center justify-between'>
            <Items/>
        </div>
      </div>
      <div>
      </div>
    </div>
  )
}

export default CompanyAlbum