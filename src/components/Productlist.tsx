import {CartItemType} from '../App'
import '../App'
 
type props = {
  item : CartItemType,
  handelAddToCart : (clickedItem :CartItemType)=>void;
}
export default function Productlist({item,handelAddToCart} : props) {
  return (
    <div className="card" style={{width: "18rem"}}>
        <img src={item.image} alt={item.title} style={{height:'200px'}} className="card-img-top" />
        <div className="card-body">
          <h4 className="card-title">{item.title}</h4>
          <p className="card-description "  style={{maxWidth:"30"}}>{item.description?.slice(0,45)}... </p>
          <h5> {`\u20B9`}{item.price}</h5>
        </div>
        <button className='btn btn-dark' onClick={()=> handelAddToCart(item)} > Add to Cart</button>
    </div>
  )
  
}
