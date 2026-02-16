import quotes from './src/data/quotes.js';
import {
  generateQuoteHandler,
  displayQuote,
  findQuoteById,
} from './src/handlers/quotesHandler.js';
import {
  toggleFavorite,
  hideFavoriteBnt,
  showFavoriteCard,
} from './src/handlers/favoritesHandler.js';
import { setItem, getItem } from './src/utils/localStorage.js';

const CURRENT_QUOTE_KEY = 'currentQuote';
const FAVORITE_QUOTE_KEY = 'favoriteQuotes';

let currentQuote = null;
const favoriteQuotes = [];

function setCurrentQuote(quote, shouldToggleIsFavorite = false) {
  if (shouldToggleIsFavorite) {
    quote.isFavorite = !quote.isFavorite;
    if (quote.isFavorite) {
      favoriteQuotes.push({ ...quote });
    } else {
      const index = favoriteQuotes.findIndex(
        (favoriteQuote) => favoriteQuote.id === quote.id,
      );
      if (index !== -1) {
        favoriteQuotes.splice(index, 1);
      }
    }
    setItem(FAVORITE_QUOTE_KEY, favoriteQuotes);
  }
  currentQuote = quote;
  setItem(CURRENT_QUOTE_KEY, quote);
}

const favoriteBtn = document.getElementById('favorite-btn');
const favoritesContainer = document.getElementById('favorites-container');

hideFavoriteBnt();

favoriteBtn.addEventListener('click', () =>
  toggleFavorite(currentQuote, setCurrentQuote, favoritesContainer),
);

const generateBtn = document.getElementById('generate-btn');
generateBtn.addEventListener('click', () =>
  generateQuoteHandler(quotes, setCurrentQuote),
);

function init() {
  const currentQuoteFromStorage = getItem(CURRENT_QUOTE_KEY);
  if (currentQuoteFromStorage) {
    displayQuote(currentQuoteFromStorage);
    const quote = findQuoteById(quotes, currentQuoteFromStorage.id);
    quote.isFavorite = currentQuoteFromStorage.isFavorite;
    currentQuote = quote;
  }
  const favoriteQutosFromStorage = getItem(FAVORITE_QUOTE_KEY);
  favoriteQutosFromStorage.forEach((quote) =>
    showFavoriteCard(quote, favoritesContainer),
  );
}

window.addEventListener('load', init);

export { favoriteBtn };
