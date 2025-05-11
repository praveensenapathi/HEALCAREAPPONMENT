import React, { useEffect, useState, useContext } from "react";
import { Link } from "react-router-dom";
import "./dochome.css";
import './setting.css';
import axios from "axios";

import AuthContext from "../context/AuthProvider";

const Profile = () => {
    const { auth } = useContext(AuthContext);
    const [appointments, setAppointments] = useState([]);


    useEffect(() => {
        if (auth?.phno) {
            axios.get(`http://localhost:8797/appointment/appointments/phno/${auth.phno}`)
                .then(res => {
                    setAppointments(res.data);
                })
                .catch(err => {
                    console.error("Failed to fetch appointments:", err);
                });
        }
    }, [auth?.phno]);

    return (
        <div>
            <nav className="navbar">
                <div className="navbar-brand">
                    <img className='navimg' src={'src/main/logo.png'} alt="Uploaded" />
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

            <div className="sett">
                <div className="flex">
                    <div>

                        <section className="pro-section">
                            <div className="profile-container">
                                <h1 className="profile-header">Patient Profile</h1>
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
                <div>
                    <h2>Your Appointments</h2>
                    {appointments.length === 0 ? (
                        <p>No upcoming appointments</p>
                    ) : (
                        <div className="appointment-list">
                            <ul>
                                {appointments.map(appointment => (<div className="appointment-item" style={{ listStyleType: "none" }}>
                                    <li key={appointment.id} style={{ marginBottom: "10px" }}>
                                        <strong>Name:</strong> {appointment.name} <br />
                                        <strong>Date:</strong> {appointment.date} <br />
                                        <strong>Status:</strong> {appointment.status}
                                    </li></div>
                                ))}
                            </ul>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Profile;
