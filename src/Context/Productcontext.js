import axios from "axios";
import React, { createContext,useEffect,useState } from "react";
import {products,categorys} from "../data";

export const Productcontext = createContext()
export const ProductContextProvider = (props)=>{
    let [product, setProduct] = useState([products]);
    let [category, setCategory] = useState([{name:"Pizza"},{name:"Drinks"},{name:"Vegetables"}]);


    useEffect(()=>{
    let fetch = async ()=>{
    try{
       let result=await axios.get("http://localhost:3000/food")
       let {food,category} = result.data;
       setProduct(food)
       setCategory(category)
    }
    catch(e){
        
    }
}
fetch()
    })
    

    return (<Productcontext.Provider value={{product,category}}>
                {props.children}
            </Productcontext.Provider>)

}