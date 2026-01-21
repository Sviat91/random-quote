import quotes from './src/quotes.js';
import {
  updateFavoriteButton,
  showFavoriteCard,
  hideFavoriteCard,
} from './src/favoritesHandler.js';

const quoteElement = document.getElementById('quote');
const generateBtn = document.getElementById('generate-btn');
const authorElement = document.getElementById('author');
const toggleFavoriteBtn = document.getElementById('favorite-btn');
const favoritesContainer = document.getElementById('favorites-container');

let currentQuoteIndex;

function generateRandomQuote() {
  currentQuoteIndex = Math.floor(Math.random() * quotes.length);
  const randomQuote = quotes[currentQuoteIndex];
  quoteElement.textContent = randomQuote.quote;
  authorElement.textContent = randomQuote.author;
  updateFavoriteButton(toggleFavoriteBtn, randomQuote.isFavorite);
  toggleFavoriteBtn.style.display = 'inline-block';
}

function toggleFavorite() {
  const currentQuote = quotes[currentQuoteIndex];
  currentQuote.isFavorite = !currentQuote.isFavorite;
  updateFavoriteButton(toggleFavoriteBtn, currentQuote.isFavorite);

  if (currentQuote.isFavorite) {
    showFavoriteCard(
      currentQuote,
      favoritesContainer,
      toggleFavoriteBtn,
      (quoteToDelete) => quoteToDelete === quotes[currentQuoteIndex],
    );
  } else {
    hideFavoriteCard(currentQuote.quote);
  }
}

generateBtn.addEventListener('click', generateRandomQuote);
toggleFavoriteBtn.addEventListener('click', toggleFavorite);

generateRandomQuote();
