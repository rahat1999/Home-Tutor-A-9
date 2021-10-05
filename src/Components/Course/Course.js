import React from 'react';
import { Button, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import "./Course.css"


const Course = (props) => {
    const { img, teacher, subject, courseDuration, price, Profession } = props.course
    return (
        <Container>
            <div className=" card mb-5 shadow-sm p-3">
                <div className="row g-0">
                    <div className="col-md-4">
                        <img src={img} className="images" alt="Teachears" />
                    </div>
                    <div className="col-md-8">
                        <div className="card-body text-center">
                            <h4 className="card-title">Teacher: {teacher} (<span className="fs-6 form-text">Teacher of {Profession}</span>)</h4>

                            <h5 className="card-title">Subject: {subject} <i className="fas fa-book"></i></h5>
                            <p>Monthly Tuition fees: <b>{price} TK</b></p>
                            <p>Duration: {courseDuration}</p>
                            <p className="card-text">
                                <Link to=''>
                                    <Button className="hire-button" variant="warning"><i className="fas fa-angle-right"></i> Hire Teacher</Button>{' '}
                                </Link>
                            </p>
                        </div>
                    </div>
                </div>
            </div >
        </Container >
    );
};

export default Course;