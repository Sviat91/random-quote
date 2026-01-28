import { handleFavorite } from './favoritesHandler.js';
import { generateRandomInt } from './utils.js';

function displayQuote(quote) {
  const { text, author, isFavorite } = quote;
  const quoteElement = document.getElementById('quote');
  const authorElement = document.getElementById('author');
  quoteElement.textContent = text;
  authorElement.textContent = author;
  handleFavorite(isFavorite);
}

function choseRandomQuote(quotes) {
  const randomIndex = generateRandomInt(quotes.length);
  return quotes[randomIndex];
}

export { displayQuote, choseRandomQuote };
