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
                  <div className="signup-icon">O</div>
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
                  <div className="signup-icon">O</div>
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
          <img src="ad2.jpeg" width="100%" height="100%" />
        </div>
      </div>
    </div>
  );
};

export default SignIn;
