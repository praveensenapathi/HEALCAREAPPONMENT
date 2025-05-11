import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

import "./dochome.css";

import AuthContext from "../context/AuthProvider";

const Appointmentlist = () => {
    const { auth } = useContext(AuthContext);
    const [appointments, setAppointments] = useState([]);
    const [acceptedAppointments, setAcceptedAppointments] = useState({});
    const [hiddenAppointments, setHiddenAppointments] = useState([]);

    useEffect(() => {
        axios.get("http://localhost:8797/appointment/appointments") // Adjust this endpoint as needed
            .then(res => setAppointments(res.data))
            .catch(err => console.error("Failed to fetch appointments:", err));
    }, []);

    const handleAccept = async (id) => {
        try {
            const res = await axios.put(`http://localhost:8797/appointment/appointments/${id}/accept`);
            if (res.data === "Accepted") {
                setAcceptedAppointments(prev => ({ ...prev, [id]: true }));
            }
        } catch (err) {
            console.error("Failed to accept:", err);
        }
    };
    const handleDone = (id) => {
        setHiddenAppointments(prev => [...prev, id]);
    };






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

            <div className="home">
                <div className="flex">
                    <div>
                        <h1>Welcome, {auth.name}</h1>

                        <div class="doctorlist">
                            {appointments
                                .filter(appointment => appointment.status !== 'Accepted')
                                .map(appointment => (
                                    <div className="doctor" key={appointment.id}>
                                        <div className="content">
                                            <div className="name">{appointment.name}</div>
                                            <div className="spec">{appointment.date}</div>

                                            {!acceptedAppointments[appointment.id] ? (
                                                <button className="book-btn" onClick={() => handleAccept(appointment.id)}>
                                                    Accept
                                                </button>
                                            ) : (
                                                <button
                                                    style={{
                                                        backgroundColor: 'green',
                                                        color: 'white',
                                                        width: "210px",
                                                        padding: "10px",
                                                        borderRadius: "5px",
                                                        border: "none",
                                                        marginLeft: "15px"
                                                    }}
                                                    onClick={() => handleDone(appointment.id)}
                                                >
                                                    Mark as Done
                                                </button>
                                            )}

                                            <button className="book-btnn">Decline</button>
                                        </div>
                                    </div>
                                ))}

                        </div>


                    </div>
                </div>
            </div>
        </div>
    );
};

export default Appointmentlist;
