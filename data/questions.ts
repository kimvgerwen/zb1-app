export type AnswerOption = {
  text: string;
  value: string;
};

export type Question = {
  id: number;
  question: string;
  options: AnswerOption[];
};

export const questions: Question[] = [
  {
    id: 1,
    question: "What's your ideal weekend?",
    options: [
      { text: "Chilling at home with games & snacks", value: "gunwook" },
      { text: "Buying and unpacking new pokémon cards", value: "matthew" },
      { text: "Sleeping in and watching dramas or anime", value: "gyuvin" },
      { text: "Focussing on one of my creative hobbies", value: "hao" },
      { text: "Going on a calming hike", value: "hanbin" },
      { text: "Running errands and taking a nap after", value: "jiwoong" },
      { text: "Going to a karaoke room with friends", value: "taerae" },
      {
        text: "Going shopping and take new pictures for the gram",
        value: "ricky",
      },
      { text: "Playing soccer with friends", value: "yujin" },
    ],
  },

  {
    id: 2,
    question: "What's your role in a friend group?",
    options: [
      { text: "The one who flirts with everyone", value: "gunwook" },
      { text: "The sunshine", value: "matthew" },
      { text: "The meme dealer", value: "gyuvin" },
      { text: "The chaotic mom-friend", value: "hao" },
      { text: "The motivational therapist", value: "hanbin" },
      { text: "The secretly-chaotic dad", value: "jiwoong" },
      { text: "The spontaneous one", value: "taerae" },
      {
        text: "The fashion icon",
        value: "ricky",
      },
      { text: "The troublemaker", value: "yujin" },
    ],
  },
  {
    id: 3,
    question: "Pick an Instagram bio you’d actually use",
    options: [
      {
        text: "Seoul - mmddyyyy",
        value: "gunwook",
      },
      {
        text: "be kind, always. and send memes.",
        value: "matthew",
      },
      {
        text: "professional silly guy",
        value: "gyuvin",
      },
      {
        text: "draw me like one of your french girls",
        value: "hao",
      },
      {
        text: "learning, healing, growing",
        value: "hanbin",
      },
      {
        text: "my butt looks good.",
        value: "jiwoong",
      },
      {
        text: "just happy to be here",
        value: "yujin",
      },
      {
        text: "sleep / sing / repeat",
        value: "taerae",
      },
      {
        text: "feed on point, heart chaos",
        value: "ricky",
      },
    ],
  },
  {
    id: 4,
    question: "What kind of friend are you?",
    options: [
      {
        text: "The “let's talk about the meaning of life” type",
        value: "matthew",
      },
      { text: "The “you NEED to see this meme” type", value: "gyuvin" },
      { text: "The “let’s go on a trip next weekend” type", value: "taerae" },
      {
        text: "The “you don’t need to say anything, just sit” type",
        value: "hanbin",
      },
      { text: "The “I brought your favorite snack” type", value: "hao" },
      { text: "The “I made you a playlist” type", value: "gunwook" },
      { text: "The “what are we doing at 3am?” type", value: "yujin" },
      { text: "The “here’s a five-minute voice note” type", value: "jiwoong" },
      { text: "The “you’re doing amazing, sweetie” type", value: "ricky" },
    ],
  },
  {
    id: 5,
    question: "What emoji speaks to you?",
    options: [
      {
        text: "🐹",
        value: "hanbin",
      },
      { text: "🐈‍⬛‍", value: "jiwoong" },
      { text: "🐼", value: "hao" },
      {
        text: "🦊",
        value: "matthew",
      },
      { text: "🦆", value: "taerae" },
      { text: "🐈", value: "ricky" },
      { text: "🐶", value: "gyuvin" },
      { text: "🐻", value: "gunwook" },
      { text: "🐰", value: "yujin" },
    ],
  },

  {
    id: 6,
    question: "Your secret main character trait is…",
    options: [
      { text: "Loyalty no one sees coming", value: "gunwook" },
      { text: "A smile that makes people soften", value: "matthew" },
      { text: "A chaotic brain hiding a genius plan", value: "gyuvin" },
      { text: "Eyes that read the room instantly", value: "hao" },
      { text: "Careful effort in everything you do", value: "hanbin" },
      { text: "A quiet confidence people trust", value: "jiwoong" },
      { text: "You make people feel like they belong", value: "yujin" },
      {
        text: "You don’t try to stand out — but you still do",
        value: "taerae",
      },
      { text: "Your ability to bounce back from anything", value: "ricky" },
    ],
  },

  {
    id: 7,
    question: "What kind of song would you be?",
    options: [
      {
        text: "A song you can vogue to",
        value: "hanbin",
      },
      { text: "‍An old Fleetwood Mac song", value: "jiwoong" },
      { text: "Soft acoustic love song", value: "hao" },
      {
        text: "That one pop song that instantly makes you happy",
        value: "matthew",
      },
      { text: "A princess anthem", value: "taerae" },
      { text: "The confident walk-down-the-street banger", value: "ricky" },
      { text: "Nightclub music", value: "gyuvin" },
      { text: "A r&b song with a good beat", value: "gunwook" },
      { text: "The chaotic montage", value: "yujin" },
    ],
  },
  {
    id: 8,
    question: "What compliment would you like to hear?",
    options: [
      {
        text: "You're way smarter than people realize",
        value: "gunwook",
      },
      { text: "‍I feel like I can be myself around you", value: "matthew" },
      { text: "You always make things more fun", value: "gyuvin" },
      {
        text: "You're not that old",
        value: "jiwoong",
      },
      { text: "Your voice makes me ascend to heaven", value: "taerae" },
      { text: "You have way more talent than people realize", value: "ricky" },
      { text: "You're always there at the right moment", value: "hanbin" },
      { text: "You inspire me", value: "hao" },
      { text: "You're way ahead of other people your age", value: "yujin" },
    ],
  },
  {
    id: 9,
    question: "Choose a random aesthetic you vibe with",
    options: [
      {
        text: "oversized sweaters, headphones, rainy days",
        value: "gunwook",
      },
      { text: "fridge magnets, sunshine, road trip", value: "matthew" },
      { text: "game controller, smiles, cozy blankets", value: "gyuvin" },
      {
        text: "vinyl player, wine, restaurants",
        value: "jiwoong",
      },
      { text: "film cameras, microphone, guitar", value: "taerae" },
      { text: "marble, late nights, luxury brands", value: "ricky" },
      { text: "dance studio, speaker, sweatpants", value: "hanbin" },
      { text: "forest, coffee, books", value: "hao" },
      { text: "water gun, pool, sunshine", value: "yujin" },
    ],
  },
];
