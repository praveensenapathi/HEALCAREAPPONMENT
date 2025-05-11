import { Link } from "react-router-dom";

import React from 'react';
import './home.css';

export default function Home() {
    return (
        
        <div>
               <div>
            <nav className="navbar">
                  <div className="navbar-brand">                <img class='navimg' src={'src/main/logo.png'} alt="Uploaded"  />
                  </div>
                  <ul className="navbar-links">
                   
                    <li>  <Link to="/home">Home</Link></li>        
                    <li>        <Link to="/doctors">Doctors</Link>  
                    </li>
                    <li>        <Link to="/hospitals">Hospitals</Link>
                    </li>
                    <li>        <Link to="/profile">Profile</Link>
                    </li>       
                    <li> <Link to="/appointment"><button class="button">Book Appointment</button></Link></li>
            
                  </ul>
                </nav>
            </div>
            <div class='text'>
                <h2>Quality care, just a click away</h2>

            </div >
            <div class='container'>
            <Link to="/doctors" style={{textDecoration:"none"}}>       <div class='box' style={{width:"150px",textDecoration:"none"}}>  <h3>Doctors</h3>
                    
                    </div>
            </Link>

            <Link to="/hospitals" style={{textDecoration:"none"}}>       <div class='box' style={{width:"150px"}}>  <h3>Hospitals</h3>
                    
                    </div>
            </Link>
            <Link to="/location" style={{textDecoration:"none"}}>       <div class='box' style={{width:"150px"}}>  <h3>Location</h3>
                    
                    </div>
            </Link>
            <Link to="/" style={{textDecoration:"none"}}>       <div class='box' style={{width:"150px"}}>  <h3>Check Up</h3>
                    
                    </div>
            </Link>
            </div>
            
        </div>
    );
}