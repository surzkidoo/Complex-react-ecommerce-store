import React,{useState} from "react";
const rate = (props) => {
  const handleRate=(e)=>{

  }
  return (
    <div className="rate ">
      <div>
          <h6>Rating</h6>
          <hr/>
        <div className="d-flex align-items-center mb-1">
          <input type="checkbox" className="ratingbox d-inline" id="1" name="rate" value="1" />
          <span>1 Star</span>
        </div>
        <div className="d-flex align-items-center mb-1">
          <input type="checkbox" className="ratingbox d-inline" id="1" name="rate"  value="2" />
          <span>2 Stars</span>
        </div>
        <div className="d-flex align-items-center mb-1">
          <input type="checkbox" className="ratingbox d-inline" id="1" name="rate" value="3" />
          <span>3 Stars</span>
        </div>
        <div className="d-flex align-items-center mb-1">
          <input type="checkbox" className="ratingbox d-inline" id="1" name="rate" value="4" />
          <span>4 Stars</span>
        </div>
        <div className="d-flex align-items-center mb-1">
          <input type="checkbox" className="ratingbox d-inline" id="1" name="rate" value="5" />
          <span>5 Stars</span>
        </div>
        <hr/>
      </div>
    </div>
  );
};

export default rate;
