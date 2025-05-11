import './login.css';
import { Link, useNavigate } from 'react-router-dom';
import { useRef, useState, useEffect, useContext } from 'react';
import AuthContext from "../context/AuthProvider.jsx";
import { doctorAPI } from '../api/axios.js';

const LOGIN_URL = 'http://localhost:8082/doctor/auth';

const DoctorLogin = () => {
    const { setAuth } = useContext(AuthContext);
    const userRef = useRef();
    const errRef = useRef();
    const inputRef = useRef(null);
    const navigate = useNavigate();

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [errMsg, setErrMsg] = useState('');
    const [success, setSuccess] = useState(false);

    useEffect(() => {
        userRef.current.focus();
    }, []);

    useEffect(() => {
        setErrMsg('');
    }, [email, password]);

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await doctorAPI.post('/auth', {
                email: email,
                password: password
            }, {
                headers: { 'Content-Type': 'application/json' },
                withCredentials: true
            });

            console.log(response.data); // Log the response to check if it's as expected

            if (response.data.message === "Login successful") {
                const userData = {
                    name: response.data.name,
                    email: response.data.email,
                    dob: response.data.dob,
                    phno: response.data.phno,
                    gender: response.data.gender
                };
                setAuth(userData);
                navigate('/dhome');
            } else {
                setErrMsg('Invalid credentials');
            }
        } catch (err) {
            console.error("Login error:", err);

            if (err.response) {
                console.log("Server responded with status:", err.response.status);
                setErrMsg(err.response.data?.message || 'Login Failed');
            } else if (err.request) {
                console.log("Request was made but no response received:", err.request);
                setErrMsg('No Server Response');
            } else {
                console.log("Error setting up the request:", err.message);
                setErrMsg('Request Error');
            }

            if (inputRef.current) {
                inputRef.current.focus();
            }
        }
    };

    return (
        <>
            <section>
                <div className="login">
                    <h3>Login</h3>
                    <label htmlFor="email">Email</label>
                    <input type="text" className="input" style={{ width: "90%" }} id="email"
                        ref={userRef}
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required /><br />
                    <label>Password</label>
                    <input type="password" className="input" ref={inputRef} style={{ width: "90%" }} id="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required /><br /><br />
                    <div className="remember">
                        <div><input type="checkbox" />Remember Me</div>
                        <div>Forgot Password</div>
                    </div><br />
                    {errMsg && <div style={{ color: 'red' }} ref={errRef} tabIndex="-1">{errMsg}</div>}
                    <button className="llogin" onClick={handleSubmit}>Login</button><br />
                    <div className="or">or</div>
                    <Link to="/docreg"><button className="llogin">Sign up</button><br /></Link>
                </div>
            </section>
        </>
    );
};

export default DoctorLogin;
