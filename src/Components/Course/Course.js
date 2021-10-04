import React from 'react';
import { Container } from 'react-bootstrap';


const Course = (props) => {
    const { img, teacher, subject, courseDuration, price } = props.course
    return (
        <Container>
            <div className="card mb-3">
                <div className="row g-0">
                    <div className="col-md-4">
                        <img src={img} className="im" alt="..." />
                    </div>
                    <div className="col-md-8">
                        <div className="card-body">
                            <h5 className="card-title">{teacher}</h5>
                            <h5 className="card-title">{subject}</h5>
                            <p>{courseDuration}</p>
                            <p>{price}</p>
                            <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                            <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
                        </div>
                    </div>
                </div>
            </div >
        </Container>
    );
};

export default Course;