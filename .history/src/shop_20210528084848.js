import React from "react";
import {useState, useEffect} from "react"
import Footer from '../components/Footer'
import { Link } from 'react-router-dom';

const Shop = (props) => {
 
const shopArray = []
console.log(props.store)

  let shop = props.shops.map((shop, index) => {
    //  console.log(shop.name);
    //  var average = shop.rating.reduce(function (average, value, _, array){
    //  console.log(average, value,)

    //   var array_length = array.length;
    //   return Math.floor(average + value / array_length);
    // });
    //Take a b in array and add starting with 0 then deivide by array.length

    let average = shop.rating.reduce(function (sum, value) {
      // console.log(sum, value )
      return sum + value;
  }, 0) / shop.rating.length;


    return (
      <div  key={index}>
        <section id="shop-section">
          <div id='shop-image-container'>
            <div id='shop-image'>
              <img id='shop-img'src={shop.img}/>
            </div>
          </div>
          <div id='shop-name'>
            <h3>{shop.name}</h3>
          </div>
          <div id='shop-rating-container'>
            <img id='shop-rating' src='https://res.cloudinary.com/dhad6e9gj/image/upload/v1621617727/Frozzy%20Project/Star_RED_Icon-01-01_xqqell.png'/>
            <span>Rating: {average}</span>
            <span>{shop.location}</span>
          </div>
          <Link to='/main/icecream'>
            <button id='see-ic-button'> Order!</button>
          </Link>
        
        </section>
      </div>
    );
  });

  return (

   <div id='shop-container'>
     <Footer/>   
     {shop} 

   </div>
  )
};

export default Shop;
