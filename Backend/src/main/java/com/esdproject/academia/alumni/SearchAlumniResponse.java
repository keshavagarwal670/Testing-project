package com.esdproject.academia.alumni;

import com.fasterxml.jackson.annotation.JsonProperty;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class SearchAlumniResponse {

    @JsonProperty("name")
    private String name;

    @JsonProperty("student_id")
    private Integer studentId;

    @JsonProperty("roll_no")
    private String rollNo;

    @JsonProperty("graduation_year")
    private Integer graduationYear;
}
