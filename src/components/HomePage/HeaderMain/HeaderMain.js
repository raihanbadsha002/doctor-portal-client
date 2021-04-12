import React from 'react';
import chair from '../../../images/chair.png';

const HeaderMain = () => {
    return (
        <main style={{height:"600px"}} className="row d-flex align-items-center">
           <div className="col-md-4 offset-md-1">
               <h1 style={{color: "#3a4256"}}>Your New Smile <br/>  Start Here!</h1>
               <p className="text-secondary">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Recusandae similique minima placeat, perspiciatis culpa dolorum veritatis perferendis sunt in reiciendis optio, quae tempore odit magnam aliquid. Quis quidem tempore saepe recusandae, velit consectetur qui soluta. Omnis magni explicabo at dolorum, vel provident soluta corporis esse dolorem quibusdam odio itaque molestiae.</p>
               <button className="btn btn-primary">GET APPOINTMENT</button>
           </div>
           <div className="col-md-6">
              <img src={chair} alt="" className="img-fluid"/>
            </div>
        </main>
    );
};

export default HeaderMain;