import React from 'react';
import { useForm } from 'react-hook-form';
import Modal from 'react-modal';


const customStyles = {
    content: {
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)'
    }
};

Modal.setAppElement('#root');

const AppointmentForm = ({ modalIsOpen, closeModal, appointmentOn, date }) => {
    const { register, formState: { errors }, handleSubmit } = useForm();

    const onSubmit = data => {
        data.service = appointmentOn;
        data.date = date;
        data.created = new Date();
        
        fetch('http://localhost:8089/addAppointment', {
            method: 'POST',
            headers: { 'content-type': 'application/json' },
            body: JSON.stringify(data)
        })
        .then(res => res.json())
        .then(success => {
            if(success){
                closeModal();
                alert('Appointment created successfully.');
            }
        })


        
    }
    return (
        <div className="rounded">
             <Modal
                isOpen={modalIsOpen}
                onRequestClose={closeModal}
                style={customStyles}
                contentLabel="Example Modal"
            >
                <h2 className="text-center text-info">{appointmentOn}</h2>
                <p className="text-secondary text-center"><small>ON {date.toDateString()}</small></p>
                <form className="p-5" onSubmit={handleSubmit(onSubmit)}>
                    <div className="form-group">
                      <input type="text" {...register("name", { required: true })} placeholder="Your Name" className="form-control" />
                      {errors.name && <span className="text-danger">This field is required</span>}
                    </div>
                    <div className="form-group">
                      <input type="text" {...register("phone", { required: true })} placeholder="Phone Number" className="form-control" />
                      {errors.phone && <span className="text-danger">This field is required</span>}     
                    </div>
                    <div className="form-group">
                       <input type="email" {...register("email", { required: true })} placeholder="Email" className="form-control" />
                       {errors.email && <span className="text-danger">This field is required</span>} 
                    </div>
                    <div className="form-group row">
                        <div className="col-4">
                            <select className="form-control" {...register("gender", { required: true })} >
                                <option disabled={true} value="Not set">Select Gender</option>
                                <option value="Male">Male</option>
                                <option value="Female">Female</option>
                                <option value="Not set">Other</option>
                            </select>
                            {errors.gender && <span className="text-danger">This field is required</span>}

                        </div>
                        <div className="col-4">
                            <input type="text" {...register("age", { required: true })} placeholder="Your Age" className="form-control" />
                            {errors.age && <span className="text-danger">This field is required</span>}

                        </div>
                        <div className="col-4">
                           <input type="text" {...register("weight", { required: true })} placeholder="Your Weight" className="form-control" />
                            {errors.weight && <span className="text-danger">This field is required</span>}
                        </div>
                    </div>

                    <div className="form-group text-right">
                        <button type="submit" className="btn btn-success px-5 py-2">Send</button>
                    </div>
                </form>
            </Modal>
        </div>
    );
};

export default AppointmentForm;