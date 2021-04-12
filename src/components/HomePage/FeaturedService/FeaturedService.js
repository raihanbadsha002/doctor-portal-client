import React from 'react';
import feature from '../../../images/feature.png';

const FeaturedService = () => {
    return (
        <section className="features__service pd-0 py-md-5 my-5 bg-light">
           <div className="container mb-5">
               <div className="row mb-5">
                   <div className="col-md-5 mb-4 m-md-0">
                      <img className="img-fluid" src={feature} alt=""/>
                   </div>
                   <div className="col-md-7 align-self-center">
                       <h1>Exceptional Dental Care, on your Term</h1>
                       <p> Lorem ipsum dolor sit amet consectetur adipisicing elit.  Tempore efacere amet aperiam non odio. Temporibus, nemo quasi quisquam ipsa distinctio saepe sed veniam incidunt, tempora mollitia, dignissimos repellendus expedita. Obcaecati minima, reiciendis optio aspernatur autem pariatur soluta illum velit, eligendi dolorem consequuntur sapiente rerum accusamus aut nulla praesentium! Neque autem animi, voluptatem magnam nesciunt officia nemo nam, delectus minima velit beatae iste praesentium ad repudiandae, similique excepturi sapiente.</p>
                       <button className="btn btn-primary px-4 py-2">Learn More</button>
                   </div>
               </div>
           </div>
        </section>
    );
};

export default FeaturedService;