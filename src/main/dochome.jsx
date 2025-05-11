import React, { useContext } from "react";
import { Link } from "react-router-dom";
import "./dochome.css";

import AuthContext from "../context/AuthProvider";

const Dochome = () => {
  const { auth } = useContext(AuthContext);
  const appointments = [
    {
      id: 1,
      patient: "Jane Doe",
      time: "10:00 AM",
      reason: "Follow-up",
      status: "Upcoming",
    },
    {
      id: 2,
      patient: "Mark Smith",
      time: "11:30 AM",
      reason: "Routine Checkup",
      status: "Completed",
    },
  ];

  const messages = [
    {
      id: 1,
      from: "Reception",
      content: "New appointment request from Anil Kapoor.",
      unread: true,
    },
    {
      id: 2,
      from: "Admin",
      content: "Your schedule has been updated for tomorrow.",
      unread: false,
    },
  ];

  const stats = [
    { title: "Total Appointments", count: 24, color: "#2563eb" },
    { title: "Upcoming", count: 5, color: "#16a34a" },
    { title: "Completed", count: 15, color: "#6b7280" },
    { title: "Cancelled", count: 4, color: "#dc2626" },
  ];

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

            <section className="stats-section">
              {stats.map((item, idx) => (
                <Link to="/appolist" style={{ textDecoration: "none" }}><div
                  key={idx}
                  className="stat-card"
                  style={{ color: item.color }}
                >
                  <h3>{item.title}</h3>
                  <p>{item.count}</p>
                </div></Link>
              ))}
            </section>

            <section className="appointments-section">
              <h2>Today's Appointments</h2>
              <div className="appointments-grid">
                {appointments.map((appt) => (
                  <div key={appt.id} className="appointment-card">
                    <div className="appointment-header">
                      <div>
                        <h3>{appt.patient}</h3>
                        <p>{appt.time}</p>
                      </div>
                      <span className="status-badge">{appt.status}</span>
                    </div>
                    <p>Reason: {appt.reason}</p>
                    <button className="details-btn">View Details</button>
                  </div>
                ))}
              </div>
            </section>

            <section className="messages-section">
              <h2>Recent Messages</h2>
              <div className="messages-grid">
                {messages.map((msg) => (
                  <div key={msg.id} className="message-card">
                    <div className="message-header">
                      <p>From: {msg.from}</p>
                      {msg.unread && (
                        <span className="new-badge">New</span>
                      )}
                    </div>
                    <p className="message-content">{msg.content}</p>
                  </div>
                ))}
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dochome;
