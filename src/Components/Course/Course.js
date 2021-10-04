import React from 'react';
import { Button, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import "./Course.css"


const Course = (props) => {
    const { img, teacher, subject, courseDuration, price } = props.course
    return (
        <Container>
            <div className=" card mb-5 shadow-sm p-3">
                <div className="row g-0">
                    <div className="col-md-4 ">
                        <img src={img} className="images" style={{ width: '350px', height: '250px' }} alt="..." />
                    </div>
                    <div className="col-md-8">
                        <div className="card-body">
                            <h5 className="card-title">Teacher: {teacher}</h5>
                            <h5 className="card-title">Subject: {subject}</h5>
                            <p>Duration: {courseDuration}</p>
                            <p>Salary: {price}</p>
                            <p className="card-text">
                                <Link to=''>
                                    <Button className="hire-button" variant="warning">Hire</Button>{' '}
                                </Link>
                            </p>
                        </div>
                    </div>
                </div>
            </div >
        </Container>
    );
};

export default Course;