import React from 'react'
import './Hero.css'
import hand_icon from '../Assets/hand_icon.png'
import arrow from "../Assets/arrow.png"
import Heroimg from "../Assets/hero_image.png"
const Hero = () => {
  return (
    <div className="hero">
        <div className="hero-left">
        <h2> New arrivals only</h2>
        <div>
            <div className="hero-hand-icon">
                <p>new</p>
                <img src={hand_icon} alt="" srcset="" />
            </div>
            <p>Collections</p>
            <p>For Everyone</p>
        </div>
        <div className="hero-latest-btn">
            <div>Latest Collection</div>
            <img src={arrow} alt="" />
        </div>
        </div>
        <div className="hero-right">
            <img src={Heroimg} alt="" />
        </div>
    </div>
  )
}

export default Hero