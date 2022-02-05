import React, {useState, useEffect} from 'react'
import {Link, useParams, useRouteMatch} from 'react-router-dom';
import Axios from 'axios';

const UpdateClass = () => {

    //console.log(updatedId);
    const {class_id} = useParams();
    
      //console.log(id)
    //console.log(class_id);
    // console.log(props.match.params.id);
    //const {state} = useLocation();
    const [grade, setGrade] = useState("");
    //const teacher_username = localStorage.getItem('teacher_username');

    const updateclass = () => {
        Axios.put(`http://localhost/updateclass/${class_id}`,{
            //class_id: class_id,
            class_name: grade
            //teacher_username: teacher_username
        }).then(response =>{
            console.log(response.data);
            alert(response.data);
        })
    }
    return (
        <>
        <div className="py-3">
                <div className="card col-md-4 offset-md-4">
                    <div className="card-body">
                        <h1 className="card-title text-center py-4">Update Class</h1>
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
                                    id="grade"
                                    placeholder="Class Name"
                                    onChange={(e) => {
                                        setGrade(e.target.value);
                                    }}
                                />
                                <h1>{grade}</h1>
                            </div>
                            <button type="submit" onClick={updateclass} className="btn btn-primary">
                                Update
                            </button>
                            <Link to="/addclass"><button type="submit" className="btn btn-primary">
                                View
                            </button></Link>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}

export default UpdateClass
