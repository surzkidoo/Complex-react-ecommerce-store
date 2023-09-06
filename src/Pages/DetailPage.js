import React, { useContext, useState, useEffect } from "react";
import TagLabel from "../Components/TagLabel";
import ProductShow from "../Components/ProductShow";
import ProductDetailed from "../Components/ProductDetailed";
import ProductImage from "../Components/ProductImage";
import { ProductContext } from "../productprovider";
import { useParams } from "react-router-dom/cjs/react-router-dom";
import { FindOneAny, handleTag } from "../_services/productHelper";
import MakeReview from "../Components/MakeReview";
import { AuthContext } from "../Context/AuthContext";

const Detail = (props) => {
  const { product, cart, wishlist,categorys } = useContext(ProductContext);
  const { loggedUser } = useContext(AuthContext);

  const { id } = useParams();
  const [dProduct, setDProduct] = useState(product.find((ele)=>ele.product_id==id))
  const [isAddedToCart, setIsAddedToCart] = useState(false);
  const [isAddedToWishlist, setIsAddedToWishlist] = useState(false);
  const [quantity, setquantity] = useState(1);
  const [category, setCategory] = useState('');


  useEffect(()=>{
    cart.findIndex((ele)=>{
      if(ele.product_id==id){
        setIsAddedToCart(true)
        setquantity(ele.quantity)
      }
      
    })

    wishlist.forEach((ele)=>{
      if(ele.product_id==id &&  ele.userId == 1){
        setIsAddedToWishlist(true)
      }
      
    })
    
    setDProduct(product.find((ele)=>ele.product_id==id))

    let index = categorys.findIndex((ele) => {
      return ele.category_id == dProduct.product_category;
    })
   let cat =  categorys[index];
    setCategory(cat)

  },[product])
 

// useEffect(()=>{
//   let fecth = async() =>{
//     try{
//   let result = await handleTag(categorys,dProduct.product_category,['home'])
//   console.log(result);}
//   catch(e){
//     console.log(e)
//   }
//   }
//   fecth()
// },[])
  return (
    <div className="overall-container">
      <div className="detail-container ">
        <TagLabel
          tags={[
            "Home",
            category?.category_name,
            dProduct.product_name,
          ]}
        />
        <ProductShow>
          <ProductImage
            product_image={dProduct.product_img}
            id={dProduct.product_id}
            quantity={quantity}
            isAddedToCart={isAddedToCart}
            setIsAddedToCart={setIsAddedToCart}
            isAddedToWishlist={isAddedToWishlist}
            setIsAddedToWishlist={setIsAddedToWishlist}
          />
          <ProductDetailed
            product={dProduct}
            quantity={quantity}
            setquantity={setquantity}
            isAddedToCart={isAddedToCart}
            setIsAddedToCart={setIsAddedToCart}
          />
        </ProductShow>
      </div>
    </div>
  );
};

export default Detail;
