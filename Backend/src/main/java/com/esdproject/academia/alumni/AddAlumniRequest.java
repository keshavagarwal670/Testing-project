package com.esdproject.academia.alumni;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.Date;

@Data
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class AddAlumniRequest {

    private String address;
    private String collegeName;
    private String degree;
    private int joiningYear; // Consider changing this to Integer if it represents a year
    private int passingYear; // Consider changing this to Integer if it represents a year
    private Date joiningDate; // Use java.util.Date or java.time.LocalDate
    private Date leavingDate; // Use java.util.Date or java.time.LocalDate
    private String position;
    private Integer organisationId;
    private String contactNumber;
    private String email;
    private Integer studentId;
}
