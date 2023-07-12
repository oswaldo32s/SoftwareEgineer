import React from "react";
import CourseBox from "./courseBox.jsx";
import { courseData } from "../data/coursedata";

function ListOfCourses() {
    return (
        <section className="home-courses">
            {courseData.map(course => <CourseBox img={course.img} title={course.title} description={course.description} key={course.id} id={course.id}/>)}
        </section>
    )
}

export default ListOfCourses;