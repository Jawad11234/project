-- phpMyAdmin SQL Dump
-- version 5.1.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1:8080
-- Generation Time: Dec 22, 2021 at 01:04 PM
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
(12, 'https://res.cloudinary.com/jawad11/image/upload/v1640007898/p7n7gna8gbegrceiw69p.jpg', 'muneeburrhman763@gmail.com'),
(15, 'https://res.cloudinary.com/jawad11/image/upload/v1639551182/sample.jpg', 'nafy@gmail.com'),
(17, 'https://res.cloudinary.com/jawad11/image/upload/v1639551182/sample.jpg', 'usmanashraf@gmail.com'),
(18, 'https://res.cloudinary.com/jawad11/image/upload/v1640174255/r7o5jhvv5twjf5h0qkhe.png', 'mashoosrehman112@gmail.com');

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
(1, 'Result Card', 'https://res.cloudinary.com/jawad11/image/upload/v1640172241/p4uwgbtbkkqau6nlrnwc.pdf', 'muneeburrhman763@gmail.com'),
(2, '', 'https://res.cloudinary.com/jawad11/image/upload/v1640173075/j18lrwil3n12myss44pv.pdf', 'muneeburrhman763@gmail.com');

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
(4, 'https://res.cloudinary.com/jawad11/image/upload/v1640167177/m8cfoi9r29au0zbu92fl.jpg', 'shoaibshoaibali677@gmail.com');

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
(2, 'Hasnad ul Hassan', 'Shafaqat Ali', '20', 'Male', '03470728613', '12th', 'hasnadulhassan193@gmail.com', '$2b$10$FypvwdwWV2NiADLTisgnLu2hJyijVBVCKTAbroBFekXDkQrskW9fu'),
(3, 'Shoaib Hafeez', 'Muhammad Hafeez', '25', 'Male', '03334975677', 'BS Software Engineering', 'shoaibshoaibali677@gmail.com', '0333shoaib');

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
(6, 'ooooo', 'usmanashraf@gmail.com'),
(7, 'ooooo', 'usmanashraf@gmail.com'),
(9, 'BS Engineering', 'muneeburrhman763@gmail.com'),
(12, '10th', 'mashoosrehman112@gmail.com');

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
(7, 'Munneb-ur-Rehman', 'Male', '03470728613', 'muneeburrhman763@gmail.com', '12345', '12'),
(8, 'Usman Ashraf', 'Male', '030554321911', 'usmanashraf@gmail.com', 'usman12345', '50'),
(11, 'Nafay', 'Male', '030554321911', 'nafy@gmail.com', '12345', '56'),
(12, 'Hasnad ul Hassan', 'Male', '03470728613', 'hasnadulhassan193@gmail.com', '12345', '78'),
(13, '1234', 'Male', '03470728613', 'daniyalmehar74@gmail.com', '12345', '70'),
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
(3, 'Tuesday', 'Busy from 10:30 AM to 3:30PM. Free from 5:00PM to 10:00PM', 'muneeburrhman763@gmail.com'),
(4, 'Monday', 'Busy from 10:30 AM to 3:30PM. Free from 5:00PM to 10:00PM', 'usmanashraf@gmail.com'),
(5, 'Monday', 'Busy from 10:30 AM to 3:30PM. Free from 5:00PM to 10:00PM', 'mashoosrehman112@gmail.com');

-- --------------------------------------------------------

--
-- Table structure for table `te_courses`
--

CREATE TABLE `te_courses` (
  `course_id` int(30) NOT NULL,
  `course_code` varchar(500) NOT NULL,
  `course_name` varchar(100) NOT NULL,
  `course_price` varchar(30) NOT NULL,
  `teacher_username` varchar(500) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `te_courses`
--

INSERT INTO `te_courses` (`course_id`, `course_code`, `course_name`, `course_price`, `teacher_username`) VALUES
(2, 'BIO193', 'Biology', '2000', 'muneeburrhman763@gmail.com'),
(4, 'BIO193', 'Biology', '900', 'usmanashraf@gmail.com'),
(6, 'CSE125', 'Computer Engineering', '2500', 'usmanashraf@gmail.com'),
(10, 'BUTH1990', 'Digital Logic Design', '3000', 'usmanashraf@gmail.com'),
(11, 'CHM123', 'Chemistry', '1000', 'muneeburrhman763@gmail.com'),
(13, 'CHM123', 'Chemistry', '2000', 'usmanashraf@gmail.com'),
(14, 'CHM123', 'Linear Algebra', '2000', 'muneeburrhman763@gmail.com'),
(15, 'MTH198', 'Mathmatics', '2000', 'mashoosrehman112@gmail.com');

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
  MODIFY `image_id` int(30) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=19;

--
-- AUTO_INCREMENT for table `library`
--
ALTER TABLE `library`
  MODIFY `book_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT for table `student_image`
--
ALTER TABLE `student_image`
  MODIFY `student_id` int(30) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT for table `student_login`
--
ALTER TABLE `student_login`
  MODIFY `student_id` int(30) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT for table `student_profile`
--
ALTER TABLE `student_profile`
  MODIFY `profile_id` int(30) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `teacher_class`
--
ALTER TABLE `teacher_class`
  MODIFY `class_id` int(30) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=13;

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
-- AUTO_INCREMENT for table `teacher_schedule`
--
ALTER TABLE `teacher_schedule`
  MODIFY `schedule_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT for table `te_courses`
--
ALTER TABLE `te_courses`
  MODIFY `course_id` int(30) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=16;

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
