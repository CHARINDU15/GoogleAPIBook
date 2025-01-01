import React, { useState, useEffect, useRef } from 'react';
import Hero from '../components/Hero';
import Loader from '../components/Loader';
import BookCard from '../components/BookCard';
import Navbar from '../components/Navbar';

const Home = () => {
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(false);
  const resultsRef = useRef(null);

  const fetchBooks = async (search = '') => {
    setLoading(true);
    try {
      const response = await fetch(
        `http://localhost:5000/api/books?search=${search}`
      );
      const data = await response.json();
      setBooks(data);
    } catch (error) {
      console.error('Error fetching books:', error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchBooks();
  }, []);

  return (
    <div>
      
      <Hero fetchBooks={fetchBooks} resultsRef={resultsRef} />
      {loading ? (
        <Loader />
      ) : (
        <div ref={resultsRef} className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-6">
          {books.map((book) => (
            <BookCard key={book.id} book={book} />
          ))}
        </div>
      )}
    </div>
  );
};

export default Home;