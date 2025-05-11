import React from 'react';
import './appointment.css';
import { Link } from "react-router-dom";
import axios from 'axios';
import { useNavigate } from "react-router-dom";



const Appointment = () => {
    const navigate = useNavigate();

    const handlesubmit = () => {
        const name = document.getElementById("name").value;
        const phone = document.getElementById("phone").value;
        const dob = document.getElementById("date").value;

        if (!name || !phone || !date) {
            window.alert("Please fill all the fields");
            return;
        }

        savedata();
        navigate("/doctors"); // redirect after saving
    };


    function savedata() {

        var name = document.getElementById("name").value;
        var phone = document.getElementById("phone").value;
        var date = document.getElementById("date").value;

        axios.post("http://localhost:8797/appointment/appointment", {
            name: name,
            phno: phone,
            date: date

        }).catch((error) => { window.alert(error); });
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
                        <li>        <Link to="/hospitals">Hospitals</Link>
                        </li>
                        <li>        <Link to="/profile">Profile</Link>
                        </li>

                    </ul>
                </nav>
            </div>
            <div class="reg">
                <label htmlFor="">Name</label>
                <input type="text" id="name" class="input" /><br />
                <label >Phone-no</label>
                <input type="text" id="phone" class="input" /><br />
                <label >Specality</label>
                <select name="speciality" id="speciality" className="city-dropdown">
                    <option value="">-- Select Speciality --</option>
                    <option value="General Physician">General Physician</option>
                    <option value="Cardiologist">Cardiologist</option>
                    <option value="Dermatologist">Dermatologist</option>
                    <option value="Pediatrician">Pediatrician</option>
                    <option value="Orthopedic">Orthopedic</option>
                    <option value="Gynecologist">Gynecologist</option>
                    <option value="Neurologist">Neurologist</option>
                    <option value="Psychiatrist">Psychiatrist</option>
                    <option value="ENT Specialist">ENT Specialist</option>
                    <option value="Dentist">Dentist</option>
                    <option value="Urologist">Urologist</option>
                    <option value="Gastroenterologist">Gastroenterologist</option>
                    <option value="Oncologist">Oncologist</option>
                    <option value="Endocrinologist">Endocrinologist</option>
                    <option value="Pulmonologist">Pulmonologist</option>
                </select>
                <label >Location</label>
                <select name="city" id="city" className="city-dropdown">
                    <option value="">-- Select City --</option>
                    <option value="Visakhapatnam">Visakhapatnam</option>
                    <option value="Vijayawada">Vijayawada</option>
                    <option value="Guntur">Guntur</option>
                    <option value="Nellore">Nellore</option>
                    <option value="Kurnool">Kurnool</option>
                    <option value="Rajahmundry">Rajahmundry</option>
                    <option value="Tirupati">Tirupati</option>
                    <option value="Anantapur">Anantapur</option>
                    <option value="Kadapa">Kadapa</option>
                    <option value="Eluru">Eluru</option>
                    <option value="Ongole">Ongole</option>
                    <option value="Srikakulam">Srikakulam</option>
                    <option value="Chittoor">Chittoor</option>
                    <option value="Machilipatnam">Machilipatnam</option>
                    <option value="Tenali">Tenali</option>
                </select>
                <label >Date</label>
                <input type="date" id="date" class="input" /><br /><br />
                <button onClick={handlesubmit} class="button" style={{ width: "230px" }}>Next</button>
            </div>
        </div>
    )
}
export default Appointment;