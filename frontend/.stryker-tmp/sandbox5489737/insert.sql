-- Insert Users
INSERT INTO user (id, firstname, lastname, email, password, role)
VALUES
  (1, 'Keshav', 'Agarwal', 'keshav@gmail.com', '1234', 'STUDENT'),
  (2, 'Darshak', 'Devani', 'darsha@gmail.com', '1234', 'STUDENT');

-- Insert Students
INSERT INTO student (student_id, roll_number, photograph_path, cgpa, total_credits, graduation_year, domain, specialisation, user_id)
VALUES
  (1, '2023001', '/path/to/photo.jpg', 3.8, 120, 2023, 1, 2, 1);

-- Insert Organisations
INSERT INTO organisation (id, name, address)
VALUES
  (1, 'Microsoft', 'Bangalore'),
  (2, 'Wide Reach', 'Ahmedabad'),
  (3, 'Google', 'Hyderabad');

