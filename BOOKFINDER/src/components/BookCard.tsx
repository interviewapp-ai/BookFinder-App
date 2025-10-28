import React from "react";

interface BookCardProps {
  book: any;
}

const BookCard: React.FC<BookCardProps> = ({ book }) => {
  const coverUrl = book.cover_i
    ? `https://covers.openlibrary.org/b/id/${book.cover_i}-M.jpg`
    : "https://via.placeholder.com/150";

  return (
    <div className="book-card">
      <img src={coverUrl} alt={book.title} />
      <h3>{book.title}</h3>
      <p>{book.author_name ? book.author_name.join(", ") : "Unknown"}</p>
    </div>
  );
};

export default BookCard;
