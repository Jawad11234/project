-- phpMyAdmin SQL Dump
-- version 5.1.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1:8080
-- Generation Time: Dec 26, 2021 at 11:34 AM
-- Server version: 10.4.21-MariaDB
-- PHP Version: 8.0.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `tutor`
--

-- --------------------------------------------------------

--
-- Table structure for table `images`
--

CREATE TABLE `images` (
  `image_id` int(30) NOT NULL,
  `image_name` varchar(100) NOT NULL,
  `teacher_username` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `images`
--

INSERT INTO `images` (`image_id`, `image_name`, `teacher_username`) VALUES
(12, 'https://res.cloudinary.com/jawad11/image/upload/v1640433625/ciznq3ftht8iqn7i6ruw.jpg', 'muneeburrhman763@gmail.com'),
(15, 'https://res.cloudinary.com/jawad11/image/upload/v1639551182/sample.jpg', 'nafy@gmail.com'),
(17, 'https://res.cloudinary.com/jawad11/image/upload/v1640240960/aihapw9bnzmspwl6yibx.png', 'usmanashraf@gmail.com'),
(18, 'https://res.cloudinary.com/jawad11/image/upload/v1640174255/r7o5jhvv5twjf5h0qkhe.png', 'mashoosrehman112@gmail.com'),
(19, 'https://res.cloudinary.com/jawad11/image/upload/v1640178958/x9lieulvodagsxmn0u2u.png', 'hasnadulhassan193@gmail.com');

-- --------------------------------------------------------

--
-- Table structure for table `library`
--

CREATE TABLE `library` (
  `book_id` int(11) NOT NULL,
  `book_title` varchar(500) NOT NULL,
  `book_link` varchar(500) NOT NULL,
  `teacher_username` varchar(500) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `library`
--

INSERT INTO `library` (`book_id`, `book_title`, `book_link`, `teacher_username`) VALUES
(1, 'Result Card', 'https://res.cloudinary.com/jawad11/image/upload/v1640172241/p4uwgbtbkkqau6nlrnwc.pdf', 'muneeburrhman763@gmail.com');

-- --------------------------------------------------------

--
-- Table structure for table `selected_courses`
--

CREATE TABLE `selected_courses` (
  `cours_id` int(20) NOT NULL,
  `course_name` varchar(30) NOT NULL,
  `course_price` varchar(50) NOT NULL,
  `student_username` varchar(100) NOT NULL,
  `teacher_username` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Table structure for table `student_image`
--

CREATE TABLE `student_image` (
  `student_id` int(30) NOT NULL,
  `student_image` varchar(500) NOT NULL,
  `student_username` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `student_image`
--

INSERT INTO `student_image` (`student_id`, `student_image`, `student_username`) VALUES
(4, 'https://res.cloudinary.com/jawad11/image/upload/v1640167177/m8cfoi9r29au0zbu92fl.jpg', 'shoaibshoaibali677@gmail.com'),
(5, 'https://res.cloudinary.com/jawad11/image/upload/v1640178505/p6quuacafgybjpvvfz7t.png', 'hasnadulhassan193@gmail.com'),
(6, 'https://res.cloudinary.com/jawad11/image/upload/v1640241782/gjohxieefqigv1nxbx7y.png', 'zainquresh930@gmail.com');

-- --------------------------------------------------------

--
-- Table structure for table `student_login`
--

CREATE TABLE `student_login` (
  `student_id` int(30) NOT NULL,
  `student_name` varchar(500) NOT NULL,
  `student_fathername` varchar(500) NOT NULL,
  `student_age` varchar(255) NOT NULL,
  `student_gender` varchar(13) NOT NULL,
  `student_contact` varchar(20) NOT NULL,
  `student_grade` varchar(500) NOT NULL,
  `student_username` varchar(500) NOT NULL,
  `student_password` varchar(500) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `student_login`
--

INSERT INTO `student_login` (`student_id`, `student_name`, `student_fathername`, `student_age`, `student_gender`, `student_contact`, `student_grade`, `student_username`, `student_password`) VALUES
(2, 'Hasnad ul Hassan', 'Shafaqat Ali', '20', 'Male', '03470728613', '12th', 'hasnadulhassan193@gmail.com', '12345'),
(3, 'Shoaib Hafeez', 'Muhammad Hafeez', '25', 'Male', '03334975677', 'BS Software Engineering', 'shoaibshoaibali677@gmail.com', '0333shoaib'),
(4, 'Muhammad Faizan ', 'Gulzar Ahmed', '23', 'male', '03035610825', '11', 'zainquresh930@gmail.com', 'qwerty123');

-- --------------------------------------------------------

--
-- Table structure for table `student_profile`
--

CREATE TABLE `student_profile` (
  `profile_id` int(30) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Table structure for table `teacher_class`
--

CREATE TABLE `teacher_class` (
  `class_id` int(30) NOT NULL,
  `class_name` varchar(500) NOT NULL,
  `teacher_username` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `teacher_class`
--

INSERT INTO `teacher_class` (`class_id`, `class_name`, `teacher_username`) VALUES
(9, 'BS Engineering', 'muneeburrhman763@gmail.com'),
(12, '10th', 'mashoosrehman112@gmail.com'),
(13, '10th', 'usmanashraf@gmail.com'),
(14, '11th', 'usmanashraf@gmail.com'),
(15, '12th', 'hasnadulhassan193@gmail.com'),
(17, '4rth Year', 'nafy@gmail.com'),
(18, '12th', 'usmanashraf@gmail.com'),
(21, '9th', 'usmanashraf@gmail.com');

-- --------------------------------------------------------

--
-- Table structure for table `teacher_login`
--

CREATE TABLE `teacher_login` (
  `teacher_id` int(30) NOT NULL,
  `teacher_name` varchar(500) NOT NULL,
  `teacher_gender` varchar(100) NOT NULL,
  `teacher_contact` varchar(20) NOT NULL,
  `teacher_username` varchar(500) NOT NULL,
  `teacher_password` varchar(500) NOT NULL,
  `teacher_students` varchar(200) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `teacher_login`
--

INSERT INTO `teacher_login` (`teacher_id`, `teacher_name`, `teacher_gender`, `teacher_contact`, `teacher_username`, `teacher_password`, `teacher_students`) VALUES
(7, 'Muneeb ur Rehman', 'Male', '03047107493', 'muneeburrhman763@gmail.com', '12345', '20'),
(8, 'Usman Ashraf', 'Male', '030554321911', 'usmanashraf@gmail.com', 'usman12345', '50'),
(11, 'Nafay', 'Male', '030554321911', 'nafy@gmail.com', '12345', '56'),
(12, 'Hasnad ul Hassan', 'Male', '03470728613', 'hasnadulhassan193@gmail.com', '12345', '78'),
(16, 'Mashood', 'Male', '03426229503', 'mashoosrehman112@gmail.com', 'mashood12345', '20');

-- --------------------------------------------------------

--
-- Table structure for table `teacher_profile`
--

CREATE TABLE `teacher_profile` (
  `profile_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Table structure for table `teacher_response`
--

CREATE TABLE `teacher_response` (
  `response_id` int(20) NOT NULL,
  `response_text` varchar(500) NOT NULL,
  `teacher_username` varchar(50) NOT NULL,
  `student_username` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Table structure for table `teacher_schedule`
--

CREATE TABLE `teacher_schedule` (
  `schedule_id` int(11) NOT NULL,
  `Day` varchar(500) NOT NULL,
  `schedule_desc` varchar(500) NOT NULL,
  `teacher_username` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `teacher_schedule`
--

INSERT INTO `teacher_schedule` (`schedule_id`, `Day`, `schedule_desc`, `teacher_username`) VALUES
(1, 'Monday', 'Busy from 8:30 AM to 4:30PM. Free from 5:00PM to 10:00PM', 'muneeburrhman763@gmail.com'),
(4, 'Monday', 'Busy from 10:30 AM to 3:30PM. Free from 5:00PM to 10:00PM', 'usmanashraf@gmail.com'),
(5, 'Monday', 'Busy from 10:30 AM to 3:30PM. Free from 5:00PM to 10:00PM', 'mashoosrehman112@gmail.com'),
(6, 'Monday', 'Busy 8:30AM to 12:30PM and Free from 3:30PM to 10:30PM', 'hasnadulhassan193@gmail.com'),
(7, 'Monday', 'Busy 8:30AM to 12:30PM and Free from 3:30PM to 10:30PM', 'nafy@gmail.com');

-- --------------------------------------------------------

--
-- Table structure for table `te_courses`
--

CREATE TABLE `te_courses` (
  `course_id` int(30) NOT NULL,
  `course_name` varchar(100) NOT NULL,
  `course_content` varchar(1000) NOT NULL,
  `course_image` varchar(500) NOT NULL,
  `teacher_username` varchar(500) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `te_courses`
--

INSERT INTO `te_courses` (`course_id`, `course_name`, `course_content`, `course_image`, `teacher_username`) VALUES
(20, 'Biology', '1. Introduction\n2. Enzaymes', 'https://res.cloudinary.com/jawad11/image/upload/v1640460571/j7jubsxpxulskelny1zz.png', 'muneeburrhman763@gmail.com'),
(21, 'Chemistry', '1.inroducion\n2.organic chemisr\n3. inorganic chemir', 'https://res.cloudinary.com/jawad11/image/upload/v1640507991/oz6phvtieppad4v9pkzw.jpg', 'usmanashraf@gmail.com');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `images`
--
ALTER TABLE `images`
  ADD PRIMARY KEY (`image_id`),
  ADD KEY `teacher_username` (`teacher_username`);

--
-- Indexes for table `library`
--
ALTER TABLE `library`
  ADD PRIMARY KEY (`book_id`),
  ADD KEY `teacher_username` (`teacher_username`);

--
-- Indexes for table `selected_courses`
--
ALTER TABLE `selected_courses`
  ADD PRIMARY KEY (`cours_id`);

--
-- Indexes for table `student_image`
--
ALTER TABLE `student_image`
  ADD PRIMARY KEY (`student_id`),
  ADD KEY `student_name` (`student_username`),
  ADD KEY `student_username` (`student_username`);

--
-- Indexes for table `student_login`
--
ALTER TABLE `student_login`
  ADD PRIMARY KEY (`student_id`);

--
-- Indexes for table `student_profile`
--
ALTER TABLE `student_profile`
  ADD PRIMARY KEY (`profile_id`);

--
-- Indexes for table `teacher_class`
--
ALTER TABLE `teacher_class`
  ADD PRIMARY KEY (`class_id`),
  ADD KEY `teacher_username` (`teacher_username`);

--
-- Indexes for table `teacher_login`
--
ALTER TABLE `teacher_login`
  ADD PRIMARY KEY (`teacher_id`),
  ADD UNIQUE KEY `teacher_username` (`teacher_username`);

--
-- Indexes for table `teacher_profile`
--
ALTER TABLE `teacher_profile`
  ADD PRIMARY KEY (`profile_id`);

--
-- Indexes for table `teacher_response`
--
ALTER TABLE `teacher_response`
  ADD PRIMARY KEY (`response_id`);

--
-- Indexes for table `teacher_schedule`
--
ALTER TABLE `teacher_schedule`
  ADD PRIMARY KEY (`schedule_id`),
  ADD KEY `test2` (`teacher_username`);

--
-- Indexes for table `te_courses`
--
ALTER TABLE `te_courses`
  ADD PRIMARY KEY (`course_id`),
  ADD KEY `test1` (`teacher_username`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `images`
--
ALTER TABLE `images`
  MODIFY `image_id` int(30) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=20;

--
-- AUTO_INCREMENT for table `library`
--
ALTER TABLE `library`
  MODIFY `book_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT for table `selected_courses`
--
ALTER TABLE `selected_courses`
  MODIFY `cours_id` int(20) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;

--
-- AUTO_INCREMENT for table `student_image`
--
ALTER TABLE `student_image`
  MODIFY `student_id` int(30) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=13;

--
-- AUTO_INCREMENT for table `student_login`
--
ALTER TABLE `student_login`
  MODIFY `student_id` int(30) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT for table `student_profile`
--
ALTER TABLE `student_profile`
  MODIFY `profile_id` int(30) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `teacher_class`
--
ALTER TABLE `teacher_class`
  MODIFY `class_id` int(30) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=22;

--
-- AUTO_INCREMENT for table `teacher_login`
--
ALTER TABLE `teacher_login`
  MODIFY `teacher_id` int(30) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=17;

--
-- AUTO_INCREMENT for table `teacher_profile`
--
ALTER TABLE `teacher_profile`
  MODIFY `profile_id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `teacher_response`
--
ALTER TABLE `teacher_response`
  MODIFY `response_id` int(20) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `teacher_schedule`
--
ALTER TABLE `teacher_schedule`
  MODIFY `schedule_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;

--
-- AUTO_INCREMENT for table `te_courses`
--
ALTER TABLE `te_courses`
  MODIFY `course_id` int(30) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=22;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `teacher_class`
--
ALTER TABLE `teacher_class`
  ADD CONSTRAINT `test` FOREIGN KEY (`teacher_username`) REFERENCES `teacher_login` (`teacher_username`);

--
-- Constraints for table `teacher_schedule`
--
ALTER TABLE `teacher_schedule`
  ADD CONSTRAINT `test2` FOREIGN KEY (`teacher_username`) REFERENCES `teacher_login` (`teacher_username`);

--
-- Constraints for table `te_courses`
--
ALTER TABLE `te_courses`
  ADD CONSTRAINT `test1` FOREIGN KEY (`teacher_username`) REFERENCES `teacher_login` (`teacher_username`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
