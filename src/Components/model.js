import React from "react";
import Loader from "./loader";
import Login from "./login";
import Register from "./register";

const Model = (props) => {
  return props.show && <div className="model-container"> {
    props.children
    }</div>;
};

export default Model;
