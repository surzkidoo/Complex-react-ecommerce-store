import React, { useContext, useMemo, useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { ProductContext } from "../productprovider";

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

  const rating = () => {
    let num = prod.product_rating;
    let ratingjsx = [];
    for (let index = 0; index <= 4; index++) {
      if (num >= index + 1) {
        ratingjsx = [...ratingjsx, "hi"];
      } else {
        ratingjsx = [...ratingjsx, <div>x</div>];
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
              <div className="rating-container">{rating()}</div>
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
              <div className="you-save">
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
          className="card-add-to-cart-btn"
          onClick={() => {
            handleAddToCart(prod.product_id);
          }}
        >
          {isAddedAlready ? "Remove From Cart" : "Add To Cart"}
        </button>
      )}
      {props.wBtn && (
        <button
          className="remove-wishlist"
          onClick={() => removeWishlist(prod.product_id)}
        >
          O
        </button>
      )}
    </div>
  );
};
export default Card;
