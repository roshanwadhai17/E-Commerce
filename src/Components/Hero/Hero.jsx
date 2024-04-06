import React from 'react'
import './Hero.css'


import Heroimg from "../Assets/hero_image.png"

import { useAuth0 } from "@auth0/auth0-react";

const Hero = () => {

    const { user, isAuthenticated } = useAuth0();
    

  return (
    <div className="hero">
        <div className="hero-left">


        <div>
            <div className="hero-hand-icon">
                <p>Hello!! 👋</p>

            </div>
            {
                // isAuthenticated && (
                //     <div>
                //       <h2>{user.name}</h2>
                //     </div>
                // )
                isAuthenticated && (
                    <div>
                      <p>
                        {user.name === user.email ? user.name.slice(0, -10) : user.name}
                      </p>
                    </div>
                  )
            }
        </div>
       
        </div>
        <div className="hero-right">
            <img src={Heroimg} alt="" />
        </div>
    </div>
  )
}

export default Hero