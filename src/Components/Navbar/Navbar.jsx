import React, { useContext, useState } from 'react'
import "./Navbar.css"


import { Link } from 'react-router-dom';
import logo from '../Assets/logo.png'
import cart_icon from '../Assets/cart_icon.png'
import { ShopContext } from '../../Context/ShopContext';

import { useAuth0 } from "@auth0/auth0-react";

const Navbar = () => {

    const [menu, setMenu] = useState("shop");
    const {getTotalCartItems} = useContext(ShopContext);


    const { loginWithRedirect ,logout ,isAuthenticated} = useAuth0();

  return (
<>
<div className="navbar">
<div className="nav-logo">
        <img src={logo} alt="" srcset="" />
        <p> SHOP-Z </p>

    </div>

    
        <ul className="nav-menu">
            <li onClick={()=>{setMenu("shop")}}> <Link to='/' >Shop</Link> {menu==="shop"?<hr/>:<></>}</li>
            <li onClick={()=>{setMenu("mens")}}> <Link to='/mens' >Men</Link> {menu==="mens"?<hr/>:<></>}</li>
            <li onClick={()=>{setMenu("womens")}}> <Link to='/womens' >Women</Link> {menu==="womens"?<hr/>:<></>}</li>
            <li onClick={()=>{setMenu("kids")}}> <Link to='/kids' >Kids</Link> {menu==="kids"?<hr/>:<></>}</li>

            
            


        </ul>
        <div className="nav-login-cart">
        {/* <Link to='/login' ><button>Login</button></Link> */}

        {isAuthenticated ?
            <li ><button  onClick={() => logout({ logoutParams: { returnTo: window.location.origin } })}>
             Log Out
            </button></li> : <li ><button className='h' onClick={() => loginWithRedirect()}>Log In</button></li> }


        <Link to='/cart' ><img src={cart_icon} alt="" /></Link> 
            <div className="nav-cart-count">{getTotalCartItems()}</div>
        </div>

</div>
    



</>
  )
}

export default Navbar