import React from "react";
import BookCard from "./BookCard";

interface BookListProps {
  books: any[];
}

const BookList: React.FC<BookListProps> = ({ books }) => {
  if (!books.length) return <p>No books found.</p>;

  return (
    <div className="book-list">
      {books.map((book) => (
        <BookCard key={book.key} book={book} />
      ))}
    </div>
  );
};

export default BookList;
