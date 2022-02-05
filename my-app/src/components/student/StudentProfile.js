import React, { useState, useEffect } from 'react'
import Axios from 'axios';

const StudentProfile = () => {
  const student_username = localStorage.getItem('student_username');
  // Profile Image Upload
  const [selectfile, setselectfile] = useState("");
  const [getfiles, setGetfiles] = useState([]);
  const [courses, setCourses] = useState([]);
  const [tresponse, setTResponse] = useState([]);

  const selectFile = (e) => {
    const files = e.target.files;
    const data = new FormData();
    data.append("file", files[0]);
    data.append("upload_preset", "shkp92br");
    setselectfile(data);
  };

  const uploadFile = (e) => {
    e.preventDefault();

    Axios.post(
      "https://api.cloudinary.com/v1_1/jawad11/image/upload",
      selectfile
    )
      .then((response) => {
        console.log(response);
        const url = response.data.secure_url;
        console.log(url);
        Axios.post("http://localhost:3001/studentimage", { url: url, student_username: student_username })
          .then((res) => {
            console.log(res);
          })
          .catch((err) => {
            console.log(err);
          });
      })
      .catch((err) => {
        console.log(err);
      });
  };
  // Update Image
  const updateFile = (e) => {
    e.preventDefault();

    Axios.post(
      "https://api.cloudinary.com/v1_1/jawad11/image/upload",
      selectfile
    )
      .then((response) => {
        console.log(response);
        const url = response.data.secure_url;
        console.log(url);
        Axios.put(`http://localhost:3001/updatestudentimage/${student_username}`, { url: url })
          .then((res) => {
            console.log(res);
            alert(res.data.message);
          })
          .catch((err) => {
            console.log(err);
          });
      })
      .catch((err) => {
        console.log(err);
      });
  };
  // Getting Profile Image
  const GetFiles = () => {
    Axios.get(`http://localhost:3001/getstudentimage/${student_username}`).then((response) => {
      setGetfiles(response.data);
      console.log(response.data);
    })
  }
  // View Profile details
  const [profile, setProfile] = useState([])
  // const student_username = localStorage.getItem('student_username');

  useEffect(() => {
    viewprofile();
    GetFiles();
    SelectedCourses();
    getTeacherResponse();
  }, [])

  const viewprofile = async () => {
    await Axios.get(`http://localhost:3001/getstudentprofile/${student_username}`).then((response) => {
      setProfile(response.data);
      console.log(response.data);
    })
  }
  const SelectedCourses = () => {
    Axios.get(`http://localhost:3001/getstudentcourses/${student_username}`).then((response) => {
      setCourses(response.data)
    })
  }

  const deleteSelectedCourse = (course_name) => {
    Axios.delete(`http://localhost:3001/deleteselectedcourse/${course_name}`).then((response) => {
      alert(response.data)
    })
  }

  const getTeacherResponse = () => {
    Axios.get(`http://localhost:3001/getteacherresponse/${student_username}`).then((response) => {
      setTResponse(response.data);
    })
  }
  const deleteteacherResponse = (response_text) => {
    Axios.delete(`http://localhost:3001/deleteteacherresponse/${response_text}`).then((response) => {
      alert(response.data)
    })
  }
  return (
    <>
      <div className="d-flex justify-content-center"><h1>Your Profile</h1></div>
      <div className="container-fluid">
        <div className="row">
          <div className="d-flex flex-row">
            <div className="col-md-3">
              {getfiles.map((course, index) => (
                <div className="">
                  <div className="">
                    <div className="">

                      <div>
                        {/* <h5 className="card-title">{course.image_id}:{course.image_name}</h5> */}
                        <img src={course.student_image} style={{ marginLeft: '20px', width: '300px', borderRadius: '15px' }} className="img-thumbnail" alt="..." />

                      </div>
                    </div>
                  </div>
                </div>
              ))}
              <div style={{ marginLeft: '20px', width: '300px', borderRadius: '15px' }}>
                <input type="file" onChange={selectFile} />
                <button className="btn btn-primary" onClick={uploadFile}>Upload</button>
                <button className="btn btn-primary" onClick={updateFile}>Update</button>
              </div>
            </div>
            {profile.map((profile) => (
              <>
                <div style={{ marginLeft: '20px', paddingTop: '20px', width: '300px', borderRadius: '15px', boxShadow: '' }}>
                  <div className="col-md-8">
                    <div style={{ marginLeft: '20px', width: '300px', borderRadius: '15px' }}>
                      <h5 className="card-title">Name</h5>
                      <p className="card-title">{profile.student_name}</p>
                      <h5 className="card-title">Gender</h5>
                      <p className="card-title">{profile.student_gender}</p>
                      <h5 className="card-title">Contact</h5>
                      <p className="card-title">{profile.student_contact}</p>
                      <h5 className="card-title">Username</h5>
                      <p className="card-title">{profile.student_username}</p>
                      <h5 className="card-title">Password</h5>
                      <p className="card-title">{profile.student_password}</p>
                    </div>
                    <div className="">
                      <a href="#" style={{ marginLeft: '20px', width: '300px', borderRadius: '15px' }} className="btn btn-primary">Update</a>
                    </div>
                  </div></div></>
            ))}
          </div>
        </div>

      </div>


      <div className='container-fluid'>
        <div className='row'>
          <div className='col-md-6 my-3'>
            <div style={{ marginLeft: "50px" }}><h2>Selected Courses</h2></div>
            <div className="card tlogin" style={{ marginLeft: '50px', marginRight: '80px' }}>
              <div className="card-body" style={{ paddingLeft: '40px' }}>
                {courses.map((scourses, index) => (
                  <>
                    <div>
                      <h5 className="card-title">Course Name</h5>
                      <p class="card-text">{scourses.course_name}</p>
                      <h5 className="card-title">Course Price</h5>
                      <p class="card-text">{scourses.course_price}</p>
                      <h5 className="card-title">Teacher Email/Username</h5>
                      <p class="card-text">{scourses.teacher_username}</p>
                    </div>
                    <div>
                      <button className='btn btn-danger px-3' onClick={()=>{deleteSelectedCourse(scourses.course_name)}}>Delete</button>
                    </div>
                  </>
                ))}
              </div>
            </div>
          </div>
          <div className='col-md-6 my-3'>
            <div><h2>Teacher Response</h2></div>
            <div className="card tlogin" style={{ marginRight: '80px' }}>
              <div className="card-body">
                {tresponse.map((teresponse, index) => (
                  <>
                    <div>
                      <h5 className="card-title">Teacher Response</h5>
                      <p class="card-text">{teresponse.response_text}</p>
                    </div>
                    <div>
                      <button className='btn btn-danger px-3' onClick={() => {deleteteacherResponse(teresponse.response_text)}}>Delete</button>
                    </div>
                  </>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default StudentProfile
