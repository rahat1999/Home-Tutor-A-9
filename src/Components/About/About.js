import React from 'react';
import { Container } from 'react-bootstrap';
import "./About.css"

const About = () => {
    return (
        <Container>
            <div>
                {/* Here our online tutor services details */}
                <br />
                <div className=" about-style border rounded shadow-lg px-2  py-5 mb-3">
                    <h2 style={{ color: 'orange', textShadow: '1px 1px gray' }}>Our Aim</h2>
                    <p><i className="fas fa-hand-point-right"></i>  Our aim is to digitalize the education system, make it simpler, and present it in a more attractive and understandable way, with the utmost quality content from the best creators so that we can share the best knowledge available from the source to the furthest corner of the world.“Emerging Study” project is the outcome of our visionary dream and hard work by which we have brought the traditional institutional education system in the grip of hand with the usage of the best technological solution.
                    </p>
                </div>
                <br />
                <div className="about-style border rounded shadow-lg px-2  py-5 mb-3">
                    <h2 style={{ color: 'orange', textShadow: '1px 1px gray' }}>Why You Will Choose Us !!</h2>
                    <p><i className="fas fa-hand-point-right"></i>  Education is the most empowering force in the world.It creates knowledge, builds confidence, and breaks down barriers to opportunity.Since the pandemic, digitization in education is moulding the learning way of the students.Emerging study gives opportunities to the students to embrace this new challenge and  helps them to cope up with this changing situation.
                    </p>
                </div>
                <br />
                <div className="about-style border rounded shadow-lg px-2  py-5  mb-3">
                    <h2 style={{ color: 'orange', textShadow: '1px 1px gray' }}> Our Learning Process.</h2>
                    <p><i className="fas fa-hand-point-right"></i>  We’ve designed a one stop solution for the students to learn at their own speed.We provide over 1500+ video lectures and 2 lac+ questions, weekly contest, 5000+ model tests and board questions with explicit solution.We programmed this learning journey together with the best quality content providers who make it easy for the students to understand different topics easier.We wish to be as a constant learning partner for the students who find it difficult to identify their weakness and guide them to achieve their dream.</p>
                    <br />

                    <p>Our personalized learning experience enables a student to continuously grow and improvise his learning graph according to the need.We provide one of the most creative subject matter specialists from every corner of the Bangladesh with proven experience.Visually rich contents help the students to have a clear concept of what they read the in the textbook and understand deeply.
                    </p>

                    <br />
                    <p>
                        Our App crafts very user friendly interface which helps a student to adapt technology enabled learning.Our engaging contents help the students to thirst for more knowledge and engage them to connect theory with real life experiences.
                    </p>
                </div>
                <br />
            </div>
        </Container >
    );
};

export default About;