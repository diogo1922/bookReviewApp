package com.bookreviewapp;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.Optional;

@RestController
@RequestMapping("/books")
@CrossOrigin
public class BookController {

    @Autowired
    private BookRepository bookRepository;

//    Get all books
    @GetMapping(produces ={"application/json"})
    public ResponseEntity<Iterable<Book>> getAllBooks(){
        return ResponseEntity.ok().body(bookRepository.findAll());
    }
//    Get book by ID
    @GetMapping(value ="/{id}")
    public ResponseEntity<Book> getByID(@PathVariable long id){
        Optional<Book> b = bookRepository.findById(id); // Optional is a container object - meaning that it can contain something in it or not
        if (b.isEmpty()){
            return ResponseEntity.notFound().build();
        } else {
            return ResponseEntity.ok().body(b.get());
        }
    }

//    add review
    @PutMapping(value = "/addReviewForBook/{bookId}")
    public ResponseEntity<Void> addReviewFor(@PathVariable long bookId, @RequestBody Review review){
        Optional<Book> b = bookRepository.findById(bookId);
        if(b.isPresent()){
            Book book = b.get();
            book.getReviews().add(review);
            bookRepository.save(book);
            return ResponseEntity.ok().build();
        } else{
            return ResponseEntity.notFound().build();
        }
    }
}
