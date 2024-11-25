package com.esdproject.academia.student;


import com.esdproject.academia.user.User;
import com.fasterxml.jackson.annotation.JsonIgnore;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
@Entity
@Table(name = "Student")
public class Student {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "student_id")
    private Integer studentId;

    @Column(name = "roll_number", unique = true, nullable = false)
    private String rollNumber;

    @Column(name = "photograph_path")
    private String photographPath;

    @Column(name = "cgpa", nullable = false)
    private double cgpa;

    @Column(name = "total_credits", nullable = false)
    private int totalCredits;

    @Column(name = "graduation_year")
    private Integer graduationYear;

    @Column(name = "domain")
    private Integer domain;

    public Integer getStudentId() {
        return studentId;
    }

    public String getRollNumber() {
        return rollNumber;
    }

    public Integer getGraduationYear() {
        return graduationYear;
    }

    @Column(name = "specialisation")
    private Integer specialisation;


    @JsonIgnore
    @OneToOne(cascade = CascadeType.MERGE)
    @JoinColumn(name = "user_id") // This is the foreign key column in the employee table
    private User user;

    public Integer getUserId() {
        return user.getId();
    }

}
