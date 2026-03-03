const quotes = [
  {
    id: 1,
    text: 'The only way to do great work is to love what you do',
    author: 'Steve Jobs',
  },
  {
    id: 2,
    text: 'Innovation distinguishes between a leader and a follower',
    author: 'Steve Jobs',
  },
  {
    id: 3,
    text: "Your time is limited, so don't waste it living someone else's life",
    author: 'Steve Jobs',
  },
  {
    id: 4,
    text: "Success is a lousy teacher. It seduces smart people into thinking they can't lose",
    author: 'Bill Gates',
  },
  {
    id: 5,
    text: 'When something is important enough, you do it even if the odds are not in your favor',
    author: 'Elon Musk',
  },
  {
    id: 6,
    text: 'If you double the number of experiments you do per year you are going to double your inventiveness',
    author: 'Jeff Bezos',
  },
  {
    id: 7,
    text: 'Failure is the condiment that gives success its flavor',
    author: 'Truman Capote',
  },
  {
    id: 8,
    text: 'Whatever you can do, or dream you can, begin it. Boldness has genius, power and magic in it',
    author: 'Johann Wolfgang von Goethe',
  },
  {
    id: 9,
    text: 'The only true wisdom is in knowing you know nothing',
    author: 'Socrates',
  },
  {
    id: 10,
    text: 'Life is not a problem to be solved, but a reality to be experienced',
    author: 'Søren Kierkegaard',
  },
  {
    id: 11,
    text: 'He who has a why to live can bear almost any how',
    author: 'Friedrich Nietzsche',
  },
  {
    id: 12,
    text: 'Waste no more time arguing about what a good man should be. Be one',
    author: 'Marcus Aurelius',
  },
  {
    id: 13,
    text: 'It does not matter how slowly you go as long as you do not stop',
    author: 'Confucius',
  },
  {
    id: 14,
    text: 'Imagination is more important than knowledge',
    author: 'Albert Einstein',
  },
  {
    id: 15,
    text: 'However difficult life may seem, there is always something you can do and succeed at',
    author: 'Stephen Hawking',
  },
  {
    id: 16,
    text: 'Nothing in life is to be feared, it is only to be understood',
    author: 'Marie Curie',
  },
  {
    id: 17,
    text: 'Success is not final, failure is not fatal: it is the courage to continue that counts',
    author: 'Winston Churchill',
  },
  {
    id: 18,
    text: 'In the end, we will remember not the words of our enemies, but the silence of our friends',
    author: 'Martin Luther King Jr.',
  },
  {
    id: 19,
    text: "It always seems impossible until it's done",
    author: 'Nelson Mandela',
  },
  {
    id: 20,
    text: 'Be the change that you wish to see in the world',
    author: 'Mahatma Gandhi',
  },
  {
    id: 21,
    text: 'Do one thing every day that scares you',
    author: 'Eleanor Roosevelt',
  },
  {
    id: 22,
    text: 'Be yourself; everyone else is already taken',
    author: 'Oscar Wilde',
  },
  {
    id: 23,
    text: "Two things are infinite: the universe and human stupidity; and I'm not sure about the universe",
    author: 'Albert Einstein',
  },
  {
    id: 24,
    text: 'So many books, so little time',
    author: 'Frank Zappa',
  },
  {
    id: 25,
    text: 'A room without books is like a body without a soul',
    author: 'Marcus Tullius Cicero',
  },
  {
    id: 26,
    text: 'You only live once, but if you do it right, once is enough',
    author: 'Mae West',
  },
  {
    id: 27,
    text: 'The way to get started is to quit talking and begin doing',
    author: 'Walt Disney',
  },
  {
    id: 28,
    text: "If you tell the truth, you don't have to remember anything",
    author: 'Mark Twain',
  },
  {
    id: 29,
    text: 'A friend is someone who knows all about you and still loves you',
    author: 'Elbert Hubbard',
  },
  {
    id: 30,
    text: 'To live is the rarest thing in the world. Most people exist, that is all',
    author: 'Oscar Wilde',
  },
  {
    id: 31,
    text: 'Always forgive your enemies; nothing annoys them so much',
    author: 'Oscar Wilde',
  },
  {
    id: 32,
    text: 'Live as if you were to die tomorrow. Learn as if you were to live forever',
    author: 'Mahatma Gandhi',
  },
  {
    id: 33,
    text: 'We accept the love we think we deserve',
    author: 'Stephen Chbosky',
  },
  {
    id: 34,
    text: 'Without music, life would be a mistake',
    author: 'Friedrich Nietzsche',
  },
  {
    id: 35,
    text: "I am so clever that sometimes I don't understand a single word of what I am saying",
    author: 'Oscar Wilde',
  },
  {
    id: 36,
    text: 'To be yourself in a world that is constantly trying to make you something else is the greatest accomplishment',
    author: 'Ralph Waldo Emerson',
  },
  {
    id: 37,
    text: 'Insanity is doing the same thing, over and over again, but expecting different results',
    author: 'Narcotics Anonymous',
  },
  {
    id: 38,
    text: 'It is better to be hated for what you are than to be loved for what you are not',
    author: 'Andre Gide',
  },
  {
    id: 39,
    text: 'The person, be it gentleman or lady, who has not pleasure in a good novel, must be intolerably stupid',
    author: 'Jane Austen',
  },
  {
    id: 40,
    text: 'It is our choices, Harry, that show what we truly are, far more than our abilities',
    author: 'J.K. Rowling',
  },
  {
    id: 41,
    text: 'There is no greater agony than bearing an untold story inside you',
    author: 'Maya Angelou',
  },
  {
    id: 42,
    text: 'Everything you can imagine is real',
    author: 'Pablo Picasso',
  },
  {
    id: 43,
    text: 'You can never get a cup of tea large enough or a book long enough to suit me',
    author: 'C.S. Lewis',
  },
  {
    id: 44,
    text: "Life isn't about finding yourself. Life is about creating yourself",
    author: 'George Bernard Shaw',
  },
  {
    id: 45,
    text: 'Do what you can, with what you have, where you are',
    author: 'Theodore Roosevelt',
  },
  {
    id: 46,
    text: 'Happiness is not something ready made. It comes from your own actions',
    author: 'Dalai Lama',
  },
  {
    id: 47,
    text: 'Whatever you are, be a good one',
    author: 'Abraham Lincoln',
  },
  {
    id: 48,
    text: 'Turn your wounds into wisdom',
    author: 'Oprah Winfrey',
  },
  {
    id: 49,
    text: 'The best way to predict the future is to invent it',
    author: 'Alan Kay',
  },
  {
    id: 50,
    text: "Don't count the days, make the days count",
    author: 'Muhammad Ali',
  },
  {
    id: 51,
    text: "Don't cry because it's over, smile because it happened",
    author: 'Dr. Seuss',
  },
  {
    id: 52,
    text: "You know you are in love when you can't fall asleep because reality is finally better than your dreams",
    author: 'Dr. Seuss',
  },
  {
    id: 53,
    text: "In three words I can sum up everything I've learned about life: it goes on",
    author: 'Robert Frost',
  },
  {
    id: 54,
    text: 'If you want to live a happy life, tie it to a goal, not to people or things',
    author: 'Albert Einstein',
  },
  {
    id: 55,
    text: 'It is never too late to be what you might have been',
    author: 'George Eliot',
  },
  {
    id: 56,
    text: 'Pain is inevitable. Suffering is optional',
    author: 'Haruki Murakami',
  },
  {
    id: 57,
    text: 'We are all in the gutter, but some of us are looking at the stars',
    author: 'Oscar Wilde',
  },
  {
    id: 58,
    text: "I have not failed. I've just found 10,000 ways that won't work",
    author: 'Thomas A. Edison',
  },
  {
    id: 59,
    text: 'The only limit to our realization of tomorrow will be our doubts of today',
    author: 'Franklin D. Roosevelt',
  },
  {
    id: 60,
    text: 'The future belongs to those who believe in the beauty of their dreams',
    author: 'Eleanor Roosevelt',
  },
  {
    id: 61,
    text: 'Do not go where the path may lead, go instead where there is no path and leave a trail',
    author: 'Ralph Waldo Emerson',
  },
  {
    id: 62,
    text: 'Tell me and I forget. Teach me and I remember. Involve me and I learn',
    author: 'Benjamin Franklin',
  },
  {
    id: 63,
    text: 'The best and most beautiful things in the world cannot be seen or even touched - they must be felt with the heart',
    author: 'Helen Keller',
  },
  {
    id: 64,
    text: 'Darkness cannot drive out darkness: only light can do that. Hate cannot drive out hate: only love can do that',
    author: 'Martin Luther King Jr.',
  },
  {
    id: 65,
    text: "Life is what happens when you're busy making other plans",
    author: 'John Lennon',
  },
  {
    id: 66,
    text: 'Get busy living or get busy dying',
    author: 'Stephen King',
  },
  {
    id: 67,
    text: "You miss 100% of the shots you don't take",
    author: 'Wayne Gretzky',
  },
  {
    id: 68,
    text: "Whether you think you can or you think you can't, you're right",
    author: 'Henry Ford',
  },
  {
    id: 69,
    text: 'Strive not to be a success, but rather to be of value',
    author: 'Albert Einstein',
  },
  {
    id: 70,
    text: 'I attribute my success to this: I never gave or took any excuse',
    author: 'Florence Nightingale',
  },
  {
    id: 71,
    text: 'Every strike brings me closer to the next home run',
    author: 'Babe Ruth',
  },
  {
    id: 72,
    text: 'Definiteness of purpose is the starting point of all achievement',
    author: 'W. Clement Stone',
  },
  {
    id: 73,
    text: 'Life is 10% what happens to me and 90% of how I react to it',
    author: 'Charles Swindoll',
  },
  {
    id: 74,
    text: 'The mind is everything. What you think you become',
    author: 'Buddha',
  },
  {
    id: 75,
    text: "Your time is limited, so don't waste it living someone else's life",
    author: 'Steve Jobs',
  },
  {
    id: 76,
    text: "Winning isn't everything, but wanting to win is",
    author: 'Vince Lombardi',
  },
  {
    id: 77,
    text: 'I am not a product of my circumstances. I am a product of my decisions',
    author: 'Stephen Covey',
  },
  {
    id: 78,
    text: 'Every child is an artist. The problem is how to remain an artist once he grows up',
    author: 'Pablo Picasso',
  },
  {
    id: 79,
    text: "You can't use up creativity. The more you use, the more you have",
    author: 'Maya Angelou',
  },
  {
    id: 80,
    text: 'I would rather die of passion than of boredom',
    author: 'Vincent van Gogh',
  },
  {
    id: 81,
    text: 'Either you run the day, or the day runs you',
    author: 'Jim Rohn',
  },
  {
    id: 82,
    text: "If you look at what you have in life, you'll always have more",
    author: 'Oprah Winfrey',
  },
  {
    id: 83,
    text: 'Remember that not getting what you want is sometimes a wonderful stroke of luck',
    author: 'Dalai Lama',
  },
  {
    id: 84,
    text: 'Build your own dreams, or someone else will hire you to build theirs',
    author: 'Farrah Gray',
  },
  {
    id: 85,
    text: 'The journey of a thousand miles begins with one step',
    author: 'Lao Tzu',
  },
  {
    id: 86,
    text: 'What we think, we become',
    author: 'Buddha',
  },
  {
    id: 87,
    text: 'The unexamined life is not worth living',
    author: 'Socrates',
  },
  {
    id: 88,
    text: 'Happiness depends upon ourselves',
    author: 'Aristotle',
  },
  {
    id: 89,
    text: 'Everything has beauty, but not everyone sees it',
    author: 'Confucius',
  },
  {
    id: 90,
    text: 'It does not matter how slowly you go as long as you do not stop',
    author: 'Confucius',
  },
  {
    id: 91,
    text: 'Study the past if you would define the future',
    author: 'Confucius',
  },
  {
    id: 92,
    text: 'The only thing we have to fear is fear itself',
    author: 'Franklin D. Roosevelt',
  },
  {
    id: 93,
    text: 'A people without the knowledge of their past history, origin and culture is like a tree without roots',
    author: 'Marcus Garvey',
  },
  {
    id: 94,
    text: 'Logic will get you from A to B. Imagination will take you everywhere',
    author: 'Albert Einstein',
  },
  {
    id: 95,
    text: 'Simplicity is the ultimate sophistication',
    author: 'Leonardo da Vinci',
  },
  {
    id: 96,
    text: 'Learning never exhausts the mind',
    author: 'Leonardo da Vinci',
  },
  {
    id: 97,
    text: 'Love is a serious mental disease',
    author: 'Plato',
  },
  {
    id: 98,
    text: 'Quality is not an act, it is a habit',
    author: 'Aristotle',
  },
  {
    id: 99,
    text: 'Knowing yourself is the beginning of all wisdom',
    author: 'Aristotle',
  },
  {
    id: 100,
    text: 'If you are going through hell, keep going',
    author: 'Winston Churchill',
  },
  {
    id: 101,
    text: 'He who opens a school door, closes a prison',
    author: 'Victor Hugo',
  },
];

export default quotes;
