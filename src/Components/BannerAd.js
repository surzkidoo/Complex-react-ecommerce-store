import React, { useContext } from 'react'
import { ProductContext } from '../productprovider';

export default function () {
  const { ad } = useContext(ProductContext);
  return (
    <div className='banner-ad-container'>
        <img src={ad.smallBanner[0]} alt='' className='banner-ad-image'/>
    </div>
  )
}
