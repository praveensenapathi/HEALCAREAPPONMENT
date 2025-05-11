
import { Link } from "react-router-dom";

const time = () => {
   
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
                <h1 style={{padding:"50px",marginTop:"60px",color:"green"}}>Appointment Successful</h1>
              </div>

        </div>
    )
}
export default time;