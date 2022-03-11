import Productlist from './components/Productlist';
// import { CartItemType } from './propstype';
import { useQuery } from 'react-query';
import { Drawer, LinearProgress,Badge } from '@material-ui/core'
import  AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';
import Navbar from './Navbar';
import Cart from './components/Cart';
import { useState } from 'react';
import {StyledButton} from './components/products.styles'
// import {Wrapper} from './components/products.styles'
export type CartItemType = {
  id: number;
  category: string;
  description: string;
  image: string;
  price: number;
  title: string;
  amount: number;
  quantity : number;
};
const getProduct = async (): Promise<CartItemType[]> => await (await fetch('https://fakestoreapi.com/products')).json()

function App() {

  const [cartopen, setCartOpen] = useState(false);
  const [cartItems, setcartItems] = useState([] as CartItemType[] ) 
  const { data, isLoading } = useQuery<CartItemType[]>('products', getProduct)

  // let getTotalItems = (items:CartItemType[]) => items.reduce((ack : number,itemp)=> ack  , 0)
  const getTotalItems = (items: CartItemType[]) =>
    items.reduce((ack: number, item) => ack + item.amount,0);
  let handelAddToCart = (clickedItem: CartItemType) =>{
    setcartItems(prev=>{
      const isItemIncart = prev.find(item => item.id === clickedItem.id);
      if(isItemIncart){
        return prev.map(item =>
          item.id=== clickedItem.id ? {...item, amount:item.amount +1, quantity : item.quantity +1}:item
        )
      }
      return [...prev, {...clickedItem,amount:1}]
    })
  }

  let handleRemovefromCart = (id:number) => {
    setcartItems(prev => prev.reduce((ack,item)=>{
      if(item.id=== id){
        if(item.amount===1) return ack;
        return [...ack , {...item, amount : item.amount -1, quantity : item.quantity -1 }];
      }
      else{
          return[...ack,item];
      }
    },[]as CartItemType[]))
  } 

  console.log(data)

  if (isLoading) {
    return (<LinearProgress></LinearProgress>) 
  }
  return (
    <div>
      <Navbar></Navbar>
      <div>
        <Drawer anchor='right' open={cartopen} onClose={() => setCartOpen(false)}>
        <Cart
          cartItems={cartItems}
          addTocart={handelAddToCart}
          removeFromCart={handleRemovefromCart}
        />
      </Drawer>
      <StyledButton onClick={() => setCartOpen(true)}>
        <Badge badgeContent={getTotalItems(cartItems)} color='error'>
          <AddShoppingCartIcon />
        </Badge>
      </StyledButton>
      </div>
      <div className='container my-3' >
        <div className="row">
          <h1 className='my-5' style={{ textAlign: "center" }}>List of Products</h1>
          {data?.map(item => {
            return (
              <div className="col-md-4 my-2">
                <Productlist item={item} handelAddToCart={handelAddToCart}></Productlist>
              </div>)
          })}
        </div>
      </div>
    </div>
  );
}
export default App;

