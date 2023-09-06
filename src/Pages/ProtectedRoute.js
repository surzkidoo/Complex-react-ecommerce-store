import React,{ useContext } from "react";
import { AuthContext } from "../Context/AuthContext";
import {Redirect} from "react-router-dom"


const ProtectedRoute=(props)=>{
    const {isAuthenticated} = useContext(AuthContext)
    const Component = props.component;
  return isAuthenticated ||true? <Component />: <Redirect to="/" />

}

export default ProtectedRoute;