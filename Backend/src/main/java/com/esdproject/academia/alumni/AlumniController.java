package com.esdproject.academia.alumni;

import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;

@RestController
@RequestMapping("/api/v1/student")
@RequiredArgsConstructor
@PreAuthorize("hasRole('STUDENT')")
public class AlumniController {

    private final AlumniService alumniService;

    @GetMapping("/search")
    public List<SearchAlumniResponse> searchAlumni(
            @RequestParam(value = "graduationYear", required = false) Integer graduationYear,
            @RequestParam(value = "name", required = false) String name
    ) {
        if (graduationYear == null && name == null) {
            return new ArrayList<>();
        }

        List<SearchAlumniResponse> alumniList = alumniService.searchAlumniByGraduationYearAndName(graduationYear, name);

        if (alumniList.isEmpty()) {
            return new ArrayList<>();
        }

        return alumniList;
    }

    @PostMapping("/add")
    public ResponseEntity<String> addAlumni(@RequestBody AddAlumniRequest alumni) {
        // Implement logic to save alumni details to the database
        // You can use alumni, alumni.getEducationList(), alumni.getOrganisationList(), and alumni.getContactInformation()

        alumniService.saveAlumni(alumni);

        return ResponseEntity.ok("Alumni details added successfully.");
    }
}
