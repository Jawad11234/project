import React, { useState } from "react";
import Axios from "axios";
import { Link } from "react-router-dom";
import user1 from './user.png'

const StudentRegister = () => {

    const [nameReg, setNameReg] = useState("");
    const [fname, setFname] = useState("");
    const [age, setAge] = useState("");
    const [gender, setGender] = useState("");
    const [contact, setContact] = useState("");
    const [grade, setGrade] = useState("");
    const [usernameReg, setUsernameReg] = useState("");
    const [passwordReg, setPasswordReg] = useState("");

    const register = async () => {
        await Axios.post("http://localhost:3001/studentregister", {
            name: nameReg,
            fathername: fname,
            age: age,
            gender: gender,
            contact: contact,
            grade: grade,
            username: usernameReg,
            password: passwordReg,
        }).then((response) => {
            console.log(response);
        });
    };


    return (
        <div className="py-3">
            <div className="card tlogin col-md-4 offset-md-4 teacherloginform">
                <div className="text-center mt-2">
                    <img src={user1} style={{ width: '150px', height: '150px' }} />
                </div>
                <div className="card-body">
                    <h1 className="card-title text-center py-4"  style={{color: 'white'}}>Student Register</h1>
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
                                //required
                                placeholder="Name"
                                onChange={(e) => {
                                    setNameReg(e.target.value);
                                }}
                            />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="fname" style={{color: 'white'}} className="form-label">
                                Father Name
                            </label>
                            <input
                                type="text"
                                required
                                value={fname}
                                className="form-control"
                                id="fname"
                                //required
                                placeholder="Father Name"
                                onChange={(e) => {
                                    setFname(e.target.value);
                                }}
                            />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="age" style={{color: 'white'}} className="form-label">
                                Age
                            </label>
                            <input
                                type="text"
                                required
                                value={age}
                                className="form-control"
                                id="age"
                                //required
                                placeholder="Enter Age"
                                onChange={(e) => {
                                    setAge(e.target.value);
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
                                //required
                                placeholder="Enter Gender"
                                onChange={(e) => {
                                    setGender(e.target.value);
                                }}
                            />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="contact" style={{color: 'white'}} className="form-label">
                                Contact Number
                            </label>
                            <input
                                type="text"
                                required
                                value={contact}
                                className="form-control"
                                id="conatct"
                                //required
                                placeholder="Enter Contact"
                                onChange={(e) => {
                                    setContact(e.target.value);
                                }}
                            />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="classn" style={{color: 'white'}} className="form-label">
                                Class
                            </label>
                            <input
                                type="text"
                                required
                                value={grade}
                                className="form-control"
                                id="classn"
                                //required
                                placeholder="Enter Class"
                                onChange={(e) => {
                                    setGrade(e.target.value);
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
                                //required
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
                                //required
                                placeholder="Password"
                                onChange={(e) => {
                                    setPasswordReg(e.target.value);
                                }}
                            />
                        </div>
                        <div className="text-center">
                            <button type="submit" onClick={register} className="btn buttonstyle">
                                Register
                            </button>
                            <Link to="/studentlogin"><button className="btn buttonstyle mx-3 px-3">Login</button></Link>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default StudentRegister
