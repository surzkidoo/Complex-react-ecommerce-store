import React,{useContext} from 'react'
import Card from '../Components/Card'
import { FindOneAny } from '../_services/productHelper';
import { ProductContext } from '../productprovider';

function WishlistPage() {
  const {wishlist,product} = useContext(ProductContext)
  return (
    <div className="wishlistpage-container">
      <div>
      My WishList ({wishlist.length})
      </div>

        <div className="filter-product-container">
        
        {wishlist.map((item) => {
            let prod = FindOneAny(product, item.product_id, "product_id");
            return (
              <Card
              key={1}
              prod={prod}
              index={1}
              activelink={false}
              wBtn
            />
            );
          })}
            
      
          
        </div>
      </div>)
}

export default WishlistPage