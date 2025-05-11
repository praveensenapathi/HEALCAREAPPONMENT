import "./navbar.css";
import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
    return (
           <div>
        <nav className="navbar">
              <div className="navbar-brand">                <img class='navimg' src={'src/main/logo.png'} alt="Uploaded"  />
              </div>
              <ul className="navbar-links">
               
                      
        
              </ul>
            </nav>
        </div>
    );
}
export default Navbar;