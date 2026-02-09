import { currentQuote } from '../../index.js';
import { favoriteBtn } from '../../index.js';

function toggleFavorite(quote, btn, container) {
  quote.isFavorite = !quote.isFavorite;
  handleFavorite(quote.isFavorite, btn);

  if (quote.isFavorite) {
    showFavoriteCard(quote, container);
  } else {
    hideFavoriteCard(quote.id);
  }
}

function handleFavorite(isFavorite) {
  showFavoriteBnt(favoriteBtn);
  updateFavoriteButton(isFavorite, favoriteBtn);
}

function updateFavoriteButton(isFavorite, el) {
  el.classList.toggle('fa-solid', isFavorite);
  el.classList.toggle('fa-regular', !isFavorite);
}

function showFavoriteBnt(btn) {
  btn.style.display = 'inline-block';
}

function hideFavoriteBnt(btn) {
  btn.style.display = 'none';
}

function showFavoriteCard(quote, favoritesContainer) {
  const { id, text, author } = quote;
  const favoriteCard = document.createElement('div');
  favoriteCard.classList.add('favorite-card');
  favoriteCard.dataset.quoteId = id;
  favoriteCard.innerHTML = `
      <p>${text}</p> 
      <p class="author">${author}</p>
      <button class="delete-btn">❌</button>`;

  favoritesContainer.appendChild(favoriteCard);
  const deleteBtn = favoriteCard.querySelector('.delete-btn');
  deleteBtn.addEventListener('click', () => {
    favoriteCard.remove();
    quote.isFavorite = false;
    if (id === currentQuote.id) {
      updateFavoriteButton(quote.isFavorite, favoriteBtn);
    }
  });
}

function hideFavoriteCard(id) {
  const card = document.querySelector(`.favorite-card[data-quote-id="${id}"]`);
  card && card.remove();
}

export { handleFavorite, toggleFavorite, hideFavoriteBnt };
