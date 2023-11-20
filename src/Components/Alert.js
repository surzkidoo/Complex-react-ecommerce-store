import React,{useState,useEffect,useContext} from 'react'
import { BiErrorCircle } from 'react-icons/bi';
import { FaXmark } from 'react-icons/fa6';
import { UIcontext } from '../Context/UIcontext';

export const Alert = (props) => {
    const [open, setopen] = useState(true);
    let {alertcomponents,setAlertComponents} = useContext(UIcontext)


    useEffect(() => {
    setTimeout(()=>{
        setopen(false)
        setAlertComponents(prev=>prev.filter((e,index)=>index!=props.index))
    },5000)


    }, [])
    
   const handleClose = () =>{
    setopen(false)
    setAlertComponents((prev,index)=>prev.filter(e=>index!=props.index))

   }
  return (

    <div className={props.type=='error'? 'alert alert-error' : 'alert alert-success'}>
        <BiErrorCircle className='alert-icon'/>
        <div className='alert-text'>
            {props.message}
        </div>
        <FaXmark className='alert-close' onClick={handleClose}/>

    </div>
  )
}
