import quotes from './src/data/quotes.js';
import { generateQuoteHandler } from './src/handlers/quotesHandler.js';

let currentQuote = null;

function setCurrentQuote(quote) {
  currentQuote = quote;
}

const generateBtn = document.getElementById('generate-btn');
generateBtn.addEventListener('click', () =>
  generateQuoteHandler(quotes, setCurrentQuote),
);

export { currentQuote };
