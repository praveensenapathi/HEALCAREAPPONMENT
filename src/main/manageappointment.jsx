import { useLocation } from 'react-router-dom';

const Appointment = () => {
    const location = useLocation();
    const { appointment } = location.state || {}; // safe fallback

    return (
        <div className="appointment-details">
            <h2>Appointment Details</h2>
            {appointment ? (
                <div>
                    <p><strong>Name:</strong> {appointment.name}</p>
                    <p><strong>Date:</strong> {appointment.date}</p>
                    <p><strong>Time:</strong> {appointment.time}</p>
                    <p><strong>Email:</strong> {appointment.email}</p>
                    <p><strong>Symptoms:</strong> {appointment.symptoms}</p>
                    {/* Add more fields if present */}
                </div>
            ) : (
                <p>No appointment data found.</p>
            )}
        </div>
    );
};

export default Appointment;
