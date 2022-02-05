import React, { useState, useEffect, Button } from 'react'
import Axios from 'axios';

const Profile = () => {


  const [profile, setProfile] = useState([])
  const teacher_username = localStorage.getItem('teacher_username');

  // useEffect(() => {
  //   viewprofile();
  // }, [])

  const viewprofile = async () => {
    await Axios.get(`http://localhost:3001/getprofile/${teacher_username}`).then((response) => {
      setProfile(response.data);
      console.log(response.data);
    })
  }

  const [selectfile, setselectfile] = useState("");
  const [getfiles, setGetfiles] = useState([]);
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
        Axios.post("http://localhost:3001/urlupload", { url: url, teacher_username: teacher_username })
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
        Axios.put(`http://localhost:3001/updatteacherimage/${teacher_username}`, { url: url })
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
  const GetFiles = () => {
    Axios.get(`http://localhost:3001/getbooks/${teacher_username}`).then((response) => {
      setGetfiles(response.data);
      console.log(response.data);
    })
  }

  // const SelectedCourses = () => {
  //   Axios.get(`http://localhost:3001/getselectedcourses/${teacher_username}`).then((response) => {
  //     setCourses(response.data)
  //   })
  // }
  // const submitResponse = (student_username) => {
  //   Axios.post('http://localhost:3001/submitresponse', {
  //     response_text: response,
  //     teacher_username: teacher_username,
  //     student_username: student_username
  //   }).then((response) => {
  //     alert(response.data);
  //   })
  // }

  useEffect(() => {
    viewprofile();
    GetFiles();
    //SelectedCourses();
    //submitResponse();
  }, [])

  const [isEditing, setIsEditing] = useState(false)
  const [name, setName] = useState('');
  const [gender, setGender] = useState('');
  const [contact, setContact] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [students, setstudents] = useState('');

  const updateTeacher = (teacher_id) => {
    Axios.put(`http://localhost:3001/updateTeacher/${teacher_id}`, {
      teacher_name:name,
      teacher_gender: gender,
      teacher_contact:contact,
      teacher_username:username,
      teacher_password:password,
      teacher_students:students
    }).then((response) => {
      console.log(response);
    })

  }
  return (
    <>
          <div className="container">
      <div className="d-flex "><h1>Personal Dashboard</h1></div>
        <div className="row">
          <div className="d-flex">
            <div className="col-md-3" style={{paddingTop:'20px'}}>
              {getfiles.map((course, index) => (
                <div className="">
                  <div className="">
                    <div className="">

                      <div className="">
                        {/* <h5 className="card-title">{course.image_id}:{course.image_name}</h5> */}
                        <img src={course.image_name} style={{ width: '250px', height:'250px', borderRadius: '50%' }} className="img-thumbnail" alt="..." />

                      </div>
                    </div>
                  </div>
                </div>
              ))}
              <div style={{ width: '300px', borderRadius: '15px' }}>
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
                      <input type="text" className="form-control" defaultValue={profile.teacher_name} onDoubleClick ={()=> setIsEditing(true)} onChange={(e) => { setName(e.target.value) }} readOnly={false} />
                      <h5 className="card-title">Gender</h5>
                      <input type="text" className="form-control" defaultValue={profile.teacher_gender} onChange={(e) => { setGender(e.target.value) }} />
                      <h5 className="card-title">Contact</h5>
                      <input type="text" className="form-control" defaultValue={profile.teacher_contact} onChange={(e) => { setContact(e.target.value) }}/>
                      <h5 className="card-title">Username</h5>
                      <input type="text" className="form-control" defaultValue={profile.teacher_username} onChange={(e) => { setUsername(e.target.value) }}/>
                      <h5 className="card-title">Password</h5>
                      <input type="text" className="form-control" defaultValue={profile.teacher_password} onChange={(e) => { setPassword(e.target.value) }}/>
                      <h5 className="card-title">Students Teach</h5>
                      <input type="text" className="form-control" defaultValue={profile.teacher_students} onChange={(e) => { setstudents(e.target.value) }}/>
                    </div>
                    <div className="py-3">
                      <a href="#" style={{ marginLeft: '20px', width: '300px', borderRadius: '15px' }} className="btn btn-primary" onClick={() => { updateTeacher(profile.teacher_id) }}>Update</a>
                    </div>
                  </div></div></>
            ))}
          </div>
        </div>
      </div>
    </>
  )
}

export default Profile
