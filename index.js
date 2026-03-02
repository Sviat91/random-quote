import { displayQuote } from './src/handlers/quotesHandler.js';
import {
  toggleFavorite,
  hideFavoriteBnt,
  showFavoriteCard,
  updateFavoriteButton,
  showFavoriteBnt,
} from './src/handlers/favoritesHandler.js';
import { setItem, getItem } from './src/utils/localStorage.js';
import { getRandomQuote } from './src/handlers/randomQuote.js';

const CURRENT_QUOTE_KEY = 'currentQuote';
const FAVORITE_QUOTE_KEY = 'favoriteQuotes';

const generateBtn = document.getElementById('generate-btn');
const favoriteBtn = document.getElementById('favorite-btn');
const favoritesContainer = document.getElementById('favorites-container');

let currentQuote = null;
const favoriteQuotes = [];

function setCurrentQuote(quote, favorites) {
  currentQuote = { ...quote };
  if (currentQuote && favorites) {
    favorites.some((el) => {
      if (el.id === currentQuote.id) {
        currentQuote.isFavorite = true;
      }
    });
  }
  updateFavoriteButton(currentQuote.isFavorite);
  showFavoriteBnt();
  displayQuote(currentQuote);
  setItem(CURRENT_QUOTE_KEY, currentQuote);
}

function updFavoritesArr(isFavorite, quote) {
  if (isFavorite) {
    favoriteQuotes.push(quote);
  }
  if (!isFavorite) {
    const index = favoriteQuotes.findIndex(
      (favoriteQuote) => favoriteQuote.id === quote.id,
    );
    if (index !== -1) {
      favoriteQuotes.splice(index, 1);
    }
  }
  setItem(FAVORITE_QUOTE_KEY, favoriteQuotes);
}

function setFavorites(quoteOrFavorites, isFromStorage = false) {
  if (isFromStorage) {
    quoteOrFavorites.forEach((el) => {
      showFavoriteCard(el, favoritesContainer);
      updFavoritesArr(true, el);
    });
  } else {
    quoteOrFavorites.isFavorite = !quoteOrFavorites.isFavorite;
    toggleFavorite(quoteOrFavorites, favoritesContainer);
    updFavoritesArr(quoteOrFavorites.isFavorite, quoteOrFavorites);
  }
}

hideFavoriteBnt();

favoriteBtn.addEventListener('click', () => {
  setFavorites(currentQuote);
});

generateBtn.addEventListener('click', () =>
  setCurrentQuote(getRandomQuote(), favoriteQuotes),
);

function init() {
  const currentQuoteFromStorage = getItem(CURRENT_QUOTE_KEY);
  const favoriteQuoteFromStorage = getItem(FAVORITE_QUOTE_KEY);
  if (currentQuoteFromStorage) {
    setCurrentQuote(currentQuoteFromStorage, favoriteQuoteFromStorage);
  }
  if (favoriteQuoteFromStorage) {
    setFavorites(favoriteQuoteFromStorage, true);
  }
}

window.addEventListener('load', init);

export { favoriteBtn, setFavorites };
