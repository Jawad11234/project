import React from 'react';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom'
import Axios from 'axios';
import avator from '../student/avator.png'

const TeacherView = () => {
    const { teacher_username } = useParams()
    const [getImage, setgetImage] = useState([]);
    const [getCourse, setgetCourse] = useState([]);
    const [profile, setProfile] = useState([])
    const [studentCourse, setStudentCourse] = useState("");
    const [coursePrice, setCoursePrice] = useState("");

    const student_username = localStorage.getItem('student_username')

    const viewprofile = async () => {
        await Axios.get(`http://localhost:3001/getprofile/${teacher_username}`).then((response) => {
            setProfile(response.data);
            console.log(response.data);
        })
    }

    const GetImages = () => {
        Axios.get(`http://localhost:3001/getbooks/${teacher_username}`).then((response) => {
            setgetImage(response.data);
            console.log(response.data);
        })
    }

    const GetCourses = () => {
        Axios.get(`http://localhost:3001/teachercourses/${teacher_username}`).then((response) => {
            setgetCourse(response.data);
            console.log(response.data);
        })
    }
    const selectedCourse = (coursename, courseprice) => {
        Axios.post("http://localhost:3001/selectedcourse", {
            course_name:coursename,
            course_price:courseprice,
            teacher_username: teacher_username,
            student_username:student_username
        }).then((response) => {
            console.log(response.data);
        })
    }
    useEffect(() => {
        GetImages();
        GetCourses();
        viewprofile();
    }, [])

    return (
        <>
            <div className="d-flex justify-content-center"><h1>Teacher Profile</h1></div>
            <div className="container-fluid">
                <div className="row">
                    <div className="d-flex flex-row">
                        <div className="col-md-4">
                            {getImage.map((image, index) => (
                                <div className="">
                                    <div className="">
                                        <div className="">

                                            <div>
                                                {/* <h5 className="card-title">{course.image_id}:{course.image_name}</h5> */}
                                                <img src={image.image_name} style={{ marginLeft: '90px', width: '300px', borderRadius: '15px' }} className="img-thumbnail" alt="..." />

                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                        {profile.map((profile) => (
                            <>
                                <div style={{ marginLeft: '20px', width: '300px', borderRadius: '15px', boxShadow: '' }}>
                                    <div className="col-md-8">
                                        <div style={{ marginLeft: '20px', width: '300px', borderRadius: '15px' }}>
                                            <h5 className="card-title">Name</h5>
                                            <p className="card-title">{profile.teacher_name}</p>
                                            <h5 className="card-title">Gender</h5>
                                            <p className="card-title">{profile.teacher_gender}</p>
                                            <h5 className="card-title">Contact</h5>
                                            <p className="card-title">{profile.teacher_contact}</p>
                                            <h5 className="card-title">Email</h5>
                                            <p className="card-title">{profile.teacher_username}</p>
                                        </div>
                                    </div>
                                </div>
                            </>
                        ))}
                    </div>
                </div>
                <div className=" my-3" style={{ marginLeft: '85px' }}><h2>Courses</h2></div>
                <div className="d-flex align-content-start flex-wrap justify-content: space-between mx-5">
                    {getCourse.map((course, index) => (
                        <div className="col-md-3 mx-5">
                            <div className="card tlogin my-3">
                                <div className="card-body mx-3">
                                    <div>
                                        <h5 className="card-title">Course Name</h5>
                                        <p className="card-text" key={index}>{course.course_name}</p>
                                        <h5 className="card-title">Course Price</h5>
                                        <p className="card-text" key={index}>{course.course_price}</p>
                                    </div>
                                    <button className="btn btn-primary" onClick={() => { selectedCourse(course.course_name, course.course_price) }} >Select</button>
                                    {/* <a className="btn btn-danger mx-3 px-3" onClick={() => { deleteClass(grade.class_name) }}>Delete</a> */}
                                </div>

                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <div style={{marginBottom:'50px'}}></div>
        </>
    )
}

export default TeacherView
