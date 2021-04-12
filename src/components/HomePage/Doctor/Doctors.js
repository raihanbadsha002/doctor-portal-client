import React, { useEffect, useState } from 'react';
import Doctor from './Doctor';

const Doctors = () => {
    const [doctors, setDoctors] = useState([])
    useEffect( () => {
        fetch('https://sleepy-caverns-69462.herokuapp.com/doctors')
        .then(res => res.json())
        .then(data => setDoctors(data))
    }, [])
    return (
        <section className="doctors">
        <div className="container">
            <h2 className="text-center text-uppercase  text-primary mb-5">Our Doctors</h2>
            <div className="row">
                 {
                    doctors.map(doctor =><Doctor key={doctor._id} doctor={doctor} />)
                  }
            </div>
        </div>
    </section>
    );
};

export default Doctors;