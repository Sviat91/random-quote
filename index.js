import quotes from './src/data/quotes.js';
import { generateQuoteHandler } from './src/handlers/quotesHandler.js';
import {
  toggleFavorite,
  hideFavoriteBnt,
} from './src/handlers/favoritesHandler.js';

let currentQuote = null;

const favoriteBtn = document.getElementById('favorite-btn');
const favoritesContainer = document.getElementById('favorites-container');

hideFavoriteBnt();

favoriteBtn.addEventListener('click', () =>
  toggleFavorite(currentQuote, favoritesContainer),
);

function setCurrentQuote(quote) {
  currentQuote = quote;
}

const generateBtn = document.getElementById('generate-btn');
generateBtn.addEventListener('click', () =>
  generateQuoteHandler(quotes, setCurrentQuote),
);

export { favoriteBtn };
