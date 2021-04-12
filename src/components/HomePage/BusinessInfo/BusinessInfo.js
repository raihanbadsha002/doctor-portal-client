import React from 'react';
import { faClock, faMapMarker, faPhoneVolume } from '@fortawesome/free-solid-svg-icons'
import InfoCard from './InfoCard';

const infoData =[
    {
        title: 'Opening Hours',
        description: 'We are open 7 days',
        icon: faClock,
        background: 'success',
    },
    {
        title: 'Visit Our Location',
        description: 'Brooklyn, NY 10023, USA',
        icon: faMapMarker,
        background: 'dark',
    },
    {
        title: 'Call Us Now',
        description: '+156978665223',
        icon: faPhoneVolume,
        background: 'success',
    }
];

const Businessinfo = () => {
    return (
        <section className="d-flex justify-content-center">
          <div className="w-75">
            <div className="row">
                {
                 infoData.map(info => <InfoCard info={info}/>) 
                }
            </div>
          </div>
             
        </section>
    );
};

export default Businessinfo;