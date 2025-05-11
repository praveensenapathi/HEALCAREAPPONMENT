import axios from "axios";

const preg = () => {
    function saveData() {

        var name = document.getElementById("name").value;
        var phone = document.getElementById("phone").value;
        var gender = document.querySelector('input[name="gender"]:checked')?.value || '';
        var email = document.getElementById("email").value;
        var dob = document.getElementById("dob").value;
        var password = document.getElementById("password").value;

        axios.post('http://localhost:8081/patient/patient', {
            "name": name,
            "phno": phone,
            "gender": gender,
            "email": email,
            "dob": dob,
            "password": password
        }).then((response) => { window.alert(response.data); })
            .catch((error) => { window.alert(error); });
    }

    return (


        <div className="back" style={{ marginTop: "25%" }}>
            <label htmlFor="">Name</label>
            <input type="text" className="input" id="name" style={{ width: "90%" }} /><br />
            <label htmlFor="">E-Mail</label>
            <input type="text" id="email" className="input" style={{ width: "90%" }} /><br />
            <div style={{ display: "flex", gap: "30px", marginLeft: "10px", marginRight: "-10px" }}><div><label htmlFor="">Phone-No</label>
                <input type="number" class="input" id="phone" style={{ width: "90%" }} /> </div> <div><label htmlFor="">Password</label>
                    <input type="password" class="input" id="password" style={{ width: "90%" }} /></div><br />
            </div>
            <div style={{ display: "flex", gap: "100px", marginLeft: "10px", marginRight: "-10px" }}><div><label>Date of Birth</label>
                <input type="date" id="dob" class="input" style={{ width: "125%" }} /></div><div><label>Gender</label><br />
                    <div style={{ display: "flex", gap: "30px" }}><div style={{ display: "flex" }}><input type="radio" name="gender" className="radio" value={"male"} /><label>male</label></div>
                        <div style={{ display: "flex" }}><input type="radio" name="gender" className="radio" value={"female"} /><label>female</label><br /></div></div><br /><br />
                </div>
            </div>

            <button className="sign-btn" onClick={() => {
                const name = document.getElementById("name").value;
                const phone = document.getElementById("phone").value;
                const dob = document.getElementById("dob").value;
                const email = document.getElementById("email").value;
                const password = document.getElementById("password").value;
                if (!name || !phone || !dob || !email || !password) {
                    window.alert("Please fill all the fields");
                    return;
                }
                saveData();
            }} >Register</button><br />

        </div>

    )
}
export default preg;