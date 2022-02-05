import React, { useEffect, useState } from "react";
import { Link, useHistory } from "react-router-dom";
import Axios from "axios";
import user1 from './user.png'

const StudentLogin = () => {

    const history = useHistory();
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const [errorMessage, setErrorMessage] = useState("");

    const user = localStorage.getItem('loggedIn')


    const login = async () => {
        await Axios.post("http://localhost:3001/studentlogin", {
            student_username: username,
            student_password: password,
        }).then((response) => {
            if (response.data.loggedIn) {
                localStorage.setItem("loggedIn", true);
                localStorage.setItem("user", "student");
                localStorage.setItem("student_username", response.data.student_username);
                //history.push("/studenthome");
            } else {
                //setErrorMessage(response.data.message);
                console.log(response.data.message);
                alert(response.data.message);
            }
        });
    };

    useEffect(() => {
        Axios.post("http://localhost:3001/studentlogin").then((response) => {
            if (user) {
                history.push("/studenthome")
            }
        })
    }, [])

    return (
        <div className="py-3 mb-5">
            <div className="card teacherloginform col-md-4 offset-md-4">
                <div className="text-center">
                    <img src={user1} style={{ width: '150px', height: '150px' }} />
                </div>
                <div className="card-body">
                    <h1 className="card-title text-center py-4" style={{color: 'white'}}>Student Login</h1>
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
                            <Link style={{ marginTop: '-10px', color: 'white' }}  to="/studentpassword">Password Forgotten</Link>
                        </div>
                        <div className="text-center mt-2">
                            <button type="submit" className="btn buttonstyle  mx-3 px-3" onClick={login}>
                                Login
                            </button>
                            <Link to="/studentregister"><button className="btn buttonstyle">Register</button></Link>
                        </div>
                    </form>
                </div>
            </div>
            <div style={{ marginBottom: '200px' }}></div>
        </div>
    );
};

export default StudentLogin;
