import { handleFavorite } from './favoritesHandler.js';
import { generateRandomInt } from '../utils/math.js';

function generateQuoteHandler(quotes, favoriteQuotes, setCurrentQuote) {
  const randomQuote = choseRandomQuote(quotes);
  if (favoriteQuotes.find((quote) => quote.id === randomQuote.id)) {
    randomQuote.isFavorite = true;
  }
  setCurrentQuote(randomQuote);
  displayQuote(randomQuote);
}

function displayQuote(quote) {
  const { id, text, author, isFavorite } = quote;
  const quoteElement = document.getElementById('quote');
  const quoteTextElement = document.getElementById('quote-text');
  const authorElement = document.getElementById('author');
  quoteElement.dataset.currentQuoteId = id;
  quoteTextElement.textContent = `"${text}"`;
  authorElement.textContent = author;
  handleFavorite(isFavorite);
}

function choseRandomQuote(quotes) {
  const randomIndex = generateRandomInt(quotes.length);
  return quotes[randomIndex];
}

function findQuoteById(quotes, id) {
  return quotes.find((quote) => quote.id === id);
}

export { generateQuoteHandler, displayQuote, findQuoteById };
