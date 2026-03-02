import { favoriteBtn, updFavoritesArr } from '../../index.js';

function toggleFavorite(quote, container) {
  if (quote.isFavorite) {
    showFavoriteCard(quote, container);
    updateFavoriteButton(quote.isFavorite);
  } else {
    hideFavoriteCard(quote.id);
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
  deleteBtn.addEventListener('click', () => {
    quote.isFavorite = false;
    hideFavoriteCard(id);
    updFavoritesArr(false, quote);
  });
}

function hideFavoriteCard(id) {
  const card = document.querySelector(`.favorite-card[data-quote-id="${id}"]`);
  card && card.remove();
  const currentQuoteId = document.querySelector(`[data-current-quote-id]`)
    .dataset.currentQuoteId;
  if (id === +currentQuoteId) {
    updateFavoriteButton(false);
  }
}

export {
  toggleFavorite,
  hideFavoriteBnt,
  showFavoriteCard,
  updateFavoriteButton,
  showFavoriteBnt,
};
