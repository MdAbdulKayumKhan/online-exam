
import React from 'react';
import { Form, Row, Col, Button } from 'react-bootstrap';
import Footer from '../Footer/Footer';
import NavItems from '../NavItems/NavItems';
import './About.css';

const About = () => {
    return (
        <div>
            <NavItems></NavItems>
            <div className="container">
                <div className="our-course">
                    About Us
                </div>
                <div>
                    <div className="row">
                        <div className="col-lg-12 about-us">
                            <div className="row g-4 fs-3">
                                <div className="col-sm-12">
                                    <div className="card text-center">
                                        <div className="card-header">
                                        <h3>We applyed best teaching methods</h3>
                                        </div>
                                        <div className="card-body">
                                       
                                            <p>The classroom is a dynamic environment, bringing together students from different backgrounds with various abilities and personalities. Being an effective teacher therefore requires the implementation of creative and innovative teaching strategies in order to meet students’ individual needs.</p>

                                            <p>Whether you’ve been teaching two months or twenty years, it can be difficult to know which teaching strategies will work best with your students. As a teacher there is no ‘one size fits all’ solution, so here is a range of effective teaching strategies you can use to inspire your classroom practice.</p>
                                            <h2 className="card-title">CONTACT INFO</h2>
                                            <h3>Email: info@onlineexam.com</h3>
                                            <h3>Mobile: 019111111111</h3>

                                            </div>
                                            <div class ="card-footer text-muted">

                                            </div>
                                            </div>

                                        </div>

                                        <div className="col-sm-12">
                                            <div className="card fs-3">
                                                <div className="card-body">
                                                    <h3 className="card-title">SEND A MESSAGE</h3>
                                                    <h6>Your email address will not be published. Required fields are marked.</h6>
                                                    <Form>
                                                        <Row className="mb-3">
                                                            <Form.Group as={Col} controlId="formGridEmail">
                                                                <Form.Label>Name</Form.Label>
                                                                <Form.Control type="text" placeholder="your name" />
                                                            </Form.Group>

                                                            <Form.Group as={Col} controlId="formGridPassword">
                                                                <Form.Label>Email</Form.Label>
                                                                <Form.Control type="email" placeholder="email" />
                                                            </Form.Group>
                                                        </Row>

                                                        <Form.Group className="mb-3" controlId="formGridAddress1">
                                                            <Form.Label>Subject</Form.Label>
                                                            <Form.Control placeholder=" your subject" />
                                                        </Form.Group>

                                                        <Form.Group className="mb-3" controlId="formGridAddress2">
                                                            <Form.Label>Message </Form.Label>
                                                            <Form.Control as="textarea" rows={3} />
                                                            
                                                        </Form.Group>

                                                        <Form.Group className="mb-3" id="formGridCheckbox">
                                                            <Form.Check type="checkbox" label="Check me out" />
                                                        </Form.Group>

                                                        <Button variant="primary" type="submit">
                                                            Submit
                                                        </Button>
                                                    </Form>

                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                    <Footer></Footer>
                </div>

                );
};

                export default About;