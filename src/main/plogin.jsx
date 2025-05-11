import './login.css';
import { Link } from "react-router-dom";
import { useNavigate } from 'react-router-dom';
import { useRef, useState, useEffect, useContext } from 'react';
import AuthContext from "../context/AuthProvider.jsx";
import { patientAPI } from '../api/axios.js';
import axios from '../api/axios.js';
const LOGIN_URL = 'http://localhost:8081/patient/auth';



const plogin = () => {
    const { setAuth } = useContext(AuthContext);
    const userRef = useRef();
    const errRef = useRef();
    const inputRef = useRef(null);
    const navigate = useNavigate();


    const [user, setUser] = useState('');
    const [pwd, setPwd] = useState('');
    const [errMsg, setErrMsg] = useState('');
    const [success, setSuccess] = useState(false);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    useEffect(() => {
        userRef.current.focus();
    }, [])

    useEffect(() => {
        setErrMsg('');
    }, [user, pwd])

    const handleSubmit = async (e) => {
        e.preventDefault();

        console.log("Email:", email);
        console.log("Password:", pwd);

        try {
            const response = await patientAPI.post('/auth', {
                email: email,
                password: password
            }, {
                headers: { 'Content-Type': 'application/json' },
                withCredentials: true
            });

            console.log(response.data);

            if (response.data.message === "Login successful") {
                const userData = {
                    name: response.data.name,
                    email: response.data.email,
                    dob: response.data.dob,
                    phno: response.data.phno,
                    gender: response.data.gender
                };
                setAuth(userData);
                navigate('/home');
            } else {
                setErrMsg('Invalid credentials');
            }
        } catch (err) {
            if (!err?.response) {
                setErrMsg('No Server Response');
            } else if (err.response?.status === 400) {
                setErrMsg('Missing Username or Password');
            } else if (err.response?.status === 401) {
                setErrMsg('Unauthorized');
            } else {
                setErrMsg('Login Failed');
            }
            if (inputRef.current) {
                inputRef.current.focus();
            }
        }
    }

    return (
        <>
            {success ? (
                <section>

                </section>
            ) : (
                <section>
                    <p ref={errRef} className={errMsg ? "errmsg" : "offscreen"} aria-live="assertive">{errMsg}</p>
                    <div class="login">
                        <h3>Login</h3>
                        <label htmlFor="">Email</label>
                        <input type="text" className="input" style={{ width: "90%" }} id="email"
                            ref={userRef}
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required /><br />
                        <label>Password</label>
                        <input type="text" class="input" ref={inputRef} style={{ width: "90%" }} id="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required /><br /><br />
                        <div class="remember"><div><input type="checkbox" />Remember Me</div>       <div > Forgot Password</div></div><br />
                        {errMsg && <div style={{ color: 'red' }} ref={errRef} tabIndex="-1">{errMsg}</div>}

                        <button class="llogin" onClick={handleSubmit}>Login</button><br />
                        <div class="or">or </div>

                        <Link to="/preg"><button class="llogin" >Sign up</button><br /></Link>

                    </div>
                </section>
            )}
        </>
    )
}
export default plogin;