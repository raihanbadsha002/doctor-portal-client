import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const InfoCard = ({info}) => {
    return (
        <div className="col-md-4 text-white">
           <div className={`d-flex justify-content-evenly bg-${info.background} shadow-lg  rounded`} style={{height:"120px", padding:"40px"}}>
                <div className="mr-3">
                    <FontAwesomeIcon style={{fontSize: "2.5em"}} icon={info.icon} />
                </div>
                <div>
                    <h6>{info.title}</h6>
                    <small>{info.description}</small>
                </div>
           </div> 
        </div>
    );
};

export default InfoCard;