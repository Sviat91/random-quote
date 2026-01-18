function updateFavoriteButton(element, isFavorite) {
  element.textContent = isFavorite
    ? 'Remove from favorites'
    : 'Add to favorites';
}

export default updateFavoriteButton;
