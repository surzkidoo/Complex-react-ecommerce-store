import React, { useState, useEffect, useContext } from "react";
import { Redirect } from "react-router-dom";
import SidebarCategory from "../Components/SidebarCategory";
import axios from "axios";
import CategorySection from "../Components/CategorySection";
import { ProductContext } from "../productprovider";
import { UIcontext } from "../Context/UIcontext";
import { Link } from "react-router-dom/cjs/react-router-dom";
import Loader from "../Components/loader";

let Duser = {
  fullname: {
    value: "",
    error: false,
    errorMessage: "Fullname must atleast contains 4 characters",
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
    const [resultValidation, setResultpassValidation] = useState(false)

    const [showLoader,setShowLoader] = useState(false);

  useEffect(() => {
    setHeaderShow(false);
    setFooterShow(false);
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
        setResultpassValidation(false)
        setpassValidation(true)
    
    
    } else {

      !user.fullname.value &&  setUser((prev) => {
        return {
          ...prev,
          fullname: {
            ...prev.fullname,
            error: true
          },
        };
      });

      !user.address.value &&  setUser((prev) => {
        return {
          ...prev,
          address: {
            ...prev.address,
            error: true
          },
        };
      });

      !user.email.value &&  setUser((prev) => {
        return {
          ...prev,
          email: {
            ...prev.email,
            error: true
          },
        };
      });

      !user.password.value &&  setUser((prev) => {
        return {
          ...prev,
          password: {
            ...prev.password,
            error: true
          },
        };
      });

      !user.confirmPassword.value &&  setUser((prev) => {
        return {
          ...prev,
          confirmPassword: {
            ...prev.confirmPassword,
            error: true
          },
        };
      });


      setResultpassValidation(true)
      setpassValidation(false)
    }

    
  };
  return showLoader ? <Loader/> : (
    <div className="signup-page">
      <div className="signup-container">
        <div className="signup-form-container">
          <form onSubmit={handleSubmit}>
            <div className="signup-form">
              <h3 className="signup-title">SignUp Form</h3>
              
              {
                resultValidation && (<div className="error-message-head">Fill In the Form With Your Correct Details</div>)
              }
              {
                passValidation && (<div className="success-message-head">Account Created Successfuly <Link to='signin'>Login</Link></div>)
              }
              
              <div className="signup-form-group">
                <label>Full Name</label>
                <span className="error-message">
                  {user.fullname.error &&
                    user.fullname.errorMessage}
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
                  <div className="signup-icon">O</div>
                </div>
              </div>

              <div className="signup-form-group">
                <label>Email Address</label>
                <span className="error-message">
                  {user.email.error &&
                    user.email.errorMessage}
                </span>

                <div
                  className={
                    user.email.error 
                      ? "signup-xbox show-error"
                      : "signup-xbox"
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
                <label>Address</label>
                <span className="error-message">
                  {user.address.error &&
                    user.address.errorMessage}
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
                  <div className="signup-icon">O</div>
                </div>
              </div>

              <div className="signup-form-group">
                <label>Password</label>
                <span className="error-message">
                  {user.password.error &&
              
                    user.password.errorMessage}
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
                  <div className="signup-icon">O</div>
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
          <img src="ad2.jpeg" width="100%" height="100%" />
        </div>
      </div>
    </div>
  );
};

export default SignUp;
