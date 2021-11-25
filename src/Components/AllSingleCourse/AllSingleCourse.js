import React from 'react';
import { Container, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const AllSingleCourse = (props) => {
    const { img, teacher, Profession, subject, price, courseDuration } = props.allSingleCourse
    return (
        <Container>
            <div className=" card mb-5 shadow-sm p-3 mt-5">
                <div className="row g-0">
                    <div className="col-md-4 ">
                        <img src={img} className="images" alt="Teachers" />
                    </div>
                    <div className="col-md-8">
                        <div className="card-body text-center">
                            <h5 className="card-title">Teacher: {teacher} (<span className="fs-6 form-text">Teacher of {Profession}</span></h5>

                            <h5 className="card-title">Subject: {subject} <i className="fas fa-book"></i></h5>
                            <p>Monthly Tuition fees: <b>{price} TK</b></p>
                            <p>Duration: {courseDuration}</p>
                            <p className="card-text">
                                <Link to='/login'>
                                    <Button className="hire-button" variant="warning"><i className="fas fa-angle-right"></i> Hire Teacher</Button>{' '}
                                </Link>
                            </p>
                        </div>
                    </div>
                </div>
            </div >
        </Container>
    );
};

export default AllSingleCourse;