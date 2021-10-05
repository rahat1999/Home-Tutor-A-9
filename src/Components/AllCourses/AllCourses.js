import React, { useEffect, useState } from 'react';
import AllSingleCourse from '../AllSingleCourse/AllSingleCourse';

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
                allCourses.map(all => <AllSingleCourse
                    key={all.id}
                    allSingleCourse={all}></AllSingleCourse>
                )
            }
        </div>
    );
};

export default AllCourses;