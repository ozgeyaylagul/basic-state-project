import Course from './Course'
import './App.css';
import {useState} from 'react';

function getRandomCourse(){
  const courseArray = ['Angular','Bootstrap','Ccsharp','Frontend'];
  return courseArray[Math.floor(Math.random()*courseArray.length)]
}

function App() {
  const [courses, setCourses] = useState([])
  const handleClick = () =>{
    setCourses([... courses, getRandomCourse()])
  }
  return (
    <div className="App">
      <button onClick={handleClick}>Add Course</button>
      {courses.map((course,index)=>{
          return <Course key={index} courseName={course} />;
        })}
      <Course />
    </div>
  );
}

export default App;

