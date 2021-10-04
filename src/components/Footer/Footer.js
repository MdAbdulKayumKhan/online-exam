import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';

const Footer = () => {
    return (
        <div className="footer">
            <div className="d-flex flex-column h-100">
                <footer className="w-100 py-4 flex-shrink-0">
                    <div className="container py-4">
                        <div className="row gy-4 gx-5">
                            <div className="col-lg-4 col-md-6">
                                <h5 className="h1 text-white">Online Exam</h5>
                                <p className="small text-muted mb-0">&copy; Copyrights. All rights reserved. <Link className="text-primary" href="#">info@onlineexam.com</Link></p>
                            </div>
                            <div className="col-lg-2 col-md-6">
                                <h5 className="text-white mb-3">Quick links</h5>
                                <ul className="list-unstyled text-muted">
                                    <li><Link to="/home">Home</Link></li>
                                    <li><Link to="/about">About</Link></li>
                                    <li><Link to="/courses">Get Courses</Link></li>
                                    
                                </ul>
                            </div>
                            <div className="col-lg-2 col-md-6">
                                <h5 className="text-white mb-3">Quick links</h5>
                                <ul className="list-unstyled text-muted">
                                    <li><Link to="/home">Home</Link></li>
                                    <li><Link to="/about">About</Link></li>
                                    <li><Link to="/courses">Get Courses</Link></li>
                                    
                                </ul>
                            </div>
                            <div className="col-lg-4 col-md-6">
                                <h5 className="text-white mb-3">Get Offers</h5>
                                <p className="small text-muted">Please subscribe us to get free class and mock test </p>
                                <form action="#">
                                    <div className="input-group mb-3">
                                        <input className="form-control" type="text" placeholder="Recipient's username" aria-label="Recipient's username" aria-describedby="button-addon2" />
                                        <button className="btn btn-primary" id="button-addon2" type="button"><i className="fas fa-paper-plane"></i></button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </footer>
            </div>
        </div>
    );
};

export default Footer;