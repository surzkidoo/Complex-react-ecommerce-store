import React, { useState, useContext } from "react";
import { UIcontext } from "../Context/UIcontext";
import "./login.css";
import Message from "./Message";
import axios from "axios";

const Register = () => {
  const { setRegister, setLogin, setModel, loader } = useContext(UIcontext);
  let [username, setUsername] = useState("");
  let [password, setPassword] = useState("");
  let [email, setEmail] = useState("");
  let [errors, setErrors] = useState([]);

  const handleField = (e) => {
    if (e.target.name === "username") {
      setUsername(e.target.value);
    } else if (e.target.name === "email") {
      setEmail(e.target.value);
    } else {
      setPassword(e.target.value);
    }
  };
  const handleSubmit = async (e) => {
    if (username.trim() == "") {
      setErrors(["Username is required"]);
    }
    if (password.trim() == "") {
      setErrors(["Password is required"]);
    }
    if (email.trim() == "") {
      setErrors(["email is required"]);
    }
    if (
      errors.length === 0 &&
      password.trim() !== "" &&
      username.trim() !== "" &&
      email.trim() !== ""
    ) {
      try {
        let data = await axios.post("http://localhost:3000/register", {
          username,
          password,
          email,
        });
        console.log(data);
      } catch (e) {
        alert(e);
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
            <h3 className="head">Register</h3>
            <span
              className="close"
              onClick={() => {
                setModel(false);
                setRegister(false);
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
              onChange={handleField}
              className=""
              placeholder="Choose a username"
            />
          </div>
          <div className="inputbox mb-3 rounded-lg  col-12 mx-auto">
            <small>P</small>
            <input
              type="password"
              name="password"
              onChange={handleField}
              className=""
              placeholder="Password"
            />
          </div>
          <div className="inputbox  rounded-lg  col-12 mx-auto">
            <small>P</small>
            <input
              type="email"
              name="email"
              onChange={handleField}
              className=""
              placeholder="Email"
            />
          </div>
          <span
            className="cacc"
            onClick={() => {
              setRegister(false);
              setLogin(true);
            }}
          >
            Already have an account?
          </span>
          <input
            onClick={handleSubmit}
            className="submit rounded-lg text-white font-weight-bold"
            type="submit"
            value="Create Account"
          />
        </div>
      </div>
    </div>
  );
};

export default Register;
