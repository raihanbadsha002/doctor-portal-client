import React from 'react';

const ServicesInfo = ({sData}) => {
    return (
        <div className="col-md-4 text-center ">
          <div className="shadow p-3 mb-5 bg-body rounded">
            <img src={sData.img} alt="" className="img-fluid mb-2" style={{width: '16%'}}/>
                <h5 className="my-3">{sData.name}</h5>
                <p className="text-info">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quis, explicabo ducimus. Doloremque laudantium assumenda voluptate.</p>
          </div>
            
        </div>
    );
};

export default ServicesInfo;