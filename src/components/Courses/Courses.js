import React, { useEffect, useState } from 'react';
import Footer from '../Footer/Footer';
import NavItems from '../NavItems/NavItems';
import './Courses.css';

const Courses = () => {
    const [courses, setCourses] = useState([]);
    useEffect(() => {
        fetch('./generatededucation.json')
            .then(res => res.json())
            .then(data => setCourses(data))
    }, [])
    return (
        <div>
            <NavItems></NavItems>
            <div className="container courses">
                <div className="our-course">
                    Our Cousres
                </div>
                <div>
                    <div className="row">
                        {
                            courses.map(course => (
                                <div className="col-lg-4">
                                    <div className="text-center card-box fs-5 text-dark">
                                        <div className="member-card pt-2 pb-2">
                                            <div className="thumb-lg member-thumb mx-auto ">
                                                <img src={course.img} alt="" className="rounded-circle img-thumbnail" />
                                            </div>
                                            <div className="py-4">
                                                <h4>Course: {course.name}</h4>
                                            </div>

                                            <button type="button" className="btn btn-primary mt-3 btn-rounded waves-effect w-md waves-light">Details</button>
                                            <div className="mt-4">
                                                <div className="row">
                                                    <div className="col-4">
                                                        <div className="mt-3">
                                                            <h4>${course.pric}</h4>
                                                            <p className="mb-0 text-muted">Total Price</p>
                                                        </div>
                                                    </div>
                                                    <div className="col-4">
                                                        <div className="mt-3">
                                                            <h4>{course.duration}</h4>
                                                            <p className="mb-0 text-muted">Total Duration</p>
                                                        </div>
                                                    </div>
                                                    <div className="col-4">
                                                        <div className="mt-3">
                                                            <h4>{course.lecture}</h4>
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
            <Footer></Footer>
        </div>
    );
};

export default Courses;