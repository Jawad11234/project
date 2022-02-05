import React, { useState, useEffect } from "react";
import { Link, useLocation, useHistory } from 'react-router-dom';
import './teacher/teacher.css'
const Header = () => {
    const location = useLocation();
    const history = useHistory();
    const [loggedIn, setLoggedIn] = useState(false);
    const user = localStorage.getItem('teacher_username');
    const usertype = localStorage.getItem('user');
    const student = localStorage.getItem('student_username');

    useEffect(() => {
        setLoggedIn(localStorage.getItem("loggedIn"));
    }, [localStorage.getItem("loggedIn")]);

    const logout = () => {
        localStorage.removeItem("loggedIn");
        localStorage.removeItem('user');
        localStorage.removeItem('teacher_username');
        localStorage.removeItem('student_username');
        history.push('/');
    }
    return (
        <>
            <div className="body" style={{marginBottom:'130px'}}>
                <nav className="navbar navbar-expand-lg fixed-top nav-menu">
                    <Link to="#" className="navbar-brand text-light text-uppercase">
                        <span className="h2 font-weight-bolder">Tutor </span><span class="h1">F</span>inder
                    </Link>
                    <div className="container-fluid">

                        <button
                            className="navbar-toggler navbar-light"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#navbarNavAltMarkup"
                            aria-controls="navbarNavAltMarkup"
                            aria-expanded="false"
                            aria-label="Toggle navigation"
                        >
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse justify-content-end text-uppercase font-weight-bold" id="navbarNavAltMarkup">
                            <div className="navbar-nav ">
                                <ul className="navbar-nav">
                                    {loggedIn ? (
                                        <>
                                            {usertype === 'teacher' ? (
                                                <>
                                                    <li class="nav-item">
                                                        <Link className={`nav-link m-2 menu-item text-white ${location.pathname === '/viewcourses' ? 'active' : ''}`} to="/viewcourses">Courses</Link>
                                                    </li>
                                                    <li class="nav-item">
                                                        <Link className={`nav-link m-2 menu-item text-white ${location.pathname === '/addclass' ? 'active' : ''}`} to="/addclass">Classes</Link>
                                                    </li>
                                                    <li class="nav-item">
                                                        <Link className={`nav-link m-2 menu-item text-white ${location.pathname === '/addshedule' ? 'active' : ''}`} to="/addshedule">Shedule</Link>
                                                    </li>
                                                    <li class="nav-item">
                                                        <Link className={`nav-link m-2 menu-item text-white ${location.pathname === '/profile' ? 'active' : ''}`} to="/profile">Profile</Link>
                                                    </li>
                                                    <li class="nav-item">
                                                        <Link className={`nav-link m-2 menu-item text-white ${location.pathname === '/library' ? 'active' : ''}`} to="/library">Library</Link>
                                                    </li>
                                                    <div className="dropdown">
                                                        <button className="btn btn-success dropdown-toggle d-flex flex-end" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                                                            {user}
                                                        </button>
                                                        <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                                                            <li><button className="dropdown-item" onClick={logout}>Logout</button></li>
                                                        </ul>
                                                    </div>
                                                </>
                                            ) : (
                                                <>
                                                    <Link className={`nav-link navbarlink text-white ${location.pathname === '/studenthome' ? 'active' : ''}`} aria-current="page" to="/studenthome">Home</Link>
                                                    <Link className={`nav-link navbarlink text-white ${location.pathname === '/studentprofile' ? 'active' : ''}`} to="/studentprofile">Profile</Link>
                                                    <Link className={`nav-link navbarlink text-white ${location.pathname === '/books' ? 'active' : ''}`} to="/books">Library</Link>
                                                    <div className="dropdown">
                                                        <button className="btn btn-success dropdown-toggle d-flex flex-end" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                                                            {student}
                                                        </button>
                                                        <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                                                            <li><button className="dropdown-item" onClick={logout}>Logout</button></li>
                                                        </ul>
                                                    </div>
                                                </>
                                            )} </>) : (
                                        <>
                                            <Link className={`nav-link navbarlink text-white ${location.pathname === '/welcomescreen' ? 'active' : ''}`} aria-current="page" to="/">Home</Link>
                                            <Link className={`nav-link navbarlink text-white ${location.pathname === '/startcourses' ? 'active' : ''}`} to="/startcourses">Courses</Link>
                                            <Link className={`nav-link navbarlink text-white ${location.pathname === '/studentlogin' ? 'active' : ''}`} to="/studentlogin">Student</Link>
                                            <Link className={`nav-link navbarlink text-white ${location.pathname === '/teacherlogin' ? 'active' : ''}`} to="/teacherlogin">Teacher</Link>
                                        </>
                                    )}
                                </ul>
                            </div>
                        </div>
                    </div>
                </nav>
            </div>
        </>
    );
};

export default Header;
