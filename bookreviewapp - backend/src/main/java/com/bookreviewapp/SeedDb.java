package com.bookreviewapp;

import jakarta.annotation.PostConstruct;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.stereotype.Component;

@Component
public class SeedDb {

    @Autowired
    JdbcTemplate jdbcTemplate;

    @PostConstruct
    public void init() {
//Books
        jdbcTemplate.update(
                "insert into Book (title, author,publication_year,image) values (?,?,?,?)", new Object[]{
                        "The Monk Who Sold His Ferrari", "Robin Sharma", 1999, "monk.jpg"
                });

        jdbcTemplate.update(
                "insert into Book (title, author,publication_year,image) values (?,?,?,?)", new Object[]{
                        "White Nights", "Fyodor Dostoyevsky", 1848, "white.jpg"
                });
        jdbcTemplate.update(
                "insert into Book (title, author,publication_year,image) values (?,?,?,?)", new Object[]{
                        "Romeo & Juliet", "William Shakespeare", 1597, "romeo.jpg"
                });
        jdbcTemplate.update(
                "insert into Book (title, author,publication_year,image) values (?,?,?,?)", new Object[]{
                        "The Lusiads", "Luis Vaz de Camões", 1572, "lusiads.jpg"
                });
        jdbcTemplate.update(
                "insert into Book (title, author,publication_year,image) values (?,?,?,?)", new Object[]{
                        "A Tale of Two Cities", "Charles Dickens", 1859, "tale.jpg"
                });
        jdbcTemplate.update(
                "insert into Book (title, author,publication_year,image) values (?,?,?,?)", new Object[]{
                        "Pride and Prejudice", "Jane Austen", 1813, "pride.jpg"
                });
//Reviews
        jdbcTemplate.update("insert into Review (book_id,rating,comment,by) values (?,?,?,?)", new Object[]{
                1,5, "Incredible book", "J. Smith"
        });
        jdbcTemplate.update("insert into Review (book_id,rating,comment,by) values (?,?,?,?)", new Object[]{
                1,5, "What a great work by Robin Sharma", "J. Doe"
        });
        jdbcTemplate.update("insert into Review (book_id,rating,comment,by) values (?,?,?,?)", new Object[]{
                1,4, "This book is so good", "W. Kirk"
        });
    }
}
