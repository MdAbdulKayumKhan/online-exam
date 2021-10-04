import Button from '@restart/ui/esm/Button';
import React from 'react';
import { Form, Row, Col } from 'react-bootstrap';
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
                            <div class="row g-4 fs-3">
                                <div class="col-sm-12">
                                    <div class="card text-center">
                                        <div class="card-header">
                                        <h3>CONTACT INFO</h3>
                                        </div>
                                        <div class="card-body">
                                            <h3>Email: info@onlineexam.com</h3>
                                            <h3>Mobile: 019111111111</h3>
                                            <h5 class="card-title">We applyed best teaching methods</h5>
                                            
                                           


                                            </div>
                                            <div class ="card-footer text-muted">

                                            </div>
                                            </div>

                                        </div>

                                        <div class="col-sm-12">
                                            <div class="card">
                                                <div class="card-body">
                                                    <h3 class="card-title">SEND A MESSAGE</h3>
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
                                                            <Form.Control placeholder="1234 Main St" />
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