import quotes from './src/quotes.js';
import {
  displayQuote,
  choseRandomQuote,
} from './src/handlers/quotesHandler.js';

const generateBtn = document.getElementById('generate-btn');
generateBtn.addEventListener('click', generateQuoteHandler);

let currentQuote = null;

function generateQuoteHandler() {
  const randomQuote = choseRandomQuote(quotes);
  currentQuote = randomQuote;
  displayQuote(randomQuote);
}

export { currentQuote };
