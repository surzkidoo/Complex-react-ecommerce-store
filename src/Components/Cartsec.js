import React, { useContext } from "react";
import Cartitem from "./CartItem";
import { ProductContext } from "../productprovider";
const Cartsec = (props) => {
  const { cart, removeCart, updatecart,total,setTotal } = useContext(ProductContext);
  return (
    <div className="cartsection">
      <div className="d-flex justify-content-between cart-sec p-2">
        <div className="cart-sec-num">Cart({cart.length})</div>
        <div className="close text-danger" onClick={() => props.setCartsec(false)}>
          X
        </div>
      </div>
      {/* {cart.map((prod) => {
        return (
          <Cartitem
            key={prod.product_id}
            product={prod}
            removecart={removeCart}
            updatecart={updatecart}
          />
        );
      })} */}

      <div className="cart-total-sec pb-1 mt-2">
        <div className="mb-2">
          <span className="total" onClick={updatecart}>
         {total}.00
          </span>
          <span className="item d-block">Item(s) {cart.length }</span>
        </div>
        <div className="cart-btn-sec">
          <button
            className="btn-checkout"
            onClick={() => {
              props.setCartsec(false);
              props.setCheckoutsec(true);
            }}
          >
            Checkout
          </button>
          <button className="btn-clear">Clear</button>
        </div>
      </div>
    </div>
  );
};
export default Cartsec;
