function updateFavoriteButton(element, isFavorite) {
  element.classList.toggle('fa-solid', isFavorite);
  element.classList.toggle('fa-regular', !isFavorite);
}

function showFavoriteCard(
  quote,
  favoritesContainer,
  toggleFavoriteBtn,
  checkIfActive,
) {
  const favoriteCard = document.createElement('div');
  favoriteCard.classList.add('favorite-card');
  favoriteCard.innerHTML = `
      <p>${quote.quote}</p> 
      <p class="author">${quote.author}</p>
      <button class="delete-btn">❌</button>`;

  favoritesContainer.appendChild(favoriteCard);
  const deleteBtn = favoriteCard.querySelector('.delete-btn');
  deleteBtn.addEventListener('click', () => {
    favoriteCard.remove();
    quote.isFavorite = false;
    const isCurrent = checkIfActive(quote);
    if (isCurrent) {
      updateFavoriteButton(toggleFavoriteBtn, quote.isFavorite);
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

export { updateFavoriteButton, showFavoriteCard, hideFavoriteCard };
