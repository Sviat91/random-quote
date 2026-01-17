import quotes from './quotes.js';

const quoteElement = document.getElementById('quote');
const generateBtn = document.getElementById('generate-btn');
const authorElement = document.getElementById('author');
const toggleFavoriteBtn = document.getElementById('favorite-btn');
const favoritesContainer = document.getElementById('favorites-container');

let currentQuoteIndex;

function updateFavoriteButton() {
  toggleFavoriteBtn.textContent = quotes[currentQuoteIndex].isFavorite
    ? 'Remove from favorites'
    : 'Add to favorites';
}

function generateRandomQuote() {
  currentQuoteIndex = Math.floor(Math.random() * quotes.length);
  const randomQuote = quotes[currentQuoteIndex];
  quoteElement.textContent = randomQuote.quote;
  authorElement.textContent = randomQuote.author;
  updateFavoriteButton();
  toggleFavoriteBtn.style.display = 'inline-block';
}

function toggleFavorite() {
  const currentQuote = quotes[currentQuoteIndex];
  currentQuote.isFavorite = !currentQuote.isFavorite;
  updateFavoriteButton();
  if (currentQuote.isFavorite) {
    const favoriteCard = document.createElement('div');
    favoriteCard.classList.add('favorite-card');
    favoriteCard.innerHTML = `
      <p>${currentQuote.quote}</p> 
      <p class="author">${currentQuote.author}</p>
      <button class="delete-btn">❌</button>`;

    favoritesContainer.appendChild(favoriteCard);
    const deleteBtn = favoriteCard.querySelector('.delete-btn');
    deleteBtn.addEventListener('click', () => {
      favoriteCard.remove();
      currentQuote.isFavorite = false;
      updateFavoriteButton();
    });
  } else {
    const favoriteCards = document.querySelectorAll('.favorite-card');
    favoriteCards.forEach((card) => {
      if (card.textContent.includes(currentQuote.quote)) {
        card.remove();
      }
    });
  }
}

generateBtn.addEventListener('click', generateRandomQuote);
toggleFavoriteBtn.addEventListener('click', toggleFavorite);

generateRandomQuote();
