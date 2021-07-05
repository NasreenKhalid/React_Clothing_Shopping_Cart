import React from 'react'
import { products } from '../data'
import './Home.css'

export const Home = () => {
    return (
        <div className="products-container">
            {products.map(product => (
                <div>
                    <p>{product.name}</p>
                    </div>
            ))}
        </div>
    )
}
