import {SHOW_HIDE_CART, ADD_TO_CART,REMOVE_FROM_CART, SEARCH_PRODUCTS} from '../Types'

const CartReducer = (state,action) => {
    switch(action.type){
    case SHOW_HIDE_CART:
{
    return {
        ...state,
        showCart: !state.showCart
    }
}

    case ADD_TO_CART:{
        return{
            ...state,
            cartItems: [...state.cartItems,action.payload]
        }
    }


    case REMOVE_FROM_CART:{
        return{
            ...state,
            cartItems: state.cartItems.filter((item)=>item._id !== action.payload)
        }
    }

    case SEARCH_PRODUCTS: {
        return {
             ...state,

            filteredProducts: state.products.filter((item)=>item.name === action.payload),
         
        }
    }

    default:
    return state;
    }

}

export default CartReducer;