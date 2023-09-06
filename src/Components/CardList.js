import React, { useContext, useState, useRef } from "react";
import Card from "./Card";
import { ProductContext } from "../productprovider";

const CardList = (props) => {
  const { products, title, url, color } = props.data;
  const sc = useRef();
  const [value, setvalue] = useState(0);
  let handleright = (e) => {
    sc.current.scrollLeft += 1000;
  };
  let handleleft = (e) => {
    sc.current.scrollLeft -= 1000;
  };
  return (
    <div className="display-container">
      <div className="nvg-left-product" onClick={handleleft}>
        {"<"}
      </div>
      <div className="nvg-right-product" onClick={handleright}>
        {">"}
      </div>
      <div
        className="display-title-container"
        style={{ backgroundColor: color }}
      >
        <h3 className="display-title">{title}</h3>
        <div>
          <a className="text-see-all" href={url}>
            See All
          </a>
        </div>
      </div>

      <div className="card-list-container" ref={sc}>
        {products.map((prod, index) => {
          return (
            <Card
              key={prod._id}
              prod={prod}
              index={index}
            />
          );
        })}
      </div>
    </div>
  );
};

export default CardList;
