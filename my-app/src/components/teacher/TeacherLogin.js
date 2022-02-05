import React, { useEffect, useState } from "react";
import Axios from "axios";
import { Link, useHistory } from "react-router-dom";
import user1 from './user.png'

const TeacherLogin = () => {

    const history = useHistory();

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const [errorMessage, setErrorMessage] = useState("");

    const user = localStorage.getItem('loggedIn')


    const login = async () => {
        await Axios.post("http://localhost:3001/teacherlogin", {
            teacher_username: username,
            teacher_password: password,
        }).then((response) => {
            if (response.data.loggedIn) {
                localStorage.setItem("loggedIn", true);
                localStorage.setItem("user", "teacher");
                localStorage.setItem("teacher_username", response.data.teacher_username);
                history.push("/viewcourses");
            } else {
                setErrorMessage(response.data.message);
                console.log(response.data.message);
                alert(response.data.message);
            }
        });
    };

    useEffect(() => {
        Axios.post("http://localhost:3001/teacherlogin").then((response) => {
            if (user) {
                history.push("/viewcourses")
            } else {
                setErrorMessage(response.data.message);
            }
        })
    }, [])
    return (
        <div className="">
            <div className="py-4">
                <div className="card col-md-4 offset-md-4 teacherloginform">
                    <div className="card-body">
                        <div className="text-center">
                        <img src={user1} style={{width: '150px', height: '150px'}}/>
                        </div>
                        <h1 className="card-title text-center py-4" style={{color: 'white'}}>Teacher Login</h1>
                        <form className="">
                            <div className="mb-3">
                                <label htmlFor="email" style={{color: 'white'}} className="form-label">
                                    Email address
                                </label>
                                <input
                                    type="email"
                                    required
                                    className="form-control"
                                    id="email"
                                    onChange={(e) => {
                                        setUsername(e.target.value);
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
                                    className="form-control"
                                    id="password"
                                    onChange={(e) => {
                                        setPassword(e.target.value);
                                    }}
                                />
                            </div>
                            <div className="d-flex flex-row-reverse">
                                <Link style={{ marginTop: '-10px' }} style={{color: 'white'}} to="/teacherpassword">Password Forgotten</Link>
                            </div>
                            <div className="text-center my-3 ">
                                <button type="submit" className="btn mx-3 px-3 buttonstyle" onClick={login}>
                                    Login
                                </button>
                                <Link to="/teacherregister"><button className="btn  buttonstyle">Register</button></Link>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
            <div style={{marginBottom:'235px'}}></div>
        </div>
    )
}

export default TeacherLogin
