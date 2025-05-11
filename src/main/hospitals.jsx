
import React, { useEffect, useState } from "react";
import axios from "axios";
import './doctors.css';
import { Link } from "react-router-dom";

const Doctor = () => {
    const [doctors, setDoctors] = useState([]);

    useEffect(() => {
        axios.get("http://localhost:8082/doctor/doctors")
            .then(res => setDoctors(res.data))
            .catch(err => console.error(err));
    }, []);

    return (
        <div>
            <div>
                <nav className="navbar">
                    <div className="navbar-brand">                <img class='navimg' src={'src/main/logo.png'} alt="Uploaded" />
                    </div>
                    <ul className="navbar-links">
                        <li>  <Link to="/home">Home</Link></li>
                        <li>        <Link to="/doctors">Doctors</Link>
                        </li>
                        <li>        <Link to="/">Hospitals</Link>
                        </li>
                        <li>        <Link to="/profile">Profile</Link>
                        </li>
                        <li> <Link to="/appointment"><button class="button">Book Appointment</button></Link></li>

                    </ul>
                </nav>
            </div>
            <h2 style={{ paddingTop: "100px" }}>All Hospitals</h2>
            <ul><div class="doctorlist">
                {doctors.map(doctor => (
                    <div className="doctor" key={doctor.id}>
                        <div class="content">
                            <div class="name">{doctor.hospname} </div>
                            <div class="spec">{doctor.spec}</div>
                            <div class="hospname">{doctor.name} </div>
                            <div class="gender">{doctor.gender} </div>
                            <Link to="/time"><button className="book-btn">Book Appointment</button> </Link>

                        </div>
                    </div>

                ))}
            </div>
            </ul>
        </div>
    );

}
export default Doctor;

