function updateFavoriteButton(element, isFavorite) {
  element.classList.toggle('fa-solid', isFavorite);
  element.classList.toggle('fa-regular', !isFavorite);
}

export default updateFavoriteButton;
