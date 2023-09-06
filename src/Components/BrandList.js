import React,{useContext} from 'react'
import { ProductContext } from "../productprovider";

export default function BrandList() {
  const { brand } = useContext(ProductContext);


  return (
 
    <div className='brand-container'>
    {
        brand.map((brnd)=>{
          return<div className='brand'> <img  className="brand-image-1" src={brnd.brandimage} alt={brnd.brandimage} /> {brnd.name}</div>
        })
    }
   </div>
  )
}
