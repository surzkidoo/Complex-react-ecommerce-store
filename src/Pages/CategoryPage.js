import React, { useState, useEffect, useContext } from "react";
import { useParams } from "react-router-dom";
import SidebarCategory from "../Components/SidebarCategory";
import axios from "axios";
import CategorySection from "../Components/CategorySection";
import { ProductContext } from "../productprovider";

const CategoryPage = () => {
  const { categorys } = useContext(ProductContext);
  const { id, sub } = useParams();
  const [CategoryId, setCategoryId] = useState(
    categorys.findIndex((ele) => {
      return ele.category_name == id;
    })
  );
  const [dcategory, setDcategory] = useState(categorys[CategoryId]);
  const { product } = useContext(ProductContext);
  const [filtered, setFiltered] = useState(product);
  const [brandlist, setbrandlist] = useState(dcategory.brands);
  const [openFilter, setOpenFilter] = useState(false);

  const filterSubCategory = (id) => {
    setFiltered(() => {
      return product.filter((prod) => {
        return prod.product_category === id;
      });
    });
  };

  const filterByBrand = (values) => {
    console.log(values);
    setFiltered((prev) => {
      return prev.filter((prod) => {
        return [...values].includes(prod.product_brand);
      });
    });
  };
  const sortBy = (type) => {
    if (type == "A-Z") {
      setFiltered([
        ...filtered.sort((a, b) => {
          var x = a.product_name.toLowerCase();
          var y = b.product_name.toLowerCase();
          if (x < y) {
            return -1;
          }
          if (x > y) {
            return 1;
          }
          return 0;
        })
      ]);
      // setFiltered([...newfiltered])
    } else {
      setFiltered([
        ...filtered.sort((a, b) => {
          var x = b.product_name.toLowerCase();
          var y = a.product_name.toLowerCase();
          if (x < y) {
            return -1;
          }
          if (x > y) {
            return 1;
          }
          return 0;
        })
      ]);
    }
  };

  return (
    <div className="overall-container">
      <div className="main-category-container">
        <SidebarCategory
          openFilter={openFilter}
          catid={dcategory.category_id}
          setfilter={setFiltered}
          brands={brandlist}
          filterSubCategory={filterSubCategory}
          filterByBrand={filterByBrand}
          setbrandlist={setbrandlist}
          features={dcategory.features}
          sub={dcategory.subcategory}
        />
        <CategorySection product={filtered} sortBy={sortBy} />
        <button
          className="open-filter-btn"
          onClick={() => setOpenFilter(!openFilter)}
        >
          {openFilter ? "Close Filter" : "Filter"}
        </button>
      </div>
    </div>
  );
};

export default CategoryPage;
