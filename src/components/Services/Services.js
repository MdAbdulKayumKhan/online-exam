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
                                <div class="col-lg-4">
                                    <div class="text-center card-box fs-5 text-dark">
                                        <div class="member-card pt-2 pb-2">
                                            <div class="thumb-lg member-thumb mx-auto ">
                                                <img src="https://bootdey.com/img/Content/avatar/avatar2.png" alt="" class="rounded-circle img-thumbnail" />
                                            </div>
                                            <div class="py-4">
                                                <h4>Course: {service.name}</h4>
                                            </div>

                                            <button type="button" class="btn btn-primary mt-3 btn-rounded waves-effect w-md waves-light">Details</button>
                                            <div class="mt-4">
                                                <div class="row">
                                                    <div class="col-4">
                                                        <div class="mt-3">
                                                            <h4>${service.pric}</h4>
                                                            <p class="mb-0 text-muted">Total Price</p>
                                                        </div>
                                                    </div>
                                                    <div class="col-4">
                                                        <div class="mt-3">
                                                            <h4>{service.duration}</h4>
                                                            <p class="mb-0 text-muted">Total Duration</p>
                                                        </div>
                                                    </div>
                                                    <div class="col-4">
                                                        <div class="mt-3">
                                                            <h4>{service.lecture}</h4>
                                                            <p class="mb-0 text-muted">Total Lecture</p>
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