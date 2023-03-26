package com.library.emt.model;

import lombok.Data;

import jakarta.persistence.*;

@Data
@Entity
@Table
public class Country {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String name;

    private String continent;

    public Country() {}

    public Country(String name, String continent) {
        this.name = name;
        this.continent = continent;
    }

}
