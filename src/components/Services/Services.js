import React, { useEffect, useState } from 'react';

const Services = () => {
    const [services, setServices] = useState([]);
    useEffect(() => {
        fetch('./generatededucation.json')
            .then(res => res.json())
            .then(data => setServices(data))
    }, []);

    // Using arry slice() to show 4 serives at home page
    const highlightedServices = services.slice(0, 3);
    return (
        <div>
            <div className="container courses">
                <div className="our-course">
                    Our Cousres
                </div>
                <div>
                    <div className="row">
                        {
                            highlightedServices.map(service => (
                                <div className="col-lg-4">
                                    <div className="text-center card-box fs-5 text-dark">
                                        <div className="member-card pt-2 pb-2">
                                            <div className="thumb-lg member-thumb mx-auto ">
                                                <img src={service.img} alt="" className="rounded-circle img-thumbnail" />
                                            </div>
                                            <div className="py-4">
                                                <h4>Course: {service.name}</h4>
                                            </div>

                                            <button type="button" className="btn btn-primary mt-3 btn-rounded waves-effect w-md waves-light">Details</button>
                                            <div className="mt-4">
                                                <div className="row">
                                                    <div className="col-4">
                                                        <div className="mt-3">
                                                            <h4>${service.pric}</h4>
                                                            <p className="mb-0 text-muted">Total Price</p>
                                                        </div>
                                                    </div>
                                                    <div className="col-4">
                                                        <div className="mt-3">
                                                            <h4>{service.duration}</h4>
                                                            <p className="mb-0 text-muted">Total Duration</p>
                                                        </div>
                                                    </div>
                                                    <div className="col-4">
                                                        <div className="mt-3">
                                                            <h4>{service.lecture}</h4>
                                                            <p className="mb-0 text-muted">Total Lecture</p>
                                                        </div>
                                                    </div>
                                                </div>

                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))
                        }
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Services;