import React, { useState, useEffect, useContext } from "react";
import { Redirect } from "react-router-dom";
import SidebarCategory from "../Components/SidebarCategory";
import axios from "axios";
import CategorySection from "../Components/CategorySection";
import { ProductContext } from "../productprovider";
import { UIcontext } from "../Context/UIcontext";
import { Link } from "react-router-dom/cjs/react-router-dom";
import Loader from "../Components/loader";
import {
  AiFillTrademarkCircle,
  AiOutlineLock,
  AiOutlineUser,
} from "react-icons/ai";
import { BiAt, BiCurrentLocation, BiLocationPlus } from "react-icons/bi";

let Duser = {
  fullname: {
    value: "",
    error: false,
    errorMessage: "Full name must atleast contains 4 characters",
    rg: /[A-Za-z0-9]{3,}/g,
  },
  email: {
    value: "",
    error: false,
    errorMessage: "Email must be a valid type",
    rg: /([a-zA-Z0-9]+)([\_\.\-{1}])?([a-zA-Z0-9]+)\@([a-zA-Z0-9]+)([\.])([a-zA-Z\.]+)/g,
  },
  address: {
    value: "",
    error: false,
    errorMessage: "Fullname must atleast contains 8 characters",
    rg: /[A-Za-z0-9]{3,}/g,
  },
  password: {
    value: "",
    error: false,
    errorMessage:
      "Password must contains uppercase, lowercase, number and symbol",
    rg: /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/g,
  },
  confirmPassword: {
    value: "",
    error: false,
    errorMessage: "Password does't match",
  },
};
const SignUp = () => {
  const { setHeaderShow, setFooterShow } = useContext(UIcontext);
  const [user, setUser] = useState(Duser);
  const { addUser } = useContext(ProductContext);
  const [passValidation, setpassValidation] = useState(false);
  const [resultValidation, setResultpassValidation] = useState(false);

  const [showLoader, setShowLoader] = useState(false);

  useEffect(() => {
    setHeaderShow(false);
    setFooterShow(false);
    return () => {
      setHeaderShow(true);
      setFooterShow(true);
    };
  }, []);


  const handleFormInput = (e) => {
    e.persist();

    setUser((prev) => {
      return {
        ...prev,
        [e.target.name]: {
          ...prev[e.target.name],
          value: e.target.value,
          error:
            e.target.name == "confirmPassword"
              ? !(e.target.value === prev.password.value)
              : !prev[e.target.name].rg.test(e.target.value),
        },
      };
    });
    console.log(user);
  };

  const handleSubmit = (e) => {
    e.persist();
    e.preventDefault();

    if (
      !user.fullname.error &&
      user.fullname.value &&
      !user.address.error &&
      user.address.value &&
      !user.email.error &&
      user.email.value &&
      !user.password.error &&
      user.password.value &&
      !user.confirmPassword.error &&
      user.confirmPassword.value
    ) {
      let value = addUser({
        fullname: user.email.value,
        address: user.address.value,
        password: user.password.value,
        email: user.email.value,
      });
      setResultpassValidation(false);
      setpassValidation(true);
    } else {
      !user.fullname.value &&
        setUser((prev) => {
          return {
            ...prev,
            fullname: {
              ...prev.fullname,
              error: true,
            },
          };
        });

      !user.address.value &&
        setUser((prev) => {
          return {
            ...prev,
            address: {
              ...prev.address,
              error: true,
            },
          };
        });

      !user.email.value &&
        setUser((prev) => {
          return {
            ...prev,
            email: {
              ...prev.email,
              error: true,
            },
          };
        });

      !user.password.value &&
        setUser((prev) => {
          return {
            ...prev,
            password: {
              ...prev.password,
              error: true,
            },
          };
        });

      !user.confirmPassword.value &&
        setUser((prev) => {
          return {
            ...prev,
            confirmPassword: {
              ...prev.confirmPassword,
              error: true,
            },
          };
        });

      setResultpassValidation(true);
      setpassValidation(false);
    }
  };
  return showLoader ? (
    <Loader />
  ) : (
    <div className="signup-page">
      <div className="signup-container">
        
        <div className="signup-form-container">
        <div className="welcome-logo-container logo-mobile">
          <svg
            className="welcome-logo"
            width="122"
            height="162"
            viewBox="0 0 62 62"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M0.00442708 2.21365C0.00442708 1.62656 0.237656 1.0635 0.652805 0.648363C1.06795 0.233223 1.63102 0 2.21813 0H4.15733C7.37605 0 9.2267 2.09412 10.2981 4.1838C11.0287 5.61382 11.5555 7.35818 11.9938 8.87232H57.5739C58.258 8.87253 58.9328 9.03125 59.5452 9.33605C60.1577 9.64085 60.6912 10.0834 61.1038 10.6291C61.5165 11.1747 61.7971 11.8085 61.9236 12.4808C62.0501 13.1531 62.0191 13.8456 61.8331 14.5039L55.2097 37.8579C54.6828 39.7108 53.5661 41.3413 52.0289 42.5022C50.4916 43.6631 48.6177 44.291 46.6914 44.2908H24.2046C22.2622 44.2914 20.3734 43.6534 18.8294 42.475C17.2853 41.2965 16.1715 39.6431 15.6597 37.7694L12.8173 27.343C12.801 27.2963 12.7863 27.2491 12.773 27.2014L8.2084 11.7191L7.76566 10.2271C7.32292 8.69523 6.93331 7.34047 6.34889 6.20266C5.64493 4.83019 4.99853 4.43173 4.1529 4.43173H2.2137C1.62659 4.43173 1.06353 4.19851 0.648377 3.78337C0.233228 3.36823 0 2.80518 0 2.21808L0.00442708 2.21365ZM24.3684 62C26.1297 62 27.8189 61.3003 29.0644 60.0549C30.3098 58.8095 31.0095 57.1203 31.0095 55.359C31.0095 53.5977 30.3098 51.9086 29.0644 50.6632C27.8189 49.4178 26.1297 48.7181 24.3684 48.7181C22.6071 48.7181 20.9179 49.4178 19.6724 50.6632C18.427 51.9086 17.7273 53.5977 17.7273 55.359C17.7273 57.1203 18.427 58.8095 19.6724 60.0549C20.9179 61.3003 22.6071 62 24.3684 62ZM46.5054 62C48.2667 62 49.9559 61.3003 51.2014 60.0549C52.4468 58.8095 53.1465 57.1203 53.1465 55.359C53.1465 53.5977 52.4468 51.9086 51.2014 50.6632C49.9559 49.4178 48.2667 48.7181 46.5054 48.7181C44.7441 48.7181 43.0549 49.4178 41.8094 50.6632C40.564 51.9086 39.8643 53.5977 39.8643 55.359C39.8643 57.1203 40.564 58.8095 41.8094 60.0549C43.0549 61.3003 44.7441 62 46.5054 62Z"
              fill="white"
            />
            <path
              d="M28 16.3898C28 14.5177 29.5177 13 31.3898 13V13C33.2619 13 34.7796 14.5177 34.7796 16.3898V32.8672C34.7796 34.7393 33.2619 36.2569 31.3898 36.2569V36.2569C29.5177 36.2569 28 34.7393 28 32.8672V16.3898Z"
              fill="rgb(250, 10, 122)"
            />
            <path
              d="M41.3255 31.0373C42.8026 31.0518 43.9812 32.2608 43.958 33.7378V33.7378C43.9348 35.2148 42.7186 36.4005 41.2414 36.386L30.6746 36.2827C29.1974 36.2682 28.0188 35.0592 28.042 33.5822V33.5822C28.0652 32.1052 29.2815 30.9196 30.7586 30.934L41.3255 31.0373Z"
              fill="rgb(250, 10, 122)"
            />
          </svg>
          <h1 className="welcome-logo-text">LetShoop</h1>
          </div>

          <form onSubmit={handleSubmit}>
            <div className="signup-form">
              <h3 className="signup-title">SignUp Form</h3>

              {resultValidation && (
                <div className="error-message-head">
                  Fill In the Form With Your Correct Details
                </div>
              )}
              {passValidation && (
                <div className="success-message-head">
                  Account Created Successfuly <Link to="signin">Login</Link>
                </div>
              )}

              <div className="signup-form-group">
                <label>Full Name</label>
                <span className="error-message">
                  {user.fullname.error && user.fullname.errorMessage}
                </span>
                <div
                  className={
                    user.fullname.error
                      ? "signup-xbox show-error"
                      : "signup-xbox"
                  }
                >
                  <input
                    type="text"
                    className="signup-input-text"
                    placeholder="Full Name"
                    name="fullname"
                    value={user.fullname.value}
                    onChange={handleFormInput}
                  />
                  <div className="signup-icon">
                    <AiOutlineUser  size={18}/>
                  </div>
                </div>
              </div>

              <div className="signup-form-group">
                <label>Email Address</label>
                <span className="error-message">
                  {user.email.error && user.email.errorMessage}
                </span>

                <div
                  className={
                    user.email.error ? "signup-xbox show-error" : "signup-xbox"
                  }
                >
                  <input
                    type="text"
                    className="signup-input-text"
                    placeholder="Email Address"
                    name="email"
                    value={user.email.value}
                    onChange={handleFormInput}
                  />
                  <div className="signup-icon">
                    <BiAt  size={18}/>
                  </div>
                </div>
              </div>
              <div className="signup-form-group">
                <label>Address</label>
                <span className="error-message">
                  {user.address.error && user.address.errorMessage}
                </span>

                <div
                  className={
                    user.address.error
                      ? "signup-xbox show-error"
                      : "signup-xbox"
                  }
                >
                  <input
                    type="text"
                    className="signup-input-text"
                    placeholder="Address"
                    name="address"
                    value={user.address.value}
                    onChange={handleFormInput}
                  />
                  <div className="signup-icon">
                    <BiLocationPlus size={18} />
                  </div>
                </div>
              </div>

              <div className="signup-form-group">
                <label>Password</label>
                <span className="error-message">
                  {user.password.error && user.password.errorMessage}
                </span>

                <div
                  className={
                    user.password.error
                      ? "signup-xbox show-error"
                      : "signup-xbox"
                  }
                >
                  <input
                    type="password"
                    className="signup-input-text"
                    placeholder="password"
                    name="password"
                    value={user.password.value}
                    onChange={handleFormInput}
                  />
                  <div className="signup-icon">
                    <AiOutlineLock size={18} />
                  </div>
                </div>
              </div>

              <div className="signup-form-group">
                <label>Confirm Password</label>
                <span className="error-message">
                  {user.confirmPassword.error &&
                    user.confirmPassword.errorMessage}
                </span>
                <div
                  className={
                    user.confirmPassword.error
                      ? "signup-xbox show-error"
                      : "signup-xbox"
                  }
                >
                  <input
                    type="password"
                    className="signup-input-text"
                    placeholder="password"
                    name="confirmPassword"
                    value={user.confirmPassword.value}
                    onChange={handleFormInput}
                  />
                  <div className="signup-icon">
                    <AiOutlineLock size={18} />
                  </div>
                </div>
              </div>

              <button className="signup-btn">Register</button>

              <div className="account-have">
                Already have an Account?{" "}
                <span className="account-link">SignIn</span>{" "}
              </div>
            </div>
          </form>
        </div>
        <div className="display-welcome-container">
          <div className="welcome-logo-container">
          <svg
            className="big-logo"
            width="162"
            height="62"
            viewBox="0 0 62 62"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M0.00442708 2.21365C0.00442708 1.62656 0.237656 1.0635 0.652805 0.648363C1.06795 0.233223 1.63102 0 2.21813 0H4.15733C7.37605 0 9.2267 2.09412 10.2981 4.1838C11.0287 5.61382 11.5555 7.35818 11.9938 8.87232H57.5739C58.258 8.87253 58.9328 9.03125 59.5452 9.33605C60.1577 9.64085 60.6912 10.0834 61.1038 10.6291C61.5165 11.1747 61.7971 11.8085 61.9236 12.4808C62.0501 13.1531 62.0191 13.8456 61.8331 14.5039L55.2097 37.8579C54.6828 39.7108 53.5661 41.3413 52.0289 42.5022C50.4916 43.6631 48.6177 44.291 46.6914 44.2908H24.2046C22.2622 44.2914 20.3734 43.6534 18.8294 42.475C17.2853 41.2965 16.1715 39.6431 15.6597 37.7694L12.8173 27.343C12.801 27.2963 12.7863 27.2491 12.773 27.2014L8.2084 11.7191L7.76566 10.2271C7.32292 8.69523 6.93331 7.34047 6.34889 6.20266C5.64493 4.83019 4.99853 4.43173 4.1529 4.43173H2.2137C1.62659 4.43173 1.06353 4.19851 0.648377 3.78337C0.233228 3.36823 0 2.80518 0 2.21808L0.00442708 2.21365ZM24.3684 62C26.1297 62 27.8189 61.3003 29.0644 60.0549C30.3098 58.8095 31.0095 57.1203 31.0095 55.359C31.0095 53.5977 30.3098 51.9086 29.0644 50.6632C27.8189 49.4178 26.1297 48.7181 24.3684 48.7181C22.6071 48.7181 20.9179 49.4178 19.6724 50.6632C18.427 51.9086 17.7273 53.5977 17.7273 55.359C17.7273 57.1203 18.427 58.8095 19.6724 60.0549C20.9179 61.3003 22.6071 62 24.3684 62ZM46.5054 62C48.2667 62 49.9559 61.3003 51.2014 60.0549C52.4468 58.8095 53.1465 57.1203 53.1465 55.359C53.1465 53.5977 52.4468 51.9086 51.2014 50.6632C49.9559 49.4178 48.2667 48.7181 46.5054 48.7181C44.7441 48.7181 43.0549 49.4178 41.8094 50.6632C40.564 51.9086 39.8643 53.5977 39.8643 55.359C39.8643 57.1203 40.564 58.8095 41.8094 60.0549C43.0549 61.3003 44.7441 62 46.5054 62Z"
              fill="rgb(250, 10, 122)"
            />
            <path
              d="M28 16.3898C28 14.5177 29.5177 13 31.3898 13V13C33.2619 13 34.7796 14.5177 34.7796 16.3898V32.8672C34.7796 34.7393 33.2619 36.2569 31.3898 36.2569V36.2569C29.5177 36.2569 28 34.7393 28 32.8672V16.3898Z"
              fill="white"
            />
            <path
              d="M41.3255 31.0373C42.8026 31.0518 43.9812 32.2608 43.958 33.7378V33.7378C43.9348 35.2148 42.7186 36.4005 41.2414 36.386L30.6746 36.2827C29.1974 36.2682 28.0188 35.0592 28.042 33.5822V33.5822C28.0652 32.1052 29.2815 30.9196 30.7586 30.934L41.3255 31.0373Z"
              fill="white"
            />
          </svg>
          </div>


          
        </div>
      </div>
    </div>
  );
};

export default SignUp;
