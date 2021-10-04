import React from 'react';
import Banner from '../Banner/Banner';
import Footer from '../Footer/Footer';
import NavItems from '../NavItems/NavItems';
import Services from '../Services/Services';

const Home = () => {
    return (
        <div>
            <NavItems></NavItems>
            <Banner></Banner>
            <Services></Services>
            <Footer></Footer>

        </div>
    );
};

export default Home;