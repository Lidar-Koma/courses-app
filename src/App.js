import { useEffect, useState } from 'react';
import Loading from './Loading';
import Courses from './Courses';


const url ='https://app-courseapi.herokuapp.com/api/courses';

function App() {
  const [loading,setLoading] = useState(true);
  const [courses, setCourses] = useState([]);

  const deleteCourse = (id)=>{
    const newCourses = courses.filter((course) => course.id !== id);
    setCourses(newCourses);

  }

  const fetchCourses = async () => {
    setLoading(true);
    
    try {
    const response = await fetch(url);
    const courses = await response.json();
    setLoading(false);
    setCourses(courses);
  } catch(error) {
      setLoading(false);
      console.log(error);
    }
   
  };
  useEffect(() => {
    fetchCourses();
  }, []);
  if(loading) {
    return (
      <main>
        <Loading />
      </main>
    )
  }
  if(courses.length ===0){
    return <main>
      <div className="title">
        <h2>no courses</h2>
        <button className='btn' onClick={fetchCourses}>refresh</button>
      </div>
    </main>
  }
  return (
    <main>
      <Courses courses={courses} deleteCourse={deleteCourse}/>
    </main>
  );
}

export default App;
