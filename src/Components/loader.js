import React, { Component } from "react";

class Loader extends Component {
  render() {
    return (
      <div>
        <div className="loader-container">
          <div className="loader">
            <img  className="loader-img" src="../logo192.png"/>
          </div>
        </div>
      </div>
    );
  }
}

export default Loader;
