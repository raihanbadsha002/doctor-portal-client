import React, { useEffect, useState } from 'react';
import AppointmentDataTable from '../Dashboard/AppointmentDataTable/AppointmentDataTable';
import SideBar from '../Dashboard/SideBar/SideBar';

const AllPatients = () => {
    const [appointments, setAppointments] = useState([]);

    useEffect(() => {
        fetch('http://localhost:8089/appointments')
            .then(res => res.json())
            .then(data => setAppointments(data))
    }, [])

    return (
        <div className="container-fluid row" >
            <SideBar/>
            <div className="col-md-10 p-4 pr-5" style={{ position: "absolute", right: 0, backgroundColor: "#F4FDFB" }}>
                <h5 className="text-brand">All Patients</h5>
                <AppointmentDataTable appointments={appointments} />
            </div>
        </div>
    );
};

export default AllPatients;