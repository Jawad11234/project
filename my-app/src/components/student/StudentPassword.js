import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom';
import Axios from 'axios';
import user1 from './user.png'

const StudentPassword = () => {
    const [email, setEmail] = useState('');
    const [getPassword, setGetPassword] = useState([]);
    const studentPassword = async () => {
        await Axios.post('http://localhost:3001/studentpassword', {
            teacher_username: email
        }).then((response) => {
            console.log(response.data)
            setGetPassword(response.data)
        })
    }
    useEffect(() => {
        studentPassword();
    })
    return (
        <>
            <div className="py-3" style={{ marginBottom: '100px' }}>
                <div className="card teacherloginform col-md-4 offset-md-4">
                    <div className="text-center">
                        <img src={user1} style={{ width: '150px', height: '150px' }} />
                    </div>
                    <div className="card-body">
                        <h1 className="card-title text-center py-4"  style={{color: 'white'}}>Password Forget</h1>
                        <form className="">
                            <div className="mb-3">
                                <label htmlFor="email" style={{color: 'white'}} className="form-label">
                                    Email/Username
                                </label>
                                <input
                                    type="email"
                                    required
                                    value={email}
                                    className="form-control"
                                    id="email"
                                    placeholder="Enter email/username for Password"
                                    onChange={(e) => {
                                        setEmail(e.target.value);
                                    }}
                                />
                            </div>
                            <div className="text-center">
                                <button type="submit" className="btn buttonstyle mx-3" onClick={studentPassword}>
                                    Get Password
                                </button>
                                <Link className='btn buttonstyle' to='/studentlogin'>Login</Link>
                            </div>
                        </form>
                    </div>
                </div>
                <div style={{ marginBottom: '240px' }}></div>
            </div>
        </>
    )
}

export default StudentPassword
