export const CHESS_PIECES = {
  wK: "\u2654",
  wQ: "\u2655",
  wR: "\u2656",
  wB: "\u2657",
  wN: "\u2658",
  wP: "\u2659",
  bK: "\u265A",
  bQ: "\u265B",
  bR: "\u265C",
  bB: "\u265D",
  bN: "\u265E",
  bP: "\u265F"
};
export const INITIAL_BOARD = [
  ["bR", "bN", "bB", "bQ", "bK", "bB", "bN", "bR"],
  ["bP", "bP", "bP", "bP", "bP", "bP", "bP", "bP"],
  [null, null, null, null, null, null, null, null],
  [null, null, null, null, null, null, null, null],
  [null, null, null, null, null, null, null, null],
  [null, null, null, null, null, null, null, null],
  ["wP", "wP", "wP", "wP", "wP", "wP", "wP", "wP"],
  ["wR", "wN", "wB", "wQ", "wK", "wB", "wN", "wR"]
];
export const DEMO_MOVES = [
  { white: "e4", black: "e5" },
  { white: "Nf3", black: "Nc6" },
  { white: "Bb5", black: "a6" },
  { white: "Ba4", black: "Nf6" },
  { white: "O-O", black: "Be7" },
  { white: "Re1", black: "b5" },
  { white: "Bb3", black: "d6" },
  { white: "c3", black: "O-O" },
  { white: "h3", black: "Nb8" },
  { white: "d4", black: "Nbd7" }
];
export const MOCK_LEADERBOARD = [
  {
    rank: 1,
    user: { id: "1", username: "MagnusCarlsen", email: "", rating: 2847, avatar: "M", title: "GM", wins: 3420, losses: 312, draws: 890, joinDate: "2019-01-15" },
    gamesPlayed: 4622,
    winRate: 74,
    trend: "up",
    trendValue: 12,
    country: ""
  },
  {
    rank: 2,
    user: { id: "2", username: "FabianCaruana", email: "", rating: 2804, avatar: "F", title: "GM", wins: 2890, losses: 280, draws: 920, joinDate: "2019-03-20" },
    gamesPlayed: 4090,
    winRate: 70.7,
    trend: "up",
    trendValue: 5,
    country: ""
  },
  {
    rank: 3,
    user: { id: "3", username: "DingLiren", email: "", rating: 2762, avatar: "D", title: "GM", wins: 2340, losses: 310, draws: 780, joinDate: "2020-06-10" },
    gamesPlayed: 3430,
    winRate: 68.2,
    trend: "neutral",
    trendValue: 0,
    country: ""
  },
  {
    rank: 4,
    user: { id: "4", username: "IanNepomniachtchi", email: "", rating: 2758, avatar: "I", title: "GM", wins: 2100, losses: 380, draws: 650, joinDate: "2019-09-05" },
    gamesPlayed: 3130,
    winRate: 67.1,
    trend: "down",
    trendValue: 8,
    country: ""
  },
  {
    rank: 5,
    user: { id: "5", username: "Alir\u0435\u0437\u0430Firouzja", email: "", rating: 2745, avatar: "\u2656", title: "GM", wins: 1980, losses: 360, draws: 520, joinDate: "2020-11-22" },
    gamesPlayed: 2860,
    winRate: 69.2,
    trend: "up",
    trendValue: 20,
    country: ""
  },
  {
    rank: 6,
    user: { id: "6", username: "AnishGiri", email: "", rating: 2729, avatar: "\u2657", title: "GM", wins: 1840, losses: 290, draws: 680, joinDate: "2019-07-14" },
    gamesPlayed: 2810,
    winRate: 65.5,
    trend: "down",
    trendValue: 3,
    country: ""
  },
  {
    rank: 7,
    user: { id: "7", username: "WesleyS0", email: "", rating: 2718, avatar: "\u2658", title: "GM", wins: 1760, losses: 310, draws: 590, joinDate: "2021-02-18" },
    gamesPlayed: 2660,
    winRate: 66.2,
    trend: "up",
    trendValue: 7,
    country: ""
  },
  {
    rank: 8,
    user: { id: "8", username: "VishyAnand", email: "", rating: 2706, avatar: "\u2659", title: "GM", wins: 2540, losses: 490, draws: 980, joinDate: "2018-05-01" },
    gamesPlayed: 4010,
    winRate: 63.3,
    trend: "neutral",
    trendValue: 0,
    country: ""
  },
  {
    rank: 9,
    user: { id: "9", username: "HikaruNakamura", email: "", rating: 2697, avatar: "V", title: "GM", wins: 3120, losses: 560, draws: 820, joinDate: "2018-12-20" },
    gamesPlayed: 4500,
    winRate: 69.3,
    trend: "up",
    trendValue: 15,
    country: ""
  },
  {
    rank: 10,
    user: { id: "10", username: "LevAronian", email: "", rating: 2690, avatar: "A", title: "GM", wins: 1980, losses: 420, draws: 700, joinDate: "2019-04-30" },
    gamesPlayed: 3100,
    winRate: 63.9,
    trend: "down",
    trendValue: 2,
    country: ""
  }
];
export const AVATAR_COLORS = [
  "linear-gradient(135deg, #f5c842, #d4a017)",
  "linear-gradient(135deg, #4f8ef7, #2563eb)",
  "linear-gradient(135deg, #a855f7, #7c3aed)",
  "linear-gradient(135deg, #22c55e, #16a34a)",
  "linear-gradient(135deg, #f97316, #ea580c)",
  "linear-gradient(135deg, #ec4899, #db2777)",
  "linear-gradient(135deg, #06b6d4, #0891b2)",
  "linear-gradient(135deg, #84cc16, #65a30d)",
  "linear-gradient(135deg, #f43f5e, #e11d48)",
  "linear-gradient(135deg, #8b5cf6, #6d28d9)"
];
