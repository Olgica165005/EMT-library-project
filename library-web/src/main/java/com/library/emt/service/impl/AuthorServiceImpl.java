package com.library.emt.service.impl;

import com.library.emt.model.Author;
import com.library.emt.model.Country;
import com.library.emt.model.dto.AuthorDto;
import com.library.emt.model.exceptions.CountryNotFoundException;
import com.library.emt.repository.AuthorRepository;
import com.library.emt.repository.CountryRepository;
import com.library.emt.service.AuthorService;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.Optional;

@Service
public class AuthorServiceImpl implements AuthorService {

    private final AuthorRepository authorRepository;

    private final CountryRepository countryRepository;

    public AuthorServiceImpl(AuthorRepository authorRepository, CountryRepository countryRepository) {
        this.authorRepository = authorRepository;
        this.countryRepository = countryRepository;
    }

    @Override
    public Optional<Author> findById(Long id) {
        return this.authorRepository.findById(id);
    }

    @Override
    public List<Author> findAll() {
        return this.authorRepository.findAll();
    }

    @Override
    public Optional<Author> save(String name, String surname, Long countryId) {
        Country country = this.countryRepository.findById(countryId)
                .orElseThrow(() -> new CountryNotFoundException(countryId));

        Author author = new Author(name, surname, country);

        return Optional.of(author);
    }

    @Override
    @Transactional
    public Optional<Author> save(AuthorDto authorDto) {
        Country country = this.countryRepository.findById(authorDto.getCountryId())
                .orElseThrow(() -> new CountryNotFoundException((authorDto.getCountryId())));

        this.authorRepository.deleteByNameAndSurname(authorDto.getName(), authorDto.getSurname());
        Author author = new Author(authorDto.getName(), authorDto.getSurname(), country);
        this.authorRepository.save(author);

        return Optional.of(author);

    }

    @Override
    public void deleteById(Long id) {
        this.authorRepository.deleteById(id);
    }
}
