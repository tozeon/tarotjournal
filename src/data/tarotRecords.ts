export interface TarotRecord {
  id: string;
  date: string;
  inquiry?: string;
  divinationType: string;
  divination: {
    cards: string[];
    positions?: { [position: string]: string };
  };
  revelation?: string;
}

export const tarotRecords: TarotRecord[] = [
  {
    id: "1",
    date: "Dec 1, 2000",
    inquiry: "What is my path?",
    divinationType: "Single Card",
    divination: {
      cards: ["The Fool"],
    },
    revelation: "Embrace the unknown",
  },
  {
    id: "2",
    date: "Dec 2, 2000",
    inquiry: "Should I take the job?",
    divinationType: "Single Card",
    divination: {
      cards: ["The Emperor"],
    },
    revelation: "Leadership opportunities await",
  },
  {
    id: "3",
    date: "Dec 3, 2000",
    inquiry: "How to find love?",
    divinationType: "Single Card",
    divination: {
      cards: ["The Lovers"],
    },
    revelation: "Balance heart and mind",
  },
  {
    id: "4",
    date: "Dec 4, 2000",
    inquiry: "Career guidance",
    divinationType: "Single Card",
    divination: {
      cards: ["The Chariot"],
    },
    revelation: "Stay focused on goals",
  },
  {
    id: "5",
    date: "Dec 5, 2000",
    inquiry: "Health concerns",
    divinationType: "Single Card",
    divination: {
      cards: ["The Hermit"],
    },
    revelation: "Listen to your body",
  },
  {
    id: "6",
    date: "Dec 6, 2000",
    inquiry: "Financial decisions",
    divinationType: "Single Card",
    divination: {
      cards: ["Ace of Pentacles"],
    },
    revelation: "Build solid foundations",
  },
  {
    id: "7",
    date: "Dec 7, 2000",
    inquiry: "Relationship advice",
    divinationType: "Single Card",
    divination: {
      cards: ["Ace of Cups"],
    },
    revelation: "Trust your feelings",
  },
  {
    id: "8",
    date: "Dec 8, 2000",
    inquiry: "Spiritual growth",
    divinationType: "Single Card",
    divination: {
      cards: ["The Star"],
    },
    revelation: "Follow your dreams",
  },
  // Example with multiple cards and positions
  {
    id: "9",
    date: "Dec 9, 2000",
    inquiry: "What should I focus on this month?",
    divinationType: "Three Card Spread",
    divination: {
      cards: ["The Magician", "The High Priestess", "The Empress"],
      positions: {
        "Past": "The Magician",
        "Present": "The High Priestess",
        "Future": "The Empress",
      },
    },
    revelation: "Manifest your intentions with wisdom and nurturing",
  },
  // Another example with multiple cards
  {
    id: "10",
    date: "Dec 10, 2000",
    inquiry: "Relationship insights",
    divinationType: "Celtic Cross",
    divination: {
      cards: ["The Fool", "The Magician", "The High Priestess", "The Empress", "The Emperor", "The Hierophant", "The Lovers", "The Chariot", "Strength", "The Hermit"],
      positions: {
        "Present": "The Fool",
        "Challenge": "The Magician",
        "Distant Past": "The High Priestess",
        "Possible Outcome": "The Empress",
        "Recent Past": "The Emperor",
        "Future Influence": "The Hierophant",
        "Approach": "The Lovers",
        "External Influence": "The Chariot",
        "Hopes and Fears": "Strength",
        "Final Outcome": "The Hermit",
      },
    },
    revelation: "A journey of self-discovery and new connections",
  },
];