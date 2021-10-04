import React, { useEffect, useState } from 'react';

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
                    <div className="d-flex" key={all.id}>
                        <div>
                            <img src={all?.img} alt="" />
                        </div>
                        <div>
                            <h4>Teacher: {all?.teacher}</h4>
                            <h5>Subject: {all?.subject}</h5>
                            <p> {all.price}</p>
                            <p>Time: {all.courseDuration}</p>
                        </div>
                    </div>
                </>
                )
            }
        </div>
    );
};

export default AllCourses;