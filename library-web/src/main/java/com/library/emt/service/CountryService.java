package com.library.emt.service;

import com.library.emt.model.Country;

import java.util.List;
import java.util.Optional;

public interface CountryService {

    Optional<Country> findById(Long id);

    List<Country> findAll();

    Optional<Country> save(String name, String address);

    void deleteById(Long id);

}
