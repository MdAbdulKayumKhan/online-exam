import React from 'react';
import './Banner.css';
import banner01 from '../../images/banner/banner-01.jpg';
import banner02 from '../../images/banner/bn-2.jpg';
import banner03 from '../../images/banner/bn-3.jpg';


const Banner = () => {
    return (
        <div className="banner">
            <div className="container-fluid">
                
                <div id="myCarousel" className ="carousel slide" data-ride="carousel">
                {/* <!--Indicators--> */}
                <ol className ="carousel-indicators">
                <li data-target="#myCarousel" data-slide-to="0" className ="active"></li>
                <li data-target="#myCarousel" data-slide-to="1"></li>
                <li data-target="#myCarousel" data-slide-to="2"></li>
                <li data-target="#myCarousel" data-slide-to="3"></li>
                </ol>

                {/* <!--Wrapper for slides--> */}
                <div className ="carousel-inner" role="listbox">

                <div className ="item active">
                <img src={banner01} alt="Chania" width="460" height="250"/>
                <div className ="carousel-caption">
                <h3>Chania</h3>
                <p>The atmosphere in Chania has a touch of Florence and Venice.</p>
                </div>
                </div>

                <div className ="item">
                <img src={banner02}  alt="Chania" width="460" height="250"/>
                <div className ="carousel-caption">
                <h3>Chania</h3>
                <p>The atmosphere in Chania has a touch of Florence and Venice.</p>
                </div>
                </div>

                <div className ="item">
                <img src={banner03}  alt="Flower" width="460" height="250"/>
                <div className ="carousel-caption">
                <h3>Flowers</h3>
                <p>Beatiful flowers in Kolymbari, Crete.</p>
                </div>
                </div>

                <div className ="item">
                <img src={banner01}  alt="Flower" width="460" height="250"/>
                <div className ="carousel-caption">
                <h3>Flowers</h3>
                <p>Beatiful flowers in Kolymbari, Crete.</p>
                </div>
                </div>

                </div>

                {/* <!--Left and right controls--> */}
                <a className ="left carousel-control" href="#myCarousel" role="button" data-slide="prev">
                <span className ="glyphicon glyphicon-chevron-left" aria-hidden="true"></span>
                <span className ="sr-only">Previous</span>
                </a>
                <a className ="right carousel-control" href="#myCarousel" role="button" data-slide="next">
                <span className ="glyphicon glyphicon-chevron-right" aria-hidden="true"></span>
                <span className ="sr-only">Next</span>
                </a>
                </div>
            </div>
        </div>
    );
};

export default Banner;