import React, { useContext } from 'react'
import { ProductContext } from '../productprovider';

export default function () {
  const { ad } = useContext(ProductContext);
  return (
    <div className='in-ad-container'>
        <div className='in-add'>
        <img src={ad.banner[0]} className='in-ad-image'/>
        </div>

        <div className='in-add'>
        <img src={ad.banner[1]} className='in-ad-image'/>
        </div>
    </div>
  )
}
