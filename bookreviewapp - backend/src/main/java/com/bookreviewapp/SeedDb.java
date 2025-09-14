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
        jdbcTemplate.update(
                "insert into Book (title, author,publication_year,image) values (?,?,?,?)", new Object[]{
                        "The Monk Who Sold His Ferrari", "Robin Sharma", 1999, "monk.jpg"
                });

        jdbcTemplate.update(
                "insert into Book (title, author,publication_year,image) values (?,?,?,?)", new Object[]{
                        "48 Laws of Power", "Robert Greene", 1998, "power.jpg"
                });
        jdbcTemplate.update(
                "insert into Book (title, author,publication_year,image) values (?,?,?,?)", new Object[]{
                        "48 Laws of Power", "Robert Greene", 1998, "power.jpg"
                });
        jdbcTemplate.update(
                "insert into Book (title, author,publication_year,image) values (?,?,?,?)", new Object[]{
                        "48 Laws of Power", "Robert Greene", 1998, "power.jpg"
                });
        jdbcTemplate.update(
                "insert into Book (title, author,publication_year,image) values (?,?,?,?)", new Object[]{
                        "48 Laws of Power", "Robert Greene", 1998, "power.jpg"
                });
        jdbcTemplate.update(
                "insert into Book (title, author,publication_year,image) values (?,?,?,?)", new Object[]{
                        "48 Laws of Power", "Robert Greene", 1998, "power.jpg"
                });

        jdbcTemplate.update("insert into Review (book_id,rating,comment,by) values (?,?,?,?)", new Object[]{
                1,5, "Incredible book", "J. Smith"
        });
    }
}
