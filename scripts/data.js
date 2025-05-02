// Sample questions for the game
const questions = [
    {
        id: 1,
        optionA: "See 10 minutes into the future",
        optionB: "See 150 years into the future"
    },
    {
        id: 2,
        optionA: "Have telekinesis",
        optionB: "Have telepathy"
    },
    {
        id: 3,
        optionA: "Team up with Wonder Woman",
        optionB: "Team up with Captain Marvel"
    },
    {
        id: 4,
        optionA: "Sing along to every song you hear",
        optionB: "Dance to every song you hear"
    },
    {
        id: 5,
        optionA: "Find true love today",
        optionB: "Win the lottery next year"
    },
    {
        id: 6,
        optionA: "Be in jail for five years",
        optionB: "Be in a coma for a decade"
    },
    {
        id: 7,
        optionA: "Have another 10 years with your partner",
        optionB: "Have a one-night stand with your celebrity crush"
    },
    {
        id: 8,
        optionA: "Be chronically under-dressed",
        optionB: "Be chronically overdressed"
    },
    {
        id: 9,
        optionA: "Have everyone read your thoughts",
        optionB: "Have everyone access your Internet history"
    },
    {
        id: 10,
        optionA: "Lose your sight",
        optionB: "Lose your memories"
    },
    {
        id: 11,
        optionA: "Have universal respect",
        optionB: "Have unlimited power"
    },
    {
        id: 12,
        optionA: "Give up air conditioning and heating forever",
        optionB: "Give up the Internet forever"
    },
    {
        id: 13,
        optionA: "Swim in a pool full of Nutella",
        optionB: "Swim in a pool full of maple syrup"
    },
    {
        id: 14,
        optionA: "Labor under a hot sun",
        optionB: "Labor under extreme cold"
    },
    {
        id: 15,
        optionA: "Stay in during a snow day",
        optionB: "Build a fort"
    },
    {
        id: 16,
        optionA: "Buy 10 things you don't need every time you shop",
        optionB: "Always forget the one thing you need when you shop"
    },
    {
        id: 17,
        optionA: "Never go out during the day",
        optionB: "Never go out at night"
    },
    {
        id: 18,
        optionA: "Have a personal maid",
        optionB: "Have a personal chef"
    },
    {
        id: 19,
        optionA: "Be 11 feet tall",
        optionB: "Be nine inches tall"
    },
    {
        id: 20,
        optionA: "Have Beyoncé's talent",
        optionB: "Have Jay-Z's business acumen"
    },
    {
        id: 21,
        optionA: "Be an extra in an Oscar-winning movie",
        optionB: "Be the lead in a box office bomb"
    },
    {
        id: 22,
        optionA: "Vomit on your hero",
        optionB: "Have your hero vomit on you"
    },
    {
        id: 23,
        optionA: "Communicate only in emoji",
        optionB: "Never text again"
    },
    {
        id: 24,
        optionA: "Be royalty 1,000 years ago",
        optionB: "Be an average person today"
    },
    {
        id: 25,
        optionA: "Lounge by the pool",
        optionB: "Lounge on the beach"
    },
    {
        id: 26,
        optionA: "Wear the same socks for a month",
        optionB: "Wear the same underwear for a week"
    },
    {
        id: 27,
        optionA: "Work an overtime shift with your annoying boss",
        optionB: "Spend a full day with your mother-in-law"
    },
    {
        id: 28,
        optionA: "Cuddle a koala",
        optionB: "Pal around with a panda"
    },
    {
        id: 29,
        optionA: "Have a sing-off with Ariana Grande",
        optionB: "Have a dance-off with Rihanna"
    },
    {
        id: 30,
        optionA: "Always have B.O. and not know it",
        optionB: "Always smell B.O. on everyone else"
    },
    {
        id: 31,
        optionA: "Watch nothing but Hallmark Christmas movies",
        optionB: "Watch nothing but horror movies"
    },
    {
        id: 32,
        optionA: "Always be 10 minutes late",
        optionB: "Always be 20 minutes early"
    },
    {
        id: 33,
        optionA: "Spend a week in the forest",
        optionB: "Spend a night in a real haunted house"
    },
    {
        id: 34,
        optionA: "Find a rat in your kitchen",
        optionB: "Find a roach in your bed"
    },
    {
        id: 35,
        optionA: "Have a pause button in your life",
        optionB: "Have a rewind button in your life"
    },
    {
        id: 36,
        optionA: "Always have a full phone battery",
        optionB: "Always have a full gas tank"
    },
    {
        id: 37,
        optionA: "Lose all your teeth",
        optionB: "Lose a day of your life every time you kiss someone"
    },
    {
        id: 38,
        optionA: "Drink from a toilet",
        optionB: "Pee in a litter box"
    },
    {
        id: 39,
        optionA: "Live the same day over and over for a year",
        optionB: "Take 3 years off the end of your life"
    },
    {
        id: 40,
        optionA: "Never eat watermelon again",
        optionB: "Eat watermelon with every meal"
    },
    {
        id: 41,
        optionA: "Get a paper cut every time you turn a page",
        optionB: "Bite your tongue every time you eat"
    },
    {
        id: 42,
        optionA: "Oversleep every day for a week",
        optionB: "Not get any sleep at all for four days"
    },
    {
        id: 43,
        optionA: "Die in 20 years with no regrets",
        optionB: "Live to 100 with a lot of regrets"
    },
    {
        id: 44,
        optionA: "Sip gin with Ryan Reynolds",
        optionB: "Shoot tequila with Dwayne 'The Rock' Johnson"
    },
    {
        id: 45,
        optionA: "Get trapped in a food fight",
        optionB: "Get trapped in a water balloon fight"
    },
    {
        id: 46,
        optionA: "Walk to work in heels",
        optionB: "Drive to work in reverse"
    },
    {
        id: 47,
        optionA: "Spend a year at war",
        optionB: "Spend a year in prison"
    },
    {
        id: 48,
        optionA: "Die before your partner",
        optionB: "Die after your partner"
    },
    {
        id: 49,
        optionA: "Have a child every year for 20 years",
        optionB: "Never have any children at all"
    },
    {
        id: 50,
        optionA: "Take amazing selfies but look terrible in all other photos",
        optionB: "Be photogenic everywhere but in your selfies"
    },
    {
        id: 51,
        optionA: "Be gassy on a first date",
        optionB: "Be gassy on your wedding night"
    },
    {
        id: 52,
        optionA: "Have Danny DeVito play you in a movie",
        optionB: "Have Danny Trejo play you in a movie"
    },
    {
        id: 53,
        optionA: "Take back anything you say",
        optionB: "Hear any conversation about you"
    },
    {
        id: 54,
        optionA: "Have skin that changes color based on your emotions",
        optionB: "Have tattoos appear all over your body depicting what you did yesterday"
    },
    {
        id: 55,
        optionA: "Hunt and butcher your own meat",
        optionB: "Never eat meat again"
    },
    {
        id: 56,
        optionA: "Lose all of your friends but keep your BFF",
        optionB: "Lose your BFF but keep the rest of your friends"
    },
    {
        id: 57,
        optionA: "Have people spread a terrible lie about you",
        optionB: "Have people spread terrible but true tales about you"
    },
    {
        id: 58,
        optionA: "Walk in on your parents",
        optionB: "Have your parents walk in on you"
    },
    {
        id: 59,
        optionA: "Be the best at something no one takes seriously",
        optionB: "Be average at something well respected"
    },
    {
        id: 60,
        optionA: "Have unlimited battery life on all devices",
        optionB: "Have free WiFi wherever you go"
    },
    {
        id: 61,
        optionA: "Have Billie Eilish's future",
        optionB: "Have Madonna's legacy"
    },
    {
        id: 62,
        optionA: "Have a third nipple",
        optionB: "Have an extra toe"
    },
    {
        id: 63,
        optionA: "Solve world hunger",
        optionB: "Solve global warming"
    },
    {
        id: 64,
        optionA: "Wear every shirt inside out",
        optionB: "Wear every pair of pants backward"
    },
    {
        id: 65,
        optionA: "Live in a treehouse",
        optionB: "Live in a cave"
    },
    {
        id: 66,
        optionA: "Win $25,000",
        optionB: "Have your best friend win $100,000"
    },
    {
        id: 67,
        optionA: "Be in history books for something terrible",
        optionB: "Be forgotten completely after you die"
    },
    {
        id: 68,
        optionA: "Travel the world for free for a year",
        optionB: "Have $50,000 to spend however you please"
    },
    {
        id: 69,
        optionA: "Only be able to talk to your dog",
        optionB: "Have your dog be able to talk to only you"
    },
    {
        id: 70,
        optionA: "Have a mullet for a year",
        optionB: "Be bald for six months"
    },
    {
        id: 71,
        optionA: "Go back to the past to meet your loved ones who passed away",
        optionB: "Go to the future to meet your children or grandchildren"
    },
    {
        id: 72,
        optionA: "Have Angelina Jolie's lips",
        optionB: "Have Jennifer Aniston's hair"
    },
    {
        id: 73,
        optionA: "Stay the age you are physically forever",
        optionB: "Stay the way you are now financially forever"
    },
    {
        id: 74,
        optionA: "Be in a zombie apocalypse",
        optionB: "Be in a robot apocalypse"
    },
    {
        id: 75,
        optionA: "Be alone all your life",
        optionB: "Be surrounded by really annoying people"
    },
    {
        id: 76,
        optionA: "Give up your cellphone for a month",
        optionB: "Give up bathing for a month"
    },
    {
        id: 77,
        optionA: "Spend a day cleaning your worst enemy's house",
        optionB: "Have your crush spend the day cleaning your house"
    },
    {
        id: 78,
        optionA: "Spend a year entirely alone",
        optionB: "Spend a year without a home"
    },
    {
        id: 79,
        optionA: "Buy all used underwear",
        optionB: "Buy all used toothbrushes"
    },
    {
        id: 80,
        optionA: "Have a photographic memory",
        optionB: "Have an IQ of 200"
    },
    {
        id: 81,
        optionA: "Go on a cruise with your boss",
        optionB: "Never go on vacation ever again"
    },
    {
        id: 82,
        optionA: "Forget your partner's birthday every year",
        optionB: "Forget your anniversary every year"
    },
    {
        id: 83,
        optionA: "Wear stilettos to sleep",
        optionB: "Wear slippers everywhere you go"
    },
    {
        id: 84,
        optionA: "Change the outcome of the last election",
        optionB: "Decide the outcome of the next election"
    },
    {
        id: 85,
        optionA: "Lose the ability to read",
        optionB: "Lose the ability to speak"
    },
    {
        id: 86,
        optionA: "Smooch Chris Pratt",
        optionB: "Smooch Chris Pine"
    },
    {
        id: 87,
        optionA: "Be beautiful and stupid",
        optionB: "Be unattractive but a genius"
    },
    {
        id: 88,
        optionA: "Have seven fingers on each hand",
        optionB: "Have seven toes on each foot"
    },
    {
        id: 89,
        optionA: "Work your current job for a year at double pay",
        optionB: "Have one year off with your current pay"
    },
    {
        id: 90,
        optionA: "Always be stuck in traffic but find a perfect parking spot",
        optionB: "Never hit traffic but always take forever to park"
    },
    {
        id: 91,
        optionA: "Have super-sensitive taste buds",
        optionB: "Have super-sensitive hearing"
    },
    {
        id: 92,
        optionA: "Ask your ex for a favor",
        optionB: "Ask a total stranger for a favor"
    },
    {
        id: 93,
        optionA: "Go on tour with Elton John",
        optionB: "Go on tour with Cher"
    },
    {
        id: 94,
        optionA: "Eat only pizza for a year",
        optionB: "Not eat any pizza for five years"
    },
    {
        id: 95,
        optionA: "Never get another present but always pick the perfect present for others",
        optionB: "Keep getting presents but give terrible ones"
    },
    {
        id: 96,
        optionA: "Sleep in a doghouse",
        optionB: "Let stray dogs sleep in your bed"
    },
    {
        id: 97,
        optionA: "Speak any language",
        optionB: "Communicate with animals"
    },
    {
        id: 98,
        optionA: "Have all your messages and photos leak publicly",
        optionB: "Never use a cellphone ever again"
    },
    {
        id: 99,
        optionA: "Run at 100 mph",
        optionB: "Fly at 20 mph"
    },
    {
        id: 100,
        optionA: "Have Adele's voice",
        optionB: "Have Normani's dance moves"
    },
    {
        id: 101,
        optionA: "Wear sweatpants everywhere for the rest of your life",
        optionB: "Never wear sweatpants again"
    },
    {
        id: 102,
        optionA: "Have 10,000 spoons when all you need is a knife",
        optionB: "Always have a knife but never be able to use spoons"
    },
    {
        id: 103,
        optionA: "Detect every lie you hear",
        optionB: "Get away with every lie you tell"
    },
    {
        id: 104,
        optionA: "Be the funniest person in a room",
        optionB: "Be the smartest person in a room"
    },
    {
        id: 105,
        optionA: "Talk like Yoda",
        optionB: "Breathe like Darth Vader"
    },
    {
        id: 106,
        optionA: "Have people know all the details of your finances",
        optionB: "Have people know all the details of your love life"
    },
    {
        id: 107,
        optionA: "Listen to your least-favorite song on a loop for a year",
        optionB: "Never listen to any music at all for a year"
    },
    {
        id: 108,
        optionA: "Go vegan for a month",
        optionB: "Only eat meat and dairy for a month"
    },
    {
        id: 109,
        optionA: "Clean up someone else's vomit",
        optionB: "Clean up someone else's blood"
    },
    {
        id: 110,
        optionA: "Work for Michael Scott",
        optionB: "Work for Mr. Burns"
    },
    {
        id: 111,
        optionA: "Spend the weekend with pirates",
        optionB: "Spend the weekend with ninjas"
    },
    {
        id: 112,
        optionA: "End every phone call with 'I love you'",
        optionB: "Accidentally call your partner the wrong name during a fight"
    },
    {
        id: 113,
        optionA: "Get your paycheck in pennies",
        optionB: "Never be able to use cash again"
    },
    {
        id: 114,
        optionA: "See Lady Gaga in a movie",
        optionB: "See Bradley Cooper in concert"
    },
    {
        id: 115,
        optionA: "Win the lottery but spend it all in one day",
        optionB: "Triple your current salary forever"
    },
    {
        id: 116,
        optionA: "Live until you are 200 and look your age",
        optionB: "Look like you're 22 your whole life, but die at age 65"
    },
    {
        id: 117,
        optionA: "Give up cursing forever",
        optionB: "Give up ice cream for 12 years"
    },
    {
        id: 118,
        optionA: "Hear a comforting lie",
        optionB: "Hear an uncomfortable truth"
    },
    {
        id: 119,
        optionA: "Be locked in a room that's overly bright for a week",
        optionB: "Be locked in a room that's totally dark for a week"
    },
    {
        id: 120,
        optionA: "Have someone see all the photos in your phone",
        optionB: "Have someone read all your text messages"
    },
    {
        id: 121,
        optionA: "Have a South Park-themed wedding",
        optionB: "Have a Family Guy-themed funeral"
    },
    {
        id: 122,
        optionA: "Hunt and gather all of your food",
        optionB: "Eat McDonald's for every meal"
    },
    {
        id: 123,
        optionA: "Have fortune",
        optionB: "Have fame"
    },
    {
        id: 124,
        optionA: "Celebrate the Fourth of July with Taylor Swift",
        optionB: "Celebrate Christmas with Mariah Carey"
    },
    {
        id: 125,
        optionA: "Listen to one song for the rest of your life",
        optionB: "Watch one movie for the rest of your life"
    },
    {
        id: 126,
        optionA: "Never use social media again",
        optionB: "Never watch another movie ever again"
    },
    {
        id: 127,
        optionA: "Have police hunting you down for a crime you didn't commit",
        optionB: "Have a serial killer actually hunting you"
    },
    {
        id: 128,
        optionA: "Live a peaceful life in a small cabin in the woods",
        optionB: "Live a drama-filled life in a mansion in a big city"
    },
    {
        id: 129,
        optionA: "Find your soulmate",
        optionB: "Find your calling"
    },
    {
        id: 130,
        optionA: "Drink sour milk",
        optionB: "Brush your teeth with soap"
    },
    {
        id: 131,
        optionA: "Steal Duchess Meghan's style",
        optionB: "Steal Duchess Kate's style"
    },
    {
        id: 132,
        optionA: "Never get a cold ever again",
        optionB: "Never be stuck in traffic ever again"
    },
    {
        id: 133,
        optionA: "Be tall and average looking",
        optionB: "Be three feet tall but beautiful"
    },
    {
        id: 134,
        optionA: "Visit the International Space Station for a week",
        optionB: "Spend a week in a hotel at the bottom of the ocean"
    },
    {
        id: 135,
        optionA: "Confess to cheating on your partner",
        optionB: "Catch your partner cheating on you"
    },
    {
        id: 136,
        optionA: "Have all traffic lights you approach be green",
        optionB: "Never have to stand in line again"
    },
    {
        id: 137,
        optionA: "Share an onscreen kiss with Leonardo DiCaprio",
        optionB: "Share an onscreen kiss with George Clooney"
    },
    {
        id: 138,
        optionA: "Never eat Christmas cookies ever again",
        optionB: "Never eat Halloween candy ever again"
    },
    {
        id: 139,
        optionA: "Lose your long-term memory",
        optionB: "Lose your short-term memory"
    },
    {
        id: 140,
        optionA: "Have a mullet",
        optionB: "Have a perm"
    },
    {
        id: 141,
        optionA: "Be stranded in the jungle",
        optionB: "Be stranded in the desert"
    },
    {
        id: 142,
        optionA: "Have everyone you love forget your birthday",
        optionB: "Have everyone you love sing 'Happy Birthday' to you for 24 hours straight"
    },
    {
        id: 143,
        optionA: "Be invisible",
        optionB: "Be able to fly"
    },
    {
        id: 144,
        optionA: "Spend every weekend indoors",
        optionB: "Spend every weekend outdoors"
    },
    {
        id: 145,
        optionA: "Party with Jennifer Lopez and Alex Rodriguez",
        optionB: "Party with Kim Kardashian and Kanye West"
    },
    {
        id: 146,
        optionA: "Give up wine for a year",
        optionB: "Drink nothing but wine for a year"
    },
    {
        id: 147,
        optionA: "Start a colony on another planet",
        optionB: "Be the leader of a country on Earth"
    },
    {
        id: 148,
        optionA: "Live in a house haunted by friendly ghosts",
        optionB: "Be a ghost reliving your average day after you die"
    },
    {
        id: 149,
        optionA: "Have one wish granted today",
        optionB: "Have 10 wishes granted 20 years from now"
    },
    {
        id: 150,
        optionA: "Get hit on by someone 20 years older than you",
        optionB: "Get hit on by someone 20 years younger than you"
    },
    {
        id: 151,
        optionA: "Fall down in public",
        optionB: "Pass gas in public"
    },
    {
        id: 152,
        optionA: "Eat only raw food",
        optionB: "Eat only TV dinners"
    },
    {
        id: 153,
        optionA: "Run as fast as The Flash",
        optionB: "Be as strong as Superman"
    },
    {
        id: 154,
        optionA: "Never have a wedgie",
        optionB: "Never have anything stuck in your teeth"
    },
    {
        id: 155,
        optionA: "Marry the most attractive person you've ever met",
        optionB: "Marry the best cook you've ever met"
    },
    {
        id: 156,
        optionA: "Sing karaoke with Gwen Stefani",
        optionB: "Sing karaoke with Kelly Clarkson"
    },
    {
        id: 157,
        optionA: "Go back to kindergarten with everything you know now",
        optionB: "Know now everything your future self will learn"
    },
    {
        id: 158,
        optionA: "Read minds",
        optionB: "Predict the future"
    },
    {
        id: 159,
        optionA: "Take a pill a day for nutrients and never eat again",
        optionB: "Eat whatever you want but never feel full"
    },
    {
        id: 160,
        optionA: "Be an unknown superhero",
        optionB: "Be an infamous villain"
    },
    {
        id: 161,
        optionA: "Always have an annoying song stuck in your head",
        optionB: "Always have an itch you can't reach"
    },
    {
        id: 162,
        optionA: "Never keep anyone else's secrets",
        optionB: "Have someone tell all of your secrets"
    },
    {
        id: 163,
        optionA: "Be Batman",
        optionB: "Be Iron Man"
    },
    {
        id: 164,
        optionA: "Be married to someone stunning who doesn't think you're attractive",
        optionB: "Be married to someone ugly who thinks you're gorgeous"
    },
    {
        id: 165,
        optionA: "Have a third ear",
        optionB: "Have a third eye"
    },
    {
        id: 166,
        optionA: "Have $1 million now",
        optionB: "Have $5,000 a week for the rest of your life"
    },
    {
        id: 167,
        optionA: "Binge-watch Sex And the City",
        optionB: "Binge-watch Girls"
    },
    {
        id: 168,
        optionA: "Be rich working a job you hate",
        optionB: "Be poor working a job you love"
    },
    {
        id: 169,
        optionA: "Wear real fur",
        optionB: "Wear fake jewels"
    },
    {
        id: 170,
        optionA: "Work a high-paying job you hate",
        optionB: "Work your dream job with just enough money for essentials"
    },
    {
        id: 171,
        optionA: "Wake up naked in a forest five miles from home",
        optionB: "Wake up in your underwear at work"
    },
    {
        id: 172,
        optionA: "Go backstage with your favorite band",
        optionB: "Be an extra on your favorite TV show"
    },
    {
        id: 173,
        optionA: "Never eat your favorite food again",
        optionB: "Only eat your favorite food"
    },
    {
        id: 174,
        optionA: "Erase your own memories",
        optionB: "Erase someone else's memories"
    },
    {
        id: 175,
        optionA: "Be so afraid of heights you can't go to the second floor",
        optionB: "Be so afraid of the sun you can only leave on rainy days"
    },
    {
        id: 176,
        optionA: "Have a rap battle against Nicki Minaj",
        optionB: "Have a rap battle against Lizzo"
    },
    {
        id: 177,
        optionA: "Save your best friend's life if it means five strangers die",
        optionB: "Save five strangers if it means sacrificing your best friend"
    },
    {
        id: 178,
        optionA: "Give up coffee forever",
        optionB: "Give up soda forever"
    },
    {
        id: 179,
        optionA: "Find a $100 bill in a public toilet",
        optionB: "Find a $20 bill in your own pocket"
    },
    {
        id: 180,
        optionA: "Wear nothing but neon orange for a year",
        optionB: "Wear nothing but neon green for a year"
    },
    {
        id: 181,
        optionA: "Eat the same thing for every meal for a year",
        optionB: "Eat whatever you want but only once every three days"
    },
    {
        id: 182,
        optionA: "Get drunk off one sip of alcohol",
        optionB: "Never get drunk no matter how much you drink"
    },
    {
        id: 183,
        optionA: "Sell all of your possessions",
        optionB: "Sell one of your organs"
    },
    {
        id: 184,
        optionA: "Clean a toilet with your toothbrush",
        optionB: "Clean a floor with your tongue"
    },
    {
        id: 185,
        optionA: "Be asked the same question over and over",
        optionB: "Never be spoken to again"
    },
    {
        id: 186,
        optionA: "Be reincarnated as a fly",
        optionB: "Just stop existing when you die"
    },
    {
        id: 187,
        optionA: "Be serenaded by Justin Bieber",
        optionB: "Be serenaded by Justin Timberlake"
    },
    {
        id: 188,
        optionA: "Be unable to close any door once it's open",
        optionB: "Be unable to open any door once it's closed"
    },
    {
        id: 189,
        optionA: "Throw the best parties but clean up the mess yourself",
        optionB: "Never go to a party again"
    },
    {
        id: 190,
        optionA: "Have a tattoo of the title of the last book you read",
        optionB: "Have a tattoo of the last TV show you watched"
    },
    {
        id: 191,
        optionA: "Wear clothes that are always too big",
        optionB: "Wear clothes that are a couple sizes too small"
    },
    {
        id: 192,
        optionA: "Give your parents access to your browser history",
        optionB: "Give your boss access to your browser history"
    },
    {
        id: 193,
        optionA: "Wash your hair twice a year",
        optionB: "Check your phone once a day"
    },
    {
        id: 194,
        optionA: "Have a tennis lesson from Serena Williams",
        optionB: "Have a soccer lesson from Meghan Rapinoe"
    },
    {
        id: 195,
        optionA: "Have a permanent unibrow",
        optionB: "Have no eyebrows at all"
    },
    {
        id: 196,
        optionA: "Have aliens be real and covered up by the government",
        optionB: "Have no extraterrestrial life at all in the universe"
    },
    {
        id: 197,
        optionA: "Be caught liking your ex's Instagram pics",
        optionB: "Be caught liking your partner's ex's Instagram pics"
    },
    {
        id: 198,
        optionA: "Never eat cookies again",
        optionB: "Only ever drink water"
    },
    {
        id: 199,
        optionA: "Donate your organs to those who need them",
        optionB: "Donate your entire body to science"
    },
    {
        id: 200,
        optionA: "Be criticized",
        optionB: "Be ignored"
    },
    {
        id: 201,
        optionA: "Work alongside Dwight Schrute",
        optionB: "Work alongside Homer Simpson"
    },
    {
        id: 202,
        optionA: "Be punished for a crime you didn't commit",
        optionB: "Have someone else take credit for one of your major accomplishments"
    },
    {
        id: 203,
        optionA: "Eat an undercooked meal",
        optionB: "Eat a burnt meal"
    },
    {
        id: 204,
        optionA: "Get a cooking lesson from Gordon Ramsay",
        optionB: "Get a cooking lesson from Ina Garten"
    },
    {
        id: 205,
        optionA: "Have your boss look through your text messages",
        optionB: "Have your parents look through your text messages"
    },
    {
        id: 206,
        optionA: "Have your first child when you're 18",
        optionB: "Have your first child when you're 50"
    },
    {
        id: 207,
        optionA: "Star in a Star Wars film",
        optionB: "Star in a Marvel film"
    },
    {
        id: 208,
        optionA: "Wear heels to the gym",
        optionB: "Wear sneakers to a wedding"
    },
    {
        id: 209,
        optionA: "Give up brushing your hair",
        optionB: "Give up brushing your teeth"
    },
    {
        id: 210,
        optionA: "Master every musical instrument",
        optionB: "Master every type of sport"
    },
    {
        id: 211,
        optionA: "Always have wet socks",
        optionB: "Always have a small rock in your shoe"
    },
    {
        id: 212,
        optionA: "Have Celine Dion perform the soundtrack to your life",
        optionB: "Have Eminem perform the soundtrack to your life"
    },
    {
        id: 213,
        optionA: "Be the class clown",
        optionB: "Be the teacher's pet"
    },
    {
        id: 214,
        optionA: "Bathe in the dishwater",
        optionB: "Wash dishes in your bathwater"
    },
    {
        id: 215,
        optionA: "Show up to a job interview with stained pants",
        optionB: "Show up to a job interview with pit stains"
    },
    {
        id: 216,
        optionA: "Never age physically",
        optionB: "Never age mentally"
    },
    {
        id: 217,
        optionA: "Date someone with bad breath",
        optionB: "Date someone with bad manners"
    },
    {
        id: 218,
        optionA: "Never wear makeup again",
        optionB: "Wear a full face of the wrong shades every day"
    },
    {
        id: 219,
        optionA: "Read the book",
        optionB: "Watch the movie"
    },
    {
        id: 220,
        optionA: "Have a slumber party with Anna Kendrick",
        optionB: "Go to a comedy show with Rebel Wilson"
    },
    {
        id: 221,
        optionA: "Eat chocolate on pizza",
        optionB: "Never eat chocolate again"
    },
    {
        id: 222,
        optionA: "Have X-ray vision of people you find unattractive",
        optionB: "Have everyone else have X-ray vision of you"
    },
    {
        id: 223,
        optionA: "Have your own theme park",
        optionB: "Have your own zoo"
    },
    {
        id: 224,
        optionA: "Be the star player on a losing team",
        optionB: "Warm the bench on a championship roster"
    },
    {
        id: 225,
        optionA: "Know when you're going to die",
        optionB: "Know how you're going to die"
    },
    {
        id: 226,
        optionA: "Lose all of your teeth",
        optionB: "Lose all of your hair"
    },
    {
        id: 227,
        optionA: "Watch nothing but The Office for the rest of your life",
        optionB: "Watch nothing but Friends for the rest of your life"
    },
    {
        id: 228,
        optionA: "Lose your keys",
        optionB: "Lose your phone"
    },
    {
        id: 229,
        optionA: "Live in a home with no electricity",
        optionB: "Live in a home with no running water"
    },
    {
        id: 230,
        optionA: "Be rich with no friends",
        optionB: "Be poor and popular"
    },
    {
        id: 231,
        optionA: "Look strong and be weak",
        optionB: "Look weak and be strong"
    },
    {
        id: 232,
        optionA: "Have your style critiqued by Anna Wintour",
        optionB: "Have your style critiqued by Miranda Priestly"
    },
    {
        id: 233,
        optionA: "Wear one color every day",
        optionB: "Wear seven colors every day"
    },
    {
        id: 234,
        optionA: "Sneeze nonstop for 15 minutes once every day",
        optionB: "Sneeze once every three minutes of the day while awake"
    },
    {
        id: 235,
        optionA: "Walk barefoot in a public bathroom",
        optionB: "Walk through poison ivy"
    },
    {
        id: 236,
        optionA: "See 10 years into your own future",
        optionB: "See six months into the future of the world"
    },
    {
        id: 237,
        optionA: "Have nobody remember who you are at your 20-year class reunion",
        optionB: "Have everybody comment on how old you look"
    },
    {
        id: 238,
        optionA: "Shoot hoops with LeBron James",
        optionB: "Toss a football with Tom Brady"
    },
    {
        id: 239,
        optionA: "Live through an episode of Orange Is The New Black",
        optionB: "Live through an episode of Black Mirror"
    },
    {
        id: 240,
        optionA: "Listen to Christmas songs all year round",
        optionB: "Watch nothing but horror movies"
    },
    {
        id: 241,
        optionA: "Be a genius everyone thinks is an idiot",
        optionB: "Be an idiot everyone thinks is a genius"
    },
    {
        id: 242,
        optionA: "Win on Survivor",
        optionB: "Win on The Bachelor or The Bachelorette"
    },
    {
        id: 243,
        optionA: "Be beloved by the general public but your family and friends hate you",
        optionB: "Be hated by the general public but your family and friends love you"
    },
    {
        id: 244,
        optionA: "Be color blind",
        optionB: "Lose your sense of taste"
    },
    {
        id: 245,
        optionA: "Live on a desert island with your celebrity crush",
        optionB: "Live in a mansion with your ex"
    },
    {
        id: 246,
        optionA: "Pass gas every time you meet someone new",
        optionB: "Burp every time you kiss someone"
    },
    {
        id: 247,
        optionA: "Have tea with Queen Elizabeth",
        optionB: "Have a beer with Prince Harry"
    },
    {
        id: 248,
        optionA: "Give up the Internet for a month",
        optionB: "Give up showering for a month"
    },
    {
        id: 249,
        optionA: "Get away with a terrible crime but live in fear of discovery",
        optionB: "Go to prison for three years for a crime you didn't commit"
    },
    {
        id: 250,
        optionA: "Live the same day over and over for a year",
        optionB: "Take three years off the end of your life"
    }
];
