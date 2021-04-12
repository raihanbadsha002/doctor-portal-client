import React from 'react';
import img from '../../../images/doctor.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhoneAlt } from '@fortawesome/free-solid-svg-icons';
const Doctor = ({doctor}) => {
    return (
        <div className="col-md-4 col-sm-6 text-center">
         <div className="shadow-sm">
          { doctor.image ? <img style={{height: '200px'}} src={`data:image/png;base64,${doctor.image.img}`} alt=""/> 
            :
            <img style={{height: '200px'}} className="img-fluid mb-3" src={`https://sleepy-caverns-69462.herokuapp.com/${doctor.img}`} alt=""/>
          }
         
            <h4>{doctor.name}</h4>
            <p className="pb-3"> <FontAwesomeIcon className="text-primary" icon={faPhoneAlt}/> +880-188-934789</p>
         </div>
        </div>
    );
};

export default Doctor;