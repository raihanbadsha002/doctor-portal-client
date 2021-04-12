import React from 'react';
import Fluoride from '../../../images/Fluoride.png';
import Cavity from '../../../images/Cavity.png';
import Teeth from '../../../images/tooth.png';
import ServicesInfo from './ServicesInfo';


const servicesData = [
    {
        name: 'Fluoride Treatment',
        img: Fluoride
    },
    {
        name: 'Cavity Filling',
        img: Cavity
    },
    {
        name: 'Teeth Whitening',
        img: Teeth
    },
]

const Services = () => {
    return (
        <section>
            <div className="text-center py-5">
                <h5 className="text-success pt-4">OUR SERVICES</h5>
                <h1 className="mb-5">Services We Provide</h1>
            </div>
            <div className="d-flex justify-content-center">
                <div className="w-75">
                    <div className="row mb-5">
                        {
                         servicesData.map(sData => <ServicesInfo sData={sData}/>) 
                        }
                    </div>
                </div>
          </div>
        </section>
    );
};

export default Services;