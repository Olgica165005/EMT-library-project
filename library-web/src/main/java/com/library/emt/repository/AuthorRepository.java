package com.library.emt.repository;

import com.library.emt.model.Author;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

@Repository
public interface AuthorRepository extends JpaRepository<Author, Long> {

    void deleteByNameAndSurname(
            @Param("name") String name,
            @Param("surname") String surname
            );

}
