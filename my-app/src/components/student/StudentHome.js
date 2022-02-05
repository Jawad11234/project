import React, { useState, useEffect } from 'react'
import Axios from 'axios';
import './student.css';
import TeacherView from './TeacherView'
import { Link, useHistory } from 'react-router-dom';
import CImage from './background1.jfif'

const StudentHome = () => {

    const history = useHistory();

    const [teacherImage, setteacherImage] = useState([])
    useEffect(() => {
        getTeacherImages();
      }, [])

    const getTeacherImages = () => {
        Axios.get("http://localhost:3001/teacherImage").then((response) => {
          console.log(response.data);
          setteacherImage(response.data);
        })
      }
    

    const viewteacher = (teacher_username) => {
        history.push(`/teacherview/${teacher_username}`);
        return (<TeacherView />)

    }
    return (
        <div className="d-flex align-content-start flex-wrap justify-content: space-between mx-5">
        <div className="container-fluid">
          <div className="row">
            {teacherImage.map((image, index) => (
              <div className="col-lg-4 mx-auto">
                <div className="card card-1 text-light py-4 my-4" style={{background: 'linear-gradient(rgba(0, 0, 0, .6), rgba(0, 0, 0, .5)) !important', backgroundRepeat:'no-repeat', backgroundPosition:'center', backgroundSize:'cover', backgroundImage:`url(${CImage})`}}>
                  <img src={image.image_name} key={index} className="card-img-top m-auto" style={{height:'150px', width:'150px', borderRadius:'50%'}} alt="..." />
                  <div className="card-body text-center">
                    <div>
                      <p className="font-weight-bold py-3 card-list-item">{image.teacher_username}</p>
                    </div>
                    <div>
                      <button className="btn text-uppercase p-2 font-weight-bold price-card-button text-light mt-4" onClick={() => {viewteacher(image.teacher_username)}}>View More</button>
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

export default StudentHome
