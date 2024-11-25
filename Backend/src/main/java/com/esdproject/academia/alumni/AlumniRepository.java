package com.esdproject.academia.alumni;

import com.esdproject.academia.student.Student;
import org.springframework.data.jpa.repository.JpaRepository;

public interface AlumniRepository extends JpaRepository<Alumni, Integer> {
}
