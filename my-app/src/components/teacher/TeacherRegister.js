import React, { useState } from "react";
import Axios from "axios";
import { Link } from "react-router-dom";
import user1 from './user.png'

const TeacherRegister = () => {

    const [nameReg, setNameReg] = useState("");
    const [gender, setGender] = useState("");
    const [contact, setContact] = useState("");
    const [usernameReg, setUsernameReg] = useState("");
    const [passwordReg, setPasswordReg] = useState("");
    const [noofstudents, setNoofstudents] = useState("");

    const register = () => {
        Axios.post("http://localhost:3001/teacherregister", {
            name: nameReg,
            gender: gender,
            contact: contact,
            username: usernameReg,
            password: passwordReg,
            teacher_students: noofstudents
        }).then((response) => {
            console.log(response);
            alert("Register Successfully")
        });
    };

    const uploadImage = (files) => {
        //console.log(files[0]);
        const formData = new FormData();
        formData.append("teacher_username", usernameReg);
        formData.append("file", files[0]);
        formData.append("upload_preset", "shkp92br");

        Axios.post("https://api.cloudinary.com/v1_1/jawad11/image/upload", formData).then((response) => {
            console.log(response.data);
        })
    }

    return (
        <div className="py-3">
            <div className="card  teacherloginform col-md-4 offset-md-4">
                <div className="card-body">
                    <div className="text-center">
                        <img src={user1} style={{ width: '150px', height: '150px' }} />
                    </div>
                    <h1 className="card-title text-center py-4"  style={{color: 'white'}}>Teacher Register</h1>
                    <form className="">
                        <div className="mb-3">
                            <label htmlFor="name" style={{color: 'white'}} className="form-label">
                                Name
                            </label>
                            <input
                                type="text"
                                required
                                value={nameReg}
                                className="form-control"
                                id="name"
                                placeholder="Name"
                                onChange={(e) => {
                                    setNameReg(e.target.value);
                                }}
                            />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="gender" style={{color: 'white'}} className="form-label">
                                Gender
                            </label>
                            <input
                                type="text"
                                required
                                value={gender}
                                className="form-control"
                                id="gender"
                                placeholder="Enter Gender"
                                onChange={(e) => {
                                    setGender(e.target.value);
                                }}
                            />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="contact" style={{color: 'white'}} className="form-label">
                                Contact
                            </label>
                            <input
                                type="text"
                                required
                                value={contact}
                                className="form-control"
                                id="contact"
                                placeholder="Enter Contact"
                                onChange={(e) => {
                                    setContact(e.target.value);
                                }}
                            />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="email" style={{color: 'white'}} className="form-label">
                                Email address
                            </label>
                            <input
                                type="email"
                                required
                                value={usernameReg}
                                className="form-control"
                                id="email"
                                placeholder="Email address"
                                onChange={(e) => {
                                    setUsernameReg(e.target.value);
                                }}
                                aria-describedby="emailHelp"
                            />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="password" style={{color: 'white'}} className="form-label">
                                Password
                            </label>
                            <input
                                type="password"
                                required
                                value={passwordReg}
                                className="form-control"
                                id="password"
                                placeholder="Password"
                                onChange={(e) => {
                                    setPasswordReg(e.target.value);
                                }}
                            />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="student" style={{color: 'white'}} className="form-label">
                                No of Students
                            </label>
                            <input
                                type="text"
                                required
                                value={noofstudents}
                                className="form-control"
                                id="students"
                                placeholder="Enter no of Students you teach"
                                onChange={(e) => {
                                    setNoofstudents(e.target.value);
                                }}
                            />
                        </div>
                        <div className="text-center">
                            <button type="submit" onClick={register} className="btn buttonstyle">
                                Register
                            </button>
                            <Link to="/teacherlogin"><button className="btn buttonstyle mx-3 px-3">Login</button></Link>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default TeacherRegister
