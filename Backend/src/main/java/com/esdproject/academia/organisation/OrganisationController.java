package com.esdproject.academia.organisation;

import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/api/v1/organisations")
@RequiredArgsConstructor
@PreAuthorize("hasRole('STUDENT')")
public class OrganisationController {

    @Autowired
    private final OrganisationService organisationService;

    @GetMapping
    public List<Organisation> getAllOrganisations() {
        List<Organisation> organisations = organisationService.getAllOrganisations();
        return organisations;
    }
}
