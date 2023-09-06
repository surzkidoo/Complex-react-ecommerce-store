import React,{useState,useEffect,useContext} from "react";
import Model from "./model";
import MakeReview from "./MakeReview";
import { ProductContext } from "../productprovider";
import Loader from "./loader";

export default function ProductDetailed({product, setquantity, quantity,setIsAddedToCart,isAddedToCart}) {
  const [desc, setdesc] = useState(true)
  const [spec, setspec] = useState(true)
  const [review, setreview] = useState(true)
  const [reviewForm, setreviewForm] = useState(false)
  const [showLoader,setShowLoader] = useState(false);


  const [specdata,setSpecdata] = useState([])
  useEffect(() => {
    Object.keys(product.product_spec).forEach(element => {
        setSpecdata((prev)=>[...prev,<li> {element} {product.product_spec[element]}</li>])
    })
  },[])

  const rating = ( )=>{
      let num = product.product_rating;
      let ratingjsx = []
      for (let index = 0; index <= 4; index++) {
        if(num>=index+1){
          ratingjsx =[...ratingjsx,"hi"]         
        }
        else {
          ratingjsx = [...ratingjsx,  <div>x</div>]
        }
      }
      return ratingjsx
  }

  const handleAdd=()=>{
 
      setquantity(prev=>prev+1)
  }

  const handleMinus=()=>{

      setquantity(prev=>prev>1?  prev-1 : prev)
  
  }

  const handlereviewForm =()=>{
     setreviewForm(true)
  }


  return showLoader ? <Loader/> : (
    <div className="product-detailed-container">
           { reviewForm && <MakeReview Id={product?.product_id} close={setreviewForm}/>} 

      <h1 className="product-detail-name">
       {product?.product_name}
      </h1>
      <div className="review-container">
        <div className="rating-container">
        {rating()}
        </div>
        <div className="rating-number">12,000 Ratings</div> <span>|</span>
        <div className="review-number">1,200 Reviews</div>
      </div>
      <div className="product-detailed-price-container">
        <div className="price-label">Price</div>
        <div className="product-detailed-prices">
          <div className="product-detailed-price">
            <span className="naira-sign">₦</span>
            {product.product_price.toLocaleString()}
          </div>
          <div className="product-detailed-discount">
            <span className="naira-sign">₦</span> {product?.product_discount_price.toLocaleString()}
          </div>
          <div className="product-detailed-off">{product?.product_discount}% OFF</div>
        </div>
        <div className="product-you-save">
          You save <span className="naira-sign">₦{(product?.product_discount_price - product?.product_price).toLocaleString()}</span>
        </div>
      </div>

      {/* <div className="product-brand-container">
        Brand
        <div className="brand-image-container">
          <div>
            Samsung
          </div>
          <img className="brand-image" src="../ad1.jpeg" alt="samsung" />
        </div>
      </div>

      <div className="return-policy">Return Policy</div>

      <div className="shipping-container">
        <div className="shipping-header"> Shipping</div>
        <div className=""></div>
      </div> */}

      <div className="product-qauntity-container">
       <div className='price-label'>Quantity</div> 
       <div className="q-container">
        <div className="qauntity-left" style={{color:'red'}}>{product?.product_quantity} Item Left!</div>
        <div className="update-container">
          <button className="btn" onClick={handleMinus}>-</button>
          <span className="cart-qauntity">{quantity}</span>
          <button className="btn" onClick={handleAdd}>+</button>
        </div>
        </div>
      </div>

      <div className="product-desc-container">
        <div className="product-desc-header-container">
          <h4 className="product-desc-header">Product detail</h4>
          <div className="toggle-icon" onClick={()=>setdesc(!desc)}>-</div>
        </div>
        {
          desc && <div className="product-desc-content">
           {product?.product_desc}

        </div>
        }
       
      </div>

      <div className="product-desc-container">
        <div className="product-desc-header-container">
          <h4 className="product-desc-header">Specification</h4>
          <div className="toggle-icon" onClick={()=>setspec(!spec)}>-</div>
        </div>
        { spec && 
         <div className="product-desc-content">
          {
            specdata
          }
        </div>
        }
       
      </div>

      <div className="product-desc-container">
        <div className="product-desc-header-container">
          <h4 className="product-desc-header">Review & Rating</h4>
          <div className="toggle-icon" onClick={()=>setreview(!review)}>-</div>
        </div>
        { review &&
        <div className="product-desc-content make-relative">
          <div className="add-review-container" >
            <div className="review-section-number">{product?.product_review.length} Reviews</div>
            <button className="add-review" onClick={()=>handlereviewForm(true)}>Leave review</button>
          </div>
          <div className="reviews-container">
            
          {
            product?.product_review.map((item)=>{
              return <div className="review">
              <div className="review-image-container">
                <img
                  src="../profile.png"
                  className="review-profile-image"
                  alt=""
                />
              </div>

              <div className="review-content-container">
                <div className="name-review-container">
                <div className="review-name">{item.user.fullname}</div>
                <div className="review-rating">
                  <div className="rating-container">
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                  </div>
                </div>
                </div>
                <div className="review-content">
                 {item.review}
                </div>
                
              </div>
            </div>


            })
          }

            
            
            <div className="review-load-more-btn">See More</div>
          </div>
         
        </div>
}
      </div>
    </div>
  );
}
