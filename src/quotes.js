const quotes = [
  // --- ORIGINAL LIST (Updated with isFavorite) ---
  // Steve Jobs
  {
    text: 'The only way to do great work is to love what you do',
    author: 'Steve Jobs',
    isFavorite: false,
  },
  {
    text: 'Innovation distinguishes between a leader and a follower',
    author: 'Steve Jobs',
    isFavorite: false,
  },
  {
    text: "Your time is limited, so don't waste it living someone else's life",
    author: 'Steve Jobs',
    isFavorite: false,
  },
  // Business & Tech
  {
    text: "Success is a lousy teacher. It seduces smart people into thinking they can't lose",
    author: 'Bill Gates',
    isFavorite: false,
  },
  {
    text: 'When something is important enough, you do it even if the odds are not in your favor',
    author: 'Elon Musk',
    isFavorite: false,
  },
  {
    text: 'If you double the number of experiments you do per year you are going to double your inventiveness',
    author: 'Jeff Bezos',
    isFavorite: false,
  },
  {
    text: 'Failure is the condiment that gives success its flavor',
    author: 'Truman Capote',
    isFavorite: false,
  },
  {
    text: 'Whatever you can do, or dream you can, begin it. Boldness has genius, power and magic in it',
    author: 'Johann Wolfgang von Goethe',
    isFavorite: false,
  },
  // Wisdom & Philosophy
  {
    text: 'The only true wisdom is in knowing you know nothing',
    author: 'Socrates',
    isFavorite: false,
  },
  {
    text: 'Life is not a problem to be solved, but a reality to be experienced',
    author: 'Søren Kierkegaard',
    isFavorite: false,
  },
  {
    text: 'He who has a why to live can bear almost any how',
    author: 'Friedrich Nietzsche',
    isFavorite: false,
  },
  {
    text: 'Waste no more time arguing about what a good man should be. Be one',
    author: 'Marcus Aurelius',
    isFavorite: false,
  },
  {
    text: 'It does not matter how slowly you go as long as you do not stop',
    author: 'Confucius',
    isFavorite: false,
  },
  // Science
  {
    text: 'Imagination is more important than knowledge',
    author: 'Albert Einstein',
    isFavorite: false,
  },
  {
    text: 'However difficult life may seem, there is always something you can do and succeed at',
    author: 'Stephen Hawking',
    isFavorite: false,
  },
  {
    text: 'Nothing in life is to be feared, it is only to be understood',
    author: 'Marie Curie',
    isFavorite: false,
  },
  // Historical & Political
  {
    text: 'Success is not final, failure is not fatal: it is the courage to continue that counts',
    author: 'Winston Churchill',
    isFavorite: false,
  },
  {
    text: 'In the end, we will remember not the words of our enemies, but the silence of our friends',
    author: 'Martin Luther King Jr.',
    isFavorite: false,
  },
  {
    text: "It always seems impossible until it's done",
    author: 'Nelson Mandela',
    isFavorite: false,
  },
  {
    text: 'Be the change that you wish to see in the world',
    author: 'Mahatma Gandhi',
    isFavorite: false,
  },
  {
    text: 'Do one thing every day that scares you',
    author: 'Eleanor Roosevelt',
    isFavorite: false,
  },
  // Arts & Literature
  {
    text: 'Be yourself; everyone else is already taken',
    author: 'Oscar Wilde',
    isFavorite: false,
  },
  {
    text: "Two things are infinite: the universe and human stupidity; and I'm not sure about the universe",
    author: 'Albert Einstein',
    isFavorite: false,
  },
  {
    text: 'So many books, so little time',
    author: 'Frank Zappa',
    isFavorite: false,
  },
  {
    text: 'A room without books is like a body without a soul',
    author: 'Marcus Tullius Cicero',
    isFavorite: false,
  },
  {
    text: 'You only live once, but if you do it right, once is enough',
    author: 'Mae West',
    isFavorite: false,
  },
  {
    text: 'The way to get started is to quit talking and begin doing',
    author: 'Walt Disney',
    isFavorite: false,
  },
  {
    text: "If you tell the truth, you don't have to remember anything",
    author: 'Mark Twain',
    isFavorite: false,
  },
  {
    text: 'A friend is someone who knows all about you and still loves you',
    author: 'Elbert Hubbard',
    isFavorite: false,
  },
  {
    text: 'To live is the rarest thing in the world. Most people exist, that is all',
    author: 'Oscar Wilde',
    isFavorite: false,
  },
  {
    text: 'Always forgive your enemies; nothing annoys them so much',
    author: 'Oscar Wilde',
    isFavorite: false,
  },
  {
    text: 'Live as if you were to die tomorrow. Learn as if you were to live forever',
    author: 'Mahatma Gandhi',
    isFavorite: false,
  },
  {
    text: 'We accept the love we think we deserve',
    author: 'Stephen Chbosky',
    isFavorite: false,
  },
  {
    text: 'Without music, life would be a mistake',
    author: 'Friedrich Nietzsche',
    isFavorite: false,
  },
  {
    text: "I am so clever that sometimes I don't understand a single word of what I am saying",
    author: 'Oscar Wilde',
    isFavorite: false,
  },
  {
    text: 'To be yourself in a world that is constantly trying to make you something else is the greatest accomplishment',
    author: 'Ralph Waldo Emerson',
    isFavorite: false,
  },
  {
    text: 'Insanity is doing the same thing, over and over again, but expecting different results',
    author: 'Narcotics Anonymous',
    isFavorite: false,
  },
  {
    text: 'It is better to be hated for what you are than to be loved for what you are not',
    author: 'Andre Gide',
    isFavorite: false,
  },
  {
    text: 'The person, be it gentleman or lady, who has not pleasure in a good novel, must be intolerably stupid',
    author: 'Jane Austen',
    isFavorite: false,
  },
  {
    text: 'It is our choices, Harry, that show what we truly are, far more than our abilities',
    author: 'J.K. Rowling',
    isFavorite: false,
  },
  {
    text: 'There is no greater agony than bearing an untold story inside you',
    author: 'Maya Angelou',
    isFavorite: false,
  },
  {
    text: 'Everything you can imagine is real',
    author: 'Pablo Picasso',
    isFavorite: false,
  },
  {
    text: 'You can never get a cup of tea large enough or a book long enough to suit me',
    author: 'C.S. Lewis',
    isFavorite: false,
  },
  {
    text: "Life isn't about finding yourself. Life is about creating yourself",
    author: 'George Bernard Shaw',
    isFavorite: false,
  },
  {
    text: 'Do what you can, with what you have, where you are',
    author: 'Theodore Roosevelt',
    isFavorite: false,
  },
  {
    text: 'Happiness is not something ready made. It comes from your own actions',
    author: 'Dalai Lama',
    isFavorite: false,
  },
  {
    text: 'Whatever you are, be a good one',
    author: 'Abraham Lincoln',
    isFavorite: false,
  },
  {
    text: 'Turn your wounds into wisdom',
    author: 'Oprah Winfrey',
    isFavorite: false,
  },
  {
    text: 'The best way to predict the future is to invent it',
    author: 'Alan Kay',
    isFavorite: false,
  },
  {
    text: "Don't count the days, make the days count",
    author: 'Muhammad Ali',
    isFavorite: false,
  },

  // --- NEW ADDITIONS (Totaling 100) ---
  {
    text: "Don't cry because it's over, smile because it happened",
    author: 'Dr. Seuss',
    isFavorite: false,
  },
  {
    text: "You know you are in love when you can't fall asleep because reality is finally better than your dreams",
    author: 'Dr. Seuss',
    isFavorite: false,
  },
  {
    text: "In three words I can sum up everything I've learned about life: it goes on",
    author: 'Robert Frost',
    isFavorite: false,
  },
  {
    text: 'If you want to live a happy life, tie it to a goal, not to people or things',
    author: 'Albert Einstein',
    isFavorite: false,
  },
  {
    text: 'It is never too late to be what you might have been',
    author: 'George Eliot',
    isFavorite: false,
  },
  {
    text: 'Pain is inevitable. Suffering is optional',
    author: 'Haruki Murakami',
    isFavorite: false,
  },
  {
    text: 'We are all in the gutter, but some of us are looking at the stars',
    author: 'Oscar Wilde',
    isFavorite: false,
  },
  {
    text: "I have not failed. I've just found 10,000 ways that won't work",
    author: 'Thomas A. Edison',
    isFavorite: false,
  },
  {
    text: 'The only limit to our realization of tomorrow will be our doubts of today',
    author: 'Franklin D. Roosevelt',
    isFavorite: false,
  },
  {
    text: 'The future belongs to those who believe in the beauty of their dreams',
    author: 'Eleanor Roosevelt',
    isFavorite: false,
  },
  {
    text: 'Do not go where the path may lead, go instead where there is no path and leave a trail',
    author: 'Ralph Waldo Emerson',
    isFavorite: false,
  },
  {
    text: 'Tell me and I forget. Teach me and I remember. Involve me and I learn',
    author: 'Benjamin Franklin',
    isFavorite: false,
  },
  {
    text: 'The best and most beautiful things in the world cannot be seen or even touched - they must be felt with the heart',
    author: 'Helen Keller',
    isFavorite: false,
  },
  {
    text: 'Darkness cannot drive out darkness: only light can do that. Hate cannot drive out hate: only love can do that',
    author: 'Martin Luther King Jr.',
    isFavorite: false,
  },
  {
    text: "Life is what happens when you're busy making other plans",
    author: 'John Lennon',
    isFavorite: false,
  },
  {
    text: 'Get busy living or get busy dying',
    author: 'Stephen King',
    isFavorite: false,
  },
  {
    text: "You miss 100% of the shots you don't take",
    author: 'Wayne Gretzky',
    isFavorite: false,
  },
  {
    text: "Whether you think you can or you think you can't, you're right",
    author: 'Henry Ford',
    isFavorite: false,
  },
  {
    text: 'Strive not to be a success, but rather to be of value',
    author: 'Albert Einstein',
    isFavorite: false,
  },
  {
    text: 'I attribute my success to this: I never gave or took any excuse',
    author: 'Florence Nightingale',
    isFavorite: false,
  },
  {
    text: 'Every strike brings me closer to the next home run',
    author: 'Babe Ruth',
    isFavorite: false,
  },
  {
    text: 'Definiteness of purpose is the starting point of all achievement',
    author: 'W. Clement Stone',
    isFavorite: false,
  },
  {
    text: 'Life is 10% what happens to me and 90% of how I react to it',
    author: 'Charles Swindoll',
    isFavorite: false,
  },
  {
    text: 'The mind is everything. What you think you become',
    author: 'Buddha',
    isFavorite: false,
  },
  {
    text: "Your time is limited, so don't waste it living someone else's life",
    author: 'Steve Jobs',
    isFavorite: false,
  },
  {
    text: "Winning isn't everything, but wanting to win is",
    author: 'Vince Lombardi',
    isFavorite: false,
  },
  {
    text: 'I am not a product of my circumstances. I am a product of my decisions',
    author: 'Stephen Covey',
    isFavorite: false,
  },
  {
    text: 'Every child is an artist. The problem is how to remain an artist once he grows up',
    author: 'Pablo Picasso',
    isFavorite: false,
  },
  {
    text: "You can't use up creativity. The more you use, the more you have",
    author: 'Maya Angelou',
    isFavorite: false,
  },
  {
    text: 'I would rather die of passion than of boredom',
    author: 'Vincent van Gogh',
    isFavorite: false,
  },
  {
    text: 'Either you run the day, or the day runs you',
    author: 'Jim Rohn',
    isFavorite: false,
  },
  {
    text: "If you look at what you have in life, you'll always have more",
    author: 'Oprah Winfrey',
    isFavorite: false,
  },
  {
    text: 'Remember that not getting what you want is sometimes a wonderful stroke of luck',
    author: 'Dalai Lama',
    isFavorite: false,
  },
  {
    text: 'Build your own dreams, or someone else will hire you to build theirs',
    author: 'Farrah Gray',
    isFavorite: false,
  },
  {
    text: 'The journey of a thousand miles begins with one step',
    author: 'Lao Tzu',
    isFavorite: false,
  },
  {
    text: 'What we think, we become',
    author: 'Buddha',
    isFavorite: false,
  },
  {
    text: 'The unexamined life is not worth living',
    author: 'Socrates',
    isFavorite: false,
  },
  {
    text: 'Happiness depends upon ourselves',
    author: 'Aristotle',
    isFavorite: false,
  },
  {
    text: 'Everything has beauty, but not everyone sees it',
    author: 'Confucius',
    isFavorite: false,
  },
  {
    text: 'It does not matter how slowly you go as long as you do not stop',
    author: 'Confucius',
    isFavorite: false,
  },
  {
    text: 'Study the past if you would define the future',
    author: 'Confucius',
    isFavorite: false,
  },
  {
    text: 'The only thing we have to fear is fear itself',
    author: 'Franklin D. Roosevelt',
    isFavorite: false,
  },
  {
    text: 'A people without the knowledge of their past history, origin and culture is like a tree without roots',
    author: 'Marcus Garvey',
    isFavorite: false,
  },
  {
    text: 'Logic will get you from A to B. Imagination will take you everywhere',
    author: 'Albert Einstein',
    isFavorite: false,
  },
  {
    text: 'Simplicity is the ultimate sophistication',
    author: 'Leonardo da Vinci',
    isFavorite: false,
  },
  {
    text: 'Learning never exhausts the mind',
    author: 'Leonardo da Vinci',
    isFavorite: false,
  },
  {
    text: 'Love is a serious mental disease',
    author: 'Plato',
    isFavorite: false,
  },
  {
    text: 'Quality is not an act, it is a habit',
    author: 'Aristotle',
    isFavorite: false,
  },
  {
    text: 'Knowing yourself is the beginning of all wisdom',
    author: 'Aristotle',
    isFavorite: false,
  },
  {
    text: 'If you are going through hell, keep going',
    author: 'Winston Churchill',
    isFavorite: false,
  },
  {
    text: 'He who opens a school door, closes a prison',
    author: 'Victor Hugo',
    isFavorite: false,
  },
];

export default quotes;
