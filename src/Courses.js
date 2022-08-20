import React from "react";
import Course from "./Course";
const Courses = ({courses,deleteCourse}) => {
    return (
    <section>
        <div className="title">
            <h2>Our courses</h2>
            <div className="underline">

            </div>
            <div>
                {courses.map((course) => {
                return <Course key={course.id} {...course} deleteCourse={deleteCourse} />
                }
                )}
            </div>

        </div>
        
        </section>
    )
};
 
export default Courses;