import React, { useState } from "react";
import BookList from "./components/BookList";
import "./styles.css";

export default function App() {
  const [query, setQuery] = useState("");
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(false);
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => setDarkMode(!darkMode);

  const searchBooks = async () => {
    if (query.trim() === "") return;
    setLoading(true);
    try {
      const res = await fetch(
        `https://openlibrary.org/search.json?title=${query}`
      );
      const data = await res.json();
      setBooks(data.docs.slice(0, 20));
    } catch (error) {
      console.error("Error fetching books:", error);
      setBooks([]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className={darkMode ? "app dark" : "app"}>
      <header>
        <h1>📚 Book Finder</h1>
        <button onClick={toggleDarkMode} className="toggle-btn">
          {darkMode ? "☀️ Light Mode" : "🌙 Dark Mode"}
        </button>
      </header>

      <div className="search-bar">
        <input
          type="text"
          placeholder="Type book title..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && searchBooks()}
        />
        <button onClick={searchBooks}>Search</button>
      </div>

      {loading ? (
        <div className="loader"></div>
      ) : books.length > 0 ? (
        <BookList books={books} />
      ) : (
        <p className="no-results">
          Type a title and press Enter or click Search 🔍
        </p>
      )}

      <footer>
        Developed by <span>Aarohi Singh Rajpoot</span> 💻 | Book Finder App
      </footer>
    </div>
  );
}
