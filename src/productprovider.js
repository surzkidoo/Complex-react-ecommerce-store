import React, { useState, createContext, useEffect } from "react";
import { products, categories, ads, brands, users } from "./data";
import { FindOneAny } from "./_services/productHelper";
import { FaUpRightAndDownLeftFromCenter } from "react-icons/fa6";
export const ProductContext = createContext();

export const Productprovider = (props) => {
  const [product, setProduct] = useState(products);
  const [categorys, setcategories] = useState(categories);
  const [ad, setad] = useState(ads);
  const [brand, setBrand] = useState(brands);
  const [total, setTotal] = useState(0);
  const [order, setorder] = useState([]);

  const [cart, setCart] = useState([
    {
      cart_id: 2,
      product_id: 2,
      quantity: 4,
    },
  ]);

  const [wishlist, setWishlist] = useState([
    {
      product_id: 2,
      userId: 1,
    },
  ]);

  useEffect(() => {
    let temtotal = 0;
    cart.forEach((item) => {
      let prod = FindOneAny(product, item.product_id, "product_id");
      temtotal += prod.product_price * item.quantity;
    });
    setTotal(temtotal);
  }, [cart, product]);

 

  const [userList, setUserList] = useState(users);

  const removeCart = (id) => {
    setCart((cart) => {
      return cart.filter((prod) => prod.product_id !== id);
    });
    return true;
  };

  const addUser = (user) => {
    setUserList((prev) => {
      return [...prev, user];
    });
    return true;
  };

  // const updatecart=(id,q_num)=>{

  //     setCart(prevCart=>{
  //     return prevCart.map(prod=>prod.product_id===id?{...prod,product_q:q_num}:prod)
  //     }

  // )
  // ototal();
  //   }

  const addToCart = (id, quantity) => {
    let prod = FindOneAny(product, id, "product_id");
    setCart((prev) => [
      ...prev,
      { quantity: quantity, product_id: prod.product_id, cart_id: Math.random() },
    ]);
    return true;
  };

  const updateCart = (id, newprop) => {
    if (newprop < 1) {
      alert("Cart Quantity Can't Be Less than One");
      return;
    }
    setCart((prevCart) => {
      return prevCart.map((cartitem) =>
        cartitem.cart_id === id ? { ...cartitem, quantity: newprop } : cartitem
      );
    });
  };

  const calCart = () => {
    let items = 0;
    cart.forEach((item) => {
      items += item.quantity;
    });
    return items;
  };

  const addToWishlist = (id, userId) => {
    let prod = FindOneAny(product, id, "product_id");
    setWishlist((prev) => [...prev, { product_id: prod.product_id, userId }]);
    return true;
  };
  const removeWishlist = (id,) => {
    setWishlist((prev) => {
      return prev.filter((prod) => prod.product_id !== id);

    });
    return true;
  };

  const addReview = (review, id) => {
    setProduct((prev) => {
      return prev.map((prd) => {
        if (prd.product_id === id) {
          return {
            ...prd,
            product_review: [...prd.product_review, { ...review }],
          };
        }
        return prd;
      });
    
    });
  };

  return (
    <ProductContext.Provider
      value={{
        product,
        categorys,
        cart,
        brand,
        setCart,
        setProduct,
        removeCart,
        addToCart,
        ad,
        updateCart,
        calCart,
        addUser,
        userList,
        setUserList,
        addReview,
        order,
        setorder,
        setTotal,
        total,
        setWishlist,
        wishlist,
        addToWishlist,
        removeWishlist
      }}
    >
      {props.children}
    </ProductContext.Provider>
  );
};
