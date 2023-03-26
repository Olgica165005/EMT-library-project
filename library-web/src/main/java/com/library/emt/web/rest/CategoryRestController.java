package com.library.emt.web.rest;

import com.library.emt.model.enumerations.Category;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/categories")
public class CategoryRestController {

    @GetMapping
    public Category[] findAll() {
        return Category.values();
    }

}
