const express = require("express");
const app = express();
const cors = require("cors");
const mysql = require("mysql");
const fileUpload = require("express-fileupload");
const bodyParser = require("body-parser");
const multer = require("multer");
app.use(cors());
app.use(express.static("files"));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(express.json());
app.use(fileUpload());
app.use(function (req, res, next) {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type', 'Accept');
  next();
});

app.use(cors({
  AccessControlAllowOrigin: ["http://localhost:3000"],
  methods: ["GET", "POST", "PUT", "DELETE"],
}));
// database conectivity is there
const db = mysql.createConnection({
  host: "localhost",
  port: 8080,
  user: "root",
  password: "",
  database: "tutor",
  multipleStatements: true,
});
// Post PDF Files 
app.post('/library', (req, res) => {
  const book_title = req.body.book_title
  const url = req.body.url;
  const teacher_username = req.body.teacher_username;
  db.query("INSERT INTO library(book_title,book_link, teacher_username) VALUES(?,?,?)", [book_title, url, teacher_username], (err, result) => {
    if (!err) {
      console.log(result);
      console.log("Uploades")
    } else {
      console.log(err);
      console.log("Failed to upload")
    }
  })
})
// Post  Images by Teacher
app.post('/urlupload', (req, res) => {
  const url = req.body.url;
  const teacher_username = req.body.teacher_username;
  db.query("INSERT INTO images(image_name, teacher_username) VALUES(?,?)", [url, teacher_username], (err, result) => {
    if (!err) {
      console.log(result);
      console.log("Uploades")
    } else {
      console.log(err);
      console.log("Failed to upload")
    }
  })
})
// Post  Images by Student
app.post('/studentimage', (req, res) => {
  const url = req.body.url;
  const student_username = req.body.student_username;
  db.query("INSERT INTO student_image(student_image, student_username) VALUES(?,?)", [url, student_username], (err, result) => {
    if (!err) {
      console.log(result);
      console.log("Uploades")
    } else {
      console.log(err);
      console.log("Failed to upload")
    }
  })
})
// Update Profile student Image
app.put('/updatestudentimage/:student_username', (req, res) => {
  const url = req.body.url;
  const student_username = req.body.student_username;
  db.query("UPDATE student_image set student_image = ? WHERE student_username = ?", [url, req.params.student_username], (err, result) => {
    if (!err) {
      console.log(result);
      res.json({ message: "Updated" })
      console.log("Updated")
    } else {
      console.log(err);
      console.log("Failed to upload")
      res.json({ message: "Not Updated Some errors" })
    }
  })
})
// Update Profile teacher Image
app.put('/updatteacherimage/:teacher_username', (req, res) => {
  const url = req.body.url;
  const student_username = req.body.student_username;
  db.query("UPDATE images set image_name = ? WHERE teacher_username = ?", [url, req.params.teacher_username], (err, result) => {
    if (!err) {
      console.log(result);
      res.json({ message: "Updated" })
      console.log("Updated")
    } else {
      console.log(err);
      console.log("Failed to upload")
      res.json({ message: "Not Updated Some errors" })
    }
  })
})
// Getting Images form Backend
app.get('/getbooks/:teacher_username', (req, res) => {
  db.query('SELECT * FROM images WHERE teacher_username = ?', [req.params.teacher_username], (err, result) => {
    if (!err) {
      console.log(result);
      res.json(result);
    } else {
      console.log(err);
    }
  })
})

// Getting teacher Background image Images form Backend
app.get('/getprofileimageteacher/:teacher_username', (req, res) => {
  db.query('SELECT * FROM images WHERE teacher_username = ?', [req.params.teacher_username], (err, result) => {
    if (!err) {
      console.log(result);
      res.json(result);
    } else {
      console.log(err);
    }
  })
})
// getting courses to show a students
app.get('/teachercourses/:teacher_username', (req, res) => {
  db.query('SELECT * FROM te_courses WHERE teacher_username = ?', [req.params.teacher_username], (err, result) => {
    if (!err) {
      console.log(result);
      res.json(result);
    } else {
      console.log(err);
    }
  })
})
// Getting Images form Backend
app.get('/getstudentimage/:student_username', (req, res) => {
  db.query('SELECT * FROM student_image WHERE student_username = ?', [req.params.student_username], (err, result) => {
    if (!err) {
      console.log(result);
      res.json(result);
    } else {
      console.log(err);
    }
  })
})
// Teacher Forgotten password
app.get('/teacherpassword', (req, res) => {
  const teacher_username = req.body.teacher_username;
  db.query("SELECT * from teacher_login WHERE teacher_username = ?", [teacher_username], (err, result) => {
    if (!err) {
      console.log(result[0].teacher_password);
      res.json(result[0].teacher_password)
    } else {
      console.log(err);
    }
  })
})
// Register Teacher and store it into database
app.post("/teacherregister", (req, res) => {

  const teacher_name = req.body.name;
  const teacher_gender = req.body.gender;
  const teacher_contact = req.body.contact;
  const teacher_username = req.body.username; // req.body.(name) is that name which is parsed in Fetch function
  const teacher_password = req.body.password;
  const teacher_students = req.body.teacher_students;

  db.query(
    "INSERT INTO teacher_login (teacher_name, teacher_gender, teacher_contact, teacher_username, teacher_password, teacher_students) VALUES(?,?,?,?,?,?)",
    [teacher_name, teacher_gender, teacher_contact, teacher_username, teacher_password, teacher_students],
    (err, result) => {
      if (err) {
        console.log(err)
      } else {
        console.log("Register")
        res.json(result);
      }
    }
  );
});

// Login session checking a user logged in s

// Login Teacher
app.post("/teacherlogin", (req, res) => {
  const teacher_username = req.body.teacher_username; // req.body.(name) is that name which is parsed in Fetch function
  const teacher_password = req.body.teacher_password;
  //console.log(teacher_username, teacher_password);
  db.query(
    "SELECT * FROM teacher_login WHERE teacher_username = ?",
    [teacher_username],
    (err, result) => {
      if (err) {
        console.log(err);
        res.send(err);
      }


      if (result.length > 0) {
        if (teacher_password == result[0].teacher_password) {
          res.json({ loggedIn: true, teacher_username: teacher_username });
          console.log(result);
        } else {
          res.json({
            loggedIn: false,
            message: "Wrong username/password combo!",
          });
        }

      } else {
        res.send({ loggedIn: false, message: "User doesn't exist" });
      }
    }
  );
});

// Add Course Api
app.post('/addcourse', (req, res) => {
  const course_name = req.body.course_name;
  const course_content = req.body.course_content;
  const course_image = req.body.course_image;
  const teacher_username = req.body.teacher_username;

  db.query(
    "INSERT INTO te_courses (course_name,course_content, course_image, teacher_username) VALUES(?,?,?,?)",
    [course_name, course_content, course_image, teacher_username],
    (err, result) => {
      console.log(err);
      if (!err) {
        console.log(result);
      }
    }
  );
})

// Get Course with username Api
app.get('/getcourses/:teacher_username', (req, res) => {
  db.query(
    "SELECT * FROM te_courses WHERE teacher_username = ?", [req.params.teacher_username], (err, result) => {
      if (err) {
        console.log(err);
      } else {
        res.json(result);
      }
    }
  )
})

// Update Courses Api
app.put('/updatecourse', (req, res) => {
  const course_code = req.body.course_code;
  const course_name = req.body.course_name;
  const course_id = req.body.course_id;

  db.query("UPDATE te_courses SET course_code = ?, course_name = ? WHERE course_id = ?", [course_id, course_code, course_name]), (err, result) => {
    if (err) {
      console.log(err);
    } else {
      res.json(result);
    }
  }
})
// Delete Courses Api
app.delete('/deletecourses/:course_code', (req, res) => {
  //const course_name = req.params.course_name;
  //const course_code = req.params.course_code;
  db.query("DELETE FROM te_courses WHERE course_code = ?", [req.params.course_code], (err, result) => {
    if (err) {
      console.log(err);
    } else {
      res.json(result);
      console.log(result);
    }
  })
})

// Get all Courses 
app.get('/getcourses', (req, res) => {
  db.query(
    "SELECT * FROM te_courses",(err, result) => {
      if (err) {
        console.log(err);
      } else {
        res.json(result);
      }
    }
  )
})
// Add Class Api
app.post('/addclass', (req, res) => {
  const class_name = req.body.class_name;
  const teacher_username = req.body.teacher_username;

  db.query(
    "INSERT INTO teacher_class (class_name,teacher_username) VALUES(?,?)",
    [class_name, teacher_username],
    (err, result) => {
      console.log(err);
      if (!err) {
        console.log(result);
      }
    }
  );
})

// Get Class Api
app.get('/getclass/:teacher_username', (req, res) => {
  db.query(
    "SELECT class_id, class_name FROM teacher_class WHERE teacher_username = ?", [req.params.teacher_username], (err, result) => {
      if (err) {
        console.log(err);
      } else {
        res.json(result);
      }
    }
  )
})

// Update Class
app.put('/updateclass/:class_id', (req, res) => {
  const class_name = req.body.class_name
  db.query("UPDATE teacher_class SET class_name = ? WHERE class_id = ?", [class_name, req.params.class_id], (err, result) => {
    if (!err) {
      console.log(result);
      console.log("Updated")
    } else {
      console.log("not update");
      console.log(err)
    }
  })
})

// Delete Class Api
app.delete('/deleteclass/:class_name', (req, res) => {
  //const course_name = req.params.course_name;
  //const course_code = req.params.course_code;
  db.query("DELETE FROM teacher_class WHERE class_name = ?", [req.params.class_name], (err, result) => {
    if (err) {
      console.log(err);
    } else {
      res.json(result);
      console.log(result);
    }
  })
})

// Add Schedule Api
app.post('/addschedule', (req, res) => {
  const Day = req.body.Day;
  const schedule_desc = req.body.schedule_desc;
  const teacher_username = req.body.teacher_username;

  db.query(
    "INSERT INTO teacher_schedule (Day, schedule_desc, teacher_username) VALUES(?,?,?)",
    [Day, schedule_desc, teacher_username],
    (err, result) => {
      console.log(err);
      if (!err) {
        console.log(result);
      }
    }
  );
})


// Get Schedule Api
app.get('/getschedule/:teacher_username', (req, res) => {
  db.query(
    "SELECT Day, schedule_desc FROM teacher_schedule WHERE teacher_username = ?", [req.params.teacher_username], (err, result) => {
      if (err) {
        console.log(err);
      } else {
        res.json(result);
      }
    }
  )
})

// Delete Schedule Api
app.delete('/deleteschedule/:Day', (req, res) => {
  //const course_name = req.params.course_name;
  //const course_code = req.params.course_code;
  db.query("DELETE FROM teacher_schedule WHERE Day = ?", [req.params.Day], (err, result) => {
    if (err) {
      console.log(err);
    } else {
      res.json(result);
      console.log(result);
    }
  })
})

// Get Teacher Profile Api
app.get('/getprofile/:teacher_username', (req, res) => {
  db.query(
    "SELECT * FROM teacher_login WHERE teacher_username = ?", [req.params.teacher_username], (err, result) => {
      if (err) {
        console.log(err);
      } else {
        res.json(result);
      }
    }
  )
})

// Register Student and store it into database
app.post("/studentregister", (req, res) => {

  const student_name = req.body.name;
  const student_fathername = req.body.fathername;
  const student_age = req.body.age;
  const student_gender = req.body.gender;
  const student_contact = req.body.contact;
  const student_grade = req.body.grade;
  const student_username = req.body.username; // req.body.(name) is that name which is parsed in Fetch function
  const student_password = req.body.password;


  db.query(
    "INSERT INTO student_login (student_name, student_fathername,student_age,student_gender,student_contact,student_grade,student_username,student_password) VALUES(?,?,?,?,?,?,?,?)",
    [student_name, student_fathername, student_age, student_gender, student_contact, student_grade, student_username, student_password],
    (err, result) => {
      console.log(err);
      if (!err) {
        console.log(result);
      }
    }
  );
});

// Login Student Api
app.post("/studentlogin", (req, res) => {
  const student_username = req.body.student_username; // req.body.(name) is that name which is parsed in Fetch function
  const student_password = req.body.student_password;
  //console.log(teacher_username, teacher_password);
  db.query(
    "SELECT * FROM student_login WHERE student_username = ?",
    [student_username],
    (err, result) => {
      if (err) {
        console.log(err);
      }


      if (result.length > 0) {
        if (student_password == result[0].student_password) {
          res.json({ loggedIn: true, student_username: student_username });
          console.log(result);
        } else {
          res.json({
            loggedIn: false,
            message: "Wrong username/password combo!",
          });
        }

      } else {
        res.json({ loggedIn: false, message: "User doesn't exist" });
      }
    }
  );
});

// Get Student Profile Api
app.get('/getstudentprofile/:student_username', (req, res) => {
  db.query(
    "SELECT * FROM student_login WHERE student_username = ?", [req.params.student_username], (err, result) => {
      if (err) {
        console.log(err);
      } else {
        res.json(result);
        console.log(result);
      }
    }
  )
});
// Getting Teachers
app.get("/teachersdetail", (req, res) => {
  db.query("SELECT teacher_name, teacher_username FROM teacher_login", (err, result) => {
    console.log(err);
    if (!err) {
      console.log(result);
      res.json(result);
    }
  }
  )
})

// Get Student Profile Api
app.get('/getlibrary', (req, res) => {
  db.query(
    "SELECT * FROM library", (err, result) => {
      if (err) {
        console.log(err);
        res.json({ message: "No Books Available" })
      } else {
        res.json(result);
        console.log(result);
      }
    }
  )
});
//Selected Course
app.post('/selectedcourse', (req, res) => {
  const course_name = req.body.course_name;
  const course_price = req.body.course_price;
  const student_username = req.body.student_username;
  const teacher_username = req.body.teacher_username;
  db.query("INSERT INTO selected_courses (course_name, course_price, student_username, teacher_username) VALUES(?,?,?,?)", [course_name, course_price, student_username, teacher_username], (err, result) => {
    if (err) {
      console.log(err)
    } else {
      console.log(result);
      console.log("Subject Selected")
    }
  })
})
// get Selected Courses
app.get('/getselectedcourses/:teacher_username', (req, res) => {
  db.query("SELECT * FROM selected_courses WHERE teacher_username = ?", [req.params.teacher_username], (err, result) => {
    if (err) {
      console.log(err)
    } else {
      res.json(result)
      console.log(result)
    }
  })
})
// get student Selected Courses
app.get('/getstudentcourses/:student_username', (req, res) => {
  db.query("SELECT * FROM selected_courses WHERE student_username = ?", [req.params.student_username], (err, result) => {
    if (err) {
      console.log(err)
    } else {
      res.json(result)
      console.log(result)
    }
  })
})
//Submit Response
app.post('/submitresponse', (req, res) => {
  const response_text = req.body.response_text;
  const teacher_username = req.body.teacher_username;
  const student_username = req.body.student_username
  db.query(
    "INSERT INTO teacher_response (response_text, teacher_username, student_username) VALUES(?,?,?)", [response_text, teacher_username, student_username], (err, result) => {
      if (err) {
        console.log(err);
        //res.json("Response Not Send")
      } else {
        console.log(result);
        console.log("Submitted")
        //res.json("Response Send to Student")
      }
    }
  )
})
// Get Teacher Response
app.get('/getteacherresponse/:student_username', (req, res) => {
  db.query("SELECT * FROM teacher_response WHERE student_username = ?", [req.params.student_username], (err, result) => {
    if (err) {
      console.log(err)
    } else {
      console.log(result);
      res.json(result);
    }
  })
})
// Delete Selected Course
app.delete('/deleteselectedcourse/:course_name', (req, res) => {
  //const course_name = req.params.course_name;
  //const course_code = req.params.course_code;
  db.query("DELETE FROM selected_courses WHERE course_name = ?", [req.params.course_name], (err, result) => {
    if (err) {
      console.log(err);
    } else {
      res.json("Deleted Successfully");
      console.log(result);
    }
  })
})
// Delete Teacher Response
app.delete('/deleteteacherresponse/:response_tex', (req, res) => {
  //const course_name = req.params.course_name;
  //const course_code = req.params.course_code;
  db.query("DELETE FROM teacher_response WHERE response_text = ?", [req.params.response_tex], (err, result) => {
    if (err) {
      console.log(err);
    } else {
      res.json("Delete Successfully");
      console.log(result);
    }
  })
})
/// Getting Teacher Profile Image
app.get('/teacherImage', (req, res) => {
  db.query("SELECT * FROM images", (err, result) => {
    if (err) {
      console.log(err);
    } else {
      res.json(result);
      console.log(result);
    }
  })
})

// Update Teacher
app.put('/updateTeacher/:teacher_id', (req, res) => {
  const teacher_name = req.body.teacher_name;
  const teacher_gender = req.body.teacher_gender;
  const teacher_contact = req.body.teacher_contact;
  //const teacher_username = req.body.teacher_username;
  const teacher_password = req.body.teacher_password;
  const teacher_students = req.body.teacher_students;

  db.query("UPDATE teacher_login SET teacher_name = ?, teacher_gender=?, teacher_contact=?, teacher_password=?,teacher_students=? WHERE teacher_id = ?",
  [teacher_name, teacher_gender, teacher_contact, teacher_password, teacher_students, req.params.teacher_id], (err, result) => {
    if(err){
      console.log(err)
    } else{
      console.log(result);
      console.log("Updated")
    }
  }
  )
})
// database connection
db.connect((err) => {
  if (!err) {
    console.log("DB connection Successful");
  } else {
    console.log("DB connection failed" + JSON.stringify(err, undefined, 2));
  }
});

app.listen(3001, () => console.log("Express server run at port: 3001"));
