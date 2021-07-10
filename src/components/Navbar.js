import React, { useContext,useState } from 'react'
import {Link} from 'react-router-dom'
import CartContext from '../context/cart/CartContext'
import './Navbar.css'

export const Navbar = () => {

// const cartItems = [1,2,3];
const {filteredProducts,searchProducts,cartItems} = useContext(CartContext)
const [inputText,setInputText] = useState('')
const [results,setResults] = useState([])


const handleChange = (e) => {
    setInputText(e.target.value)
    console.log(e.target.value)

// {cartItems.filter((item)=>( {
//     item.name === inputText.value
//    setResults(item)
//     return results;  


}
    return (
        
        <div className="navbar">
            <div className="title">
            Best For You
            </div>
            <div className="input__wrapper">
            
            <input 
            type="text" 
            placeholder="Search goes here..."
            value={inputText}
            onChange={handleChange}
            />
           
            <button onClick={()=>{
        searchProducts(inputText)
        setResults(filteredProducts)
        console.log(results)
                 
            } }><i className="fas fa-search"></i></button>
            </div>
          
           <ul>
               <li>
                   <Link to="/">Home</Link>
               </li>
               <li>
                   <Link to="/about">About</Link>
               </li>
               <li>
               
                   <Link to="/cart"><i className="fas fa-shopping-cart cart_icon" aria-hidden="true"></i>
                   {cartItems && cartItems.length > 0 && (
                       <div className="item__count">
                           <span>{cartItems.length}</span>

                       </div>
                   )}
                   </Link>
               </li>
           </ul>
        </div>
    )
}
