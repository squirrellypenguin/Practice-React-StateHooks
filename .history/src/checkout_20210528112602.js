// import { props } from 'bluebird'
import React from 'react'
import {useState} from "react"
import { Link } from 'react-router-dom';
import Footer from '../components/Footer'
const Checkout = (props) => {

    const [totalCost, setTotalCost] = useState(0)

    const { cart, removeFromCart, favorite, } = props

    const reducer = (accumulator, currentValue) => accumulator + currentValue;
    let cost
    let value1 = 0
    let value = [0] 
    
    if (cart !== [])
    {for (cost in cart) {
        value1 = cart[cost].cost
        value.push(cart[cost].cost)
        console.log(value)   
    }
    
}


const loaded = () => (
<div>
{/* <div style={{textAlign: "center"}}>
        <h1 id="c-favorites-heading">My Past Faves!</h1>
        {cart.map((fave, index) => {

        let average = fave.rating.reduce(function (sum, value) {
            // console.log(sum, value )
            return sum + value;
        }, 0) / fave.rating.length;
         
         return (
            <>
            <div id="cart-container">
             <div id="cart-image-container">
                 <div id="cart-image">
                 <img src={fave.img}/>
                 </div>
             </div>
           
         
              <h3 id="cart-ic-name">{fave.name}</h3>
              <div id="cart-star-container">
                <img id="cart-star" src="https://res.cloudinary.com/dhad6e9gj/image/upload/v1621617727/Frozzy%20Project/Star_RED_Icon-01-01_xqqell.png"/>
                <p id="cart-rating">{Math.floor(average)}</p>
              </div>
              <div id="cart-cost-container">
                 <p id="cart-ic-cost-name">{fave.name}</p>
                 <p id="cart-ic-cost">${fave.cost}</p>
             </div>
             <div id="cart-delete-button-container">
                 <button id='cart-delete-button' 
                 onClick={() =>{
                    removeFromCart(index)
                }}>Remove</button>
             </div>
             <hr/>
             </div>
           
         </>

         )
        
})}
           
</div> */}

    


<div style={{textAlign: "center"}}>
        <h1 id="c-cart-heading">My Order</h1>
        {cart.map((flavor, index) => {

        let average = flavor.rating.reduce(function (sum, value) {
            // console.log(sum, value )
            return sum + value;
        }, 0) / flavor.rating.length;
         
         return (
            <>
            <div id="cart-container">
             <div id="cart-image-container">
                 <div id="cart-image">
                 <img src={flavor.img}/>
                 </div>
             </div>
            </div>
         
              <h3 id="cart-ic-name">{flavor.name}</h3>
              <div id="cart-star-container">
                <img id="cart-star" src="https://res.cloudinary.com/dhad6e9gj/image/upload/v1621617727/Frozzy%20Project/Star_RED_Icon-01-01_xqqell.png"/>
                <p id="cart-rating">{Math.floor(average)}</p>
              </div>
              <div id="cart-cost-container">
                 <p id="cart-ic-cost-name">{flavor.name}</p>
                 <p id="cart-ic-cost">${flavor.cost}</p>
             </div>
             <div id="cart-delete-button-container">
                 <button id='cart-delete-button' 
                 onClick={() =>{
                    removeFromCart(index)
                }}>Remove</button>
             </div>
         </>
         )
        
})}
            <div id="cart-checkout-button-container">
                 <button id='cart-checkout-button'>Checkout</button>
             </div>

            <div id="cart-total-container">
                 <h3 id="cart-total-name">Total</h3>
                 <h2 id="cart-total-price">${value.reduce(reducer)}</h2>
             </div>
</div>


</div>
)


const loading = () => {
return (

<div>
    <h1 style={{color:'white'}}> Add some items first!</h1>
</div>
)}

const body = cart.length || favorite.length > 0 ? loaded() : loading()

return (
    <div>
    <Footer />
    {body}
</div>

    )


}

export default Checkout






    