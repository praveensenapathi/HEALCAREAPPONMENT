import React, { useContext } from "react";
import { Link } from "react-router-dom";
import "./dochome.css";
import './setting.css';

import AuthContext from "../context/AuthProvider";

const Dochome = () => {
    const { auth } = useContext(AuthContext);


    return (
        <div>
            <nav className="navbar">
                <div className="navbar-brand">
                    <img className='navimg' src={'src/main/logo.png'} alt="Uploaded" />
                </div>
                <ul className="navbar-links">
                    <li><Link to="/dhome">Home</Link></li>
                    <li><Link to="/dhome">Events</Link></li>
                    <li><Link to="/dhome">Hospitals</Link></li>
                    <li><Link to="/settings">Settings</Link></li>
                    <li><Link to="/appolist">Appointments</Link></li>
                </ul>
            </nav>

            <div className="sett">
                <div className="flex">
                    <div>

                        <section className="pro-section">
                            <div className="profile-container">
                                <h1 className="profile-header">doctor Profile</h1>
                                <div className="profile-card">
                                    <img
                                        src="src/main/user.jpg"
                                        alt="Admin"
                                        className="profile-image"
                                        style={{ objectFit: "cover", objectPosition: "top" }}
                                    />
                                    <div className="info-group">
                                        <span className="label">Name:</span>
                                        <span className="value">{auth.name} </span>
                                    </div>
                                    <div className="info-group">
                                        <span className="label">Email:</span>
                                        <span className="value">{auth.email}</span>
                                    </div>
                                    <div className="info-group">
                                        <span className="label">Gender:</span>
                                        <span className="value"> {auth.gender}</span>
                                    </div>
                                    <div className="info-group">
                                        <span className="label">Phone:</span>
                                        <span className="value">{auth.phno}</span>
                                    </div>
                                    <div className="info-group">
                                        <span className="label">Date of Birth:</span>
                                        <span className="value"> {auth.dob} </span>
                                    </div>
                                    <div><Link to="/dash"><button className="book-btn">logout</button></Link></div>
                                </div>
                            </div>
                        </section>


                    </div>
                </div>
            </div>
        </div>
    );
};

export default Dochome;
