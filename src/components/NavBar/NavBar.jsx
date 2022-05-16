import React, { useState, useEffect } from 'react';
import Logo from "../../logo.png"
import './navbar.css'
import { AiOutlineShoppingCart } from 'react-icons/ai'

export const NavBar = () => {
    
    const navlinks = ["Home","Tienda","Galeria","About us", <AiOutlineShoppingCart/>]


    return(
        <>
            <div className='navbar'>
            <img className= 'logo' src={Logo}></img>
            <ul className='navlinks'>
                {
                    navlinks.map(
                        function(item, i) {
                        return <li key={i}><a>{item}</a></li>
                    }
                    )
                }
            </ul>
            </div>
        </>
    )


}