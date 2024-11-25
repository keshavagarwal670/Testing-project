package com.esdproject.academia.organisation;

import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@RequiredArgsConstructor
public class OrganisationService {

    private final OrganisationRepository organisationRepository;


    public List<Organisation> getAllOrganisations() {
        return organisationRepository.findAll();
    }
}
