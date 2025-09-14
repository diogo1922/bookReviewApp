import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { RestClient } from "./RestClient";

export const Book = () => {
  // Get the ID param from the route path
  let { id }: any = useParams();

  let [book, setBook] = useState<any>(undefined);

  // This effect runs only once, after first render, to get Book data via REST
  useEffect(() => {
    RestClient.getBook(id)
      .then((book) => setBook(book))
      .catch((err) => alert(err));
  }, [id]);

  if (book) {
    return (
      <>
        <BookDetails {...book} />
      </>
    );
  } else {
    return <p>Please wait...</p>;
  }
};

function BookDetails(book: any) {
  return (
    <div>
      <h1>{book.title}</h1>
      <p>
        <label>Author : </label>
        <span>{book.author}</span>
      </p>
      <p>
        <label>Publication Year : </label>
        <span>{book.publicationYear}</span>
      </p>
      <p>
        <img src={RestClient.baseUrl + "/" + book.image} alt={book.title} />
      </p>
    </div>
  );
}

// function BookReview(book: any){
//   return (

//   )
