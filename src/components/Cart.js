import React,{useContext} from 'react'
import CartContext from '../context/cart/CartContext'
import formatCurrency from 'format-currency'
import {CartItem} from './CartItem'
import './Cart.css'

export const Cart = () => {

const {cartItems} = useContext(CartContext)
    return (
        <div className="cart">
          
            {cartItems.length === 0 ? (
            <h2>Cart is Empty..Add some items</h2>
            ) : (
           <div>
            {cartItems.map((item)=>(
            <CartItem  key={item._id} item={item} />
            ))}
               </div>
          
            )}
            {cartItems.length>0 && (
                <div className="cart-total">
               <h2>Cart Total:</h2>
            
              $  {formatCurrency(cartItems.reduce((amount,item)=>item.price + amount, 0))}
           
           </div>
            )}
           
        </div>
    )
}
