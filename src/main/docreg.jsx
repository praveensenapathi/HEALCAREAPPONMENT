import React from 'react'
import './docreg.css';
import axios from 'axios';

const docreg = () => {
    function savedata() {
        var name = document.getElementById("name").value;
        var phone = document.getElementById("phone").value;
        var dob = document.getElementById("dob").value;
        var password = document.getElementById("password").value;
        var email = document.getElementById("mail").value;
        var gender = document.getElementById("gender").value;
        var edu = document.getElementById("edu").value;
        var hosp = document.getElementById("hosp").value;
        var loc = document.getElementById("loc").value;
        var spec = document.getElementById("spec").value;
        var exp = document.getElementById("exp").value;

        axios.post('http://localhost:8082/doctor/doctor', {
            "name": name,
            "phno": phone,
            "gender": gender,
            "email": email,
            "dob": dob,
            "password": password,
            "hospname": hosp,
            "loc": loc,
            "spec": spec,
            "exp": exp,
            "edu": edu
        }).then((response) => { window.alert(response.data); })
            .catch((error) => { window.alert(error); });
    }
    return (
        <div>
            <div class="back"> <h3>Doctor Registration</h3>

                <div class="signup">

                    <div>
                        <label htmlFor="">Name</label>
                        <input type="text" class="input" id="name" style={{ width: "90%" }} required /><br />
                        <div style={{ display: "flex", gap: "30px", marginLeft: "10px", marginRight: "-10px" }}><div><label htmlFor="">Phone-No</label>
                            <input type="number" class="input" id="phone" style={{ width: "90%" }} /> </div> <div><label htmlFor="">Password</label>
                                <input type="password" class="input" id="password" style={{ width: "90%" }} /></div><br />
                        </div>
                        <div style={{ display: "flex", gap: "100px", marginLeft: "10px", marginRight: "-10px" }}><div><label>Date of Birth</label>
                            <input type="date" id="dob" class="input" style={{ width: "125%" }} /></div><div><label>Gender</label>
                                <div style={{ display: "flex", gap: "30px" }}><div style={{ display: "flex" }}><input type="radio" id="gender" className="radio" value={"male"} /><label>male</label></div>
                                    <div style={{ display: "flex" }}><input type="radio" id="gender" className="radio" value={"female"} /><label>female</label><br /></div></div>
                            </div>
                        </div>
                        <label htmlFor="">E-Mail</label>
                        <input type="text" id="mail" class="input" style={{ width: "90%" }} /><br />

                    </div>
                    <div><label htmlFor="">Education and Qualification</label>
                        <input type="text" id="edu" class="input" style={{ width: "90%" }} /><br />
                        <div style={{ display: "flex", gap: "30px", marginLeft: "10px", marginRight: "-10px" }}><div><label htmlFor="">Hospital</label>
                            <input type="text" id="hosp" class="input" style={{ width: "90%" }} /> </div> <div><label htmlFor="">Location</label>
                                <input type="text" id="loc" class="input" style={{ width: "90%" }} /></div><br />
                        </div>
                        <div ><div><label>Speciality</label>
                            <input type="text" id="spec" class="input" style={{ width: "90%" }} /></div>
                        </div>
                        <label htmlFor="">Experience</label>
                        <input type="text" id="exp" class="input" style={{ width: "90%" }} /><br /></div><br />
                </div>
                <button class="sign-btn" onClick={() => {
                    const name = document.getElementById("name").value;
                    const phone = document.getElementById("phone").value;
                    const dob = document.getElementById("dob").value;
                    const password = document.getElementById("password").value;
                    const email = document.getElementById("mail").value;
                    const exp = document.getElementById("exp").value;
                    const spec= document.getElementById("spec").value;
                    const edu= document.getElementById("edu").value;
                    const hosp= document.getElementById("hosp").value;
                    const loc= document.getElementById("loc").value;
                    const gender = document.getElementById("gender").value;
                    if (!name ||!phone || !dob || !password || !email || !exp || !spec || !edu || !hosp || !loc ||!gender) {
                        window.alert("Please fill all the fields");
                        return;
                    }
                    savedata();
                }}>Register</button><br />
            </div>
        </div>
    )
}
export default docreg;