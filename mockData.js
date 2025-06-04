// Mock data for the Booklet app
// This file contains sample data for users, books, and quotes

// Book covers from public domain or placeholder images
const bookCovers = {
  prideAndPrejudice: "/placeholder-book1.jpg",
  toKillAMockingbird: "/placeholder-book2.jpg",
  nineteenEightyFour: "/placeholder-book3.jpg",
  greatGatsby: "/placeholder-book4.jpg",
  oneHundredYears: "/placeholder-book5.jpg",
  littleWomen: "/placeholder-share1.jpg",
  alchemist: "/placeholder-share2.jpg",
  braveNewWorld: "/placeholder-share3.jpg",
  sapiens: "/placeholder-current1.jpg",
  midnightLibrary: "/placeholder-current2.jpg",
  overstory: "/placeholder-book6.jpg",
  klaraAndSun: "/placeholder-book7.jpg",
  songOfAchilles: "/placeholder-book8.jpg",
  educated: "/placeholder-book9.jpg"
};

// User avatars from public domain or placeholder images
const userAvatars = {
  janeAusten: "/placeholder-avatar.jpg",
  emilyWong: "/placeholder-user1.jpg",
  marcusJohnson: "/placeholder-user2.jpg",
  sophiaKim: "/placeholder-user3.jpg",
  alexRivera: "/placeholder-user4.jpg",
  priyaSharma: "/placeholder-user5.jpg",
  jamesWilson: "/placeholder-user6.jpg",
  oliviaChen: "/placeholder-user7.jpg"
};

// Books data
export const books = [
  {
    id: 1,
    title: "Pride and Prejudice",
    author: "Jane Austen",
    coverImage: bookCovers.prideAndPrejudice,
    genre: "Fiction",
    year: 1813,
    pages: 279,
    description: "Pride and Prejudice follows the turbulent relationship between Elizabeth Bennet, the daughter of a country gentleman, and Fitzwilliam Darcy, a rich aristocratic landowner. They must overcome the titular sins of pride and prejudice in order to fall in love and marry.",
    usersWhoRead: [1, 3, 6],
    usersWhoQuoted: [1, 6],
    quotes: [
      "It is a truth universally acknowledged, that a single man in possession of a good fortune, must be in want of a wife.",
      "I could easily forgive his pride, if he had not mortified mine."
    ]
  },
  {
    id: 2,
    title: "To Kill a Mockingbird",
    author: "Harper Lee",
    coverImage: bookCovers.toKillAMockingbird,
    genre: "Fiction",
    year: 1960,
    pages: 281,
    description: "Set in the American South during the 1930s, the story of To Kill a Mockingbird centers on a young girl named Scout Finch. Through her eyes, the novel explores themes of racial injustice and moral growth as her father, lawyer Atticus Finch, defends a Black man falsely accused of a terrible crime.",
    usersWhoRead: [2, 3, 5, 7],
    usersWhoQuoted: [2, 5],
    quotes: [
      "You never really understand a person until you consider things from his point of view... Until you climb inside of his skin and walk around in it.",
      "The one thing that doesn't abide by majority rule is a person's conscience."
    ]
  },
  {
    id: 3,
    title: "1984",
    author: "George Orwell",
    coverImage: bookCovers.nineteenEightyFour,
    genre: "Science Fiction",
    year: 1949,
    pages: 328,
    description: "1984 is a dystopian novel by George Orwell published in 1949. The novel is set in Airstrip One, a province of the superstate Oceania in a world of perpetual war, omnipresent government surveillance, and public manipulation.",
    usersWhoRead: [1, 4, 6],
    usersWhoQuoted: [4, 6],
    quotes: [
      "Big Brother is watching you.",
      "War is peace. Freedom is slavery. Ignorance is strength."
    ]
  },
  {
    id: 4,
    title: "The Great Gatsby",
    author: "F. Scott Fitzgerald",
    coverImage: bookCovers.greatGatsby,
    genre: "Fiction",
    year: 1925,
    pages: 180,
    description: "The Great Gatsby is a 1925 novel by American writer F. Scott Fitzgerald. Set in the Jazz Age on Long Island, the novel depicts narrator Nick Carraway's interactions with mysterious millionaire Jay Gatsby and Gatsby's obsession to reunite with his former lover, Daisy Buchanan.",
    usersWhoRead: [1, 4, 6],
    usersWhoQuoted: [1],
    quotes: [
      "So we beat on, boats against the current, borne back ceaselessly into the past.",
      "I hope she'll be a fool -- that's the best thing a girl can be in this world, a beautiful little fool."
    ]
  },
  {
    id: 5,
    title: "One Hundred Years of Solitude",
    author: "Gabriel García Márquez",
    coverImage: bookCovers.oneHundredYears,
    genre: "Magical Realism",
    year: 1967,
    pages: 417,
    description: "One Hundred Years of Solitude is a landmark 1967 novel by Colombian author Gabriel García Márquez that tells the multi-generational story of the Buendía family, whose patriarch, José Arcadio Buendía, founded the town of Macondo, a fictitious town in the country of Colombia.",
    usersWhoRead: [1, 5],
    usersWhoQuoted: [5],
    quotes: [
      "It's enough for me to be sure that you and I exist at this moment.",
      "There is always something left to love."
    ]
  },
  {
    id: 6,
    title: "Little Women",
    author: "Louisa May Alcott",
    coverImage: bookCovers.littleWomen,
    genre: "Fiction",
    year: 1868,
    pages: 759,
    description: "Little Women is a coming-of-age novel written by American novelist Louisa May Alcott. Originally published in two volumes in 1868 and 1869, Alcott wrote the book over several months at the request of her publisher.",
    usersWhoRead: [2, 7],
    usersWhoQuoted: [7],
    quotes: [
      "I am not afraid of storms, for I am learning how to sail my ship.",
      "I'd rather take coffee than compliments just now."
    ],
    sharingStatus: "Available",
    sharingFormat: "Paperback",
    sharingCondition: "Good condition",
    sharingOwner: 2
  },
  {
    id: 7,
    title: "The Alchemist",
    author: "Paulo Coelho",
    coverImage: bookCovers.alchemist,
    genre: "Fiction",
    year: 1988,
    pages: 197,
    description: "The Alchemist follows the journey of an Andalusian shepherd boy named Santiago. Believing a recurring dream to be prophetic, he asks a Gypsy fortune teller in the nearby town about its meaning. The woman interprets the dream as a prophecy telling the boy that he will discover a treasure at the Egyptian pyramids.",
    usersWhoRead: [3, 7, 8],
    usersWhoQuoted: [8],
    quotes: [
      "When you want something, all the universe conspires in helping you to achieve it.",
      "The simple things are also the most extraordinary things, and only the wise can see them."
    ],
    sharingStatus: "Available",
    sharingFormat: "Hardcover",
    sharingCondition: "Like new",
    sharingOwner: 3
  },
  {
    id: 8,
    title: "Brave New World",
    author: "Aldous Huxley",
    coverImage: bookCovers.braveNewWorld,
    genre: "Science Fiction",
    year: 1932,
    pages: 311,
    description: "Brave New World is a dystopian novel by English author Aldous Huxley, written in 1931 and published in 1932. Largely set in a futuristic World State, whose citizens are environmentally engineered into an intelligence-based social hierarchy, the novel anticipates huge scientific advancements in reproductive technology, sleep-learning, psychological manipulation and classical conditioning that are combined to make a dystopian society which is challenged by only a single individual: the story's protagonist.",
    usersWhoRead: [1, 6],
    usersWhoQuoted: [6],
    quotes: [
      "Words can be like X-rays if you use them properly—they'll go through anything. You read and you're pierced.",
      "But I don't want comfort. I want God, I want poetry, I want real danger, I want freedom, I want goodness. I want sin."
    ],
    sharingStatus: "Available",
    sharingFormat: "Paperback",
    sharingCondition: "Well-loved",
    sharingOwner: 7
  },
  {
    id: 9,
    title: "Sapiens: A Brief History of Humankind",
    author: "Yuval Noah Harari",
    coverImage: bookCovers.sapiens,
    genre: "Non-Fiction",
    year: 2011,
    pages: 443,
    description: "Sapiens: A Brief History of Humankind is a book by Yuval Noah Harari, first published in Hebrew in Israel in 2011 based on a series of lectures Harari taught at The Hebrew University of Jerusalem, and in English in 2014. The book surveys the history of humankind from the evolution of archaic human species in the Stone Age up to the twenty-first century.",
    usersWhoRead: [4, 6],
    usersWhoQuoted: [4],
    quotes: [
      "You could never convince a monkey to give you a banana by promising him limitless bananas after death in monkey heaven.",
      "How do you cause people to believe in an imagined order such as Christianity, democracy or capitalism? First, you never admit that the order is imagined."
    ],
    sharingStatus: "Available",
    sharingFormat: "E-book",
    sharingCondition: "Digital copy",
    sharingOwner: 4
  },
  {
    id: 10,
    title: "The Midnight Library",
    author: "Matt Haig",
    coverImage: bookCovers.midnightLibrary,
    genre: "Fiction",
    year: 2020,
    pages: 304,
    description: "Between life and death there is a library, and within that library, the shelves go on forever. Every book provides a chance to try another life you could have lived. To see how things would be if you had made other choices... Would you have done anything different, if you had the chance to undo your regrets?",
    usersWhoRead: [1, 8],
    usersWhoQuoted: [8],
    quotes: [
      "The only way to learn is to live.",
      "Never underestimate the big importance of small things."
    ]
  },
  {
    id: 11,
    title: "The Overstory",
    author: "Richard Powers",
    coverImage: bookCovers.overstory,
    genre: "Fiction",
    year: 2018,
    pages: 502,
    description: "The Overstory is a novel by Richard Powers published in 2018. It is Powers' twelfth novel. The novel is about nine Americans whose unique life experiences with trees bring them together to address the destruction of forests.",
    usersWhoRead: [],
    usersWhoQuoted: [],
    quotes: []
  },
  {
    id: 12,
    title: "Klara and the Sun",
    author: "Kazuo Ishiguro",
    coverImage: bookCovers.klaraAndSun,
    genre: "Science Fiction",
    year: 2021,
    pages: 303,
    description: "Klara and the Sun is a novel by the Nobel Prize-winning British writer Kazuo Ishiguro, published in 2021. It is a dystopian science fiction story set in the near future, told from the first-person perspective of Klara, an Artificial Friend (AF)—a humanoid robot designed as a companion for children.",
    usersWhoRead: [],
    usersWhoQuoted: [],
    quotes: []
  },
  {
    id: 13,
    title: "The Song of Achilles",
    author: "Madeline Miller",
    coverImage: bookCovers.songOfAchilles,
    genre: "Historical Fiction",
    year: 2011,
    pages: 352,
    description: "The Song of Achilles is a 2011 novel by American writer Madeline Miller. Set during the Greek Heroic Age, it is an adaptation of Homer's Iliad as told from the perspective of Patroclus. The novel follows Patroclus' relationship with Achilles, from their initial meeting to their exploits during the Trojan War, with focus on their romantic relationship.",
    usersWhoRead: [],
    usersWhoQuoted: [],
    quotes: []
  },
  {
    id: 14,
    title: "Educated",
    author: "Tara Westover",
    coverImage: bookCovers.educated,
    genre: "Memoir",
    year: 2018,
    pages: 334,
    description: "Educated is a memoir by the American author Tara Westover. Westover recounts overcoming her survivalist Mormon family in order to go to college, and emphasizes the importance of education in enlarging her world. She details her journey from her isolated life in the mountains of Idaho to completing a PhD program at Cambridge University.",
    usersWhoRead: [],
    usersWhoQuoted: [],
    quotes: [],
    sharingStatus: "Available",
    sharingFormat: "Audiobook",
    sharingCondition: "Digital copy",
    sharingOwner: 6
  }
];

// Users data
export const users = [
  {
    id: 1,
    name: "Jane Austen",
    avatar: userAvatars.janeAusten,
    bio: "Book lover, aspiring writer, and literature enthusiast. I believe books are the quietest and most constant of friends.",
    location: "Chicago, IL",
    favoriteBooks: [1, 4, 5, 3, 10],
    readingNow: [10, 9],
    wishlist: [11, 12, 13, 14],
    shareableBooks: [6, 8],
    readingVibe: ["Fiction Explorer", "Philosophy Lover", "Character-Driven", "Thoughtful Reader", "Classic Appreciator"]
  },
  {
    id: 2,
    name: "Emily Chen",
    avatar: userAvatars.emilyWong,
    bio: "Literature professor with a love for classic American novels",
    location: "Chicago, IL • 3 miles away",
    favoriteBooks: [2, 6, 4, 1, 13],
    readingNow: [13, 11],
    wishlist: [9, 10],
    shareableBooks: [6],
    readingVibe: ["Academic Reader", "Literary Analysis", "Character-Driven", "Classic Appreciator"]
  },
  {
    id: 3,
    name: "Marcus Johnson",
    avatar: userAvatars.marcusJohnson,
    bio: "Civil rights attorney and avid reader of social justice literature",
    location: "Chicago, IL • 7 miles away",
    favoriteBooks: [2, 7, 1, 14, 11],
    readingNow: [14, 5],
    wishlist: [9, 12],
    shareableBooks: [7],
    readingVibe: ["Social Justice", "Non-fiction Enthusiast", "Thoughtful Reader"]
  },
  {
    id: 4,
    name: "Alex Rivera",
    avatar: userAvatars.alexRivera,
    bio: "I'm fascinated by dystopian fiction and how it reflects our society's anxieties. Orwell's '1984' changed how I view surveillance and freedom.",
    location: "Chicago, IL • 3 miles away",
    favoriteBooks: [3, 4, 9, 8, 12],
    readingNow: [12, 11],
    wishlist: [13, 5],
    shareableBooks: [9],
    readingVibe: ["Dystopian Explorer", "Science Fiction Fan", "Political Reader"]
  },
  {
    id: 5,
    name: "Priya Sharma",
    avatar: userAvatars.priyaSharma,
    bio: "I love magical realism and stories that blend cultural traditions with fantastical elements. García Márquez's writing feels like stepping into a dream.",
    location: "Chicago, IL • 7 miles away",
    favoriteBooks: [5, 2, 7, 13, 10],
    readingNow: [10, 13],
    wishlist: [12, 11],
    shareableBooks: [4],
    readingVibe: ["Magical Realism", "Cultural Explorer", "Imaginative Reader"]
  },
  {
    id: 6,
    name: "James Wilson",
    avatar: userAvatars.jamesWilson,
    bio: "I'm drawn to classic literature that explores human nature and societal structures. I believe great books are timeless because they capture universal truths.",
    location: "Chicago, IL • 12 miles away",
    favoriteBooks: [1, 3, 4, 8, 9],
    readingNow: [14, 12],
    wishlist: [11, 13],
    shareableBooks: [14],
    readingVibe: ["Classic Appreciator", "Philosophical Reader", "Deep Thinker"]
  },
  {
    id: 7,
    name: "Sophia Kim",
    avatar: userAvatars.sophiaKim,
    bio: "High school English teacher who uses literature to inspire students",
    location: "Chicago, IL • 2 miles away",
    favoriteBooks: [2, 6, 7, 10, 14],
    readingNow: [11, 13],
    wishlist: [9, 12],
    shareableBooks: [8],
    readingVibe: ["Educational Reader", "Young Adult Explorer", "Inspirational"]
  },
  {
    id: 8,
    name: "Olivia Chen",
    avatar: userAvatars.oliviaChen,
    bio: "I'm passionate about books that inspire personal growth and spiritual journeys. 'The Alchemist' taught me to follow my dreams and recognize the omens along the way.",
    location: "Chicago, IL • 5 miles away",
    favoriteBooks: [7, 10, 14, 5, 12],
    readingNow: [5, 11],
    wishlist: [9, 3],
    shareableBooks: [],
    readingVibe: ["Spiritual Seeker", "Self-Development", "Inspirational"]
  }
];

// Helper function to get books by user ID
export const getBooksByUser = (userId) => {
  const user = users.find(u => u.id === userId);
  if (!user) return { favoriteBooks: [], readingNow: [], wishlist: [], shareableBooks: [] };
  
  return {
    favoriteBooks: user.favoriteBooks.map(bookId => books.find(b => b.id === bookId)),
    readingNow: user.readingNow.map(bookId => books.find(b => b.id === bookId)),
    wishlist: user.wishlist.map(bookId => books.find(b => b.id === bookId)),
    shareableBooks: user.shareableBooks.map(bookId => books.find(b => b.id === bookId))
  };
};

// Helper function to get users who read a specific book
export const getUsersByBook = (bookId) => {
  const book = books.find(b => b.id === bookId);
  if (!book) return [];
  
  return book.usersWhoRead.map(userId => users.find(u => u.id === userId));
};

// Helper function to get books available for sharing
export const getShareableBooks = () => {
  return books.filter(book => book.sharingStatus === "Available");
};

// Helper function to get users with common books
export const getUsersWithCommonBooks = (userId, minCommonBooks = 1) => {
  const user = users.find(u => u.id === userId);
  if (!user) return [];
  
  const userBooks = [...user.favoriteBooks, ...user.readingNow];
  
  return users
    .filter(u => u.id !== userId)
    .map(otherUser => {
      const otherUserBooks = [...otherUser.favoriteBooks, ...otherUser.readingNow];
      const commonBooks = userBooks.filter(bookId => otherUserBooks.includes(bookId));
      
      return {
        user: otherUser,
        commonBooks: commonBooks.map(bookId => books.find(b => b.id === bookId)),
        commonCount: commonBooks.length
      };
    })
    .filter(result => result.commonCount >= minCommonBooks)
    .sort((a, b) => b.commonCount - a.commonCount);
};
