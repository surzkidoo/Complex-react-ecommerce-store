import React, { useState, useContext } from "react";
import { UIcontext } from "../Context/UIcontext";


const Footer = () => {
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
    footerShow
  } = useContext(UIcontext);

  return footerShow && (
    <div className="footer-container">
    <div className="footer-main">
      <div className="footer-column-containers">
        <div className="footer-title">About</div>
        <div>Contact Us</div>
        <div>About us</div>
        <div>Career</div>
        <div>Our Blog</div>
        <div>Forumn</div>
        <div>Terms & Conditions</div>
      </div>
      <div className="footer-column-containers">
        <div className="footer-title">Payment</div>
        <div>Paystack</div>
        <div>Flutterwave</div>
        <div>Visa</div>
        <div>Mastercard</div>
      </div>
      <div className="footer-column-containers">
        <div className="footer-title">Buying On LetShop</div>
        <div>FAQs</div>
        <div>Return Policy</div>
        <div>Bulk Purchase</div>
        <div>Delivery</div>
      </div>
      <div className="footer-column-containers">
        <div className="footer-title">Info</div>
        <div>Privacy Policy</div>
        <div>Track My Order</div>
      </div>
      <div className="stay-connected">
        <div className="footer-title">Stay Connected</div>
        <div className="sub-box">
          <input
            className="sub-input"
            type="text"
            placeholder="Enter Email Address"
          />
          <button className="sub-btn">subscribe</button>
        </div>
      </div>
    </div>
  </div>
  );
};

export default Footer;
