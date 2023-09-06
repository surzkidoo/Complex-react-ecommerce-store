
import React, { useContext,useEffect,useState } from "react";
import FoodCard from "./Card";
import { ProductContext } from "../productprovider";
import {useParams} from "react-router-dom"

const ResultList = ({ props }) => {
  const {removecart,addtocart,} = useContext(ProductContext);
  const {slug} = useParams()

  return (
    <div className="slideshow">
    <h5>{slug}</h5>
    <div className="row justify-content-around">
      {/* {props.product.map((prod) => {
        return (
          <FoodCard key={prod._id} prod={prod} removecart={removecart} addtocart={addtocart}/>
        );
      })} */}
    </div>
    </div>
  );
};

export default ResultList;