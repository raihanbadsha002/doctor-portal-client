import React from 'react';
import chair from '../../../images/chair.png';
import 'react-calendar/dist/Calendar.css';
import Calendar from 'react-calendar';
import './AppoinrmentHeader.css'


const AppointmentHeader = ({handleDateChange}) => {
    return (
        <main style={{ height: '600px' }} className="row d-flex align-items-center appointment__container">
        <div className="col-md-4 offset-md-1">
            <h1 className="text-uppercase" style={{ color: '#3A4256' }}>Appointment</h1>
            <Calendar
                onChange={handleDateChange}
                value={new Date()}
            />
        </div>
        <div className="col-md-6">
            <img src={chair} alt="" className="img-fluid" />
        </div>
    </main>
    );
};

export default AppointmentHeader;