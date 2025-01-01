import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight, faStar } from '@fortawesome/free-solid-svg-icons';

const BookCard = ({ book }) => {
  const renderRating = () => {
    if (!book.ratingsCount) {
      return <span className="text-sm text-gray-600">No ratings available</span>;
    }
    const stars = [];
    for (let i = 0; i < Math.min(book.ratingsCount, 5); i++) {
      stars.push(<FontAwesomeIcon key={i} icon={faStar} className="text-yellow-500" />);
    }
    return <div className="flex items-center">{stars}</div>;
  };

  const shortDescription = book.description.length > 100 ? `${book.description.substring(0, 100)}...` : book.description;

  return (
    <div className="bg-gray rounded-lg shadow-lg p-6 hover:shadow-2xl transition-shadow duration-300 transform hover:-translate-y-1 hover:scale-105 relative group">
      <img src={book.thumbnail || 'https://via.placeholder.com/128x192'} alt={book.title} className="w-full h-48 object-cover rounded-lg" />
      <h3 className="text-xl font-bold mt-4">{book.title}</h3>
      <p className="text-sm text-gray-600 mt-2">By <span className="font-semibold">{book.authors.join(', ')}</span></p>
      <div className="mt-2">{renderRating()}</div>
      <p className="mt-2 text-sm font-semibold">Price: {book.saleInfo?.retailPrice ? `$${book.saleInfo.retailPrice}` : 'Price not available'}</p>
      <p className="mt-2 text-sm font-semibold">Page Count: {book.pageCount}</p>
      <p className="mt-2 text-sm font-semibold">Published Year: {book.publishedYear}</p>
      <p className="mt-2 text-sm font-semibold">Total Editions: {book.totalEditions}</p>
      <div className="flex items-center mt-4">
        <Link to={`/book/${book.id}`} className="text-blue-500 hover:underline cursor-pointer hidden group-hover:inline">View more details</Link>
        <FontAwesomeIcon icon={faArrowRight} className="w-4 h-4 ml-2 text-blue-500" />
      </div>
    </div>
  );
};

export default BookCard;