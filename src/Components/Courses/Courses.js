import React, { useEffect, useState } from 'react';
import Course from '../Course/Course';

const Courses = () => {
    const [courses, setCourses] = useState([])

    useEffect(() => {
        fetch("./FakeData.json")
            .then(res => res.json())
            .then(data => setCourses(data))
    }, [])
    return (
        <div>
            {
                courses.slice(0, 4).map(course => <Course
                    key={course.id}
                    course={course}></Course>

                )

            }
        </div>
    );
};

export default Courses;