import React, {useState, useEffect} from 'react'
import Axios from 'axios';

const AddSchedule = () => {

    const [day, setDay] = useState("");
    const [schedule, setSchedule] = useState("");
    const [scheduleList, setScheduleList] = useState([]);
    const teacher_username = localStorage.getItem('teacher_username');

    const AddSchedules = async() => {
        await Axios.post("http://localhost:3001/addschedule", {
            Day: day,
            schedule_desc: schedule,
            teacher_username: teacher_username,
        }).then((response) => {
            console.log(response);
          });
    }

    const deleteschedule = async(Day) => {
        await Axios.delete(`http://localhost:3001/deleteschedule/${Day}`).then((response) => {
            if(response){
                alert("Successfully Deleted");
            } else{
                alert("Failed to Delete");
            } 
            viewschedule();
        })
    }

    useEffect(() => {
        viewschedule();
    }, [])

    const viewschedule = async() =>{
        await Axios.get(`http://localhost:3001/getschedule/${teacher_username}`).then((response) => {
            setScheduleList(response.data);
            console.log(response.data);
    })}

    return (
        <>
        <div className="py-3">
        <div className="card tlogin col-md-4 offset-md-4">
            <div className="card-body">
                <h1 className="card-title text-center py-4">Add Shedule</h1>
                <form className="">
                <div className="mb-3">
                        <label htmlFor="day" className="form-label">
                            Day Name
                        </label>
                        <input
                            type="text"
                            required
                            value={day}
                            className="form-control"
                            id="day"
                            placeholder="Add Day"
                            onChange={(e) => {
                                setDay(e.target.value);
                            }}
                        />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="schedule" className="form-label">
                            Add Schedule
                        </label>
                        <input
                            type="text"
                            required
                            value={schedule}
                            className="form-control"
                            id="schedule"
                            placeholder="Add Schedule e.g Busy 8:30AM to 4:30PM Free 8:30PM to 10:00PM"
                            onChange={(e) => {
                                setSchedule(e.target.value);
                            }}
                            aria-describedby="emailHelp"
                        />
                    </div>
                    <button type="submit" onClick={AddSchedules} className="btn btn-primary">
                        Add Shedule
                    </button>
                </form>
            </div>
        </div>
        </div>

        
        <div className="d-flex justify-content-center"><h1>Your Courses List</h1></div>
            <div className="d-flex align-content-start flex-wrap justify-content: space-between mx-5">
                {scheduleList.map((schedule) => (
                    <div className="col-md-3 mx-5">
                        <div className="card tlogin my-3">
                            <div className="card-body mx-3">
                                <div>
                                    <h5 className="card-title">{schedule.Day}</h5>
                                    <h5 className="card-title">{schedule.schedule_desc}</h5>
                                </div>
                                <a href="#" className="btn btn-primary" >Update</a>
                                <a className="btn btn-danger mx-3 px-3" onClick={() => {deleteschedule(schedule.Day)}}>Delete</a>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </>
    )
}

export default AddSchedule
