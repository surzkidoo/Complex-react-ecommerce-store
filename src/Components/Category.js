import React from "react";

const Category = (props) => {
  
  let { category } = props;
  return (
      <li className="nvg-category-item">
        <a className="category-link " href={`/category/${category.category_name}`}>
          {category.icon} {category.category_name}
        </a>

        
        <div className="more-category-container">
        {
          category.subcategory.map((sub)=>{

            return <div className="sub-category-container-menu">
              <div className="category-header">{sub.category_name}</div>

            {sub.subcategory.map((sub)=>{
              return <div className="sub-menu-menu">{sub.category_name}</div>

            })}
            </div>
          })
        }


        </div>
      </li>
  );
};

export default Category;
