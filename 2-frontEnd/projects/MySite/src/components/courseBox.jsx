import React from "react";
import {Link} from 'wouter';

function CourseBox({img, title, description, id}) {
    return (
        <Link to={`/courses/${id}`}>
        <section className="course-box">
            <figure className="course-box-img">
                <img src={img} alt={title}/>
            </figure>
            <article className="course-box-article">
                <h4>{title}</h4>
                <p>{description}</p>
            </article>
        </section>
        </Link>
    )
}

export default CourseBox;