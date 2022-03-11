import React from 'react'
import {CartItemType} from '../App'
import CartItem from './CartItem'

type props = {
    cartItems : CartItemType[],
    addTocart : (clickedItem :CartItemType ) => void,
    removeFromCart : (id:number)=>void
}
export default function Cart({cartItems,addTocart,removeFromCart}:props ) {
  return (
    // <div>
    //     <h2>Your Shopping Cart </h2>
    //     {cartItems.length === 0 ? <p>Your Cart is Empty</p> : null}
    //     {cartItems.map(item =>(
    //          <CartItem key={item.id} item={item} addTocart={addTocart} removeFromCart={removeFromCart}></CartItem>
    //     ))}
    // </div>
    


    <div>


    <h2>Your Shopping Cart</h2>
      {cartItems.length === 0 ? <p>No items in cart.</p> : null}
      {cartItems.map(item => (
        <CartItem
          key={item.id}
          item={item}
          addTocart={addTocart}
          removeFromCart={removeFromCart}></CartItem>
      ))}
    </div>
  )}
