const express = require('express');
const axios = require('axios');
const router = express.Router();
require('dotenv').config(); 


// Google Books API key
const GOOGLE_BOOKS_API_KEY = process.env.GOOGLE_BOOKS_API_KEY;


// GET books
router.get('/', async (req, res) => {
  const { search } = req.query;

  try {
    const response = await axios.get(
      `https://www.googleapis.com/books/v1/volumes?q=${search || 'fiction'}&key=${GOOGLE_BOOKS_API_KEY}`
    );

    const books = response.data.items.map((book) => ({
      id: book.id,
      title: book.volumeInfo.title,
      authors: book.volumeInfo.authors || ['Unknown Author'],
      thumbnail: book.volumeInfo.imageLinks?.thumbnail,
      description: book.volumeInfo.description || 'No description available.',
      pageCount: book.volumeInfo.pageCount || 'Not available',
      ratingsCount: book.volumeInfo.ratingsCount || 0,
      averageRating: book.volumeInfo.averageRating || 'No rating available',
      publishedYear: book.volumeInfo.publishedDate ? new Date(book.volumeInfo.publishedDate).getFullYear() : 'Not available',
      totalEditions: book.volumeInfo.editionCount || 'Not available',
      saleInfo: book.saleInfo ? {
        saleability: book.saleInfo.saleability,
        retailPrice: book.saleInfo.retailPrice?.amount || 'Not available',
        currencyCode: book.saleInfo.retailPrice?.currencyCode || 'N/A',
        buyLink: book.saleInfo.buyLink || 'Not available',
      } : null,
      accessInfo: book.accessInfo ? {
        viewability: book.accessInfo.viewability,
        embeddable: book.accessInfo.embeddable,
        textToSpeechPermission: book.accessInfo.textToSpeechPermission,
      } : null
    }));
    res.json(books);
    console.log("Response from Google Books API", response);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch books from Google Books API' });
  }
});



// GET book by ID
router.get('/:id', async (req, res) => {
  const { id } = req.params;

  try {
    const response = await axios.get(
      `https://www.googleapis.com/books/v1/volumes/${id}?key=${GOOGLE_BOOKS_API_KEY}`
    );

    const book = {
      id: response.data.id,
      title: response.data.volumeInfo.title,
      authors: response.data.volumeInfo.authors || ['Unknown Author'],
      thumbnail: response.data.volumeInfo.imageLinks?.thumbnail,
      description: response.data.volumeInfo.description || 'No description available.',
      pageCount: response.data.volumeInfo.pageCount || 'Not available',
      ratingsCount: response.data.volumeInfo.ratingsCount || 0,
      averageRating: response.data.volumeInfo.averageRating || 'No rating available',
      publishedYear: response.data.volumeInfo.publishedDate ? new Date(response.data.volumeInfo.publishedDate).getFullYear() : 'Not available',
      totalEditions: response.data.volumeInfo.editionCount || 'Not available',
      saleInfo: response.data.saleInfo ? {
        saleability: response.data.saleInfo.saleability,
        retailPrice: response.data.saleInfo.retailPrice?.amount || 'Not available',
        currencyCode: response.data.saleInfo.retailPrice?.currencyCode || 'N/A',
        buyLink: response.data.saleInfo.buyLink || 'Not available',
      } : null,
      accessInfo: response.data.accessInfo ? {
        viewability: response.data.accessInfo.viewability,
        embeddable: response.data.accessInfo.embeddable,
        textToSpeechPermission: response.data.accessInfo.textToSpeechPermission,
      } : null
    };
    res.json(book);
    console.log("Response from Google Books API", response);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch book from Google Books API' });
  }
});

module.exports = router;
