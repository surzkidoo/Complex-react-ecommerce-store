import React, { useState, useContext, useRef, useEffect } from "react";
import { ProductContext } from "../productprovider";
import Loader from "./loader";
import { AiFillHeart, AiOutlineArrowDown, AiOutlineArrowUp, AiOutlineHeart } from "react-icons/ai";
import { BsCartDash, BsCartPlus, } from "react-icons/bs";
import { UIcontext } from "../Context/UIcontext";
import { Alert } from "./Alert";

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
  const {setAlertComponents} = useContext(UIcontext)
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
        let alert =<Alert type='success' message='Remove From Cart Succesfully' />
       // setAlertComponents(prev=>[...prev,)

      } else {
        addToCart(id, quantity);
        setIsAddedToCart(true);
        // setAlertComponents(prev=>[...prev,{type:'success',message:'Added To Cart Succesfully'}])
      }
    
  };

  const handleAddtoWishlist = (id, userId) => {
    if (isAddedToWishlist) {
      removeWishlist(id);
      setIsAddedToWishlist(false);
    } else {
      addToWishlist(id, userId);
      setIsAddedToWishlist(true);
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
              <AiOutlineArrowUp/>
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
             <AiOutlineArrowDown/>
            </div>
          )}
        </div>
        <div className="slide-display">
          <div className="like" onClick={() => handleAddtoWishlist(id, 1)}>
            <div className={isAddedToWishlist ? "active" : undefined} style={{display:"flex",alignItems:"center",justifyContent:'center'}}>
               {!isAddedToWishlist ? <AiOutlineHeart/>: <AiFillHeart/>}
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
        <BsCartDash size={24}/>
          Remove From Cart
        </button>
      ) : (
        <button
          className="product-add-to-cart-btn"
          onClick={() => handleAddtoCart(id, quantity)}
        >
                  <BsCartPlus size={24}/>

          Add To Cart
        </button>
      )}
    </div>
  );
}
