import React, { useState, useContext, useRef, useEffect } from "react";
import { ProductContext } from "../productprovider";
import Loader from "./loader";

export default function ProductImage({
  product_image,
  id,
  quantity,
  setIsAddedToCart,
  isAddedToCart,
  isAddedToWishlist,
  setIsAddedToWishlist,
}) {
  const { addToCart, removeCart, addToWishlist, removeWishlist } =
    useContext(ProductContext);
  const [seleted, setseleted] = useState(0);
  const sc = useRef();
  const [showUpBtn, setShowUpBtn] = useState(false);
  const [showDownBtn, setShowDownBtn] = useState(false);
  const [showLoader,setShowLoader] = useState(false);

  useEffect(() => {
    product_image.length > 5 && setShowDownBtn(true);
    sc.current.scrollTop < 0 && setShowUpBtn(true);
  }, []);
  const changeImg = (id) => {
    setseleted(id);
  };

  const handleAddtoCart = (id, quantity) => {

      if (isAddedToCart) {
        removeCart(id);
        setIsAddedToCart(false);
      } else {
        addToCart(id, quantity);
        setIsAddedToCart(true);
      }
    
  };

  const handleAddtoWishlist = (id, userId) => {
    if (isAddedToWishlist) {
      removeWishlist(id);
      setIsAddedToWishlist(false);
      alert("remove");
    } else {
      addToWishlist(id, userId);
      setIsAddedToWishlist(true);
      alert("added");
    }
  };

  let handleDown = (e) => {
    sc.current.scrollTop != 0 ? setShowUpBtn(true) : setShowUpBtn(false);
    sc.current.scrollTop += 100;

    sc.current.scrollTop > 20 ? setShowDownBtn(false) : setShowDownBtn(true);
  };
  let handleTop = (e) => {
    sc.current.scrollTop != 0 ? setShowUpBtn(true) : setShowUpBtn(false);
    sc.current.scrollTop -= 100;
    sc.current.scrollTop < 0 ? setShowDownBtn(false) : setShowDownBtn(true);
  };

  return showLoader ? <Loader/> :  (
    <div className="side-product-container">
      <div className="product-image-container">
        <div className="slide-container" ref={sc}>
          {showUpBtn && (
            <div className="up-slide" onClick={handleTop}>
              up
            </div>
          )}
          {product_image.map((image, index) => (
            <div
              className={seleted===index? "slide active-image": "slide"}
              key={index}
              onMouseEnter={(e) => changeImg(index)}
            >
              <img src={"../" + image} className='slide-image' alt="" />
            </div>
          ))}
          {showDownBtn && (
            <div className="down-slide" onClick={handleDown}>
              down
            </div>
          )}
        </div>
        <div className="slide-display">
          <div className="like" onClick={() => handleAddtoWishlist(id, 1)}>
            <div className={isAddedToWishlist && "active"}>
            O
            </div>
          </div>
          <img className="slide-image-display" alt="" src={"../" + product_image[seleted]} />
        </div>
      </div>
      {isAddedToCart ? (
        <button
          className="product-add-to-cart-btn"
          onClick={() => handleAddtoCart(id, quantity)}
        >
          Remove From Cart
        </button>
      ) : (
        <button
          className="product-add-to-cart-btn"
          onClick={() => handleAddtoCart(id, quantity)}
        >
          Add To Cart
        </button>
      )}
    </div>
  );
}
