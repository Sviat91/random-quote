import { favoriteBtn } from '../../index.js';

function toggleFavorite(quote, container) {
  if (quote.isFavorite) {
    showFavoriteCard(quote, container);
    updateFavoriteButton(true);
  } else {
    hideFavoriteCard(quote.id);
    updateFavoriteButton(false);
  }
}

// function handleFavorite() {
//   showFavoriteBnt();
// //   updateFavoriteButton();
// }

function updateFavoriteButton(isFavorite) {
  // const btn = favoriteBtn;
  // if (btn.classList.contains('fa-solid')) {
  //   btn.classList.remove('fa-solid');
  //   btn.classList.add('fa-regular');
  // } else if (btn.classList.contains('fa-regular')) {
  //   btn.classList.remove('fa-regular');
  //   btn.classList.add('fa-solid');
  // }
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
    quote.isFavorite = !quote.isFavorite;
    hideFavoriteCard(id);
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
