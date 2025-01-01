import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

const BookDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [book, setBook] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchBookDetails = async () => {
      try {
        const response = await fetch(`http://localhost:5000/api/books/${id}`);
        const data = await response.json();
        setBook(data);
      } catch (error) {
        console.error('Error fetching book details:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchBookDetails();
  }, [id]);

  const renderStars = (rating) => {
    const stars = [];
    for (let i = 1; i <= 5; i++) {
      stars.push(
        <span key={i} className={i <= rating ? 'text-yellow-500' : 'text-gray-300'}>
          &#9733;
        </span>
      );
    }
    return stars;
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  if (!book) {
    return <div>Book not found</div>;
  }

  return (
    <div className="p-6 max-w-full mx-auto">
      <button onClick={() => navigate('/')} className="mb-4 px-4 py-2 bg-blue-500 text-white rounded-lg shadow-md hover:bg-blue-700">
        Back to Home
      </button>
      <div className="flex flex-col md:flex-row">
        <img src={book.thumbnail || 'https://via.placeholder.com/128x192'} alt={book.title} className="w-auto md:w-1/2 h-auto max-w-xs max-h-150 max-w-150 object-cover rounded-lg shadow-lg" />
        <div className="md:ml-6 mt-4 md:mt-0 p-4 bg-white shadow-lg rounded-lg flex-1">
          <h1 className="text-3xl font-bold">{book.title}</h1>
          <p className="text-sm text-gray-600 mt-2">By <span className="font-semibold">{book.authors.join(', ')}</span></p>
          <p className="mt-2 text-justify">{book.description}</p>
          <h2 className="text-xl font-semibold mt-4">Ratings:</h2>
          <div className="mt-2 flex items-center">
            {renderStars(Math.round(book.averageRating))}
            <span className="ml-2 text-sm font-semibold">({book.averageRating})</span>
          </div>
          <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <p className="mt-2 text-sm font-semibold">Price: {book.saleInfo?.retailPrice ? `$${book.saleInfo.retailPrice}` : 'Price not available'}</p>
              <p className="mt-2 text-sm font-semibold">Page Count: {book.pageCount}</p>
              <p className="mt-2 text-sm font-semibold">Published Year: {book.publishedYear}</p>
              <p className="mt-2 text-sm font-semibold">Total Editions: {book.totalEditions}</p>
              <p className="mt-2 text-sm font-semibold">Ratings Count: {book.ratingsCount}</p>
            </div>
            <div>
              <p className="mt-2 text-sm font-semibold">Saleability: {book.saleInfo?.saleability}</p>
              <p className="mt-2 text-sm font-semibold">Currency Code: {book.saleInfo?.currencyCode}</p>
              <p className="mt-2 text-sm font-semibold">Buy Link: {book.saleInfo?.buyLink ? <a href={book.saleInfo.buyLink} target="_blank" rel="noopener noreferrer">Buy Here</a> : 'Not available'}</p>
              <p className="mt-2 text-sm font-semibold">Viewability: {book.accessInfo?.viewability}</p>
              <p className="mt-2 text-sm font-semibold">Embeddable: {book.accessInfo?.embeddable ? 'Yes' : 'No'}</p>
              <p className="mt-2 text-sm font-semibold">Text-to-Speech Permission: {book.accessInfo?.textToSpeechPermission}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookDetails;