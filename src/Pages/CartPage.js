import React, { useContext, useState, useEffect } from "react";
import CartItem from "../Components/CartItem";

import { ProductContext } from "../productprovider";
import { FindOneAny } from "../_services/productHelper";
import { useHistory } from "react-router-dom/cjs/react-router-dom";
export default function () {
  const { cart, setCart, product,updateCart,total,setTotal } = useContext(ProductContext);
  const history = useHistory()
  const [showLoader,setShowLoader] = useState(false);

  useEffect(() => {
    let temtotal = 0;
    cart.forEach((item) => {
        let prod = FindOneAny(product, item.product_id, "product_id");
        temtotal += prod.product_price * item.quantity;
    });
    setTotal(temtotal)

  }, [cart, product]);


  const removeCartItem = (id) => {
    const newcart = cart.filter((cartitem) => cartitem.cart_id !== id);
    setCart(newcart);
  };

  return (
    <div className="cart-container">
      <div className="cart-section">
        <h4 className="cart-header">Cart </h4>
        <div className="cart-items-container">
          {cart.map((item) => {
            let data = FindOneAny(product, item.product_id, "product_id");
            return (
              <CartItem
                cartdata={item}
                prod={data}
                showLoader={showLoader}
                setShowLoader={setShowLoader}
                action={{ updateCart, removeCartItem }}
              />
            );
          })}
        </div>
      </div>
      <div className="summary-container">
        <div className="summary-header">Order Summary</div>
        <div className="summary-label-price">
          <div className="summary-label">Subtotal</div>
          <div className="summary-price">₦{total.toLocaleString()}</div>
        </div>
        <div className="summary-text">
          This is a summary it doesn't include shipping Fee
        </div>
        <button className="cart-checkout-btn" onClick={()=>{history.push('/checkout')}}>CheckOut</button>
      </div>
    </div>
  );
}
