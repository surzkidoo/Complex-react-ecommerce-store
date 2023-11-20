import React, { useContext, useMemo, useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { ProductContext } from "../productprovider";
import {
  BsCartDash,
  BsCartPlus,
  BsHearts,
  BsStar,
  BsStarFill,
} from "react-icons/bs";
import { FaHeartCircleMinus } from "react-icons/fa6";

const Card = ({ prod, addtocart, ...props }) => {
  let history = useHistory();
  const { removeWishlist, addToCart, removeCart, cart } =
    useContext(ProductContext);
  const [isAddedAlready, setisAddedAlready] = useState(false);

  useMemo(() => {
    cart.findIndex((ele) => {
      if (prod.product_id == ele.product_id) {
        setisAddedAlready(true);
      }
    });
  }, [cart]);

  const Rating = ({num}) => {
    let ratingjsx = [];
    for (let index = 0; index <= 4; index++) {
      if (num >= index + 1) {
        ratingjsx = [...ratingjsx, <BsStarFill color="yellow" />];
      } else {
        ratingjsx = [...ratingjsx, <BsStar />];
      }
    }
    return ratingjsx;
  };

  const handleAddToCart = (id) => {
    if (isAddedAlready) {
      removeCart(id);
      setisAddedAlready(false);
    } else {
      addToCart(id, 1);
      setisAddedAlready(true);
    }
  };

  return (
    <div className="card">
      <div onClick={() => history.push("/product/" + prod.product_id)}>
        <div className="card-image-container">
          <img
            src={"../" + prod.product_img[0]}
            className="product-image"
            alt=""
          />
          <div className="discount-tag">-{prod.product_discount}%</div>
        </div>
        <div className="product-description-container">
          <div className="product-name">{prod.product_name}</div>
          {props.showMore && (
            <div className="product-rate">
              <div className="rating-container">
                <Rating num={prod.product_rating}/>
              </div>
            </div>
          )}
          <div className="product-price-container">
            <div className="price">₦{prod.product_price.toLocaleString()}</div>
            <div className="price-discount">
              ₦{prod.product_discount_price.toLocaleString()}
            </div>
          </div>
          {props.showMore && (
            <>
              <div className="you-save" style={{ color: "darkgreen" }}>
                You Save ₦
                {(
                  prod.product_discount_price - prod.product_price
                ).toLocaleString()}
              </div>
            </>
          )}
        </div>
      </div>

      {props.showBtn && (
        <button
          className={
            isAddedAlready
              ? "card-add-to-cart-btn already-in-cart"
              : "card-add-to-cart-btn"
          }
          onClick={() => {
            handleAddToCart(prod.product_id);
          }}
        >
          {isAddedAlready ? (
            <>
              
              <BsCartDash size={18} />
              Remove From Cart
            </>
          ) : (
            <>
      
              <BsCartPlus size={18} />
              Add To Cart
            </>
          )}
        </button>
      )}
      {props.wBtn && (
        <button
          className="remove-wishlist"
          onClick={() => removeWishlist(prod.product_id)}
        >
          <FaHeartCircleMinus size={24} color="darkred" />
        </button>
      )}
    </div>
  );
};
export default Card;
