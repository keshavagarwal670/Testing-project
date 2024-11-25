DROP DATABASE IF EXISTS academia;
CREATE DATABASE IF NOT EXISTS academia;
USE academia;

DROP TABLE IF EXISTS Alumni,
Alumni_Education,
Alumni_Organisation,
Organisation,
Student;

-- Alumni
CREATE TABLE Alumni (
    id INT AUTO_INCREMENT PRIMARY KEY,
    email VARCHAR(255) NOT NULL UNIQUE,
    contact_number VARCHAR(255) NOT NULL,
    student_id INT,
    FOREIGN KEY (student_id) REFERENCES Student (student_id)
);

-- Alumni_Education
CREATE TABLE Alumni_Education (
    id INT AUTO_INCREMENT PRIMARY KEY,
    degree VARCHAR(255) NOT NULL,
    passing_year INT NOT NULL,
    joining_year INT NOT NULL,
    college_name VARCHAR(255),
    address TEXT,
    alumni_id INT,
    FOREIGN KEY (alumni_id) REFERENCES Alumni (id)
);

-- Alumni_Organisation
CREATE TABLE Alumni_Organisation (
    id INT AUTO_INCREMENT PRIMARY KEY,
    position VARCHAR(255),
    joining_date DATE,
    leaving_date DATE,
    alumni_id INT,
    organisation_id INT,
    FOREIGN KEY (alumni_id) REFERENCES Alumni (id),
    FOREIGN KEY (organisation_id) REFERENCES Organisation (id)
);

-- Organisation
CREATE TABLE Organisation (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    address VARCHAR(255)
);

-- Student
CREATE TABLE Student (
    student_id INT AUTO_INCREMENT PRIMARY KEY,
    roll_number VARCHAR(255) NOT NULL UNIQUE,
    photograph_path VARCHAR(255),
    cgpa DOUBLE NOT NULL,
    total_credits INT NOT NULL,
    graduation_year INT,
    domain INT,
    specialisation INT,
    user_id INT,
    FOREIGN KEY (user_id) REFERENCES User (id)
);
