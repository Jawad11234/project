import React, { useState, useEffect } from 'react'
import {Link, useHistory} from 'react-router-dom'
import Axios from "axios";
import UpdateClass from './UpdateClass';

const AddClass = () => {

    const history = useHistory();
    const [grade, setGrade] = useState('');
    const [classList, setclassList] = useState([]);

    const teacher_username = localStorage.getItem('teacher_username');
    const AddGrade = () => {
        Axios.post("http://localhost:3001/addclass", {
            class_name: grade,
            teacher_username: teacher_username,
        }).then((response) => {
            console.log(response);
        });
    };

    useEffect(() => {
        viewclass();
    }, [])

    const viewclass = async() => {
        await Axios.get(`http://localhost:3001/getclass/${teacher_username}`).then((response) => {
            setclassList(response.data);
            //console.log(response.data);
        })
    }


    const deleteClass = async(class_name) => {
        await Axios.delete(`http://localhost:3001/deleteclass/${class_name}`).then((response) => {
            if (response) {
                alert("Successfully Deleted");
            } else {
                alert("Failed to Delete");
            }
            viewclass();
        })
    }

    const updateClick = (id) => {
        console.log(id);
        history.push(`/updateclass/${id}`);
        return(<UpdateClass id={id} />)
        
    }

    return (
        <>
            <div className="py-3">
                <div className="card tlogin col-md-4 offset-md-4">
                    <div className="card-body">
                        <h1 className="card-title text-center py-4">Add Class</h1>
                        <form className="">
                            <div className="mb-3">
                                <label htmlFor="grade" className="form-label">
                                    Class Name
                                </label>
                                <input
                                    type="text"
                                    required
                                    value={grade}
                                    className="form-control"
                                    id="coursecode"
                                    placeholder="Class Name"
                                    onChange={(e) => {
                                        setGrade(e.target.value);
                                    }}
                                />
                            </div>
                            <button type="submit" onClick={AddGrade} className="btn btn-primary">
                                Add Class
                            </button>
                        </form>
                    </div>
                </div>
            </div>

            <div className="d-flex justify-content-center"><h1>Your Classes List</h1></div>
            <div className="d-flex align-content-start flex-wrap justify-content: space-between mx-5">
                {classList.map((grade, index) => (
                    <div className="col-md-3 mx-5">
                        <div className="card tlogin my-3">
                            <div className="card-body mx-3">
                                <div>
                                    <h5 className="card-title py-2">Class Name</h5>
                                    <p className="card-text py-3" key={index}>{grade.class_name}</p>
                                </div>
                                <button onClick={() =>updateClick(grade.class_id)} className="btn btn-primary" >Update</button>
                                <a className="btn btn-danger mx-3 px-3" onClick={() => { deleteClass(grade.class_name) }}>Delete</a>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
            <div style={{marginBottom:'72px'}}></div>
        </>
    )
}

export default AddClass
