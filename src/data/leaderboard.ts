export interface LeaderRow {
  rank: number;
  name: string;
  level: string;
  wpm: number;
  accuracy: number;
}

export const SAMPLE_LEADERBOARD: LeaderRow[] = [
  { rank: 1, name: "Ravi Kumar", level: "Advance L-12", wpm: 78, accuracy: 98 },
  { rank: 2, name: "Sneha Sharma", level: "Advance L-9", wpm: 74, accuracy: 97 },
  { rank: 3, name: "Amit Raj", level: "Hard L-45", wpm: 68, accuracy: 96 },
  { rank: 4, name: "Pooja Verma", level: "Hard L-32", wpm: 64, accuracy: 95 },
  { rank: 5, name: "Manish Singh", level: "Normal L-60", wpm: 58, accuracy: 94 },
  { rank: 6, name: "Anjali Devi", level: "Normal L-48", wpm: 55, accuracy: 93 },
  { rank: 7, name: "Suraj Yadav", level: "Easy L-80", wpm: 50, accuracy: 92 },
  { rank: 8, name: "Kavita Kumari", level: "Easy L-65", wpm: 46, accuracy: 91 },
  { rank: 9, name: "Rohit Pandey", level: "Easy L-50", wpm: 42, accuracy: 90 },
  { rank: 10, name: "Neha Gupta", level: "Easy L-35", wpm: 38, accuracy: 89 },
];
