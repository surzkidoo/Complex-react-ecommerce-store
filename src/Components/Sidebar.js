import React, { useContext,useState } from "react";
import Category from "./Category";
import { ProductContext } from "../productprovider";
import { FaX } from "react-icons/fa6";
import { handle } from "express/lib/router";
import { UIcontext } from "../Context/UIcontext";



const Sidebar = (props) => {
  const { categorys } = useContext(ProductContext);
  const {categoryMenu,setCategoryMenu} = useContext(UIcontext);

  const handleMenu = () =>{
    setCategoryMenu(false)
  }
  return (
    <div className="sidebar" style={{display : categoryMenu &&  "block" }}>
      <div className="sidebar-header"> <span>category</span>  <span className="cancel-menu-mobile" ><FaX onClick={handleMenu}/></span></div>
      <div className="category-container">
        {categorys.map((cat) => {
          return <Category category={cat} />;
        })}
      </div>
      
  
    </div>
  );
};

export default Sidebar;
