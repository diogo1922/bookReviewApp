import React, { useEffect, useState } from "react";
import { RestClient } from "./RestClient";
import { Link } from "react-router-dom";

export const Books = () => {
  let [books, setBooks] = useState(Array<any>);

  useEffect(() => {
    RestClient.getBooks().then((books) => setBooks(books));
  }, []);

  return (
    <div>
      <h1>Books</h1>
      {books.map((book: any, i: number) => (
        <Link to={`book/${book.id}`} key={i} className="book-buttons">
          {book.title}
        </Link>
      ))}
    </div>
  );
};
