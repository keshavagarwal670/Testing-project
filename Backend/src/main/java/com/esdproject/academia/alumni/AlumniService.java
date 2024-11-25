package com.esdproject.academia.alumni;

import com.esdproject.academia.organisation.Organisation;
import com.esdproject.academia.organisation.OrganisationRepository;
import com.esdproject.academia.student.Student;
import com.esdproject.academia.student.StudentRepository;
import com.esdproject.academia.user.User;
import com.esdproject.academia.user.UserRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;
import java.util.Objects;
import java.util.Optional;

@Service
@RequiredArgsConstructor
public class AlumniService {

    private final StudentRepository studentRepository;
    private final UserRepository userRepository;
    private final OrganisationRepository organisationRepository;
    private final AlumniRepository alumniRepository;
    private final AlumniOrganisationRepository alumniOrganisationRepository;
    private final AlumniEducationRepository alumniEducationRepository;


    public List<SearchAlumniResponse> searchAlumniByGraduationYearAndName(Integer graduationYear, String name) {
        List<Student> studentsByGraduationYear = new ArrayList<>();
        List<User> usersByName = new ArrayList<>();

        if (graduationYear != null) {
            studentsByGraduationYear = studentRepository.findByGraduationYear(graduationYear);
        }

        if (name != null && !name.isEmpty()) {
            usersByName = userRepository.findByFirstnameContainingOrLastnameContaining(name, name);
        }

        // Perform logic to combine Student and User data to find alumni
        // Here, you might combine data from Student and User to find matching alumni
        // This logic will vary based on how Alumni are identified or linked in your system

        List<SearchAlumniResponse> matchedAlumni = new ArrayList<>();
        // Example logic:
        for (Student student : studentsByGraduationYear) {
            for (User user : usersByName) {
                // Assuming Alumni is identified by having a User and a Student record
                if (Objects.equals(user.getId(), student.getUserId())) {
                    // Create Alumni object or perform further actions as needed
                    SearchAlumniResponse alumni = new SearchAlumniResponse(
                            user.getFirstname()+ " " + user.getLastname(),
                            student.getStudentId(),
                            student.getRollNumber(),
                            student.getGraduationYear()
                    );
                    matchedAlumni.add(alumni);
                }
            }
        }

        return matchedAlumni;
    }

    public void saveAlumni(AddAlumniRequest data) {
        Optional<Student> student = studentRepository.findById(data.getStudentId());

        if(student.isEmpty()) {
            throw new RuntimeException("Student Not found");
        }
        Alumni alumni = Alumni.builder()
                .email(data.getEmail())
                .contactNumber(data.getContactNumber())
                .student(student.get())
                .build();

        AlumniEducation alumniEducation = AlumniEducation.builder()
                .address(data.getAddress())
                .alumni(alumni)
                .degree(data.getDegree())
                .collegeName(data.getCollegeName())
                .passingYear(data.getPassingYear())
                .joiningYear(data.getJoiningYear())
                .build();

        Optional<Organisation> organisation = organisationRepository.findById(data.getOrganisationId());

        if(organisation.isEmpty()) {
            throw new RuntimeException("Organisation not found");
        }
        AlumniOrganisation alumniOrganisation = AlumniOrganisation.builder()
                .organisation(organisation.get())
                .alumni(alumni)
                .position(data.getPosition())
                .joiningDate(data.getJoiningDate())
                .leavingDate(data.getLeavingDate())
                .build();

        alumniRepository.save(alumni);
        alumniEducationRepository.save(alumniEducation);
        alumniOrganisationRepository.save(alumniOrganisation);
    }
}
