const quotes = [
  // --- ORIGINAL LIST (Updated with isFavorite) ---
  // Steve Jobs
  {
    quote: 'The only way to do great work is to love what you do',
    author: 'Steve Jobs',
    isFavorite: false,
  },
  {
    quote: 'Innovation distinguishes between a leader and a follower',
    author: 'Steve Jobs',
    isFavorite: false,
  },
  {
    quote: "Your time is limited, so don't waste it living someone else's life",
    author: 'Steve Jobs',
    isFavorite: false,
  },
  // Business & Tech
  {
    quote:
      "Success is a lousy teacher. It seduces smart people into thinking they can't lose",
    author: 'Bill Gates',
    isFavorite: false,
  },
  {
    quote:
      'When something is important enough, you do it even if the odds are not in your favor',
    author: 'Elon Musk',
    isFavorite: false,
  },
  {
    quote:
      'If you double the number of experiments you do per year you are going to double your inventiveness',
    author: 'Jeff Bezos',
    isFavorite: false,
  },
  {
    quote: 'Failure is the condiment that gives success its flavor',
    author: 'Truman Capote',
    isFavorite: false,
  },
  {
    quote:
      'Whatever you can do, or dream you can, begin it. Boldness has genius, power and magic in it',
    author: 'Johann Wolfgang von Goethe',
    isFavorite: false,
  },
  // Wisdom & Philosophy
  {
    quote: 'The only true wisdom is in knowing you know nothing',
    author: 'Socrates',
    isFavorite: false,
  },
  {
    quote:
      'Life is not a problem to be solved, but a reality to be experienced',
    author: 'Søren Kierkegaard',
    isFavorite: false,
  },
  {
    quote: 'He who has a why to live can bear almost any how',
    author: 'Friedrich Nietzsche',
    isFavorite: false,
  },
  {
    quote: 'Waste no more time arguing about what a good man should be. Be one',
    author: 'Marcus Aurelius',
    isFavorite: false,
  },
  {
    quote: 'It does not matter how slowly you go as long as you do not stop',
    author: 'Confucius',
    isFavorite: false,
  },
  // Science
  {
    quote: 'Imagination is more important than knowledge',
    author: 'Albert Einstein',
    isFavorite: false,
  },
  {
    quote:
      'However difficult life may seem, there is always something you can do and succeed at',
    author: 'Stephen Hawking',
    isFavorite: false,
  },
  {
    quote: 'Nothing in life is to be feared, it is only to be understood',
    author: 'Marie Curie',
    isFavorite: false,
  },
  // Historical & Political
  {
    quote:
      'Success is not final, failure is not fatal: it is the courage to continue that counts',
    author: 'Winston Churchill',
    isFavorite: false,
  },
  {
    quote:
      'In the end, we will remember not the words of our enemies, but the silence of our friends',
    author: 'Martin Luther King Jr.',
    isFavorite: false,
  },
  {
    quote: "It always seems impossible until it's done",
    author: 'Nelson Mandela',
    isFavorite: false,
  },
  {
    quote: 'Be the change that you wish to see in the world',
    author: 'Mahatma Gandhi',
    isFavorite: false,
  },
  {
    quote: 'Do one thing every day that scares you',
    author: 'Eleanor Roosevelt',
    isFavorite: false,
  },
  // Arts & Literature
  {
    quote: 'Be yourself; everyone else is already taken',
    author: 'Oscar Wilde',
    isFavorite: false,
  },
  {
    quote:
      "Two things are infinite: the universe and human stupidity; and I'm not sure about the universe",
    author: 'Albert Einstein',
    isFavorite: false,
  },
  {
    quote: 'So many books, so little time',
    author: 'Frank Zappa',
    isFavorite: false,
  },
  {
    quote: 'A room without books is like a body without a soul',
    author: 'Marcus Tullius Cicero',
    isFavorite: false,
  },
  {
    quote: 'You only live once, but if you do it right, once is enough',
    author: 'Mae West',
    isFavorite: false,
  },
  {
    quote: 'The way to get started is to quit talking and begin doing',
    author: 'Walt Disney',
    isFavorite: false,
  },
  {
    quote: "If you tell the truth, you don't have to remember anything",
    author: 'Mark Twain',
    isFavorite: false,
  },
  {
    quote: 'A friend is someone who knows all about you and still loves you',
    author: 'Elbert Hubbard',
    isFavorite: false,
  },
  {
    quote:
      'To live is the rarest thing in the world. Most people exist, that is all',
    author: 'Oscar Wilde',
    isFavorite: false,
  },
  {
    quote: 'Always forgive your enemies; nothing annoys them so much',
    author: 'Oscar Wilde',
    isFavorite: false,
  },
  {
    quote:
      'Live as if you were to die tomorrow. Learn as if you were to live forever',
    author: 'Mahatma Gandhi',
    isFavorite: false,
  },
  {
    quote: 'We accept the love we think we deserve',
    author: 'Stephen Chbosky',
    isFavorite: false,
  },
  {
    quote: 'Without music, life would be a mistake',
    author: 'Friedrich Nietzsche',
    isFavorite: false,
  },
  {
    quote:
      "I am so clever that sometimes I don't understand a single word of what I am saying",
    author: 'Oscar Wilde',
    isFavorite: false,
  },
  {
    quote:
      'To be yourself in a world that is constantly trying to make you something else is the greatest accomplishment',
    author: 'Ralph Waldo Emerson',
    isFavorite: false,
  },
  {
    quote:
      'Insanity is doing the same thing, over and over again, but expecting different results',
    author: 'Narcotics Anonymous',
    isFavorite: false,
  },
  {
    quote:
      'It is better to be hated for what you are than to be loved for what you are not',
    author: 'Andre Gide',
    isFavorite: false,
  },
  {
    quote:
      'The person, be it gentleman or lady, who has not pleasure in a good novel, must be intolerably stupid',
    author: 'Jane Austen',
    isFavorite: false,
  },
  {
    quote:
      'It is our choices, Harry, that show what we truly are, far more than our abilities',
    author: 'J.K. Rowling',
    isFavorite: false,
  },
  {
    quote: 'There is no greater agony than bearing an untold story inside you',
    author: 'Maya Angelou',
    isFavorite: false,
  },
  {
    quote: 'Everything you can imagine is real',
    author: 'Pablo Picasso',
    isFavorite: false,
  },
  {
    quote:
      'You can never get a cup of tea large enough or a book long enough to suit me',
    author: 'C.S. Lewis',
    isFavorite: false,
  },
  {
    quote: "Life isn't about finding yourself. Life is about creating yourself",
    author: 'George Bernard Shaw',
    isFavorite: false,
  },
  {
    quote: 'Do what you can, with what you have, where you are',
    author: 'Theodore Roosevelt',
    isFavorite: false,
  },
  {
    quote:
      'Happiness is not something ready made. It comes from your own actions',
    author: 'Dalai Lama',
    isFavorite: false,
  },
  {
    quote: 'Whatever you are, be a good one',
    author: 'Abraham Lincoln',
    isFavorite: false,
  },
  {
    quote: 'Turn your wounds into wisdom',
    author: 'Oprah Winfrey',
    isFavorite: false,
  },
  {
    quote: 'The best way to predict the future is to invent it',
    author: 'Alan Kay',
    isFavorite: false,
  },
  {
    quote: "Don't count the days, make the days count",
    author: 'Muhammad Ali',
    isFavorite: false,
  },

  // --- NEW ADDITIONS (Totaling 100) ---
  {
    quote: "Don't cry because it's over, smile because it happened",
    author: 'Dr. Seuss',
    isFavorite: false,
  },
  {
    quote:
      "You know you are in love when you can't fall asleep because reality is finally better than your dreams",
    author: 'Dr. Seuss',
    isFavorite: false,
  },
  {
    quote:
      "In three words I can sum up everything I've learned about life: it goes on",
    author: 'Robert Frost',
    isFavorite: false,
  },
  {
    quote:
      'If you want to live a happy life, tie it to a goal, not to people or things',
    author: 'Albert Einstein',
    isFavorite: false,
  },
  {
    quote: 'It is never too late to be what you might have been',
    author: 'George Eliot',
    isFavorite: false,
  },
  {
    quote: 'Pain is inevitable. Suffering is optional',
    author: 'Haruki Murakami',
    isFavorite: false,
  },
  {
    quote: 'We are all in the gutter, but some of us are looking at the stars',
    author: 'Oscar Wilde',
    isFavorite: false,
  },
  {
    quote: "I have not failed. I've just found 10,000 ways that won't work",
    author: 'Thomas A. Edison',
    isFavorite: false,
  },
  {
    quote:
      'The only limit to our realization of tomorrow will be our doubts of today',
    author: 'Franklin D. Roosevelt',
    isFavorite: false,
  },
  {
    quote:
      'The future belongs to those who believe in the beauty of their dreams',
    author: 'Eleanor Roosevelt',
    isFavorite: false,
  },
  {
    quote:
      'Do not go where the path may lead, go instead where there is no path and leave a trail',
    author: 'Ralph Waldo Emerson',
    isFavorite: false,
  },
  {
    quote:
      'Tell me and I forget. Teach me and I remember. Involve me and I learn',
    author: 'Benjamin Franklin',
    isFavorite: false,
  },
  {
    quote:
      'The best and most beautiful things in the world cannot be seen or even touched - they must be felt with the heart',
    author: 'Helen Keller',
    isFavorite: false,
  },
  {
    quote:
      'Darkness cannot drive out darkness: only light can do that. Hate cannot drive out hate: only love can do that',
    author: 'Martin Luther King Jr.',
    isFavorite: false,
  },
  {
    quote: "Life is what happens when you're busy making other plans",
    author: 'John Lennon',
    isFavorite: false,
  },
  {
    quote: 'Get busy living or get busy dying',
    author: 'Stephen King',
    isFavorite: false,
  },
  {
    quote: "You miss 100% of the shots you don't take",
    author: 'Wayne Gretzky',
    isFavorite: false,
  },
  {
    quote: "Whether you think you can or you think you can't, you're right",
    author: 'Henry Ford',
    isFavorite: false,
  },
  {
    quote: 'Strive not to be a success, but rather to be of value',
    author: 'Albert Einstein',
    isFavorite: false,
  },
  {
    quote: 'I attribute my success to this: I never gave or took any excuse',
    author: 'Florence Nightingale',
    isFavorite: false,
  },
  {
    quote: 'Every strike brings me closer to the next home run',
    author: 'Babe Ruth',
    isFavorite: false,
  },
  {
    quote: 'Definiteness of purpose is the starting point of all achievement',
    author: 'W. Clement Stone',
    isFavorite: false,
  },
  {
    quote: 'Life is 10% what happens to me and 90% of how I react to it',
    author: 'Charles Swindoll',
    isFavorite: false,
  },
  {
    quote: 'The mind is everything. What you think you become',
    author: 'Buddha',
    isFavorite: false,
  },
  {
    quote: "Your time is limited, so don't waste it living someone else's life",
    author: 'Steve Jobs',
    isFavorite: false,
  },
  {
    quote: "Winning isn't everything, but wanting to win is",
    author: 'Vince Lombardi',
    isFavorite: false,
  },
  {
    quote:
      'I am not a product of my circumstances. I am a product of my decisions',
    author: 'Stephen Covey',
    isFavorite: false,
  },
  {
    quote:
      'Every child is an artist. The problem is how to remain an artist once he grows up',
    author: 'Pablo Picasso',
    isFavorite: false,
  },
  {
    quote: "You can't use up creativity. The more you use, the more you have",
    author: 'Maya Angelou',
    isFavorite: false,
  },
  {
    quote: 'I would rather die of passion than of boredom',
    author: 'Vincent van Gogh',
    isFavorite: false,
  },
  {
    quote: 'Either you run the day, or the day runs you',
    author: 'Jim Rohn',
    isFavorite: false,
  },
  {
    quote: "If you look at what you have in life, you'll always have more",
    author: 'Oprah Winfrey',
    isFavorite: false,
  },
  {
    quote:
      'Remember that not getting what you want is sometimes a wonderful stroke of luck',
    author: 'Dalai Lama',
    isFavorite: false,
  },
  {
    quote:
      'Build your own dreams, or someone else will hire you to build theirs',
    author: 'Farrah Gray',
    isFavorite: false,
  },
  {
    quote: 'The journey of a thousand miles begins with one step',
    author: 'Lao Tzu',
    isFavorite: false,
  },
  {
    quote: 'What we think, we become',
    author: 'Buddha',
    isFavorite: false,
  },
  {
    quote: 'The unexamined life is not worth living',
    author: 'Socrates',
    isFavorite: false,
  },
  {
    quote: 'Happiness depends upon ourselves',
    author: 'Aristotle',
    isFavorite: false,
  },
  {
    quote: 'Everything has beauty, but not everyone sees it',
    author: 'Confucius',
    isFavorite: false,
  },
  {
    quote: 'It does not matter how slowly you go as long as you do not stop',
    author: 'Confucius',
    isFavorite: false,
  },
  {
    quote: 'Study the past if you would define the future',
    author: 'Confucius',
    isFavorite: false,
  },
  {
    quote: 'The only thing we have to fear is fear itself',
    author: 'Franklin D. Roosevelt',
    isFavorite: false,
  },
  {
    quote:
      'A people without the knowledge of their past history, origin and culture is like a tree without roots',
    author: 'Marcus Garvey',
    isFavorite: false,
  },
  {
    quote:
      'Logic will get you from A to B. Imagination will take you everywhere',
    author: 'Albert Einstein',
    isFavorite: false,
  },
  {
    quote: 'Simplicity is the ultimate sophistication',
    author: 'Leonardo da Vinci',
    isFavorite: false,
  },
  {
    quote: 'Learning never exhausts the mind',
    author: 'Leonardo da Vinci',
    isFavorite: false,
  },
  {
    quote: 'Love is a serious mental disease',
    author: 'Plato',
    isFavorite: false,
  },
  {
    quote: 'Quality is not an act, it is a habit',
    author: 'Aristotle',
    isFavorite: false,
  },
  {
    quote: 'Knowing yourself is the beginning of all wisdom',
    author: 'Aristotle',
    isFavorite: false,
  },
  {
    quote: 'If you are going through hell, keep going',
    author: 'Winston Churchill',
    isFavorite: false,
  },
  {
    quote: 'He who opens a school door, closes a prison',
    author: 'Victor Hugo',
    isFavorite: false,
  },
];

export default quotes;
