import React, { useState, useEffect } from "react";
import Axios from "axios";

const Library = () => {
  const [selectfile, setselectfile] = useState("");
  const [booktitle, setBooktitle] = useState("");
  const [getBooks, setGetBooks] = useState([]);
  const teacher_username = localStorage.getItem('teacher_username')
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
        Axios.post("http://localhost:3001/library", { book_title: booktitle, url: url, teacher_username: teacher_username })
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

  const teacherBooks = async () => {
    await Axios.get('http://localhost:3001/getlibrary').then((response) => {
      setGetBooks(response.data)
      console.log(response.data)
    })
  }
  useEffect(() => {
    teacherBooks();
  }, [])
  return (
    <>
      <div className="py-3">
        <div className="card tlogin col-md-4 offset-md-4">
          <div className="card-body">
            <h1 className="card-title text-center py-4">Add Book</h1>
            <form className="">
              <div className="mb-3">
                <label htmlFor="book" className="form-label">
                  Book Title
                </label>
                <input
                  type="text"
                  required
                  value={booktitle}
                  className="form-control"
                  id="book"
                  placeholder="Enter Book Title "
                  onChange={(e) => {
                    setBooktitle(e.target.value);
                  }}
                />
              </div>
              <div className="mb-3">
                <label htmlFor="file" className="form-label">
                  Select Book
                </label>
                <input
                  type="file"
                  required
                  className="form-control"
                  onChange={selectFile}
                />
              </div>
              <div>
                <button className="btn btn-primary" onClick={uploadFile}>
                  Upload
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
      <div style={{ marginBottom: '255px' }}></div>
    </>
  );
};

export default Library;
