import React from 'react'
import logo from '../img/new-logo.jpeg'

const Navbar = () => {
    return ( 
        <nav className="navbar">
            <img src={logo} width="70" height="60" alt="logo"></img>
            <h1><span id="t-title">T</span>he blog</h1>
            <div className="links">
                <a href="/">Home</a>
                <a href="/create" style={{
                    color: "white",
                    backgroundColor: "#0e386b",
                    borderRadius: '8px'

                }}>New blog</a>
            </div>
        </nav>

    );
}
 
export default Navbar;
