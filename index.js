const quotes = [
  // 3 Original (Steve Jobs)
  {
    quote: 'The only way to do great work is to love what you do',
    author: 'Steve Jobs',
  },
  {
    quote: 'Innovation distinguishes between a leader and a follower',
    author: 'Steve Jobs',
  },
  {
    quote: "Your time is limited, so don't waste it living someone else's life",
    author: 'Steve Jobs',
  },
  // 12 New additions
  {
    quote:
      "Success is a lousy teacher. It seduces smart people into thinking they can't lose",
    author: 'Bill Gates',
  },
  {
    quote: 'Imagination is more important than knowledge',
    author: 'Albert Einstein',
  },
  {
    quote:
      'Success is not final, failure is not fatal: it is the courage to continue that counts',
    author: 'Winston Churchill',
  },
  {
    quote: "It always seems impossible until it's done",
    author: 'Nelson Mandela',
  },
  {
    quote: 'It does not matter how slowly you go as long as you do not stop',
    author: 'Confucius',
  },
  {
    quote: 'Be yourself, everyone else is already taken',
    author: 'Oscar Wilde',
  },
  {
    quote: 'The way to get started is to quit talking and begin doing',
    author: 'Walt Disney',
  },
  {
    quote: "If you tell the truth, you don't have to remember anything",
    author: 'Mark Twain',
  },
  {
    quote: 'Do one thing every day that scares you',
    author: 'Eleanor Roosevelt',
  },
  {
    quote: 'The only thing we have to fear is fear itself',
    author: 'Franklin D. Roosevelt',
  },
  {
    quote: 'Knowing yourself is the beginning of all wisdom',
    author: 'Aristotle',
  },
  {
    quote: 'Do what you can, with what you have, where you are',
    author: 'Theodore Roosevelt',
  },
];

const quoteElement = document.getElementById('quote');
const generateBtn = document.getElementById('generate-btn');
const authorElement = document.getElementById('author');

function generateRandomQuote() {
  const randomIndex = Math.floor(Math.random() * quotes.length);
  const randomQuote = quotes[randomIndex];
  quoteElement.textContent = randomQuote.quote;
  authorElement.textContent = randomQuote.author;
}

generateBtn.addEventListener('click', generateRandomQuote);

// generateRandomQuote();
//const qoute = `<em>"${randomQuote.quote}"</em> <br> <span id="author">(${randomQuote.author})</span>`;
