package com.esdproject.academia;

import com.esdproject.academia.alumni.*;
import com.esdproject.academia.auth.AuthenticationService;
import com.esdproject.academia.auth.RegisterRequest;
import com.esdproject.academia.organisation.Organisation;
import com.esdproject.academia.organisation.OrganisationRepository;
import com.esdproject.academia.student.Student;
import com.esdproject.academia.student.StudentRepository;
import com.esdproject.academia.user.Role;
import com.esdproject.academia.user.User;
import com.esdproject.academia.user.UserRepository;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;
import org.springframework.data.jpa.repository.config.EnableJpaAuditing;

@SpringBootApplication
@EnableJpaAuditing(auditorAwareRef = "auditorAware")
public class AcademiaApplication {

	public static void main(String[] args) {
		SpringApplication.run(AcademiaApplication.class, args);
	}

	@Bean
	public CommandLineRunner commandLineRunner(
			UserRepository userRepository,
			StudentRepository studentRepository,
			AlumniRepository alumniRepository,
			AlumniEducationRepository alumniEducationRepository,
			AlumniOrganisationRepository alumniOrganisationRepository,
			OrganisationRepository organisationRepository,
			AuthenticationService authService
	) {

		return args -> {

			try {

				// Create users
				var user1 = RegisterRequest.builder()
						.firstname("Keshav")
						.lastname("Agarwal")
						.email("keshav@gmail.com")
						.password("1234")
						.role(Role.STUDENT).build();

				var user2 = RegisterRequest.builder()
						.firstname("Darshak")
						.lastname("Devani")
						.email("darsha@gmail.com")
						.password("1234")
						.role(Role.STUDENT).build();

				authService.register(user1);
				authService.register(user2);
				User user3 = userRepository.findById(1).orElse(null);
				User user4 = userRepository.findById(2).orElse(null);
				if(user3 != null && user4 != null) {

					Student student = Student.builder()
							.rollNumber("2023001")
							.photographPath("/path/to/photo.jpg")
							.cgpa(3.8)
							.totalCredits(120)
							.graduationYear(2023)
							.domain(1) // Assuming '1' represents a domain ID
							.specialisation(2)
							.user(user3)// Assuming '5' represents a placement ID
							.build();


					Student student2 = Student.builder()
							.rollNumber("2023003")
							.photographPath("/path/to/photo.jpg")
							.cgpa(3.6)
							.totalCredits(120)
							.graduationYear(2022)
							.domain(1) // Assuming '1' represents a domain ID
							.specialisation(2)
							.user(user4)// Assuming '5' represents a placement ID
							.build();

					studentRepository.save(student);
					studentRepository.save(student2);
//					Alumni alumni = Alumni.builder()
//							.email("example@example.com")
//							.contactNumber("1234567890")
//							.student(student) // Assuming this student exists in the Students table
//							.build();
//
//					alumniRepository.save(alumni);
//
//// Creating an AlumniEducation entry using the builder pattern
//					AlumniEducation alumniEducation = AlumniEducation.builder().alumni(alumni) // Assuming 'alumni.getId()' retrieves the ID of the created Alumni entry
//							.degree("Computer Science")
//							.passingYear(2020)
//							.joiningYear(2016)
//							.collegeName("ABC University")
//							.address("123 University Street, City, Country")
//							.build();
//
//					alumniEducationRepository.save(alumniEducation);

					Organisation organisation1 = Organisation.builder()
							.name("Microsoft")
							.address("Bangalore")
							.build();

					Organisation organisation3 = Organisation.builder()
							.name("Google")
							.address("Hyderabad")
							.build();

					Organisation organisation2 = Organisation.builder()
							.name("Wide Reach")
							.address("Ahmedabad")
							.build();

					organisationRepository.save(organisation1);
					organisationRepository.save(organisation2);
					organisationRepository.save(organisation3);

					// Creating an AlumniOrganisation entry using the builder pattern
//					AlumniOrganisation alumniOrganisation = AlumniOrganisation.builder().organisation(organisation) // Assuming '1' represents an organization ID
//							.alumni(alumni) // Assuming 'alumni.getId()' retrieves the ID of the created Alumni entry
//							.position("Software Engineer")
//							.joiningDate(new Date()) // Replace 'new Date()' with the actual joining date
//							.leavingDate(new Date()) // Replace 'new Date()' with the actual leaving date
//							.build();
//
//					alumniOrganisationRepository.save(alumniOrganisation);
				}

				// Save employees
				// (Remember to save employeeSalary entries if needed)


			}
			catch (Exception ex) {
				ex.printStackTrace();
			}


		};
	}
}
