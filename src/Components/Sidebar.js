import React, { useContext } from "react";
import Category from "./Category";
import { ProductContext } from "../productprovider";



const Sidebar = (props) => {
  const { categorys } = useContext(ProductContext);
  return (
    <div className="sidebar">
      <div className="sidebar-header"> <span>category</span>  <span className="cancel-menu-mobile">X</span></div>
      <div className="category-container">
        {categorys.map((cat) => {
          return <Category category={cat} />;
        })}
      </div>
      
  
    </div>
  );
};

export default Sidebar;
