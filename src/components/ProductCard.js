import React,{useContext} from 'react'
import './ProductCard.css'
import CartContext from '../context/cart/CartContext'
import formatCurrency from 'format-currency'
import { Rating } from './Rating'

export const ProductCard = ({product}) => {

const {addToCart} = useContext(CartContext)
    return (
        <div className="products-grid">
                    <img src={product.image} alt={product.name}/>
                    <p className="text">{product.name}</p>
                    <p>$ {formatCurrency(product.price)}</p>
                   
                    {/* <p className="star">***** <span>12 reviews</span></p> */}
                   <div className="ProductCard__Rating">
                    <Rating 
                    value={product.rating}
                    text={`${product.numReviews} reviews`}
                    />
                   </div>
                    <button className="add-btn" onClick={()=>addToCart(product)}>Add to Cart</button> 
        </div>
    )
}
