import React,{useState} from "react";
import Loader from "./loader";
import { FaDeleteLeft, FaMinus, FaNairaSign, FaPlus } from "react-icons/fa6";
import { AiFillDelete, AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";

const CartItem = ({ prod, cartdata,action,showLoader,setShowLoader }) => {

const handleUpdate=(cart,num)=>{
  
  action.updateCart(cart,num);

}


const handleDelete= (cart)=>{
 
  action.removeCartItem(cart);

}
return showLoader ? <Loader/> : (
  <>
    <div className="cart-item-container">
          <div className="cart-item-desc-container">
            <div className="cart-image-container">
              <img className="cart-image" src={prod.product_img[0]} alt="" />
            </div>
            <div className="cart-product-container">
              <div className="cart-product-name-price">
                <div className="cart-name">
                  {prod.product_name}
                </div>
                <div className="cart-price-container">
                  <div className="cart-price"><FaNairaSign/>{(cartdata.quantity*prod.product_price).toLocaleString()}</div>
                  <div className="discount-container">
                  <div className="discount-percentage">-{prod.product_discount}%</div>
                    <div className="cart-discount"><FaNairaSign/>{(prod.product_discount_price - prod.product_price).toLocaleString()}</div>
                  
                  </div>
                </div>
                
              </div>
              <div className="cart-unit-left">
               {prod.product_quantity} Unit Left
            </div>
              <div className="sold-by-container">
                  <div className="sold-by-label">Seller</div>
                  <div className="sold-by-value">LetShop</div>
                </div>
              
            {/* <div className='cart-save-for-later'>
              Save for Later
            </div> */}
            
          
          </div>
        </div>
        <div className="cart-action-container">
          <button className="remove-container" onClick={()=>handleDelete(cartdata.cart_id)}><AiFillDelete size={18} /> Delete</button>
          <div className="update-container">
            <button className="btn" onClick={()=>handleUpdate(cartdata.cart_id,cartdata.quantity-1)}><FaMinus/></button>
            <span className="cart-qauntity">{cartdata.quantity}</span>
            <button className="btn" onClick={()=>handleUpdate(cartdata.cart_id,(cartdata.quantity+1))}><FaPlus/></button>
          </div>
        </div>
        </div>
  </>
);
}
export default CartItem;
