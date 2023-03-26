package com.library.emt.model.exceptions;

import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.ResponseStatus;

@ResponseStatus(code = HttpStatus.BAD_REQUEST)
public class BookDoesNotHaveAvailableCopies extends RuntimeException {
    public BookDoesNotHaveAvailableCopies(Long id)  {
        super(String.format("Book with id: %d does not have available copies", id));
    }
}
