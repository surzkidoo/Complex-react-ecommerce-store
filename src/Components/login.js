import React, { Component, useContext, useState } from "react";
import { UIcontext } from "../Context/UIcontext";
import "./login.css";
import Message from "./Message";
import axios from "axios";
import {accountService} from "../_services/userAccount"

const Login = () => {
  const { setRegister, setLogin, setModel, loader } = useContext(UIcontext);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState([]);

  const handleField = (e) => {
    if (e.target.name === "username") {
      setUsername(e.target.value);
    } else {
      setPassword(e.target.value);
    }
  };
  const handleSubmit = async(e) => {
    if (username.trim() === "") {
      setErrors(["Username is required"]);
    }
    if (password.trim() === "") {
      setErrors(["Password is required"]);
    }
    if (
      errors.length === 0 &&
      password.trim() !== "" &&
      username.trim() !== ""
    ) {
        try {
            let data = await axios.post("http://localhost:3000/login", {
              username,
              password
            });
            if(data.status<300){
                accountService.loggin({data})

            }else{
                setErrors(["username or password is Incorrect"])
            }
            
          } catch (e) {
            alert(e)
        
          }
    }
  };
  return (
    <div className="">
      {errors.map((err) => (
        <Message message={err} status={"error"} />
      ))}
      <div className="d-flex container-11 justify-content-center   align-items-center">
        <div className="col-12    container2  p-4 rounded-lg">
          <div className="d-flex justify-content-between align-items-center m-0 p-0">
            <h3 className="head">Login</h3>
            <span
              className="close"
              onClick={() => {
                setLogin(false);
                setModel(false);
              }}
            >
              x
            </span>
          </div>

          <hr className="div" />
          <div className="inputbox  rounded-lg mb-3 col-12 mx-auto">
            <small>P</small>
            <input
              type="text"
              name="username"
              className=""
              onChange={handleField}
              placeholder="Username"
            />
          </div>
          <div className="inputbox  rounded-lg  col-12 mx-auto">
            <small>P</small>
            <input
              type="password"
              name="password"
              className=""
              onChange={handleField}
              placeholder="Password"
            />
          </div>

          <span
            className="cacc"
            onClick={() => {
              setRegister(true);
              setLogin(false);
            }}
          >
            Create an account{" "}
          </span>
          <input
            onClick={handleSubmit}
            className="submit rounded-lg text-white font-weight-bold"
            type="submit"
            value="Login"
          />
        </div>
      </div>
    </div>
  );
};

export default Login;
