import React from 'react'
import { products } from '../data'
import {ProductCard} from './ProductCard'
import './Home.css'

export const Home = () => {
    return (
        <div className="products-container">
          
            {products.map(product => (
                <div className="products-grider">
                    <ProductCard key={product._id} product={product}/>
                    {/* <img src={product.image}/>
                    <p className="text">{product.name}</p>
                    <p>$ {product.price}</p>
                    <p className="star">***** <span>12 reviews</span></p>
                    <button className="add-btn">Add to Cart</button> */}
                    </div>
            ))}
        </div>
    )
}
