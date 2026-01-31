import { currentQuote } from '../../index.js';
const toggleFavoriteBtn = document.getElementById('favorite-btn');
const favoritesContainer = document.getElementById('favorites-container');
toggleFavoriteBtn.addEventListener('click', toggleFavorite);

hideFavoriteBnt();

function handleFavorite(isFavorite) {
  showFavoriteBnt();
  updateFavoriteButton(isFavorite);
}

function toggleFavorite() {
  currentQuote.isFavorite = !currentQuote.isFavorite;
  handleFavorite(currentQuote.isFavorite);

  if (currentQuote.isFavorite) {
    showFavoriteCard(currentQuote, favoritesContainer);
  } else {
    hideFavoriteCard(currentQuote.text);
  }
}

function updateFavoriteButton(isFavorite) {
  toggleFavoriteBtn.classList.toggle('fa-solid', isFavorite);
  toggleFavoriteBtn.classList.toggle('fa-regular', !isFavorite);
}

function showFavoriteBnt() {
  toggleFavoriteBtn.style.display = 'inline-block';
}

function hideFavoriteBnt() {
  toggleFavoriteBtn.style.display = 'none';
}

function showFavoriteCard(quote, favoritesContainer) {
  const favoriteCard = document.createElement('div');
  favoriteCard.classList.add('favorite-card');
  favoriteCard.innerHTML = `
      <p>${quote.text}</p> 
      <p class="author">${quote.author}</p>
      <button class="delete-btn">❌</button>`;

  favoritesContainer.appendChild(favoriteCard);
  const deleteBtn = favoriteCard.querySelector('.delete-btn');
  deleteBtn.addEventListener('click', () => {
    favoriteCard.remove();
    quote.isFavorite = false;
    if (quote === currentQuote) {
      updateFavoriteButton(quote.isFavorite);
    }
  });
}

function hideFavoriteCard(quote) {
  const favoriteCards = document.querySelectorAll('.favorite-card');
  favoriteCards.forEach((card) => {
    if (card.textContent.includes(quote)) {
      card.remove();
    }
  });
}

export {
  handleFavorite,
  updateFavoriteButton,
  showFavoriteCard,
  hideFavoriteCard,
  showFavoriteBnt,
  hideFavoriteBnt,
};
