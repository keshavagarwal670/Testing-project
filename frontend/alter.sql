-- Alumni
ALTER TABLE Alumni
ADD CONSTRAINT fk_alumni_student
FOREIGN KEY (student_id) REFERENCES Student(student_id);

-- Alumni_Education
ALTER TABLE Alumni_Education
ADD CONSTRAINT fk_alumni_education_alumni
FOREIGN KEY (alumni_id) REFERENCES Alumni(id);

-- Alumni_Organisation
ALTER TABLE Alumni_Organisation
ADD CONSTRAINT fk_alumni_organisation_alumni
FOREIGN KEY (alumni_id) REFERENCES Alumni(id);

ALTER TABLE Alumni_Organisation
ADD CONSTRAINT fk_alumni_organisation_organisation
FOREIGN KEY (organisation_id) REFERENCES Organisation(id);

-- Student
ALTER TABLE Student
ADD CONSTRAINT fk_student_user
FOREIGN KEY (user_id) REFERENCES User(id);
