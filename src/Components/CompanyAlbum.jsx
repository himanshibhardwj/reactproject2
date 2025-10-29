import React from 'react'
import { heading } from '../assets/data'
import Header from '../Components/Header/Header';
import { health_concern } from '../assets/data';
import Items from './Items';



const CompanyAlbum = () => {
  return (
    <div className='container_box'>
      <div className='mt-5 header'>
        <Header title={heading[10].title} />
        <div className='flex items-center justify-between'>
          <Items />
        </div>
      </div>
      <div className='cmpny_album flex justify-between'>
        {health_concern.slice(18,22).map((item, index) => {
          return (<Items key={index} image={item.image} title={item.title} />)
        })}
      </div>
    </div>
  )
}

export default CompanyAlbum