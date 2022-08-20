import React, {useState} from "react";
const Course = ({id,courseName,instructor, source,description,image,ratings, deleteCourse}) => {
    const[readMore, setReadMore] = useState(false);
   
    return (
    <article className="single-tour">
        <img src={`./images/${image}`} alt={courseName}/>
        <footer>
            <div className="tour-info">
                <h4>{courseName}</h4>
                <h4 className="tour-price">{ratings} *</h4>
            </div>
            <div className="tour-info">
                <h4>{source}</h4>
                <h4 className="course-instructor">by {instructor}</h4>
            </div>
            <p>{readMore? description:`${description.substring(0,100)}....
            `}
            <button onClick={()=> setReadMore(!readMore)}>
                {readMore?'show less' : 'read more'}
            </button>
            </p>
            <button className="delete-btn" onClick={()=>deleteCourse(id)}>not interested</button>
        </footer>

    </article>
    )
    }
 
export default Course;