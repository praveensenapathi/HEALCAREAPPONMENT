import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./main/home.jsx";
import Dhome from "./main/dochome.jsx";
import Plogin from "./main/plogin.jsx";
import Dlogin from "./main/dlogin.jsx";
import Dash from "./main/dash.jsx";
import Navbar from "./main/navbar.jsx";
import Appointment from "./main/appointment.jsx";
import Doctor from "./main/doctors.jsx";
import Time from "./main/time.jsx";
import Dreg from "./main/docreg.jsx";
import Preg from "./main/preg.jsx";
import Success from "./main/success.jsx";
import Appolist from "./main/appointmentlist.jsx";
import Settings from "./main/settings.jsx";
import Profile from "./main/pprofile.jsx";
import Hospitals from "./main/hospitals.jsx";
import Location from "./main/location.jsx";
const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Dash />} />
          <Route path="/home" element={<Home />} />
          <Route path="/doctors" element={<Doctor />} />
          <Route path="/dash" element={<Dash />} />
          <Route path="/appointment" element={<Appointment />} />
          <Route path="/plogin" element={<Plogin />} />
          <Route path="/dlogin" element={<Dlogin />} />
          <Route path="/time" element={<Time />} />
          <Route path="/dhome" element={<Dhome />} />
          <Route path="/docreg" element={<Dreg />} />
          <Route path="/preg" element={<Preg />} />
          <Route path="/success" element={<Success />} />
          <Route path="/appolist" element={<Appolist />} />
          <Route path="/settings" element={<Settings />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/hospitals" element={<Hospitals />} />
          <Route path="/location" element={<Location />} />

        </Routes>
      </BrowserRouter>
    </div>

  )
}

export default App;
