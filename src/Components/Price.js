import React from "react";

const rate = (props) => {
  return (
    <div className="price ">
      <div>
          <h6>Price</h6>
          <hr/>
        <div className="d-flex align-items-center mb-1">
          <input type="checkbox" className=" d-inline" id="1" name="pice" />
          <span>$10-$50</span>
        </div>
        <div className="d-flex align-items-center mb-1">
          <input type="checkbox" className=" d-inline" id="2" name="pice" />
          <span>$50-$100</span>
        </div>
        <div className="d-flex align-items-center mb-1">
          <input type="checkbox" className=" d-inline" id="2" name="pice" />
          <span>$100-$200</span>
        </div>
        
        <hr/>
      </div>
    </div>
  );
};

export default rate;
