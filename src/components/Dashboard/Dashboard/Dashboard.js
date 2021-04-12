import React, { useContext, useEffect, useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import { UserContext } from '../../../App';
import AppointmentsByDate from '../AppointmentsByDate/AppointmentsByDate';
import SideBar from '../SideBar/SideBar';


const containerStyle = {
    backgroundColor: "#F4FDFB",
    border: '1px solid red'
}

const Dashboard = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const [selectedDate, setSelectedDate] = useState(new Date());
    const [appointments, setAppointments] = useState([]);

    const handleDateChange = date => {
        setSelectedDate(date);
    }

    useEffect(() => {
        fetch('https://sleepy-caverns-69462.herokuapp.com/appointmentsByDate', {
            method: 'POST',
            headers: { 'content-type': 'application/json' },
            body: JSON.stringify({ date: selectedDate, email: loggedInUser.email })
        })
            .then(res => res.json())
            .then(data => setAppointments(data))
    }, [selectedDate])

    return (
        <section>
        <div style={containerStyle} className="row">
            <div className="col-md-2 col-sm-6 col-12">
                <SideBar/>
            </div>
            <div className="py-4 col-md-5 col-sm-12 col-12 d-flex justify-content-center flex-column align-items-center">
            <h2 className="text-info py-2">Appointment Dates</h2>
                <Calendar
                    onChange={handleDateChange}
                    value={new Date()}
                />
            </div>
            <div className="col-md-5 col-sm-12 col-12">
                <AppointmentsByDate appointments={appointments}/>
            </div>
        </div>
    </section>
    );
};

export default Dashboard;