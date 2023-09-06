import React from "react";

const Category = (props) => {
  
  let { category } = props;
  return (
      <li className="nvg-category-item">
        <a className="category-link " href={`/category/${category.category_name}`}>
          {category.category_name}
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
        <div className="sub-category-container-menu">
            <div className="category-header">Baby cloths</div>
            <div className="sub-menu-menu">baby shoes</div>
            <div className="sub-menu-menu">baby cap lkskjd skfkd dfsjfjdsj</div>
            <div className="sub-menu-menu">baby pants</div>

        </div>

        <div className="sub-category-container-menu">
            <div className="category-header">Baby cloths</div>
            <div className="sub-menu-menu">baby shoes</div>
            <div className="sub-menu-menu">baby cap</div>
            <div className="sub-menu-menu">baby pants</div>

        </div><div className="sub-category-container-menu">
            <div className="category-header">Baby cloths</div>
            <div className="sub-menu-menu"> baby shoes</div>
            <div className="sub-menu-menu">baby cap</div>
            <div className="sub-menu-menu">baby pants</div>

        </div><div className="sub-category-container-menu">
            <div className="category-header">Baby cloths</div>
            <div className="sub-menu-menu">baby shoes</div>
            <div className="sub-menu-menu">baby cap</div>
            <div className="sub-menu-menu">baby pants</div>

        </div>
        <div className="sub-category-container-menu">
            <div className="category-header">Baby cloths</div>
            <div className="sub-menu-menu">baby shoes</div>
            <div className="sub-menu-menu">baby cap</div>
            <div className="sub-menu-menu"> baby pants</div>

        </div>

        <div className="sub-category-container-menu">
            <div className="category-header">Baby cloths</div>
            <div className="sub-menu-menu">baby shoes</div>
            <div className="sub-menu-menu">baby </div>
            <div className="sub-menu-menu">baby pants</div>

        </div>

        <div className="sub-category-container-menu">
            <div className="category-header">Baby cloths</div>
            <div className="sub-menu-menu">baby shoes</div>
            <div className="sub-menu-menu">baby cap</div>
            <div className="sub-menu-menu">baby pants</div>

        </div>
        <div className="sub-category-container-menu">
            <div className="category-header">Baby cloths</div>
            <div className="sub-menu-menu"> baby shoes</div>
            <div className="sub-menu-menu">baby cap</div>
            <div className="sub-menu-menu">baby pants</div>

        </div>
        <div className="sub-category-container-menu">
            <div className="category-header">Baby cloths</div>
            <div className="sub-menu-menu">baby shoes</div>
            <div className="sub-menu-menu">baby cap</div>
            <div className="sub-menu-menu">baby pants</div>

        </div>
        <div className="sub-category-container-menu">
            <div className="category-header">Baby cloths</div>
            <div className="sub-menu-menu">baby shoes</div>
            <div className="sub-menu-menu">baby cap</div>
            <div className="sub-menu-menu"> baby pants</div>

        </div>

        <div className="sub-category-container-menu">
            <div className="category-header">Baby cloths</div>
            <div className="sub-menu-menu">baby shoes</div>
            <div className="sub-menu-menu">baby cap lkskjd skfkd dfsjfjdsj</div>
            <div className="sub-menu-menu">baby pants</div>

        </div>

        <div className="sub-category-container-menu">
            <div className="category-header">Baby cloths</div>
            <div className="sub-menu-menu">baby shoes</div>
            <div className="sub-menu-menu">baby cap</div>
            <div className="sub-menu-menu">baby pants</div>

        </div>
        <div className="sub-category-container-menu">
            <div className="category-header">Baby cloths</div>
            <div className="sub-menu-menu"> baby shoes</div>
            <div className="sub-menu-menu">baby cap</div>
            <div className="sub-menu-menu">baby pants</div>

        </div>
        <div className="sub-category-container-menu">
            <div className="category-header">Baby cloths</div>
            <div className="sub-menu-menu">baby shoes</div>
            <div className="sub-menu-menu">baby cap</div>
            <div className="sub-menu-menu">baby pants</div>

        </div>
        <div className="sub-category-container-menu">
            <div className="category-header">Baby cloths</div>
            <div className="sub-menu-menu">baby shoes</div>
            <div className="sub-menu-menu">baby cap</div>
            <div className="sub-menu-menu"> baby pants</div>

        </div>

        </div>
      </li>
  );
};

export default Category;
