import React from "react";
import {useState, useEffect} from "react"
import Footer from '../components/Footer'
import { Link } from 'react-router-dom';

const Shop = (props) => {
  let [shops, setShops] = useState([])
//   let url = "https://frozzybe.herokuapp.com/store/"
//   const getShops = async (url) => {
//     const response = await fetch(url);
//     const data = await response.json();
//     // setHeroes(data.data);
//     setShops(data)
// //   };
  // useEffect(() => {
  //   if (props.shops === []){
  //     const user = JSON.parse(localStorage.getItem("undefined") || "[]");
  //     setShops(user)
  //  } else {
  //    setShops(props.shops)
  //  }
  // }, []);
const users = JSON.parse(localStorage.getItem('mine') || "[]");
console.log(typeof users)
console.log(users[0])
// console.log(typeof props.shops)
// console.log(props.shops[0])

//   console.log(users)

  // const cachedHits = localStorage.getItem(undefined);
//  if (users) {
//    setShops(users)
//  }
// if (cachedHits) {
//   setShops({ hits: JSON.parse(cachedHits) });
// } else {
//   // fetch('https://frozzybe.herokuapp.com/store/')
//   //   .then(response => response.json())
//   //   .then(result => this.onSetResult(result, query));
//   setShops(props.shops)
// }
  //   if (props.shops === []){
  //     const user = JSON.parse(localStorage.getItem("undefined") || "[]");
  //     setShops(user)
  //  } else {
  //    setShops(props.shops)
  //  }
const shopArray = []
console.log(shops)

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
