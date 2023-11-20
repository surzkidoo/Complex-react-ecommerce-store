import React, { useState,useContext } from "react";
import { AuthContext } from "../Context/AuthContext";
import { ProductContext } from "../productprovider";
import { AiFillCloseSquare } from "react-icons/ai";

export default function MakeReview(props) {
  const { loggedUser, isAuth} = useContext(AuthContext);
  const { addReview,product } = useContext(ProductContext);

  const [review, setreview] = useState({
    review: {
      error: false,
      value: "",
      errorMessage: "Review must contain atleast more than 3 characters",
      rg: /[A-Za-z0-9]{3,}/g,
    },
    rating: {
      error: false,
      value: "",
      errorMessage: "Select atleast one option",
    },
  });
  const [rate, setrate] = useState("");

  const handleInput = (e) => {
    e.persist();
    setreview((prev) => {
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

  const handlerating = (value) => {
    alert(value)
    setreview((prev) => {
      return {
        ...prev,
        rating: {
          ...prev.rating,
          value: value,
          error: !Boolean(value),
        },
      };
    });
    console.log(review)
  };

  const handleSubmit = (e) => {
    e.persist();
    e.preventDefault();

    if (
      !review.review.error &&
      review.review.value &&
      !review.rating.error &&
      review.rating.value
    ) {

      let newReview = {user:{...loggedUser},review:review.review.value,rate:review.rating.value}
      addReview(newReview,props.Id)
      props.close(false)
      console.log(product)
      //history.push("/");
    } else {
      !review.rating.value &&
        setreview((prev) => {
          return {
            ...prev,
            rating: {
              ...prev.rating,
              error: true,
            },
          };
        });

      !review.review.value &&
        setreview((prev) => {
          return {
            ...prev,
            review: {
              ...prev.review,
              error: true,
            },
          };
        });
    }
  };

  return (
    <div className="model-container">
      <div className="make-review-container">
        <form onSubmit={handleSubmit}>
          <div className="make-review-header">
            <div className="model-review-title">Review Form</div>
            <div className="cancel-x" onClick={() => props.close(false)}>
              <AiFillCloseSquare/>
            </div>
          </div>
          <div className="review-input">
            <label>Leave review</label>
            {
                review.review.error && <div className="error-message-head">{review.review.errorMessage}</div>
              }
            <textarea
              name="review"
              onChange={handleInput}
              placeholder="Start Typing...."
              value={review.review.value}
            ></textarea>
          </div>

          <div className="review-select">
            <div className="toggler-handler">
              <label>Rate the product</label>
              {
                review.rating.error && <div className="error-message-head">{review.rating.errorMessage}</div>
              }
              <div className="brand-checklist-container">
                <div className="brand-checklist-item">
                  <div className="checklist-bg" onClick={()=>handlerating('1')}>
                    <div className="brand-radio-input" style={{backgroundColor:review.rating.value==='1' && 'rgb(250, 10, 122)' }}></div>
                  </div>
                  <div className="brand-checklist-name">1</div>
                </div>
                <div className="brand-checklist-item">
                  <div className="checklist-bg" onClick={()=>handlerating('2')}>
                    <div className="brand-radio-input" style={{backgroundColor:review.rating.value==='2' && 'rgb(250, 10, 122)' }}></div>
                  </div>
                  <div className="brand-checklist-name">2</div>
                </div>
                <div className="brand-checklist-item">
                  <div className="checklist-bg" onClick={()=>handlerating("3")}>
                    <div className="brand-radio-input" style={{backgroundColor:review.rating.value==='3' && 'rgb(250, 10, 122)' }}></div>
                  </div>
                  <div className="brand-checklist-name">3</div>
                </div>
                <div className="brand-checklist-item">
                  <div className="checklist-bg" onClick={()=>handlerating("4")}>
                    <div className="brand-radio-input" style={{backgroundColor:review.rating.value==='4' && 'rgb(250, 10, 122)' }}></div>
                  </div>
                  <div className="brand-checklist-name">4</div>
                </div>

                <div className="brand-checklist-item">
                  <div className="checklist-bg" onClick={()=>handlerating("5")}>
                    <div className="brand-radio-input" style={{backgroundColor:review.rating.value==='5' && 'rgb(250, 10, 122)' }}></div>
                  </div>
                  <div className="brand-checklist-name">5</div>
                </div>
              </div>
            </div>
          </div>

          <button className="">Submit</button>
        </form>
      </div>
    </div>
  );
}
