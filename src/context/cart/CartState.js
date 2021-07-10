import React,{useReducer} from 'react';
import CartContext from './CartContext'
import CartReducer from './CartReducer'
import {SHOW_HIDE_CART, ADD_TO_CART,REMOVE_FROM_CART,SEARCH_PRODUCTS} from '../Types'
import { products } from '../../data';


const CartState = ({children}) => {
    const initialState = {
        showCart : false,
        cartItems: [],
        products:[],
        filteredProducts:[]
    }

{console.log(products)}
const [state,dispatch] = useReducer(CartReducer, initialState)

const addToCart = (item) => {
dispatch({type:ADD_TO_CART,payload:item})
}

const removeFromCart = (id) => {
    dispatch({ type: REMOVE_FROM_CART, payload:id})
}

const showHideCart = ()=>{
    dispatch({type:SHOW_HIDE_CART})
}

const searchProducts = (name) => {
dispatch({ type: SEARCH_PRODUCTS, payload:name})
}
return (
    <CartContext.Provider
    value={{
        sowCart:state.showCart,
        cartItems:state.cartItems,
        products:state.products,
        filteredProducts:state.filteredProducts,
        addToCart,
        removeFromCart,
        showHideCart,
        searchProducts


    }}
    >
{children}
    </CartContext.Provider>
)
}

export default CartState;
