import React from 'react'
import './Offers.css'
import exclusive from '../Assets/exclusive_image.png'
const Offers = () => {
  return (
    <div className="offers">
        <div className="offers-left">
            <h1>Exclusive</h1>
            <h1>Offers For You</h1>
            <p>Only On Best Seller Product</p>
           
        </div>
        <div className="offers-right">
            <img src={exclusive} alt="" />
        </div>
    </div>
  )
}

export default Offers