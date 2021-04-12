import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-light">
                <div className="container-fluid">
                    
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav ml-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                          <Link className="nav-link mr-5 my-2 active" aria-current="page" to="/">Home</Link>
                        </li>
                        <li className="nav-item">
                          <Link className="nav-link mr-5 my-2" to="/about">About</Link>
                        </li>
                        <li className="nav-item">
                          <Link className="nav-link mr-5  my-2" to="/dashboard">Dashboard</Link>
                        </li>
                        <li className="nav-item">
                          <Link className="nav-link mr-5 my-2 text-white" to="/login">Login</Link>
                        </li>
                        <li className="nav-item">
                          <Link className="nav-link mr-5 my-2 text-white" to="/blogs">Blogs</Link>
                        </li>
                        <li className="nav-item">
                          <Link className="nav-link mr-5 my-2 text-white" to="/contact">Contact Us</Link>
                        </li>
                    </ul> 
                </div>
            </div>
        </nav>
      </div>
    );
};

export default Navbar;