import React from 'react'
import { useContext } from 'react'
import { useState } from 'react'
import { UIcontext } from '../Context/UIcontext'
import { Alert } from './Alert'

export default function AlertContainer() {
   let {alertcomponents} = useContext(UIcontext)
  return (
    <div className='alert-container'>
       {
        alertcomponents.map((data,index)=>{
            return <Alert {...data} index={index}/>
        })
       }
    </div>
  )
}
