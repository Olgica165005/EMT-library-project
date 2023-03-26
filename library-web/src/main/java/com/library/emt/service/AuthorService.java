package com.library.emt.service;

import com.library.emt.model.Author;
import com.library.emt.model.dto.AuthorDto;

import java.util.List;
import java.util.Optional;

public interface AuthorService {

    Optional<Author> findById(Long id);

    List<Author> findAll();

    Optional<Author> save(String name, String surname, Long countryId);

    Optional<Author> save(AuthorDto authorDto);

    void deleteById(Long id);

}
