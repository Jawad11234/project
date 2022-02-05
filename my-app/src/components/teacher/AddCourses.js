import React, {useState} from 'react';
import {useParams} from 'react-router-dom';
import Axios from "axios";
import ViewCourses from './ViewCourses';

const AddCourses = () => {
    const [courseCode, setcourseCode] = useState('');
    const [courseName, setcourseName] = useState('');
    const teacher_username = localStorage.getItem('teacher_username');
    // Add a course function
    const AddCourse = async() =>{
        await Axios.post("http://localhost:3001/addcourse", {
            course_code:courseCode,
            course_name: courseName,
            teacher_username: teacher_username,
        }).then((response) => {
            console.log(response);
          });
    };

    return (
        <div className="py-3">
        <div className="card  col-md-4 offset-md-4">
            <div className="card-body">
                <h1 className="card-title text-center py-4">Add Course</h1>
                <form className="">
                <div className="mb-3">
                        <label htmlFor="coursecode" className="form-label">
                            Course Code
                        </label>
                        <input
                            type="text"
                            required
                            value={courseCode}
                            className="form-control"
                            id="coursecode"
                            placeholder="Course Code"
                            onChange={(e) => {
                                setcourseCode(e.target.value);
                            }}
                        />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="coursename" className="form-label">
                            Course Name
                        </label>
                        <input
                            type="text"
                            required
                            value={courseName}
                            className="form-control"
                            id="coursename"
                            placeholder="Course Name"
                            onChange={(e) => {
                                setcourseName(e.target.value);
                            }}
                            aria-describedby="emailHelp"
                        />
                    </div>
                    <button type="submit" onClick={AddCourse} className="btn btn-primary">
                        Add Course
                    </button>
                </form>
            </div>
        </div>
        </div>
    )
}

export default AddCourses
