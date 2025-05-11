import "./navbar.css";
import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
return(
<div>
<nav className="navbar">
      <div className="navbar-brand">                <img class='navimg' src={'src/main/logo.png'} alt="Uploaded"  />
      </div>
      <ul className="navbar-links">
       
        <li>  <Link to="/home">Home</Link></li>        
        <li>        <Link to="/doctors">Doctors</Link>  
        </li>
        <li>        <Link to="/">Hospitals</Link>
        </li>
        <li>        <Link to="/">Contact</Link>
        </li>       
        <li> <Link to="/appointment"><button class="button">Book Appointment</button></Link></li>

      </ul>
    </nav>
</div>
);
}
export default Navbar;