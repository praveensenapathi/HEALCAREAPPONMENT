import React from 'react';
import { Link } from "react-router-dom";
import './dashh.css';

const dash = () => {
    return (
        <div >
            <div>
                <nav className="navbar">
                    <div className="navbar-brand">                <img class='navimg' src={'src/main/logo.png'} alt="Uploaded" />
                    </div>
                    <ul className="navbar-links">


                        <li> <Link to="/appointment"><button class="button">Book Appointment</button></Link></li>

                    </ul>
                </nav>
            </div>
            <div class="dash" >

                <div><Link to="/dlogin" style={{textDecoration:"none"}}>           <div className="dbox"><h1 >DOCTOR</h1></div>
                </Link></div>
                <div><Link to="/plogin" style={{textDecoration:"none"}}>           <div className="dbox" style={{ width: "130%",marginTop:"73%" }}><h1>Patient</h1></div>
                </Link></div>
            </div>
        </div>
    )
}
export default dash;