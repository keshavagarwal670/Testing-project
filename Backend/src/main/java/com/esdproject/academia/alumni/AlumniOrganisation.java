package com.esdproject.academia.alumni;

import com.esdproject.academia.organisation.Organisation;
import com.fasterxml.jackson.annotation.JsonIgnore;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.Date;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
@Entity
@Table(name = "Alumni_Organisation")
public class AlumniOrganisation {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;

    @Column(name = "position")
    private String position;

    @Column(name = "joining_date")
    private Date joiningDate;

    @Column(name = "leaving_date")
    private Date leavingDate;

    @JsonIgnore
    @ManyToOne(cascade = CascadeType.MERGE)
    @JoinColumn(name = "alumni_id")
    private Alumni alumni;

    @JsonIgnore
    @ManyToOne(cascade = CascadeType.MERGE)
    @JoinColumn(name = "organisation_id")
    private Organisation organisation;
}
