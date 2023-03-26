package com.library.emt.model;

import lombok.Data;

import jakarta.persistence.*;

@Data
@Entity
@Table
public class Author {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long Id;

    private String name;

    private String surname;

    @ManyToOne
    private Country country;

    public Author() {}

    public Author(String name, String surname, Country country) {
        this.name = name;
        this.surname = surname;
        this.country = country;
    }

}
