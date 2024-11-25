package com.esdproject.academia.alumni;

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
@Table(name = "Alumni_Education")
public class AlumniEducation {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;

    @Column(nullable = false)
    private String degree;

    @Column(name = "passing_year", nullable = false)
    private int passingYear;

    @Column(name = "joining_year", nullable = false)
    private int joiningYear;

    @Column(name = "college_name")
    private String collegeName;

    @Column(columnDefinition = "TEXT")
    private String address;

    @JsonIgnore
    @ManyToOne(cascade = CascadeType.MERGE)
    @JoinColumn(name = "alumni_id")
    private Alumni alumni;
}

