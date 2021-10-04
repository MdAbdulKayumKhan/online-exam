import React from 'react';
import { Accordion } from 'react-bootstrap';
import Footer from '../Footer/Footer';
import NavItems from '../NavItems/NavItems';
import './FAQ.css';

const FAQ = () => {
    return (
        <div>
            <NavItems></NavItems>
            <div className="container faq fs-3">
                <Accordion defaultActiveKey="0" flush>
                    <Accordion.Item eventKey="0">
                        <Accordion.Header> <h2>Special plans for teachers and Candidate</h2> </Accordion.Header>
                        <Accordion.Body>
                        Due to the high demand for the reduced plans and the current high demand for the support team, we can’t deliver the quality support we love to give. That’s why we decided to suspend the Teacher Owl and School Owl plans until further notice.
                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="1">
                        <Accordion.Header><h2>How to create an Exam</h2></Accordion.Header>
                        <Accordion.Body>
                        The first thing you need to do is create an account. Don't have one yet? Please read how to create an account.

Once you've done that, you'll see some options on your dashboard. For all accounts, you can create Courses, Quizzes, Exams, and Assessments. If you're not sure which format is the best option, please look
                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="2">
                        <Accordion.Header><h2>How to create a Quiz</h2></Accordion.Header>
                        <Accordion.Body>
                        Once you've done that, you'll see some options on your dashboard. For all accounts you have the possibility of creating Courses, plus three types of tests – Quizzes, Exams and Assessments. If you're not sure which format is the best option for you, please take a look at this article.
                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="3">
                        <Accordion.Header><h2>How to prevent cheating in an Exam</h2></Accordion.Header>
                        <Accordion.Body>
                        Taking online tests increases the chance of cheating in comparison with paper testing. What can you do to prevent students from online cheating? Preventing students from cheating seems to be impossible with all the advanced technology out there today. Here are some tips and tricks that will help prevent cheating.

                        </Accordion.Body>
                    </Accordion.Item>
                    
                </Accordion>
            </div>
        <Footer></Footer>
        </div>

    );
};

export default FAQ;