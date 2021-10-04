import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../images/logo/logo.png';
import './NavItems.css';

const NavItems = () => {
    return (
        <div className="nav-items">
            <nav className="navbar navbar-expand-lg navbar-light bg-dark">
                <div className="container-fluid">
                    <Link to="" className="navbar-brand"><img src={logo} alt="" width="90" height="50" /> </Link>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0 fs-4 ">
                            <li className="nav-item">
                                <Link to="/home" className="nav-link active text-white">Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/courses" className="nav-link active text-white">Courses</Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/about" className="nav-link active text-white">About</Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/faq" className="nav-link active text-white">FAQ</Link>
                            </li>
                        </ul>
                        <form className="d-flex">
                            <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                            <button className="btn btn-outline-success" type="submit">Search</button>
                        </form>
                    </div>
                </div>
            </nav>
        </div>
    );
};

export default NavItems;