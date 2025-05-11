import React from 'react';
import './time.css';
import { Link } from "react-router-dom";
import axios from "axios";
import { useLocation, useNavigate } from 'react-router-dom';
import { useState } from 'react';

const time = () => {
    function savetime() {
        const location = useLocation();
        const navigate = useNavigate();
        const { name, phno, date } = location.state || {};
        const [time, setTime] = useState('');

        const handleSubmit = async (e) => {
            e.preventDefault();

            try {
                const response = await axios.post('/submit-appointment', {
                    name,
                    phno,
                    date,
                    time,
                });

                if (response.status === 200 || response.status === 201) {
                    alert('Appointment submitted!');
                    navigate('/'); // redirect to home or success page
                } else {
                    alert('Failed to submit appointment.');
                }
            } catch (error) {
                console.error('Submission error:', error);
                alert('An error occurred while submitting.');
            }
        }
    }
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
                        <li>        <Link to="/">Contact</Link>
                        </li>
                        <li> <Link to="/appointment"><button class="button">Book Appointment</button></Link></li>

                    </ul>
                </nav>
            </div>
            <div class='ttt'>
                <div class='group'>
                    <input type="hidden" name="name" value="${name}"></input>
                    <input type="hidden" name="phno" value="${phno}"></input>
                    <input type="hidden" name="date" value="${date}"></input>
                    <Link to="/success" style={{ textDecoration: "none" }}><div class='time' onClick={savetime} id="timee" value="09:00 Am" onChange={(e) => setTime(e.target.value)}> 09:00 AM - 10:00 AM</div></Link>
                    <Link to="/success" style={{ textDecoration: "none" }}><div class='time'> 10:00 AM - 11:00 AM</div></Link>
                    <Link to="/success" style={{ textDecoration: "none" }}><div class='time'> 11:00 AM - 12:00 PM</div></Link>

                </div>
                <div class='group'>
                    <Link to="/success" style={{ textDecoration: "none" }}><div class='time'> 12:00 PM - 01:00 PM</div></Link>
                    <Link to="/success" style={{ textDecoration: "none" }}><div class='time'> 01:00 PM - 02:00 PM</div></Link>
                    <Link to="/success" style={{ textDecoration: "none" }}><div class='time'> 02:00 PM - 03:00 PM</div></Link>

                </div>
                <div class='group'>
                    <Link to="/success" style={{ textDecoration: "none" }}><div class='time'> 03:00 PM - 04:00 PM</div></Link>
                    <Link to="/success" style={{ textDecoration: "none" }}><div class='time'> 04:00 PM - 05:00 PM</div></Link>
                    <Link to="/success" style={{ textDecoration: "none" }}><div class='time'> 05:00 PM - 06:00 PM</div></Link>
                </div>
            </div>

        </div>
    )
}
export default time;