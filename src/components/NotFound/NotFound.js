import React from 'react';
import { Link } from 'react-router-dom';
import page_404 from '../../images/error/404.jpg';
import Footer from '../Footer/Footer';
import NavItems from '../NavItems/NavItems';
import './NotFound.css';

const NotFound = () => {
    return (
        <div>
            <NavItems></NavItems>
            <div className="container">
                <div>
                    <img className="img-fluid w-50" src={page_404} alt="" />
                    <br />
                </div>
                <div className="not-found">
                    <Link to="/home"><button className="btn btn-warning not-found-btn">Go Home</button></Link>
                </div>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default NotFound;