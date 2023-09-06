import React,{useState} from "react";
import Result from "./ResultList"
import Card from "./Card";

const CategorySection = (props) => {

  const handleSort = (e) =>{
    props.sortBy(e.target.value)
  }
  return <div className="category-product-container">
        {/* <Result product={props.product}/> */}

        <div className="filter-product-header-container">
          <div className="filter-product-header">
          Product ({props.product.length.toLocaleString()})
          </div>
          <div className="filter-header-sort">
            <div>
             SORT BY
            </div>
            <select name="" onChange={handleSort}>
            <option value="A-Z">A-Z</option>
            <option value="Z-A">Z-A</option>
            </select>
          </div>
        </div>

        <div className="filter-product-container">
        {props.product.map((prod,index) => {
          return (
            <Card
              key={prod._id}
              prod={prod}
              index={index}
              showBtn
              showMore
            />
          );
        })}
        </div>

        </div>;
};

export default CategorySection;
