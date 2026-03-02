import { favoriteBtn, setFavorites } from '../../index.js';
import { setItem } from '../utils/localStorage.js';

function toggleFavorite(quote, container) {
  if (quote.isFavorite) {
    showFavoriteCard(quote, container);
    updateFavoriteButton(quote.isFavorite);
    setItem('currentQuote', quote);
  } else {
    hideFavoriteCard(quote);
  }
}

function updateFavoriteButton(isFavorite) {
  favoriteBtn.classList.toggle('fa-solid', isFavorite);
  favoriteBtn.classList.toggle('fa-regular', !isFavorite);
}

function showFavoriteBnt() {
  favoriteBtn.style.display = 'inline-block';
}

function hideFavoriteBnt() {
  favoriteBtn.style.display = 'none';
}

function showFavoriteCard(quote, favoritesContainer) {
  const { id, text, author } = quote;
  const favoriteCard = document.createElement('div');
  favoriteCard.classList.add('favorite-card');
  favoriteCard.dataset.quoteId = id;
  favoriteCard.innerHTML = `
      <p>${text}</p> 
      <p class="favorite-card-author">${author}</p>
      <button class="delete-btn">❌</button>`;
  favoritesContainer.appendChild(favoriteCard);

  const deleteBtn = favoriteCard.querySelector('.delete-btn');
  deleteBtn.addEventListener('click', () => setFavorites(quote));
}

function hideFavoriteCard(quote) {
  const card = document.querySelector(
    `.favorite-card[data-quote-id="${quote.id}"]`,
  );
  card && card.remove();
  const currentQuoteId = document.querySelector(`[data-current-quote-id]`)
    .dataset.currentQuoteId;
  if (quote.id === +currentQuoteId) {
    updateFavoriteButton(false);
    setItem('currentQuote', quote);
  }
}

export {
  toggleFavorite,
  hideFavoriteBnt,
  showFavoriteCard,
  updateFavoriteButton,
  showFavoriteBnt,
};
