DELETE FROM book;
ALTER SEQUENCE book_id_seq RESTART WITH 1;

DELETE FROM author;
ALTER SEQUENCE author_id_seq RESTART WITH 1;

DELETE FROM country;
ALTER SEQUENCE country_id_seq RESTART WITH 1;

INSERT INTO country (continent, name) VALUES
    ('Europe', 'Macedonia'),
    ('Europe', 'UK'),
    ('Europe', 'France'),
    ('Europe', 'Russia'),
    ('North America', 'USA');

INSERT INTO author (name, surname, country_id) VALUES
    ('Venko', 'Andonovski', 1),
    ('Gorjan', 'Petrevski', 1),
    ('Petre', 'M. Andreevski', 1),
    ('J.', 'R. R. Tolkien', 2),
    ('J.', 'K. Rowling', 2),
    ('Victor', 'Hugo', 3),
    ('Albert', 'Camus', 3),
    ('Fyodor', 'Dostoyevsky', 4),
    ('Leo', 'Tolstoy', 4),
    ('George', 'R. R. Martin', 5),
    ('Edgar', 'A. Poe', 5);
