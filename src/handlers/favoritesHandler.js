import { favoriteBtn } from '../../index.js';

function toggleFavorite(quote, setCurrentQuote, container) {
  const shouldToggleFavorite = true;
  setCurrentQuote(quote, shouldToggleFavorite);
  handleFavorite(quote.isFavorite);

  if (quote.isFavorite) {
    showFavoriteCard(quote, container, setCurrentQuote);
  } else {
    hideFavoriteCard(quote.id);
    handleFavorite(quote.isFavorite);
  }
}

function handleFavorite(isFavorite) {
  showFavoriteBnt();
  updateFavoriteButton(isFavorite);
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

function showFavoriteCard(quote, favoritesContainer, setCurrentQuote) {
  const shouldToggleFavorite = true;
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
    setCurrentQuote(quote, shouldToggleFavorite);
    hideFavoriteCard(id);
  });
}

function hideFavoriteCard(id) {
  const card = document.querySelector(`.favorite-card[data-quote-id="${id}"]`);
  card && card.remove();
  const currentQuoteId = document.querySelector(`[data-current-quote-id]`)
    .dataset.currentQuoteId;
  if (id === +currentQuoteId) {
    updateFavoriteButton(quote.isFavorite);
  }
}

export { handleFavorite, toggleFavorite, hideFavoriteBnt, showFavoriteCard };
