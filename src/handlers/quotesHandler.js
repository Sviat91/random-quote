function displayQuote(quote) {
  const { id, text, author } = quote;
  const quoteElement = document.getElementById('quote');
  const quoteTextElement = document.getElementById('quote-text');
  const authorElement = document.getElementById('author');
  quoteElement.dataset.currentQuoteId = id;
  quoteTextElement.textContent = `"${text}"`;
  authorElement.textContent = author;
}

export { displayQuote };
