import React, { useState, useEffect, useContext } from "react";
import { useParams } from "react-router-dom";
import SidebarCategory from "../Components/SidebarCategory";
import axios from "axios";
import CategorySection from "../Components/CategorySection";
import { ProductContext } from "../productprovider";
import { UIcontext } from "../Context/UIcontext";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import { AuthContext } from "../Context/AuthContext";
import Loader from "../Components/loader";
import {AiFillLock,AiOutlineLock,AiOutlineUser,AiTwotoneMail} from 'react-icons/ai'

let Duser = {
  email: {
    value: "",
    error: false,
    errorMessage: "Email must be a valid type",
    rg: /([a-zA-Z0-9]+)([\_\.\-{1}])?([a-zA-Z0-9]+)\@([a-zA-Z0-9]+)([\.])([a-zA-Z\.]+)/g,
  },

  password: {
    value: "",
    error: false,
    errorMessage:
      "Password must contains uppercase, lowercase, number and symbol",
    rg: /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/g,
  },
};

const SignIn = () => {
  const history = useHistory();
  const { setHeaderShow, setFooterShow } = useContext(UIcontext);
  const [user, setUser] = useState(Duser);
  const [showLoader,setShowLoader] = useState(false);
  const { addUser, userList, setUserList } = useContext(ProductContext);
  const { setLoggedUser, setIsAuth, isAuth } = useContext(AuthContext);

  const [passValidation, setpassValidation] = useState(false);
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
          error: !prev[e.target.name].rg.test(e.target.value),
        },
      };
    });
  };

  const handleSubmit = (e) => {
    e.persist();
    e.preventDefault();
    console.log(userList);
    let dataUser;
    if (
      !user.email.error &&
      user.email.value &&
      !user.password.error &&
      user.password.value
    ) {
      let result = userList.find((element) => {
        dataUser = element;
        return (
          element.password == user.password.value &&
          element.email == user.email.value
        );
      });
      if (result) {
        setIsAuth(true);
        setLoggedUser(dataUser);

        
          history.push("/");
         
        
      } else {
        setpassValidation(true);
      }
    } else {

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
    }
  };
  return showLoader?  <Loader/> : (
    <div className="signup-page">
      <div className="signup-container">
        
          <form className="signup-form-container" onSubmit={handleSubmit}>
          <div className="welcome-logo-container logo-mobile">
          <svg
            className="welcome-logo"
            width="62"
            height="62"
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
            <div className="signup-form">
              <h3 className="signup-title">SignIn Form</h3>

              {passValidation && (
                <div className="error-message-head">
                  The Email and Password doesn't match any record
                </div>
              )}
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
                  <div className="signup-icon"><AiOutlineUser/></div>
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
                  <div className="signup-icon"><AiOutlineLock/></div>
                </div>
              </div>

              <button className="signup-btn">Login</button>

              <div className="account-have">
                Don't have an Account?{" "}
                <span className="account-link">SignUp</span>{" "}
              </div>
            </div>
          </form>
        
          <div className="display-welcome-container">
          <div className="welcome-logo-container">
          <svg
            className="big-logo"
            width="62"
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

          <p className="welcome-desc">Your Online E-commerce Store For Different Product......</p>

          
        </div>
      </div>
    </div>
  );
};

export default SignIn;
