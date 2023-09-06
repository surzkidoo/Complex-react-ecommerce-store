import React,{useEffect,useContext} from 'react'
import { ProductContext } from '../productprovider';

function OrderPage() {
    const {order} = useContext(ProductContext)
    useEffect(() => {
       console.log(order)
      }, []);
    

  return (
    <div className='orderpage-container'>
        <div>
      My Orders ({order.length})
      </div>
        <div className='order-container'>
        
        <table className='table'>
        <thead className=''>
            <td>Id</td>
            <td>Quantity</td>
            <td>Price</td>
            <td>Date</td>
            <td>Status</td>
            <td>Action</td>
         </thead>

{
    order.map((item,index)=>{
        return <tr className='' key={index}>
        <td>
           {index}
        </td>
        <td>
           {item.products.length}
        </td>
        <td>
           { item.grandtotal}
        </td>
        <td>
           { item.date}
        </td>
        <td>
            {item.status}
        </td>
        <td>
            <div className='action-container'>
                O
            </div>
        </td>
    </tr>
    })
}
<tr>
<td>
          1232
        </td>
        <td>
           23
        </td>
        <td>
           342,423
        </td>
        <td>
aug 21        </td>
        <td>
            pending
        </td>
        <td>
            <div className='action-container'>
                O
            </div>
        </td>
    </tr>

        </table>
        </div>
    </div>
  )
}

export default OrderPage