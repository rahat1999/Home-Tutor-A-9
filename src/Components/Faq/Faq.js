import React from 'react';
import { Accordion, Container } from 'react-bootstrap';
import "./Faq.css"

const Faq = () => {
    return (
        <Container>
            <div className=" p-5 shadow-lg mb-5 faq-container mt-5">
                <h1 className='text-center faq-title'>Frequently Asked Questions</h1>
                <div>
                    <Accordion defaultActiveKey="0" flush>
                        <Accordion.Item eventKey="0">
                            <Accordion.Header>How many Courses do you have?</Accordion.Header>
                            <Accordion.Body className="shadow-lg">
                                We will have 9 courses for our precious Students.We Will support students From calss Six to Class Twelve.
                            </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item eventKey="1">
                            <Accordion.Header>Do you guys take weekly exam?</Accordion.Header>
                            <Accordion.Body className="shadow-lg">
                                Yeah .We Take weekly Exam.It's grow student larning habbit.
                                Taking an online course can help develop skills and knowledge that can benefit your personal and professional life.
                            </Accordion.Body>
                        </Accordion.Item>

                        <Accordion.Item eventKey="2">
                            <Accordion.Header>What is your plan?</Accordion.Header>
                            <Accordion.Body className="shadow-lg">
                                Coaching plans are a great way to establish employees' long-term and short-term goals while encouraging them to strengthen their skills and expertise. As a manager, we should build a coaching plan for each of our employees and consistently monitor their progress.
                            </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item eventKey="3">
                            <Accordion.Header>Do you guys take zoom meeting?</Accordion.Header>
                            <Accordion.Body className="shadow-lg">
                                Yes We Do. Duis aute irure dolor in reprehenderit in voluptate
                                velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                                cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id
                                est laborum.
                            </Accordion.Body>
                        </Accordion.Item>
                    </Accordion>
                </div>
            </div>

        </Container>
    );
};

export default Faq;