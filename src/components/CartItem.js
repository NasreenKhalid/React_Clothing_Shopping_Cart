import React,{useContext} from 'react'
import CartContext from '../context/cart/CartContext'
import formatCurrency from 'format-currency'

export const CartItem = ({item}) => {
const {removeFromCart} = useContext(CartContext);
    return (
        <div>
       <img src={item.image} alt={item.name}/>
            <h3>{item.name}</h3>
            <h3>$ {item.price}</h3>
            <button onClick={()=>removeFromCart(item._id)}>X</button>
        </div>
    )
}
