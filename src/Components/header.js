import React, { useState, useContext } from "react";
import Cartsec from "./Cartsec";
import Checkout from "../Pages/CheckoutPage";
import Model from "./model";
import Message from "./Message";
import { UIcontext } from "../Context/UIcontext";
import { Link } from "react-router-dom";
import { ProductContext } from "../productprovider";
import { AuthContext } from "../Context/AuthContext";
import {FaCartShopping,FaUser, FaMagnifyingGlass ,FaArrowLeft, FaXmark, FaRegistered } from 'react-icons/fa6'
import {AiFillDelete, AiOutlineLogin, AiOutlineMenu, AiOutlineQuestionCircle } from 'react-icons/ai'
import { BsBook, BsBoxArrowInDown, BsHeart, BsHeartFill, BsSignIntersection, BsUiChecksGrid } from "react-icons/bs";
import { BiCart, BiUser } from "react-icons/bi";



const Header = () => {
  const {
    register,
    setRegister,
    model,
    cartsec,
    setModel,
    setCartsec,
    login,
    setLogin,
    loader,
    checkoutsec,
    setCheckoutSec,
    setCategoryMenu,
    headerShow,
  } = useContext(UIcontext);
  const { loggedUser, isAuth } = useContext(AuthContext);
  const { calCart, product } = useContext(ProductContext);
  const [suggestion, setsuggestion] = useState(false);
  const [suggestionData, setsuggestionData] = useState([]);
  const [openSearch, setOpenSearch] = useState(false)

  const handlesuggest = (e) => {
    if (e.target.value) {
      setsuggestion(true);
      setsuggestionData(
        product.filter((item) =>
          item.product_name.toLowerCase().includes(e.target.value.toLowerCase())
        )
      );
    } else {
      setsuggestion(false);
    }
  };

  const deleteSugg = (delItem) => {
    setsuggestionData((prev) =>
      prev.filter((item) => item.product_id != delItem.product_id)
    );
  };


  return (
    headerShow && (
      <div className="header">
        <div className="logo-container">
          <AiOutlineMenu className="menu-toggler icon-color" onClick={()=>setCategoryMenu(true)} size={24}/>
          <svg className="logo" width="62" height="62" viewBox="0 0 62 62" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M0.00442708 2.21365C0.00442708 1.62656 0.237656 1.0635 0.652805 0.648363C1.06795 0.233223 1.63102 0 2.21813 0H4.15733C7.37605 0 9.2267 2.09412 10.2981 4.1838C11.0287 5.61382 11.5555 7.35818 11.9938 8.87232H57.5739C58.258 8.87253 58.9328 9.03125 59.5452 9.33605C60.1577 9.64085 60.6912 10.0834 61.1038 10.6291C61.5165 11.1747 61.7971 11.8085 61.9236 12.4808C62.0501 13.1531 62.0191 13.8456 61.8331 14.5039L55.2097 37.8579C54.6828 39.7108 53.5661 41.3413 52.0289 42.5022C50.4916 43.6631 48.6177 44.291 46.6914 44.2908H24.2046C22.2622 44.2914 20.3734 43.6534 18.8294 42.475C17.2853 41.2965 16.1715 39.6431 15.6597 37.7694L12.8173 27.343C12.801 27.2963 12.7863 27.2491 12.773 27.2014L8.2084 11.7191L7.76566 10.2271C7.32292 8.69523 6.93331 7.34047 6.34889 6.20266C5.64493 4.83019 4.99853 4.43173 4.1529 4.43173H2.2137C1.62659 4.43173 1.06353 4.19851 0.648377 3.78337C0.233228 3.36823 0 2.80518 0 2.21808L0.00442708 2.21365ZM24.3684 62C26.1297 62 27.8189 61.3003 29.0644 60.0549C30.3098 58.8095 31.0095 57.1203 31.0095 55.359C31.0095 53.5977 30.3098 51.9086 29.0644 50.6632C27.8189 49.4178 26.1297 48.7181 24.3684 48.7181C22.6071 48.7181 20.9179 49.4178 19.6724 50.6632C18.427 51.9086 17.7273 53.5977 17.7273 55.359C17.7273 57.1203 18.427 58.8095 19.6724 60.0549C20.9179 61.3003 22.6071 62 24.3684 62ZM46.5054 62C48.2667 62 49.9559 61.3003 51.2014 60.0549C52.4468 58.8095 53.1465 57.1203 53.1465 55.359C53.1465 53.5977 52.4468 51.9086 51.2014 50.6632C49.9559 49.4178 48.2667 48.7181 46.5054 48.7181C44.7441 48.7181 43.0549 49.4178 41.8094 50.6632C40.564 51.9086 39.8643 53.5977 39.8643 55.359C39.8643 57.1203 40.564 58.8095 41.8094 60.0549C43.0549 61.3003 44.7441 62 46.5054 62Z" fill="white"/>
<path d="M28 16.3898C28 14.5177 29.5177 13 31.3898 13V13C33.2619 13 34.7796 14.5177 34.7796 16.3898V32.8672C34.7796 34.7393 33.2619 36.2569 31.3898 36.2569V36.2569C29.5177 36.2569 28 34.7393 28 32.8672V16.3898Z" fill="rgb(250, 10, 122)"/>
<path d="M41.3255 31.0373C42.8026 31.0518 43.9812 32.2608 43.958 33.7378V33.7378C43.9348 35.2148 42.7186 36.4005 41.2414 36.386L30.6746 36.2827C29.1974 36.2682 28.0188 35.0592 28.042 33.5822V33.5822C28.0652 32.1052 29.2815 30.9196 30.7586 30.934L41.3255 31.0373Z" fill="rgb(250, 10, 122)"/>
</svg>

          <Link to="/" className="brand-name">
            LetShopy
          </Link>
        </div>
        <div className="search-container" style={{display:openSearch && "flex" }}>
         
        <div
          className="sbox-container"
          
          style={
            suggestion && suggestionData.length > 0
              ? {
                  borderBottomLeftRadius: "0px",
                  borderBottomRightRadius: "0px",
                }
              : null
          }
        >
          

          <div className="sbox">
          <div className="close-search-mobile" onClick={()=>setOpenSearch(false)}>
              <FaArrowLeft size={18}/>
          </div>
            <input
              type="search"
              name="search"
              className="searchf"
              placeholder="Search for product,brand..."
              onChange={handlesuggest}
            />
            <button className="searchbtn" name="btn">
              <FaMagnifyingGlass size={18}/>
            </button>
          </div>
          {suggestion && suggestionData.length > 0 && (
            <div className="suggestion-container">
              {suggestionData.map((item, index) => {
                return (
                  <div key={index} className="suggestion-item">
                    <div>{item.product_name}</div>
                    <div onClick={() => deleteSugg(item)}><FaXmark size={18} className="icon-color" color=""/></div>
                  </div>
                );
              })}
            </div>
          )}
        </div>
        </div>

        <div className="menu-container">
          <li className="open-search-mobile" onClick={()=>{setOpenSearch(true)}}>
            <FaMagnifyingGlass size={18}/>
          </li>
          <li
            onClick={() => {
              setRegister(true);
              setModel(true);
            }}
            className="account-container"
          >
            {isAuth ? (
              <div className="avatar-container">
                <img src="../profile.png" className="avatar-image" alt="" />
                <span className="account-name">{`${loggedUser.fullname.split(" ")[0]}`}</span>
              </div>
            ) : (
              <BiUser size={24} className="icon-color"/>
            )}

            <div className="">
              <div className="account-popup">
                {!isAuth && (
                  <>
                    <Link to="/signup" className="text-link-clean">
                      <li className="popup-menu-item">
                        <div className="icon"><BsUiChecksGrid size={18}/></div>
                        <div>SignUp</div>
                      </li>
                    </Link>

                    <div className="divider"></div>

                    <Link to="/signin" className="text-link-clean">
                      <li className="popup-menu-item">
                        <div className="icon"><AiOutlineLogin size={18}/></div>
                        <div>SignIn</div>
                      </li>
                    </Link>
                    <div className="divider"></div>
                  </>
                )}
                <Link to="/wishlist" className="text-link-clean">
                  <li className="popup-menu-item">
                    <div className="icon"><BsHeart size={18}/></div>
                    <div>Wishlist</div>
                  </li>
                </Link>
                <div className="divider"></div>
                <Link to="/order" className="text-link-clean">
                  <li className="popup-menu-item">
                    <div className="icon"><BsBoxArrowInDown size={18}/></div>
                    <div>Order</div>
                  </li>
                </Link>
              </div>
            </div>
          </li>
          <li
            onClick={() => {
              setLogin(true);
              setModel(true);
            }}
          >
            <AiOutlineQuestionCircle size={24} className="icon-color" />
          </li>

          <li>
            <Link to="/cart" className="cart-link">
              <BiCart size={24} className="icon-color"/>
              <div className="cartNum">{calCart()}</div>
            </Link>
           
          </li>
        </div>
      </div>
    )
  );
};

export default Header;
