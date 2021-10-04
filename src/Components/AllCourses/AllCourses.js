import React, { useEffect, useState } from 'react';
import { Button, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const AllCourses = () => {
    const [allCourses, setAllCourses] = useState([])
    useEffect(() => {
        fetch("./FakeData.json")
            .then(res => res.json())
            .then(data => setAllCourses(data))
    }, [])
    return (
        <div >
            {/* All Courses  data will be load frome here  */}

            {
                allCourses.map(all => <>
                    <Container>
                        <div className=" card mb-5 shadow-sm p-3">
                            <div className="row g-0">
                                <div className="col-md-4 ">
                                    <img src={all?.img} className="images" style={{ width: '350px', height: '250px' }} alt="..." />
                                </div>
                                <div className="col-md-8">
                                    <div className="card-body">
                                        <h5 className="card-title">Teacher: {all?.teacher}</h5>
                                        <h5 className="card-title">Subject: {all?.subject}</h5>
                                        <p>Duration: {all?.courseDuration}</p>
                                        <p>Salary: {all?.price}</p>
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
                </>
                )
            }
        </div>
    );
};

export default AllCourses;