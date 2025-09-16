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
        <BookReviews {...book} />
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

function BookReviews(book: any) {
  return (
    <>
      {useReviewMarkup(book)}
      {useAddReviewFormMarkup(book)}
    </>
  );
}

function useReviewMarkup(book: any) {
  if (!book.reviews || !book.reviews.length) {
    return <div>No reviews yet</div>;
  } else {
    return (
      <div>
        <h2>Reviews</h2>
        <div className="reviews">
          {book.reviews.map((r: any, i: number) => (
            <p key={i}>
              <span className="rating">{r.rating}</span>
              <span className="comment">{r.comment}</span>
              <span className="by">{r.by}</span>
            </p>
          ))}
        </div>
      </div>
    );
  }
}

function useAddReviewFormMarkup(book: any) {
  //By updating this state, we tell React to re-render the component
  // to show the new review. - Otherwise we would have to refresh the page to see it displayed
  const [value, setValue] = useState(0);

  const handleSubmit = (e: any) => {
    e.preventDefault();
    let review = {
      rating: (document.getElementById("rating") as HTMLInputElement).value,
      comment: (document.getElementById("comment") as HTMLInputElement).value,
      by: (document.getElementById("by") as HTMLInputElement).value,
    };
    RestClient.addReview(book.id, review)
      .then(() => {
        console.log(book.id);
        window.alert(`Thank you for reviewing ${book.title}`);
        e.target.reset();
        book.reviews.push(review);
        setValue((value) => value + 1); //Dummy state change to trigget re-render
      })
      .catch((err) => alert(err));
  };

  return (
    <div>
      <h2>Add Review</h2>
      <form onSubmit={handleSubmit}>
        <p>
          <label htmlFor="rating">Rating</label>
        </p>
        <input type="number" min={1} max={5} id="rating" />

        <p>
          <label htmlFor="comment">Comment</label>
        </p>
        <textarea name="" id="comment" rows={5} cols={20}></textarea>

        <p>
          <label htmlFor="by">By</label>
        </p>
        <p>
          {" "}
          <input type="text" id="by" />
        </p>

        <button>Add review</button>
      </form>
    </div>
  );
}
