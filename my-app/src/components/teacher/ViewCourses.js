import React, { useState, useEffect, Button } from 'react';
import { Link } from 'react-router-dom';
import Axios from 'axios';
import AddCourses from './AddCourses';

const ViewCourses = () => {

    const [courseList, setcourseList] = useState([]);
    const teacher_username = localStorage.getItem('teacher_username');
    const [courseName, setcourseName] = useState('');
    const [courseContent, setcourseContent] = useState('');
    // For Images
    const [url, setUrl] = useState("");
    //const teacher_username = localStorage.getItem('teacher_username');
    // Add a course function
    const AddCourse = async () => {
        await Axios.post("http://localhost:3001/addcourse", {
            course_name: courseName,
            course_content: courseContent,
            course_image:url,
            teacher_username: teacher_username,
        }).then((response) => {
            console.log(response);
        });
    };

    useEffect(() => {
        viewcourses();
    }, [])

    const viewcourses = async () => {
        await Axios.get(`http://localhost:3001/getcourses/${teacher_username}`).then((response) => {
            setcourseList(response.data);
            console.log(response.data);
        })
    }


    const deleteCourse = async (course_code) => {
        await Axios.delete(`http://localhost:3001/deletecourses/${course_code}`).then((response) => {
            if (response) {
                alert("Successfully Deleted");
            } else {
                alert("Failed to Delete");
            }
            viewcourses();
        })
    }

    /// Upload profile Testing
    const [selectfile, setselectfile] = useState("");
    //const [getfiles, setGetfiles] = useState([]);

    const selectFile = (e) => {
        const files = e.target.files;
        const data = new FormData();
        data.append("file", files[0]);
        data.append("upload_preset", "shkp92br");
        setselectfile(data);
    };
    const postImage = () => {
        Axios.post(
            "https://api.cloudinary.com/v1_1/jawad11/image/upload",
            selectfile
        ).then((response) => {
            console.log(response);
            const url = response.data.secure_url;
            console.log(url);
            setUrl(url);
        })
    }

    return (
        <>
            <div className="py-3">
                <div className="card tlogin col-md-4 offset-md-4">
                    <div className="card-body">
                        <h1 className="card-title text-center py-4">Add Course</h1>
                        <form className="">
                            <div className="mb-3">
                                <label htmlFor="courseimage" className="form-label">
                                   Course Image
                                </label>
                                <input
                                    type="file"
                                    required
                                    //value={courseCode}
                                    className="form-control"
                                    //id="coureimage"
                                    //placeholder="upload image files e.g .png,.jpg, .jpeg, .jfif"
                                    onChange={selectFile}
                                />
                            </div>
                            <button className="btn btn-primary" onClick={postImage}>Upload</button>
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
                            <div className="mb-3">
                                <label htmlFor="coursecontent" className="form-label">
                                    Course Content
                                </label>
                                <textarea
                                    type="text"
                                    required
                                    value={courseContent}
                                    className="form-control"
                                    //id="courseprice"
                                    placeholder="Enter Complete Course Content in the form of bullets or numbers"
                                    onChange={(e) => {
                                        setcourseContent(e.target.value);
                                    }}
                                    //aria-describedby="emailHelp"
                                    rows="5"
                                ></textarea>
                            </div>
                            <div className="">
                                <button type="submit" onClick={AddCourse} className="btn btn-primary">
                                    Add Course
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>

            <div className="d-flex justify-content-center"><h1>Your Courses List</h1></div>
            <div className="d-flex align-content-start flex-wrap justify-content: space-between mx-5">
                {courseList.map((course, index) => (
                    <div className="col-md-3 mx-5">
                        <div className="card tlogin my-3">
                        <img src={course.course_image} key={index} className="card-img-top m-auto" style={{height:'150px', width:'150px', borderRadius:'50%'}} alt="..." />
                            <div className="card-body mx-3 py-4">
                                <div>
                                    <h5 className="card-title">{course.course_name}</h5>
                                    <h5 className="card-title">Price:{course.course_content}</h5>
                                </div>
                                <div className="text-center">
                                    <Link to="#" className="btn btn-primary" >Update</Link>
                                    <a className="btn btn-danger mx-3 px-3" onClick={() => { deleteCourse(course.course_code) }}>Delete</a>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </>
    )
}

export default ViewCourses
