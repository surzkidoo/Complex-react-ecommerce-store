import React, { useState, useContext } from "react";
import Cartsec from "./Cartsec";
import Checkout from "../Pages/CheckoutPage";
import Model from "./model";
import Message from "./Message";
import { UIcontext } from "../Context/UIcontext";
import { Link } from "react-router-dom";
import { ProductContext } from "../productprovider";
import { AuthContext } from "../Context/AuthContext";

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
          <img src="logo192.png" className="logo" width="50" alt="logo" />
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
            O
          </div>
            <input
              type="search"
              name="search"
              className="searchf"
              placeholder="Search for product,brand..."
              onChange={handlesuggest}
            />
            <button className="searchbtn" name="btn">
              Search
            </button>
          </div>
          {suggestion && suggestionData.length > 0 && (
            <div className="suggestion-container">
              {suggestionData.map((item, index) => {
                return (
                  <div key={index} className="suggestion-item">
                    <div>{item.product_name}</div>
                    <div onClick={() => deleteSugg(item)}>Delete</div>
                  </div>
                );
              })}
            </div>
          )}
        </div>
        </div>

        <div className="menu-container">
          <li className="open-search-mobile" onClick={()=>{setOpenSearch(true)}}>
              O
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
                <img src="../profile.png" className="avatar-image" />
                <span className="account-name">{`${loggedUser.fullname.split(" ")[0]}`}</span>
              </div>
            ) : (
              "O"
            )}

            <div className="">
              <div className="account-popup">
                {!isAuth && (
                  <>
                    <Link to="/signup" className="text-link-clean">
                      <li className="popup-menu-item">
                        <div className="icon">O</div>
                        <div>SignUp</div>
                      </li>
                    </Link>

                    <div className="divider"></div>

                    <Link to="/signin" className="text-link-clean">
                      <li className="popup-menu-item">
                        <div className="icon">O</div>
                        <div>SignIn</div>
                      </li>
                    </Link>
                    <div className="divider"></div>
                  </>
                )}
                <Link to="/wishlist" className="text-link-clean">
                  <li className="popup-menu-item">
                    <div className="icon">O</div>
                    <div>wishlist</div>
                  </li>
                </Link>
                <div className="divider"></div>
                <Link to="/order" className="text-link-clean">
                  <li className="popup-menu-item">
                    <div className="icon">O</div>
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
            O
          </li>

          <li>
            <Link to="/cart" className="cart-link">
              O
            </Link>
            <span className="cartNum">{calCart()}</span>
          </li>
        </div>
      </div>
    )
  );
};

export default Header;
