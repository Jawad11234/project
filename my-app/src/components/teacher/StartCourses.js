import React, { useState, useEffect } from 'react';
import Axios from 'axios';
import {useHistory} from 'react-router-dom'
import CImage from './background1.jfif'

const StartCourses = () => {

    const [courseList, setcourseList] = useState([]);
    const history = useHistory();
    useEffect(() => {
        viewcourses();
    }, [])

    const viewcourses = async () => {
        await Axios.get('http://localhost:3001/getcourses').then((response) => {
            setcourseList(response.data);
            console.log(response.data);
        })
    }

    
      const ViewCourse = () => {
        history.push("/studentlogin")
      }
    
    return (
<div className="d-flex align-content-start flex-wrap justify-content: space-between mx-5">
      <div className="container-fluid">
        <div className="row">
          {courseList.map((course, index) => (
            <div className="col-lg-4 mx-auto">
              <div className="card card-1 text-light py-4 my-4" style={{background: 'linear-gradient(rgba(0, 0, 0, .6), rgba(0, 0, 0, .5)) !important', backgroundRepeat:'no-repeat', backgroundPosition:'center', backgroundSize:'cover', backgroundImage:`url(${CImage})`}}>
                <img src={course.course_image} key={index} className="card-img-top m-auto" style={{height:'150px', width:'150px', borderRadius:'50%'}} alt="..." />
                <div className="card-body text-center">
                  <div>
                    <p className="font-weight-bold py-3 card-list-item">{course.course_name}</p>
                  </div>
                  <div>
                    <button className="btn text-uppercase p-2 font-weight-bold price-card-button text-light mt-4" onClick={ViewCourse}>View More</button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
    )
}

export default StartCourses
