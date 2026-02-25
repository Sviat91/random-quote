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
  showFavoriteBnt();
  if (favorites.some((el) => el.id === currentQuote.id)) {
    console.log('Work kurva');
  }
  displayQuote(currentQuote);
  setItem(CURRENT_QUOTE_KEY, quote);
}

// function setCurrentQuote({
//   quote,
//   isNew = false,
//   isFromStorage = false,
//   shouldToggleIsFavorite = false,
// }) {
//   showFavoriteBnt();
//   if (isNew || isFromStorage) {
//     currentQuote = { ...quote };
//     currentQuote.isFavorite = !!favoriteQuotes.find((favoriteQuote) => {
//       if (favoriteQuote.id === currentQuote.id) {
//         updateFavoriteButton(currentQuote.isFavorite);
//       } else {
//         updateFavoriteButton(currentQuote.isFavorite);
//       }
//     });
//     displayQuote(currentQuote);
//     setItem(CURRENT_QUOTE_KEY, quote);
//   } else if (shouldToggleIsFavorite) {
//     currentQuote.isFavorite = !currentQuote.isFavorite;
//     updateFavoriteButton(currentQuote.isFavorite);
//     if (currentQuote.isFavorite) {
//       favoriteQuotes.push({ ...currentQuote });
//     } else {
//       const index = favoriteQuotes.findIndex(
//         (favoriteQuote) => favoriteQuote.id === quote.id,
//       );
//       if (index !== -1) {
//         favoriteQuotes.splice(index, 1);
//       }
//     }
//     toggleFavorite(currentQuote, setCurrentQuote, favoritesContainer);
//     setItem(FAVORITE_QUOTE_KEY, favoriteQuotes);
//   }
// }

hideFavoriteBnt();

favoriteBtn.addEventListener('click', () => {
  setCurrentQuote({ quote: currentQuote, shouldToggleIsFavorite: true });
});

generateBtn.addEventListener('click', () =>
  setCurrentQuote(getRandomQuote(), favoriteQuotes),
);

function init() {
  const favoriteQuoteFromStorage = getItem(FAVORITE_QUOTE_KEY);
  if (favoriteQuoteFromStorage) {
    favoriteQuoteFromStorage.forEach((quote) => {
      showFavoriteCard(quote, favoritesContainer, setCurrentQuote);
      favoriteQuotes.push(quote);
    });
  }
  const currentQuoteFromStorage = getItem(CURRENT_QUOTE_KEY);
  if (currentQuoteFromStorage) {
    setCurrentQuote(currentQuoteFromStorage, favoriteQuoteFromStorage);
  }
}

window.addEventListener('load', init);

export { favoriteBtn };
