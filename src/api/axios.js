import axios from 'axios';

const instance = axios.create(); // or configure it
export default instance;

export const patientAPI = axios.create({
    baseURL: 'http://localhost:8081/patient',
});

export const doctorAPI = axios.create({
    baseURL: 'http://localhost:8082/doctor',
});
