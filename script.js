/*
IPL Mega Auction 2026 - Engine
*/

// --- CONFIGURATION ---
const TEAMS_CONFIG = [
  { id: "csk", name: "CSK", full: "Chennai Super Kings", budget: 100.0, color: "#FFFF33" },
  { id: "mi", name: "MI", full: "Mumbai Indians", budget: 100.0, color: "#004BA0" },
  { id: "rcb", name: "RCB", full: "Royal Challengers Bangalore", budget: 100.0, color: "#EC1C24" },
  { id: "kkr", name: "KKR", full: "Kolkata Knight Riders", budget: 100.0, color: "#3A225D" },
  { id: "gt", name: "GT", full: "Gujarat Titans", budget: 100.0, color: "#1B2133" },
  { id: "lsg", name: "LSG", full: "Lucknow Super Giants", budget: 100.0, color: "#A0CEF8" },
  { id: "rr", name: "RR", full: "Rajasthan Royals", budget: 100.0, color: "#EA1A85" },
  { id: "srh", name: "SRH", full: "Sunrisers Hyderabad", budget: 100.0, color: "#F76E1A" },
  { id: "dc", name: "DC", full: "Delhi Capitals", budget: 100.0, color: "#0078BC" },
  { id: "pbks", name: "PBKS", full: "Punjab Kings", budget: 100.0, color: "#DD1F2D" }
];

const TEAM_DETAILS = {
  csk: {
    coach: "Stephen Fleming",
    assistant: "Michael Hussey",
    batting: "Michael Hussey",
    bowling: "Eric Simons",
    owner: "Chennai Super Kings Cricket Ltd.",
    wins: ["2010", "2011", "2018", "2021", "2023"]
  },
  mi: {
    coach: "Mahela Jayawardene",
    assistant: "Paras Mhambrey",
    batting: "Kieron Pollard",
    bowling: "Lasith Malinga",
    owner: "Reliance Industries",
    wins: ["2013", "2015", "2017", "2019", "2020"]
  },
  rcb: {
    coach: "Andy Flower",
    assistant: "Adam Griffith",
    batting: "Dinesh Karthik",
    bowling: "Omkar Salvi",
    owner: "United Spirits",
    wins: []
  },
  kkr: {
    coach: "Abhishek Nayar",
    assistant: "Shane Watson & Dwayne Bravo",
    batting: "Andre Russell (Power Coach)",
    bowling: "Tim Southee",
    owner: "Shah Rukh Khan, Juhi Chawla, Jay Mehta",
    wins: ["2012", "2014", "2024"]
  },
  gt: {
    coach: "Ashish Nehra",
    assistant: "Vikram Solanki",
    batting: "Gary Kirsten",
    bowling: "Aashish Kapoor",
    owner: "CVC Capital Partners",
    wins: ["2022"]
  },
  lsg: {
    coach: "Justin Langer",
    assistant: "Zaheer Khan",
    batting: "Lance Klusener",
    bowling: "Morne Morkel",
    owner: "RPSG Group",
    wins: []
  },
  rr: {
    coach: "Rahul Dravid",
    assistant: "Vikram Rathour",
    batting: "Vikram Rathour",
    bowling: "Shane Bond",
    owner: "Manoj Badale",
    wins: ["2008"]
  },
  srh: {
    coach: "Daniel Vettori",
    assistant: "Simon Helmot",
    batting: "Hemang Badani",
    bowling: "Dale Steyn",
    owner: "SUN Group",
    wins: ["2016"]
  },
  dc: {
    coach: "Hemang Badani",
    assistant: "Venugopal Rao",
    batting: "Pravin Amre",
    bowling: "James Hopes",
    owner: "GMR Group and JSW Group",
    wins: []
  },
  pbks: {
    coach: "Ricky Ponting",
    assistant: "Brad Haddin",
    batting: "Ricky Ponting",
    bowling: "James Hopes",
    owner: "Preity Zinta, Ness Wadia, Mohit Burman",
    wins: []
  }
};

// Generate 200+ Players
const PLAYERS_DB = [
  // Grade A (User specified)
  { name: "Virat Kohli", country: "India", role: "Batsman", base: 2.0, category: "Grade A" },
  { name: "Rohit Sharma", country: "India", role: "Batsman", base: 2.0, category: "Grade A" },
  { name: "MS Dhoni", country: "India", role: "Wicketkeeper", base: 2.0, category: "Grade A" },
  { name: "Jasprit Bumrah", country: "India", role: "Bowler", base: 2.0, category: "Grade A" },
  { name: "Bhuvneshwar Kumar", country: "India", role: "Bowler", base: 2.0, category: "Grade A" },

  // Grade B (User specified)
  { name: "Varun Chakravarthy", country: "India", role: "Bowler", base: 1.5, category: "Grade B" },
  { name: "K.L. Rahul", country: "India", role: "Wicketkeeper", base: 1.5, category: "Grade B" },
  { name: "Hardik Pandya", country: "India", role: "All-Rounder", base: 2.0, category: "Grade B" },
  { name: "Shreyas Iyer", country: "India", role: "Batsman", base: 1.5, category: "Grade B" },
  { name: "Ravindra Jadeja", country: "India", role: "All-Rounder", base: 2.0, category: "Grade B" },

  // --- BATTING --
  { name: "Shubman Gill", country: "India", role: "Batsman", base: 1.5, category: "Batting" },
  { name: "Suryakumar Yadav", country: "India", role: "Batsman", base: 1.5, category: "Batting" },
  { name: "David Warner", country: "Australia", role: "Batsman", base: 2.0, category: "Batting" },
  { name: "Rishabh Pant", country: "India", role: "Wicketkeeper", base: 1.5, category: "Batting" },
  { name: "Sanju Samson", country: "India", role: "Wicketkeeper", base: 1.5, category: "Batting" },
  { name: "Ishan Kishan", country: "India", role: "Wicketkeeper", base: 1.0, category: "Batting" },
  { name: "Faf du Plessis", country: "South Africa", role: "Batsman", base: 1.0, category: "Batting" },
  { name: "Quinton de Kock", country: "South Africa", role: "Wicketkeeper", base: 1.0, category: "Batting" },
  { name: "Shikhar Dhawan", country: "India", role: "Batsman", base: 1.0, category: "Batting" },
  { name: "Ruturaj Gaikwad", country: "India", role: "Batsman", base: 0.5, category: "Batting" },
  { name: "Yashasvi Jaiswal", country: "India", role: "Batsman", base: 0.5, category: "Batting" },
  { name: "Nicholas Pooran", country: "West Indies", role: "Wicketkeeper", base: 1.0, category: "Batting" },
  { name: "Shimron Hetmyer", country: "West Indies", role: "Batsman", base: 1.0, category: "Batting" },
  { name: "Tim David", country: "Australia", role: "Batsman", base: 0.75, category: "Batting" },
  { name: "Aiden Markram", country: "South Africa", role: "Batsman", base: 1.0, category: "Batting" },
  { name: "David Miller", country: "South Africa", role: "Batsman", base: 1.0, category: "Batting" },
  { name: "Devdutt Padikkal", country: "India", role: "Batsman", base: 0.5, category: "Batting" },
  { name: "Rahul Tripathi", country: "India", role: "Batsman", base: 0.5, category: "Batting" },
  { name: "Heinrich Klaasen", country: "South Africa", role: "Wicketkeeper", base: 1.0, category: "Batting" },
  { name: "Jonny Bairstow", country: "England", role: "Wicketkeeper", base: 1.5, category: "Batting" },
  { name: "Kane Williamson", country: "New Zealand", role: "Batsman", base: 1.5, category: "Batting" },
  { name: "Prithvi Shaw", country: "India", role: "Batsman", base: 0.5, category: "Batting" },
  { name: "Steve Smith", country: "Australia", role: "Batsman", base: 1.5, category: "Batting" },
  { name: "Jason Roy", country: "England", role: "Batsman", base: 1.0, category: "Batting" },
  { name: "Mayank Agarwal", country: "India", role: "Batsman", base: 0.5, category: "Batting" },
  { name: "Rajat Patidar", country: "India", role: "Batsman", base: 0.5, category: "Batting" },
  { name: "Sai Sudharsan", country: "India", role: "Batsman", base: 0.5, category: "Batting" },
  { name: "Tilak Varma", country: "India", role: "Batsman", base: 0.5, category: "Batting" },
  { name: "Manish Pandey", country: "India", role: "Batsman", base: 0.5, category: "Batting" },
  { name: "Rilee Rossouw", country: "South Africa", role: "Batsman", base: 1.0, category: "Batting" },
  { name: "Harry Brook", country: "England", role: "Batsman", base: 1.5, category: "Batting" },
  { name: "Phil Salt", country: "England", role: "Wicketkeeper", base: 1.0, category: "Batting" },
  { name: "Rahmanullah Gurbaz", country: "Afghanistan", role: "Wicketkeeper", base: 0.5, category: "Batting" },
  { name: "Rovman Powell", country: "West Indies", role: "Batsman", base: 0.5, category: "Batting" },
  { name: "Tristan Stubbs", country: "South Africa", role: "Wicketkeeper", base: 0.5, category: "Batting" },
  { name: "Litton Das", country: "Bangladesh", role: "Wicketkeeper", base: 0.5, category: "Batting" },
  { name: "Kyle Mayers", country: "West Indies", role: "Batsman", base: 0.5, category: "Batting" },
  { name: "Devon Conway", country: "New Zealand", role: "Batsman", base: 1.0, category: "Batting" },
  { name: "Rachin Ravindra", country: "New Zealand", role: "Batsman", base: 1.5, category: "Batting" },
  { name: "Tristan Stubbs", country: "South Africa", role: "Wicketkeeper", base: 0.5, category: "Batting" },
  // Adding more random generated batsmen
  ...Array.from({ length: 30 }).map((_, i) => ({ name: `Reg. Batsman ${i + 1}`, country: "India", role: "Batsman", base: 0.2, category: "Batting" })),

  // --- BOWLING ---
  { name: "Rashid Khan", country: "Afghanistan", role: "Bowler", base: 2.0, category: "Bowling" },
  { name: "Pat Cummins", country: "Australia", role: "Bowler", base: 2.0, category: "Bowling" },
  { name: "Jofra Archer", country: "England", role: "Bowler", base: 1.5, category: "Bowling" },
  { name: "Trent Boult", country: "New Zealand", role: "Bowler", base: 1.5, category: "Bowling" },
  { name: "Kagiso Rabada", country: "South Africa", role: "Bowler", base: 1.5, category: "Bowling" },
  { name: "Mohammed Shami", country: "India", role: "Bowler", base: 1.0, category: "Bowling" },
  { name: "Yuzvendra Chahal", country: "India", role: "Bowler", base: 1.0, category: "Bowling" },
  { name: "Arshdeep Singh", country: "India", role: "Bowler", base: 0.5, category: "Bowling" },
  { name: "Umran Malik", country: "India", role: "Bowler", base: 0.5, category: "Bowling" },
  { name: "Harshal Patel", country: "India", role: "Bowler", base: 0.5, category: "Bowling" },
  { name: "Ravi Bishnoi", country: "India", role: "Bowler", base: 0.5, category: "Bowling" },
  { name: "Marco Jansen", country: "South Africa", role: "Bowler", base: 0.75, category: "Bowling" },
  { name: "Lockie Ferguson", country: "New Zealand", role: "Bowler", base: 1.0, category: "Bowling" },
  { name: "Mohammed Siraj", country: "India", role: "Bowler", base: 1.5, category: "Bowling" },
  { name: "Kuldeep Yadav", country: "India", role: "Bowler", base: 1.0, category: "Bowling" },
  { name: "Avesh Khan", country: "India", role: "Bowler", base: 0.5, category: "Bowling" },
  { name: "Deepak Chahar", country: "India", role: "Bowler", base: 1.0, category: "Bowling" },
  { name: "Mukesh Kumar", country: "India", role: "Bowler", base: 0.5, category: "Bowling" },
  { name: "Anrich Nortje", country: "South Africa", role: "Bowler", base: 1.0, category: "Bowling" },
  { name: "Josh Hazlewood", country: "Australia", role: "Bowler", base: 1.5, category: "Bowling" },
  { name: "Mitchell Starc", country: "Australia", role: "Bowler", base: 2.0, category: "Bowling" },
  { name: "Adam Zampa", country: "Australia", role: "Bowler", base: 1.0, category: "Bowling" },
  { name: "Maheesh Theekshana", country: "Sri Lanka", role: "Bowler", base: 1.0, category: "Bowling" },
  { name: "Matheesha Pathirana", country: "Sri Lanka", role: "Bowler", base: 0.5, category: "Bowling" },
  { name: "Noor Ahmad", country: "Afghanistan", role: "Bowler", base: 0.5, category: "Bowling" },
  { name: "Naveen-ul-Haq", country: "Afghanistan", role: "Bowler", base: 0.5, category: "Bowling" },
  { name: "Alzarri Joseph", country: "West Indies", role: "Bowler", base: 1.0, category: "Bowling" },
  { name: "Mustafizur Rahman", country: "Bangladesh", role: "Bowler", base: 1.0, category: "Bowling" },
  { name: "Prashant Solanki", country: "India", role: "Bowler", base: 0.2, category: "Bowling" },
  { name: "Mohit Sharma", country: "India", role: "Bowler", base: 0.5, category: "Bowling" },
  { name: "Piyush Chawla", country: "India", role: "Bowler", base: 0.5, category: "Bowling" },
  { name: "Amit Mishra", country: "India", role: "Bowler", base: 0.5, category: "Bowling" },
  { name: "Ishant Sharma", country: "India", role: "Bowler", base: 0.5, category: "Bowling" },
  { name: "Khaleel Ahmed", country: "India", role: "Bowler", base: 0.5, category: "Bowling" },
  { name: "Chetan Sakariya", country: "India", role: "Bowler", base: 0.5, category: "Bowling" },
  { name: "Kamlesh Nagarkoti", country: "India", role: "Bowler", base: 0.2, category: "Bowling" },
  { name: "Shivani Mavi", country: "India", role: "Bowler", base: 0.5, category: "Bowling" },
  { name: "Navdeep Saini", country: "India", role: "Bowler", base: 0.5, category: "Bowling" },
  { name: "Sandeep Sharma", country: "India", role: "Bowler", base: 0.5, category: "Bowling" },
  // Adding more random generated bowlers
  ...Array.from({ length: 30 }).map((_, i) => ({ name: `Reg. Bowler ${i + 1}`, country: "India", role: "Bowler", base: 0.2, category: "Bowling" })),

  // --- FIELDING (All Rounders primarily) ---
  { name: "Ben Stokes", country: "England", role: "All-Rounder", base: 2.0, category: "Fielding" },
  { name: "Glenn Maxwell", country: "Australia", role: "All-Rounder", base: 1.5, category: "Fielding" },
  { name: "Moeen Ali", country: "England", role: "All-Rounder", base: 1.0, category: "Fielding" },
  { name: "Sunil Narine", country: "West Indies", role: "All-Rounder", base: 1.0, category: "Fielding" },
  { name: "Andre Russell", country: "West Indies", role: "All-Rounder", base: 1.0, category: "Fielding" },
  { name: "Venkatesh Iyer", country: "India", role: "All-Rounder", base: 0.5, category: "Fielding" },
  { name: "Sam Curran", country: "England", role: "All-Rounder", base: 1.5, category: "Fielding" },
  { name: "Liam Livingstone", country: "England", role: "All-Rounder", base: 1.0, category: "Fielding" },
  { name: "Wanindu Hasaranga", country: "Sri Lanka", role: "All-Rounder", base: 1.0, category: "Fielding" },
  { name: "Riyan Parag", country: "India", role: "All-Rounder", base: 0.2, category: "Fielding" },
  { name: "Abdul Samad", country: "India", role: "Batsman", base: 0.2, category: "Fielding" }, // Fielder
  { name: "Abhishek Sharma", country: "India", role: "All-Rounder", base: 0.2, category: "Fielding" },
  { name: "Cameron Green", country: "Australia", role: "All-Rounder", base: 2.0, category: "Fielding" },
  { name: "Marcus Stoinis", country: "Australia", role: "All-Rounder", base: 1.5, category: "Fielding" },
  { name: "Jason Holder", country: "West Indies", role: "All-Rounder", base: 1.0, category: "Fielding" },
  { name: "Mitchell Marsh", country: "Australia", role: "All-Rounder", base: 1.5, category: "Fielding" },
  { name: "Shakib Al Hasan", country: "Bangladesh", role: "All-Rounder", base: 1.0, category: "Fielding" },
  { name: "Washington Sundar", country: "India", role: "All-Rounder", base: 1.0, category: "Fielding" },
  { name: "Axar Patel", country: "India", role: "All-Rounder", base: 1.0, category: "Fielding" },
  { name: "Krunal Pandya", country: "India", role: "All-Rounder", base: 1.0, category: "Fielding" },
  { name: "Deepak Hooda", country: "India", role: "All-Rounder", base: 0.5, category: "Fielding" },
  { name: "Rahul Tewatia", country: "India", role: "All-Rounder", base: 0.5, category: "Fielding" },
  { name: "Vijay Shankar", country: "India", role: "All-Rounder", base: 0.5, category: "Fielding" },
  { name: "Rishi Dhawan", country: "India", role: "All-Rounder", base: 0.5, category: "Fielding" },
  { name: "Romario Shepherd", country: "West Indies", role: "All-Rounder", base: 0.5, category: "Fielding" },
  { name: "Odean Smith", country: "West Indies", role: "All-Rounder", base: 0.5, category: "Fielding" },
  { name: "Daryl Mitchell", country: "New Zealand", role: "All-Rounder", base: 1.0, category: "Fielding" },
  { name: "Michael Bracewell", country: "New Zealand", role: "All-Rounder", base: 1.0, category: "Fielding" },
  { name: "Colin Munro", country: "New Zealand", role: "All-Rounder", base: 0.5, category: "Fielding" },
  // Adding more random generated all-rounders
  ...Array.from({ length: 30 }).map((_, i) => ({ name: `Reg. All-Rounder ${i + 1}`, country: "India", role: "All-Rounder", base: 0.2, category: "Fielding" }))

];
// --- AUTO PLAYER IMAGE GENERATOR ---
function getPlayerImage(name) {
  const formattedName = name.replace(/\s+/g, "_");
  return `https://en.wikipedia.org/wiki/Special:FilePath/${formattedName}.jpg`;
}

// --- STATE ---
let state = {
  teams: [],
  players: [],
  auction: {
    active: false,
    playerIdx: -1,
    currentBid: 0,
    lastBidder: null,
    timer: 15,
    interval: null,
    aiTimeout: null,
    aiMaxBids: {},
    rtmActive: false,
    rtmContext: null,
    involvedTeams: [],
    maxBids: 15, // Maximum bids an AI team will make on a player
  },
  user: null,
  userTeamId: null // Stores the ID of the team controlled by the user
};

// --- IPL 2026 DATA ---
const IPL_2026_SCHEDULE = [
  { date: "March 28", time: "7:30 PM", match: "RCB vs SRH", venue: "Bengaluru" },
  { date: "March 29", time: "3:30 PM", match: "CSK vs PBKS", venue: "Chennai" }, // Phase 1 match 2
  { date: "March 29", time: "7:30 PM", match: "MI vs KKR", venue: "Mumbai" },
  { date: "March 30", time: "7:30 PM", match: "RR vs CSK", venue: "Guwahati" },
  { date: "March 31", time: "7:30 PM", match: "PBKS vs GT", venue: "Mullanpur" },
  { date: "April 1", time: "7:30 PM", match: "LSG vs DC", venue: "Lucknow" },
  { date: "April 2", time: "7:30 PM", match: "KKR vs RCB", venue: "Kolkata" },
  { date: "April 3", time: "7:30 PM", match: "SRH vs MI", venue: "Hyderabad" },
  { date: "April 4", time: "3:30 PM", match: "DC vs MI", venue: "Delhi" },
  { date: "April 4", time: "7:30 PM", match: "GT vs RR", venue: "Ahmedabad" },
  { date: "April 5", time: "3:30 PM", match: "SRH vs LSG", venue: "Hyderabad" },
  { date: "April 5", time: "7:30 PM", match: "RCB vs CSK", venue: "Bengaluru" },
  { date: "April 6", time: "7:30 PM", match: "KKR vs PBKS", venue: "Kolkata" },
  { date: "April 7", time: "7:30 PM", match: "GT vs DC", venue: "Ahmedabad" },
  { date: "April 8", time: "7:30 PM", match: "RR vs LSG", venue: "Guwahati" },
  { date: "April 9", time: "7:30 PM", match: "PBKS vs MI", venue: "Mullanpur" },
  { date: "April 10", time: "7:30 PM", match: "RCB vs GT", venue: "Bengaluru" },
  { date: "April 11", time: "3:30 PM", match: "PBKS vs SRH", venue: "Mullanpur" },
  { date: "April 11", time: "7:30 PM", match: "CSK vs DC", venue: "Chennai" },
  { date: "April 12", time: "3:30 PM", match: "RR vs KKR", venue: "Guwahati" },
  { date: "April 12", time: "7:30 PM", match: "MI vs LSG", venue: "Mumbai" },
];

const IPL_2026_SQUADS = {
  csk: [
    { name: "Ruturaj Gaikwad", role: "batter", price: "Retained: ₹18 Cr", isCaptain: true },
    { name: "Ayush Mhatre", role: "batter", price: "Retained: ₹30 L" },
    { name: "Dewald Brevis", role: "batter", price: "Retained: ₹2.2 Cr" },
    { name: "Sarfaraz Khan", role: "batter", price: "Bought: ₹75 L" },
    { name: "Matthew Short", role: "batter", price: "Bought: ₹1.5 Cr" },
    { name: "MS Dhoni", role: "wk", price: "Retained: ₹4 Cr" },
    { name: "Sanju Samson", role: "wk", price: "Traded: ₹18 Cr" },
    { name: "Urvil Patel", role: "wk", price: "Retained: ₹30 L" },
    { name: "Shivam Dube", role: "allrounder", price: "Retained: ₹12 Cr" },
    { name: "Jamie Overton", role: "allrounder", price: "Retained: ₹1.5 Cr" },
    { name: "Ramakrishna Ghosh", role: "allrounder", price: "Retained: ₹30 L" },
    { name: "Akeal Hosein", role: "allrounder", price: "Bought: ₹2 Cr" },
    { name: "Aman Khan", role: "allrounder", price: "Bought: ₹40 L" },
    { name: "Prashant Veer", role: "allrounder", price: "Bought: ₹14.20 Cr" },
    { name: "Noor Ahmad", role: "bowler", price: "Retained: ₹10 Cr" },
    { name: "Khaleel Ahmed", role: "bowler", price: "Retained: ₹4.8 Cr" },
    { name: "Mukesh Choudhary", role: "bowler", price: "Retained: ₹30 L" },
    { name: "Nathan Ellis", role: "bowler", price: "Retained: ₹2 Cr" },
    { name: "Rahul Chahar", role: "bowler", price: "Bought: ₹5.20 Cr" },
    { name: "Matt Henry", role: "bowler", price: "Bought: ₹2 Cr" },
    { name: "Shreyas Gopal", role: "bowler", price: "Retained: ₹30 L" },
    { name: "Anshul Kamboj", role: "bowler", price: "Retained: ₹3.4 Cr" },
    { name: "Gurjapneet Singh", role: "bowler", price: "Retained: ₹2.2 Cr" }
  ],
  mi: [
    { name: "Hardik Pandya", role: "allrounder", price: "Retained: ₹16.35 Cr", isCaptain: true },
    { name: "Rohit Sharma", role: "batter", price: "Retained: ₹16.3 Cr" },
    { name: "Suryakumar Yadav", role: "batter", price: "Retained: ₹16.35 Cr" },
    { name: "Tilak Varma", role: "batter", price: "Retained: ₹8 Cr" },
    { name: "Nehal Wadhera", role: "batter", price: "Bought: ₹4.20 Cr" },
    { name: "Tim David", role: "batter", price: "Retained: ₹3 Cr" },
    { name: "Ishan Kishan", role: "wk", price: "Bought: ₹15 Cr" },
    { name: "Ryan Rickelton", role: "wk", price: "Bought: ₹1 Cr" },
    { name: "Quinton de Kock", role: "wk", price: "Bought: ₹1 Cr" },
    { name: "Mitchell Santner", role: "allrounder", price: "Bought: ₹2 Cr" },
    { name: "Will Jacks", role: "allrounder", price: "Retained: ₹5.25 Cr" },
    { name: "Sherfane Rutherford", role: "allrounder", price: "Bought: ₹1.5 Cr" },
    { name: "Corbin Bosch", role: "allrounder", price: "Bought: ₹30 L" },
    { name: "Shams Mulani", role: "allrounder", price: "Bought: ₹30 L" },
    { name: "Jasprit Bumrah", role: "bowler", price: "Retained: ₹18 Cr" },
    { name: "Deepak Chahar", role: "bowler", price: "Retained: ₹9.25 Cr" },
    { name: "Gerald Coetzee", role: "bowler", price: "Bought: ₹5 Cr" },
    { name: "Nuwan Thushara", role: "bowler", price: "Bought: ₹4.8 Cr" },
    { name: "Trent Boult", role: "bowler", price: "Retained: ₹12.5 Cr" },
    { name: "Allah Ghazanfar", role: "bowler", price: "Bought: ₹4.8 Cr" }
  ],
  rcb: [
    { name: "Rajat Patidar", role: "batter", price: "Retained: ₹11 Cr", isCaptain: true },
    { name: "Virat Kohli", role: "batter", price: "Retained: ₹21 Cr" },
    { name: "Josh Hazlewood", role: "bowler", price: "Retained: ₹12.5 Cr" },
    { name: "Phil Salt", role: "wk", price: "Retained: ₹11.5 Cr" },
    { name: "Jitesh Sharma", role: "wk", price: "Retained: ₹11 Cr" },
    { name: "Bhuvneshwar Kumar", role: "bowler", price: "Retained: ₹10.75 Cr" },
    { name: "Venkatesh Iyer", role: "allrounder", price: "Bought: ₹7 Cr" },
    { name: "Krunal Pandya", role: "allrounder", price: "Retained: ₹5.75 Cr" },
    { name: "Ramandeep Singh", role: "allrounder", price: "Bought: ₹5.20 Cr" },
    { name: "Yash Dayal", role: "bowler", price: "Retained: ₹5 Cr" },
    { name: "Tim David", role: "batter", price: "Retained: ₹3 Cr" }
  ],
  kkr: [
    { name: "Ajinkya Rahane", role: "batter", price: "Retained: ₹1.5 Cr", isCaptain: true },
    { name: "Rinku Singh", role: "batter", price: "Retained: ₹13 Cr" },
    { name: "Manish Pandey", role: "batter", price: "Bought: ₹3 Cr" },
    { name: "Angkrish Raghuvanshi", role: "batter", price: "Retained: ₹3 Cr" },
    { name: "Rahul Tripathi", role: "batter", price: "Bought: ₹4.8 Cr" },
    { name: "Rovman Powell", role: "batter", price: "Bought: ₹1.5 Cr" },
    { name: "Sarthak Ranjan", role: "batter", price: "Bought: ₹30 L" },
    { name: "Finn Allen", role: "wk", price: "Bought: ₹2 Cr" },
    { name: "Tim Seifert", role: "wk", price: "Bought: ₹1.5 Cr" },
    { name: "Tejasvi Dahiya", role: "wk", price: "Bought: ₹30 L" },
    { name: "Sunil Narine", role: "allrounder", price: "Retained: ₹12 Cr" },
    { name: "Cameron Green", role: "allrounder", price: "Bought: ₹25.20 Cr" },
    { name: "Ramandeep Singh", role: "allrounder", price: "Retained: ₹4 Cr" },
    { name: "Anukul Roy", role: "allrounder", price: "Bought: ₹40 L" },
    { name: "Rachin Ravindra", role: "allrounder", price: "Bought: ₹2 Cr" },
    { name: "Varun Chakravarthy", role: "bowler", price: "Retained: ₹12 Cr" },
    { name: "Harshit Rana", role: "bowler", price: "Retained: ₹4 Cr" },
    { name: "Vaibhav Arora", role: "bowler", price: "Retained: ₹1.8 Cr" },
    { name: "Umran Malik", role: "bowler", price: "Retained: ₹75 L" },
    { name: "Matheesha Pathirana", role: "bowler", price: "Bought: ₹18 Cr" },
    { name: "Akash Deep", role: "bowler", price: "Bought: ₹3 Cr" },
    { name: "Daksh Kamrae", role: "bowler", price: "Bought: ₹30 L" }
  ],
  lsg: [
    { name: "Rishabh Pant", role: "wk", price: "Bought: ₹27 Cr", isCaptain: true },
    { name: "Nicholas Pooran", role: "wk", price: "Retained: ₹21 Cr", isViceCaptain: true },
    { name: "Mayank Yadav", role: "bowler", price: "Retained: ₹11 Cr" },
    { name: "Mohammed Shami", role: "bowler", price: "Retained: ₹10 Cr" },
    { name: "Avesh Khan", role: "bowler", price: "Retained: ₹9.75 Cr" },
    { name: "Josh Inglis", role: "wk", price: "Bought: ₹8.60 Cr" },
    { name: "Mitchell Marsh", role: "allrounder", price: "Bought: ₹7 Cr" },
    { name: "Wanindu Hasaranga", role: "allrounder", price: "Bought: ₹2 Cr" },
    { name: "Anrich Nortje", role: "bowler", price: "Bought: ₹2 Cr" }
  ],
  gt: [
    { name: "Shubman Gill", role: "batter", price: "Retained: ₹18 Cr", isCaptain: true },
    { name: "Rashid Khan", role: "bowler", price: "Retained: ₹18 Cr" },
    { name: "Jos Buttler", role: "wk", price: "Retained: ₹12 Cr" },
    { name: "Mohammed Siraj", role: "bowler", price: "Retained: ₹10 Cr" },
    { name: "Prasidh Krishna", role: "bowler", price: "Retained: ₹6 Cr" },
    { name: "Sai Sudharsan", role: "batter", price: "Retained: ₹8 Cr" }
  ],
  rr: [
    { name: "Riyan Parag", role: "batter", price: "Retained: ₹14 Cr", isCaptain: true },
    { name: "Ravindra Jadeja", role: "allrounder", price: "Traded: ₹14 Cr", isViceCaptain: true },
    { name: "Yashasvi Jaiswal", role: "batter", price: "Retained: ₹18 Cr" },
    { name: "Dhruv Jurel", role: "wk", price: "Retained: ₹14 Cr" },
    { name: "Shimron Hetmyer", role: "batter", price: "Retained: ₹11 Cr" },
    { name: "Jofra Archer", role: "bowler", price: "Retained: ₹12.5 Cr" },
    { name: "Ravi Bishnoi", role: "bowler", price: "Bought: ₹7.2 Cr" },
    { name: "Tushar Deshpande", role: "bowler", price: "Retained: ₹6.5 Cr" },
    { name: "Sandeep Sharma", role: "bowler", price: "Retained: ₹4 Cr" },
    { name: "Sam Curran", role: "allrounder", price: "Traded: ₹2.4 Cr" }
  ],
  dc: [
    { name: "Axar Patel", role: "allrounder", price: "Retained: ₹16.5 Cr", isCaptain: true },
    { name: "KL Rahul", role: "wk", price: "Retained: ₹14 Cr", isViceCaptain: true },
    { name: "Kuldeep Yadav", role: "bowler", price: "Retained: ₹13.25 Cr" },
    { name: "Mitchell Starc", role: "bowler", price: "Retained: ₹11.75 Cr" },
    { name: "T Natarajan", role: "bowler", price: "Retained: ₹10.75 Cr" },
    { name: "Tristan Stubbs", role: "wk", price: "Retained: ₹10 Cr" },
    { name: "Mukesh Kumar", role: "bowler", price: "Retained: ₹8 Cr" },
    { name: "Auqib Nabi Dar", role: "allrounder", price: "Bought: ₹8.40 Cr" },
    { name: "Pathum Nissanka", role: "batter", price: "Bought: ₹4 Cr" }
  ],
  pbks: [
    { name: "Shreyas Iyer", role: "batter", price: "Bought: ₹15 Cr", isCaptain: true },
    { name: "Ben Dwarshuis", role: "bowler", price: "Bought: ₹5 Cr" },
    { name: "Cooper Connolly", role: "allrounder", price: "Bought: ₹4 Cr" },
    { name: "Arshdeep Singh", role: "bowler", price: "Retained: ₹8 Cr" },
    { name: "Shashank Singh", role: "batter", price: "Retained: ₹4 Cr" }
  ],
  srh: [
    { name: "Pat Cummins", role: "bowler", price: "Retained: ₹18 Cr", isCaptain: true },
    { name: "Heinrich Klaasen", role: "wk", price: "Retained: ₹16 Cr" },
    { name: "Travis Head", role: "batter", price: "Retained: ₹14 Cr" },
    { name: "Abhishek Sharma", role: "allrounder", price: "Retained: ₹14 Cr" },
    { name: "Liam Livingstone", role: "allrounder", price: "Bought: ₹13 Cr" },
    { name: "Nitish Kumar Reddy", role: "allrounder", price: "Retained: ₹6 Cr" },
    { name: "Jack Edwards", role: "allrounder", price: "Bought: ₹3 Cr" },
    { name: "Ishan Kishan", role: "wk", price: "Retained: ₹15 Cr" }
  ]
};

// --- CONSTANTS ---
function updateTopThreePlayers() {
  const container = document.getElementById("top-three-list");
  if (!container) return;

  // Collect all sold/retained players
  let allSold = [];
  state.teams.forEach(team => {
    team.purchased.forEach(p => {
      allSold.push({
        name: p.name,
        price: p.price,
        teamName: team.name,
        teamId: team.id
      });
    });
  });

  // Sort by price descending
  allSold.sort((a, b) => b.price - a.price);

  // Take top 3
  const topThree = allSold.slice(0, 3);

  if (topThree.length === 0) {
    container.innerHTML = '<div class="top-player-placeholder">Auction in progress...</div>';
    return;
  }

  container.innerHTML = "";
  topThree.forEach((p, index) => {
    const rank = index + 1;
    const rankClass = `rank-${rank}`;
    const medalClass = rank === 1 ? 'gold' : rank === 2 ? 'silver' : 'bronze';

    const card = document.createElement("div");
    card.className = `top-player-card ${medalClass}`;
    card.innerHTML = `
      <div class="rank-badge ${rankClass}">${p.name.charAt(0)}</div>
      <div class="top-player-info">
        <span class="top-player-name">${p.name}</span>
        <span class="top-player-team">${p.teamName}</span>
      </div>
      <div class="top-player-price">₹${p.price.toFixed(2)} Cr</div>
    `;
    container.appendChild(card);
  });
}

function init() {
  // Clone data to state
  state.teams = JSON.parse(JSON.stringify(TEAMS_CONFIG));
  state.teams.forEach(t => {
    t.purchased = [];
    t.playingEleven = []; // IDs of players in Playing 11
    t.rtmCards = 1; // Each team gets 1 RTM card
  });

  // Player-Team Mapping (Last Season)
  const LAST_SEASON_MAP = {
    "Virat Kohli": "rcb", "Glenn Maxwell": "rcb", "Mohammed Siraj": "rcb", "Faf du Plessis": "rcb",
    "Rohit Sharma": "mi", "Jasprit Bumrah": "mi", "Hardik Pandya": "mi", "Suryakumar Yadav": "mi", "Ishan Kishan": "mi",
    "Ravindra Jadeja": "csk", "Moeen Ali": "csk", "Ruturaj Gaikwad": "csk", "MS Dhoni": "csk",
    "Rishabh Pant": "dc", "David Warner": "dc", "Axar Patel": "dc",
    "Shreyas Iyer": "kkr", "Andre Russell": "kkr", "Sunil Narine": "kkr", "Venkatesh Iyer": "kkr",
    "Sanju Samson": "rr", "Jos Buttler": "rr", "Yuzvendra Chahal": "rr", "Trent Boult": "rr",
    "K.L. Rahul": "lsg", "Quinton de Kock": "lsg", "Ravi Bishnoi": "lsg",
    "Shubman Gill": "gt", "Rashid Khan": "gt", "David Miller": "gt", "Mohammed Shami": "gt",
    "Shikhar Dhawan": "pbks", "Arshdeep Singh": "pbks", "Kagiso Rabada": "pbks", "Sam Curran": "pbks",
    "Aiden Markram": "srh", "Bhuvneshwar Kumar": "srh", "Heinrich Klaasen": "srh",
    "Sunil Narine": "kkr", "Andre Russell": "kkr"
  };

  state.players = JSON.parse(JSON.stringify(PLAYERS_DB)).map((p, i) => ({
    ...p,
    id: i,
    sold: false,
    lastTeam: LAST_SEASON_MAP[p.name] || null,
    stats: generateRandomStats(p.role) // Generate consistent random stats for demo
  }));

  setupEventListeners();
  updateTopThreePlayers(); // Initial call
}

function setupEventListeners() {
  // Login
  document.getElementById("login-form").addEventListener("submit", (e) => {
    e.preventDefault();
    handleLogin();
  });

  // Filters
  document.querySelectorAll(".filter-btn").forEach(btn => {
    btn.addEventListener("click", () => filterPlayers(btn.dataset.filter));
  });

  // Modal Close
  const closeModalBtn = document.getElementById("close-modal");
  if (closeModalBtn) closeModalBtn.onclick = closeModal;

  document.getElementById("team-modal").onclick = (e) => {
    if (e.target.id === "team-modal") closeModal();
  };

  // Retention Listeners
  document.getElementById("finish-retention-btn").addEventListener("click", finishRetentionPhase);
  document.getElementById("close-ret-modal").addEventListener("click", closeRetentionModal);
  document.getElementById("retention-modal").addEventListener("click", (e) => {
    if (e.target.id === "retention-modal") closeRetentionModal();
  });
  document.getElementById("save-retention-btn").addEventListener("click", saveRetentions);

  // Team Info Modal Close
  document.getElementById("close-info-modal").onclick = closeTeamInfoModal;
  document.getElementById("team-info-modal").onclick = (e) => {
    if (e.target.id === "team-info-modal") closeTeamInfoModal();
  };

  // News Modal Open/Close
  const newsBtn = document.getElementById("news-btn");
  if (newsBtn) {
    newsBtn.addEventListener("click", () => {
      document.getElementById("news-modal").classList.remove("hidden");
    });
  }

  const closeNewsBtn = document.getElementById("close-news-modal");
  if (closeNewsBtn) {
    closeNewsBtn.addEventListener("click", () => {
      document.getElementById("news-modal").classList.add("hidden");
    });
  }

  const newsModal = document.getElementById("news-modal");
  if (newsModal) {
    newsModal.addEventListener("click", (e) => {
      if (e.target.id === "news-modal") document.getElementById("news-modal").classList.add("hidden");
    });
  }

  // Schedule Modal
  const openScheduleBtn = document.getElementById("open-schedule-btn");
  if (openScheduleBtn) {
    openScheduleBtn.addEventListener("click", () => {
      document.getElementById("schedule-modal").classList.remove("hidden");
      populateSchedule();
    });
  }
  document.getElementById("close-schedule-modal")?.addEventListener("click", () => {
    document.getElementById("schedule-modal").classList.add("hidden");
  });

  // Squads Modal
  const openSquadsBtn = document.getElementById("open-squads-btn");
  if (openSquadsBtn) {
    openSquadsBtn.addEventListener("click", () => {
      document.getElementById("squads-modal").classList.remove("hidden");
      populateSquadFilterBar();
    });
  }
  document.getElementById("close-squads-modal")?.addEventListener("click", () => {
    document.getElementById("squads-modal").classList.add("hidden");
  });
}

function populateSchedule() {
  const container = document.getElementById("schedule-list");
  if (!container) return;
  container.innerHTML = "";
  
  IPL_2026_SCHEDULE.forEach(match => {
    // Colorize team abbreviations
    const styledMatch = match.match.replace(/\b(CSK|MI|RCB|KKR|GT|LSG|RR|DC|PBKS|SRH)\b/g, (team) => {
      const colorClass = team.toLowerCase() + "-color";
      return `<span class="team-pill ${colorClass}">${team}</span>`;
    });

    const el = document.createElement("div");
    el.className = "glass-panel";
    el.style.padding = "10px 15px";
    el.style.display = "flex";
    el.style.justifyContent = "space-between";
    el.style.alignItems = "center";
    el.style.marginBottom = "10px";
    
    el.innerHTML = `
      <div>
        <strong style="color:var(--gold); font-size:1.1em;">${match.date}</strong>
        <span style="color:#aaa; margin-left:10px; font-size:0.9em;">${match.time} IST</span>
      </div>
      <div style="font-weight:bold; font-size:1.2em;">${styledMatch}</div>
      <div style="color:#888; font-size:0.9em;">📍 ${match.venue}</div>
    `;
    container.appendChild(el);
  });
}

function populateSquadFilterBar() {
  const filterBar = document.getElementById("squad-filter-bar");
  if (!filterBar || filterBar.children.length > 0) return; // Already populated
  
  const teams = [
    { id: "csk", name: "CSK" }, { id: "mi", name: "MI" }, { id: "rcb", name: "RCB" },
    { id: "kkr", name: "KKR" }, { id: "gt", name: "GT" }, { id: "lsg", name: "LSG" },
    { id: "rr", name: "RR" }, { id: "dc", name: "DC" }, { id: "pbks", name: "PBKS" },
    { id: "srh", name: "SRH" }
  ];

  teams.forEach(team => {
    const btn = document.createElement("button");
    btn.className = "filter-btn";
    btn.textContent = team.name;
    btn.onclick = () => {
      // Update active state
      Array.from(filterBar.children).forEach(b => b.classList.remove("active"));
      btn.classList.add("active");
      
      // Update display area
      document.getElementById("squad-team-name").textContent = TEAM_DETAILS[team.id]?.owner.split(',')[0] + " (" + team.name + ") Roster";
      const list = document.getElementById("squad-player-list");
      list.innerHTML = "";
      
      const players = IPL_2026_SQUADS[team.id] || [];
      
      // Group and sort players by specific roles
      const rolesOrder = [
        { id: 'batter', label: '🏏 Batters' },
        { id: 'wk', label: '🧤 Wicketkeepers' },
        { id: 'allrounder', label: '🔄 All-rounders' },
        { id: 'bowler', label: '⚡ Bowlers' }
      ];

      rolesOrder.forEach(roleGroup => {
        const playersInRole = players.filter(p => p.role === roleGroup.id);
        
        if (playersInRole.length > 0) {
          // Sort Captain & VC to top of their role group
          playersInRole.sort((a, b) => {
            if (a.isCaptain) return -1;
            if (b.isCaptain) return 1;
            if (a.isViceCaptain) return -1;
            if (b.isViceCaptain) return 1;
            return 0;
          });

          // Create Header for this role
          const heading = document.createElement("h3");
          heading.style.marginTop = "20px";
          heading.style.marginBottom = "5px";
          heading.style.color = "var(--gold)";
          heading.style.borderBottom = "1px solid rgba(255, 215, 0, 0.2)";
          heading.style.paddingBottom = "5px";
          heading.textContent = roleGroup.label;
          list.appendChild(heading);

          // Create modern grid for the players
          const grid = document.createElement("div");
          grid.className = "squad-role-grid";

          playersInRole.forEach(player => {
            const card = document.createElement("div");
            card.className = "squad-card glass-panel";
            
            if (player.isCaptain || player.isViceCaptain) {
                card.classList.add("leadership-highlight");
            }

            const leaderTag = player.isCaptain ? " <span style='color:var(--gold); font-weight:bold; font-size:0.85em; margin-left:5px;'>(Captain)</span>" : (player.isViceCaptain ? " <span style='color:silver; font-weight:bold; font-size:0.8em; margin-left:5px;'>(VC)</span>" : "");
            const priceText = player.price ? player.price : "Price Pending";

            card.innerHTML = `
              <div style="display:flex; justify-content:space-between; align-items:center;">
                <div style="font-weight:bold; font-size:1.15em; color: #fff;">
                  ${player.name}${leaderTag}
                </div>
              </div>
              <div style="margin-top:8px;">
                <span class="price-badge">${priceText}</span>
              </div>
            `;
            grid.appendChild(card);
          });
          list.appendChild(grid);
        }
      });
    };
    filterBar.appendChild(btn);
  });
  
  // Click the first one to initialize
  filterBar.children[0].click();
}

// --- LOGIC: Login ---
function handleLogin() {
  const user = document.getElementById("username").value;
  const key = document.getElementById("password").value;

  if (key === "ipl2026" || key === "") { // Allow empty for ease
    state.user = user || "Admin";
    document.getElementById("login-screen").classList.add("hidden");
    // Forward to Retention Phase instead of Dashboard
    initRetentionPhase();
    document.getElementById("user-display").textContent = state.user;
  } else {
    document.getElementById("login-error").textContent = "Invalid Access Key";
  }
}

// --- LOGIC: Rendering ---
function renderDashboard() {
  updatePlayerCount();
  renderPlayersList();
  renderTeamsGrid();
}

function updatePlayerCount() {
  const total = state.players.length;
  const sold = state.players.filter(p => p.sold).length;
  document.getElementById("player-count").textContent = `${sold}/${total}`;
}

function renderPlayersList(filter = "all") {
  const listEl = document.getElementById("players-list");
  listEl.innerHTML = "";

  state.players.forEach(p => {
    // Modify this to filter by "category" instead of "role"
    if (filter !== "all" && p.category !== filter) return;

    const li = document.createElement("li");
    li.className = `player-row ${p.sold ? "sold" : ""}`;
    li.innerHTML = `
            <div>
                <strong>${p.name}</strong>
                <small style="color:#aaa; display:block;">${p.category} • ${p.role} • ${p.country}</small>
            </div>
            <div style="text-align:right;">
                <span class="badge">₹${p.base} Cr</span>
            </div>
        `;
    li.onclick = () => {
      if (!p.sold && !state.auction.active) startAuction(p.id);
    };
    listEl.appendChild(li);
  });
}

function renderTeamsGrid() {
  const grid = document.getElementById("teams-grid");
  grid.innerHTML = "";

  state.teams.forEach(t => {
    // Calculate remaining budget
    const spent = t.purchased.reduce((acc, curr) => acc + curr.price, 0);
    const remaining = (t.budget - spent).toFixed(2);

    const card = document.createElement("div");
    card.className = `team-card team-${t.id}`;
    card.id = `team-card-${t.id}`;
    card.innerHTML = `
            <div class="team-header-row">
                <div class="team-logo-wrapper">
                    <img src="images/${t.id}.webp" onerror="this.src='https://ui-avatars.com/api/?name=${t.name}&background=random&color=fff&size=64'" alt="${t.name}" class="team-logo-img">
                </div>
                <span class="team-code">${t.name}</span>
                <span class="team-budget">₹${remaining} Cr</span>
            </div>
            <div style="font-size:0.8rem; margin-bottom:5px; color:#aaa;">
                Squad: ${t.purchased.length}
            </div>
            <div class="team-actions">
                <input type="number" id="bid-input-${t.id}" class="micro-input" placeholder="Bid" step="0.25">
                <button type="button" id="bid-btn-${t.id}" class="micro-btn">BID</button>
            </div>
        `;

    // Event listener for bid - Stop Propagation handled in function logic or here
    const btn = card.querySelector(`#bid-btn-${t.id}`);
    btn.onclick = (e) => {
      e.preventDefault(); // Extra safety
      e.stopPropagation();
      placeBid(t.id);
    }

    const input = card.querySelector(`#bid-input-${t.id}`);
    input.onclick = (e) => e.stopPropagation();
    // Handle Enter key in bid input
    input.addEventListener("keydown", (e) => {
      if (e.key === "Enter") {
        e.preventDefault(); // Prevent form submission
        e.stopPropagation();
        placeBid(t.id);
      }
    });

    // Disable inputs and buttons if team is computer-controlled (unless no user team chosen yet for safety)
    if (state.userTeamId && state.userTeamId !== t.id) {
      input.disabled = true;
      input.placeholder = "AI";
      input.style.opacity = "0.5";
      btn.disabled = true;
      btn.style.opacity = "0.5";
      btn.style.cursor = "not-allowed";
    }

    // Card Click opens modal
    card.onclick = () => openTeamModal(t.id);

    grid.appendChild(card);
  });
}

// --- LOGIC: Auction ---
function startAuction(playerId) {
  const player = state.players.find(p => p.id === playerId);
  state.auction.playerIdx = playerId;
  state.auction.currentBid = player.base;
  state.auction.lastBidder = null;
  state.auction.active = true;
  state.auction.timer = 15;
  state.auction.involvedTeams = [];

  // Clear any existing AI timeout
  clearTimeout(state.auction.aiTimeout);
  state.auction.aiMaxBids = {};

  // Generate AI Max Bids for this player
  state.teams.forEach(t => {
    if (t.id !== state.userTeamId) {
      // Random max bid based on player base, role, and a random luck factor
      const maxMultiplier = Math.random() * 5 + 1; // 1x to 6x base price
      state.auction.aiMaxBids[t.id] = player.base * maxMultiplier;
    }
  });

  // Hide Bidding War Section
  document.getElementById("bidding-war-section").classList.add("hidden");
  document.getElementById("war-chips-container").innerHTML = "";

  // Stop background music (IPL Theme)
  stopAudio();

  // UI Updates
  document.getElementById("welcome-state").classList.add("hidden");
  document.getElementById("auction-card").classList.remove("hidden");

  // Card Data
  document.getElementById("card-name").textContent = player.name;
  document.getElementById("card-role").textContent = player.role;

  // Country & Flag
  const flag = getFlag(player.country);
  document.getElementById("card-country").textContent = flag;
  document.getElementById("card-country-name").textContent = player.country;

  // Stats
  document.getElementById("stat-matches").textContent = player.stats.matches;
  document.getElementById("stat-runs").textContent = player.stats.runs;
  document.getElementById("stat-avg").textContent = player.stats.avg;
  document.getElementById("stat-sr").textContent = player.stats.sr;
  document.getElementById("stat-hs").textContent = player.stats.hs;

  document.getElementById("card-base-price").textContent = `₹${player.base} Cr`;
  document.getElementById("card-current-bid").textContent = `₹${player.base} Cr`;
  document.getElementById("card-bidder").textContent = "Opening Bid";

  // IMAGE FLASH LOGIC
  // REAL PLAYER IMAGE LOGIC
  const imgEl = document.getElementById("card-avatar");
  const dummyEl = document.getElementById("dummy-avatar");

  const imageUrl = getPlayerImage(player.name);

  imgEl.onerror = function () {
    // fallback if wikipedia image not found
    imgEl.src = `https://ui-avatars.com/api/?name=${player.name}&background=random&size=256&bold=true&color=fff`;
  };

  imgEl.src = imageUrl;
  imgEl.classList.remove("hidden");
  dummyEl.classList.add("hidden");

  // Restart Animation
  imgEl.classList.remove("flash-anim");
  void imgEl.offsetWidth;
  imgEl.classList.add("flash-anim");

  // Restart Animation
  imgEl.classList.remove("flash-anim");
  void imgEl.offsetWidth; // Trigger reflow
  imgEl.classList.add("flash-anim");

  // Reset Animations for Stamp
  const stamp = document.getElementById("status-stamp");
  stamp.classList.remove("stamp-anim");
  stamp.classList.add("hidden");

  // Start Timer
  runTimer();

  showToast(`Auction started for ${player.name}`);

  // Trigger AI evaluation
  scheduleComputerBid();
}

function runTimer() {
  clearInterval(state.auction.interval);
  updateTimerUI();

  state.auction.interval = setInterval(() => {
    state.auction.timer--;
    updateTimerUI();

    if (state.auction.timer <= 0) {
      endAuction();
    }
  }, 1000);
}

function updateTimerUI() {
  const t = state.auction.timer;
  const ring = document.getElementById("timer-ring-circle");
  document.getElementById("card-timer").textContent = t;

  // Update progress
  const offset = 163 - ((t / 15) * 163);
  ring.style.strokeDashoffset = offset;

  // Danger color
  if (t <= 5) ring.style.stroke = "#ff4444";
  else ring.style.stroke = "var(--accent)";
}

function placeBid(teamId) {
  if (!state.auction.active) return;

  const team = state.teams.find(t => t.id === teamId);
  const input = document.getElementById(`bid-input-${teamId}`);
  let amount = parseFloat(input.value);

  // Validation
  if (!amount || isNaN(amount)) {
    // Auto-increment logic if empty: current + 0.25
    amount = state.auction.currentBid + 0.25;
  }

  if (amount <= state.auction.currentBid) {
    showToast("Bid higher than current!", "error");
    return;
  }

  // Check Budget
  const spent = team.purchased.reduce((a, c) => a + c.price, 0);
  if ((team.budget - spent) < amount) {
    showToast("Insufficient Funds!", "error");
    return;
  }

  // Success
  state.auction.currentBid = amount;
  state.auction.lastBidder = teamId;
  state.auction.timer = 10; // Reset timer

  // Track Involved Teams
  if (!state.auction.involvedTeams.includes(teamId)) {
    state.auction.involvedTeams.push(teamId);
  }
  updateBiddingWarUI();

  // Clear pending AI bids and reschedule
  clearTimeout(state.auction.aiTimeout);

  // Actually apply the bid via code simulation if it was AI, 
  // or just handle the manual input side-effects.
  // The UI update and state update happen above.

  // Reschedule AI bid Evaluation
  scheduleComputerBid();

  // UI Updates
  document.getElementById("card-current-bid").textContent = `₹${amount.toFixed(2)} Cr`;
  document.getElementById("card-bidder").textContent = team.name;
  document.getElementById(`team-card-${teamId}`).classList.add("pulse-card");
  setTimeout(() => document.getElementById(`team-card-${teamId}`).classList.remove("pulse-card"), 1000);

  input.value = ""; // Clear input
  showToast(`New Bid: ₹${amount.toFixed(2)} Cr by ${team.name}`);
}

function updateBiddingWarUI() {
  const container = document.getElementById("war-chips-container");
  const section = document.getElementById("bidding-war-section");
  const involved = state.auction.involvedTeams;

  if (involved.length < 2) {
    section.classList.add("hidden");
    return;
  }

  const currentPlayer = state.players[state.auction.playerIdx];
  const role = currentPlayer.role;

  section.classList.remove("hidden");
  container.innerHTML = "";

  involved.forEach(tId => {
    const team = state.teams.find(t => t.id === tId);
    const spent = team.purchased.reduce((a, c) => a + c.price, 0);
    const remaining = (team.budget - spent).toFixed(2);

    // Filter matching players specifically
    const matchingPlayers = team.purchased.filter(p => p.role === role);
    const roleCount = matchingPlayers.length;
    const playerNames = matchingPlayers.map(p => p.name).join(", ");

    const chip = document.createElement("div");
    chip.className = "war-chip";
    chip.innerHTML = `
      <img src="images/${team.id}.webp" onerror="this.src='https://ui-avatars.com/api/?name=${team.name}&background=random&color=fff&size=32'" class="war-team-logo">
      <div class="war-team-info">
        <span class="war-team-name">${team.name}</span>
        <span class="war-team-budget">₹${remaining} Cr</span>
        <span class="war-role-count">${role}: ${roleCount} ${roleCount > 0 ? `(${playerNames})` : ''}</span>
      </div>
    `;
    container.appendChild(chip);
  });
}

function endAuction() {
  clearInterval(state.auction.interval);
  clearTimeout(state.auction.aiTimeout);
  state.auction.active = false;

  const player = state.players[state.auction.playerIdx];

  if (state.auction.lastBidder) {
    const winningTeamId = state.auction.lastBidder;
    const finalPrice = state.auction.currentBid;
    const exTeamId = player.lastTeam;

    // Check RTM Eligibility
    const exTeam = state.teams.find(t => t.id === exTeamId);

    // Eligible if: exTeam exists, is NOT the winning team, has RTM cards, and has budget
    const isRTMEligible = exTeam &&
      exTeamId !== winningTeamId &&
      exTeam.rtmCards > 0 &&
      (exTeam.budget - exTeam.purchased.reduce((a, c) => a + c.price, 0)) >= finalPrice;

    if (isRTMEligible) {
      showRTMModal(player, exTeam, winningTeamId, finalPrice);
    } else {
      finalizeSold(player, winningTeamId, finalPrice);
    }

  } else {
    // UNSOLD (Keep existing logic)
    const stamp = document.getElementById("status-stamp");
    stamp.textContent = "UNSOLD";
    stamp.style.color = "#fff";
    stamp.style.borderColor = "#fff";
    stamp.classList.remove("hidden");
    void stamp.offsetWidth;
    stamp.classList.add("stamp-anim");

    showToast(`${player.name} remained Unsold.`, "info");
    stopAudio();
    playUnsoldSound();

    // Refresh Lists
    renderTeamsGrid();
    renderPlayersList(document.querySelector(".filter-btn.active").dataset.filter);
    updatePlayerCount();

    // AUTOMATION: Start next auction after delay
    setTimeout(() => {
      startNextAuction();
    }, 5000);
  }
}

function showRTMModal(player, exTeam, winningTeamId, price) {
  state.auction.rtmActive = true;
  state.auction.rtmContext = { player, exTeam, winningTeamId, price };

  const modal = document.getElementById("rtm-modal");
  const msg = document.getElementById("rtm-message");

  msg.innerHTML = `
    <p><strong>${player.name}</strong> sold to <strong>${state.teams.find(t => t.id === winningTeamId).name}</strong> for <strong>₹${price.toFixed(2)} Cr</strong>.</p>
    <p>Does <strong>${exTeam.name}</strong> (Ex-Team) want to match this bid?</p>
    <p><small>(RTM Cards Left: ${exTeam.rtmCards})</small></p>
  `;

  modal.classList.remove("hidden");

  // Handlers
  document.getElementById("rtm-use-btn").onclick = () => handleRTMDecision(true);
  document.getElementById("rtm-decline-btn").onclick = () => handleRTMDecision(false);
}

function handleRTMDecision(useRTM) {
  const { player, exTeam, winningTeamId, price } = state.auction.rtmContext;
  document.getElementById("rtm-modal").classList.add("hidden");
  state.auction.rtmActive = false;

  if (useRTM) {
    exTeam.rtmCards--;
    showToast(`${exTeam.name} used RTM for ${player.name}!`, "success");
    finalizeSold(player, exTeam.id, price, true);
  } else {
    finalizeSold(player, winningTeamId, price);
  }
}

function finalizeSold(player, teamId, price, isRTM = false) {
  const team = state.teams.find(t => t.id === teamId);
  team.purchased.push({ name: player.name, price: price, isRTM: isRTM, role: player.role });
  player.sold = true;

  // Show SOLD Stamp
  const stamp = document.getElementById("status-stamp");
  stamp.textContent = isRTM ? "RTM USED" : "SOLD";
  stamp.style.color = "#ff4444";
  stamp.style.borderColor = "#ff4444";
  stamp.classList.remove("hidden");
  void stamp.offsetWidth;
  stamp.classList.add("stamp-anim");

  showToast(`${player.name} ${isRTM ? 'RTM-ed by' : 'SOLD to'} ${team.name}!`, "success");

  // Add to Rail
  addSoldToRail(player.name, price, team.name, team.id);

  // Audio & Refresh
  playHammerSound();
  playTeamTheme(team.id);
  renderTeamsGrid();
  renderPlayersList(document.querySelector(".filter-btn.active").dataset.filter);
  updatePlayerCount();
  updateTopThreePlayers(); // Update Top 3 List

  // AUTOMATION: Start next auction after delay
  setTimeout(() => {
    startNextAuction();
  }, 5000);
}

function startNextAuction() {
  if (state.auction.active) return; // Safety check

  // Find next unsold player
  const nextPlayer = state.players.find(p => !p.sold);
  if (nextPlayer) {
    showToast(`Incoming: ${nextPlayer.name}...`, "info");
    setTimeout(() => {
      startAuction(nextPlayer.id);
    }, 1000);
  } else {
    showToast("All players auctioned!", "success");
    playIPLTheme(); // Celebration music
  }
}

// --- AI BIDDING LOGIC ---
function scheduleComputerBid() {
  if (!state.auction.active) return;
  if (!state.userTeamId) return; // Wait until a user team is picked

  const currentBid = state.auction.currentBid;

  // Find AI teams that CAN bid and WANT to bid
  const eligibleAITeams = state.teams.filter(t => {
    // Exclude user team
    if (t.id === state.userTeamId) return false;

    // Don't bid against self
    if (state.auction.lastBidder === t.id) return false;

    // Check if within generated AI budget constraint for this player
    const aiMaxForPlayer = state.auction.aiMaxBids[t.id] || 0;
    const bidAmount = currentBid + 0.25;
    if (bidAmount > aiMaxForPlayer) return false;

    // Check real budget constraint
    const spent = t.purchased.reduce((acc, curr) => acc + curr.price, 0);
    const remaining = t.budget - spent;
    if (remaining < bidAmount) return false;

    // Check squad size constraint (max 25)
    if (t.purchased.length >= 25) return false;

    return true;
  });

  if (eligibleAITeams.length === 0) {
    // No AI can bid anymore
    return;
  }

  // Randomly select one eligible AI team to bid
  const randomIndex = Math.floor(Math.random() * eligibleAITeams.length);
  const selectedAITeam = eligibleAITeams[randomIndex];

  // Random delay between 1.5s and 4.5s to simulate thinking
  const delay = Math.floor(Math.random() * 3000) + 1500;

  state.auction.aiTimeout = setTimeout(() => {
    // Check state hasn't changed wildly
    if (!state.auction.active) return;

    // Execute bid
    const bidAmount = state.auction.currentBid + 0.25;
    const input = document.getElementById(`bid-input-${selectedAITeam.id}`);
    if (input) {
      input.value = bidAmount; // Simulate UI input filler
    }
    placeBid(selectedAITeam.id);
  }, delay);
}

// --- AUDIO LOGIC ---
let currentAudio = null;

function playTeamTheme(teamId) {
  if (currentAudio) {
    currentAudio.pause();
    currentAudio.currentTime = 0;
  }

  // Path: ./sounds/{teamId}.mp3
  // Example: ./sounds/csk.mp3
  let audioPath = `sounds/${teamId}.mp3`;

  // Custom fix for DC new audio
  if (teamId === 'dc') {
    audioPath = `sounds/dc (2).mp3`;
  }

  currentAudio = new Audio(audioPath);

  // Set volume (optional)
  currentAudio.volume = 0.5;

  currentAudio.play().catch(e => {
    console.warn("Audio play failed (file might be missing):", e);
    // Silent fail or show toast? Silent is better to avoid spam if files missing.
  });
}

function playIPLTheme() {
  if (currentAudio) stopAudio();

  const audioPath = `sounds/Ipl.mp3`; // Ensure case

  currentAudio = new Audio(audioPath);
  currentAudio.volume = 0.5;

  currentAudio.play().catch(e => {
    console.warn("IPL Theme play failed:", e);
  });
}

function playAuctionStartSequence() {
  if (currentAudio) stopAudio();

  // 1. Play People Cheering
  const peopleAudio = new Audio('sounds/people.mp3');
  peopleAudio.volume = 0.6;
  peopleAudio.play();
  currentAudio = peopleAudio;

  // 2. After 8 seconds, play Viraj Intro
  setTimeout(() => {
    if (currentAudio === peopleAudio) {
      stopAudio();
      const virajAudio = new Audio('sounds/viraj.mp3');
      virajAudio.volume = 0.8;
      virajAudio.play();
      currentAudio = virajAudio;

      // 3. After Viraj Intro ends, play Clapping
      virajAudio.onended = () => {
        const clappingAudio = new Audio('sounds/clapping.mp3');
        clappingAudio.volume = 0.6;
        clappingAudio.play();
        currentAudio = clappingAudio;

        // 4. After 5 seconds of Clapping, play IPL Theme
        setTimeout(() => {
          if (currentAudio === clappingAudio) {
            playIPLTheme();
          }
        }, 5000);
      };
    }
  }, 8000);
}

function playUnsoldSound() {
  if (currentAudio) stopAudio();

  const audioPath = `sounds/E One.mp3`;
  currentAudio = new Audio(audioPath);
  currentAudio.volume = 0.8;

  currentAudio.play().catch(e => {
    console.warn("Unsold sound play failed:", e);
  });
}

function playHammerSound() {
  const audio = new Audio('sounds/hammer.mp3');
  audio.volume = 0.9;
  audio.play().catch(e => console.warn("Hammer sound play failed:", e));
}

function stopAudio() {
  if (currentAudio) {
    currentAudio.pause();
    currentAudio.currentTime = 0;
    currentAudio = null;
  }
}



function closeModal() {
  document.getElementById("team-modal").classList.add("hidden");
}

// --- UTILS ---
function filterPlayers(category) {
  document.querySelectorAll(".filter-btn").forEach(b => b.classList.remove("active"));
  document.querySelector(`.filter-btn[data-filter="${category}"]`).classList.add("active");
  renderPlayersList(category);
}

function getFlag(country) {
  const map = {
    "India": "🇮🇳", "Australia": "🇦🇺", "England": "🏴󠁧󠁢󠁥󠁮󠁧󠁿",
    "South Africa": "🇿🇦", "New Zealand": "🇳🇿", "West Indies": "🌴",
    "Afghanistan": "🇦🇫", "Sri Lanka": "🇱🇰"
  };
  return map[country] || "🏳️";
}

// --- SCROLLING RAIL LOGIC ---
function addSoldToRail(name, price, teamName, teamId) {
  const rail = document.getElementById("sold-players-rail");

  // Remove placeholder if present
  const placeholder = rail.querySelector(".sold-item-placeholder");
  if (placeholder) placeholder.remove();

  const chip = document.createElement("span");
  chip.className = "sold-chip";
  chip.innerHTML = `
    <strong>${name}</strong> 
    <span class="price">₹${price.toFixed(2)} Cr</span> 
    <span class="team-badge" style="color:var(--bg-dark); background-color:${getTeamColor(teamId)}">${teamName}</span>
  `;

  // Append to end (Marquee flows right to left)
  rail.appendChild(chip);
}

function getTeamColor(id) {
  const t = TEAMS_CONFIG.find(x => x.id === id);
  return t ? t.color : "#fff";
}

function showToast(msg, type = "info") {
  const box = document.getElementById("toast-box");
  const t = document.createElement("div");
  t.textContent = msg;
  t.style.background = type === "error" ? "#ff4444" : type === "success" ? "#00C851" : "#33b5e5";
  t.style.padding = "10px 20px";
  t.style.marginTop = "10px";
  t.style.borderRadius = "5px";
  t.style.color = "white";
  t.style.animation = "fadeIn 0.5s";

  box.appendChild(t);
  setTimeout(() => t.remove(), 3000);
}

// Add CSS for toast box dynamically (if not already handled in CSS)
const style = document.createElement('style');
style.innerHTML = `
#toast-box { position: fixed; bottom: 20px; right: 20px; z-index: 1000; display: flex; flex-direction: column-reverse; }
@keyframes fadeIn { from { opacity:0; transform: translateY(20px); } to { opacity:1; transform: translateY(0); } }
`;
document.head.appendChild(style);

// --- RETENTION LOGIC ---
let retentionState = {
  activeTeamId: null,
  selectedPlayers: new Set()
};

function initRetentionPhase() {
  document.getElementById("retention-screen").classList.remove("hidden");
  renderRetentionTeams();
}

function renderRetentionTeams() {
  const grid = document.getElementById("retention-teams-grid");
  grid.innerHTML = "";

  state.teams.forEach(t => {
    const spent = t.purchased.reduce((acc, curr) => acc + curr.price, 0);
    const remaining = (t.budget - spent).toFixed(2);
    const retainedCount = t.purchased.filter(p => p.isRetention).length;

    const card = document.createElement("div");
    card.className = `retention-card team-${t.id}`;
    card.innerHTML = `
      <div class="team-header-row">
          <div class="team-logo-wrapper">
              <img src="images/${t.id}.webp" onerror="this.src='https://ui-avatars.com/api/?name=${t.name}&background=random&color=fff&size=64'" alt="${t.name}" class="team-logo-img">
          </div>
          <span class="team-code">${t.name}</span>
          <span class="team-budget">₹${remaining} Cr</span>
      </div>
      <div style="font-size:0.8rem; color:#aaa;">
          Retained: ${retainedCount}/2
      </div>
      <div class="retention-player-preview">
        ${t.purchased.map(p => `<div>• ${p.name} (${p.price} Cr)</div>`).join('')}
      </div>
      <button class="team-info-btn" onclick="openTeamInfoModal('${t.id}'); event.stopPropagation();">Info</button>
    `;
    card.onclick = () => openRetentionModal(t.id);
    grid.appendChild(card);
  });
}

// --- MODAL LOGIC & PLAYING 11 ---
let currentModalTeamId = null;

function openTeamModal(teamId) {
  const team = state.teams.find(t => t.id === teamId);
  if (!team) return;

  currentModalTeamId = teamId;
  const modal = document.getElementById("team-modal");
  document.getElementById("modal-team-name").textContent = team.full;

  const spent = team.purchased.reduce((a, c) => a + c.price, 0);
  const remaining = (team.budget - spent).toFixed(2);

  document.getElementById("modal-budget").textContent = `₹${remaining} Cr / ₹${team.budget} Cr`;
  document.getElementById("modal-squad-size").textContent = team.purchased.length;

  renderModalLists(team);
  updatePowerStats(team);

  modal.classList.remove("hidden");
}

function renderModalLists(team) {
  const squadList = document.getElementById("modal-player-list");
  const p11List = document.getElementById("playing-11-list");

  squadList.innerHTML = "";
  p11List.innerHTML = "";

  // Calculate Counts
  document.getElementById("p11-count").textContent = team.playingEleven.length;

  // Filter players
  const squadPlayers = team.purchased.filter(p => !team.playingEleven.includes(findPlayerId(p.name)));
  const p11PlayersIndices = team.playingEleven;
  // note: playingEleven stores IDs. 

  // Render Squad
  squadPlayers.forEach(p => {
    const pId = findPlayerId(p.name);
    if (pId === -1) return; // Should not happen

    const el = createDraggableCard(p, pId, false);
    squadList.appendChild(el);
  });

  // Render Playing 11
  team.playingEleven.forEach(pId => {
    const player = state.players.find(x => x.id === pId);
    if (player) {
      // Find the sold info which has the price
      const soldInfo = team.purchased.find(p => p.name === player.name);

      const displayObj = soldInfo || player;
      const el = createDraggableCard(displayObj, pId, true);
      p11List.appendChild(el);
    }
  });
}

// Helper to find ID by name (since sold player obj only has name/price usually)
// Wait, in endAuction we push {name, price}. We should link back to state.players using name.
function findPlayerId(name) {
  const p = state.players.find(x => x.name === name);
  return p ? p.id : -1;
}

function createDraggableCard(playerObj, pId, isP11) {
  const div = document.createElement("div");
  div.className = `draggable-player ${isP11 ? 'p11-card' : ''}`;
  div.draggable = true;
  div.ondragstart = (e) => drag(e, pId);

  // Price lookup (might be in purchased array with custom price or base in state)
  // For display, we use what's passed (which might be the state player obj or purchased obj)
  // If it's state player obj, it has 'base'. If purchased, 'price'.
  // Let's unify.
  let displayPrice = "0";
  if (playerObj.price) displayPrice = playerObj.price.toFixed(2);
  else if (playerObj.base) displayPrice = playerObj.base.toFixed(2);

  // Find role/country from state
  const fullData = state.players.find(p => p.id === pId);

  div.innerHTML = `
        <div style="display:flex; align-items:center; gap:8px;">
            <div style="font-weight:bold;">${playerObj.name}</div>
            <div style="font-size:0.7em; opacity:0.7;">${fullData.role.substring(0, 3).toUpperCase()}</div>
        </div>
        <div style="font-size:0.8em; color:var(--gold);">₹${displayPrice} Cr</div>
    `;
  return div;
}

// --- DRAG & DROP HANDLERS ---
function allowDrop(ev) {
  ev.preventDefault();
  ev.currentTarget.classList.add("drag-over");
}

/* 
   We need to handle drag leave to remove styling, but for simplicity
   we can just clear it on drop or add a dragleave listener.
*/

function drag(ev, pId) {
  ev.dataTransfer.setData("text/plain", pId);
}

function drop(ev, targetType) {
  ev.preventDefault();
  document.querySelectorAll(".dropzone").forEach(d => d.classList.remove("drag-over"));

  const pId = parseInt(ev.dataTransfer.getData("text/plain"));
  if (isNaN(pId)) return;

  const team = state.teams.find(t => t.id === currentModalTeamId);
  if (!team) return;

  if (targetType === 'p11') {
    // Init if undefined (safety)
    if (!team.playingEleven) team.playingEleven = [];

    // Check limits
    if (team.playingEleven.length >= 11) {
      showToast("Playing 11 is Full!", "error");
      return;
    }

    // Overseas Limit Check (Max 4)
    const playerToAdd = state.players.find(p => p.id === pId);
    const isOverseas = playerToAdd && playerToAdd.country !== "India";

    if (isOverseas) {
      const currentOverseasCount = team.playingEleven.filter(id => {
        const p = state.players.find(x => x.id === id);
        return p && p.country !== "India";
      }).length;

      if (currentOverseasCount >= 4) {
        showToast("Max 4 Overseas Players allowed in Playing XI!", "error");
        return;
      }
    }

    // Add if not present
    if (!team.playingEleven.includes(pId)) {
      team.playingEleven.push(pId);
      renderModalLists(team);
      updatePowerStats(team);
    }
  } else if (targetType === 'squad') {
    // Remove from P11
    const idx = team.playingEleven.indexOf(pId);
    if (idx > -1) {
      team.playingEleven.splice(idx, 1);
      renderModalLists(team);
      updatePowerStats(team);
    }
  }
}

// --- POWER STATS CALCULATOR ---
function updatePowerStats(team) {
  if (!team.playingEleven || team.playingEleven.length === 0) {
    document.getElementById("power-bat").style.width = "0%";
    document.getElementById("power-bowl").style.width = "0%";
    document.getElementById("power-bal").style.width = "0%";
    return;
  }

  let totalBat = 0;
  let totalBowl = 0;

  team.playingEleven.forEach(pId => {
    const p = state.players.find(x => x.id === pId);
    if (p) {
      // Heuristic based on roles and random stats
      // Stats: runs, avg, sr, matches, hs
      // We normalize to a 0-100 scale roughly

      // Batting Score
      let batScore = 0;
      if (p.role === "Batsman" || p.role === "Wicketkeeper") {
        batScore = (p.stats.avg / 50) * 100; // avg 50 = 100
      } else if (p.role === "All-Rounder") {
        batScore = (p.stats.avg / 40) * 80;
      } else {
        batScore = (p.stats.avg / 20) * 40;
      }

      // Bowling Score (Inverse of bad stats, but here we only have generic)
      // We didn't generate bowling stats specifically in state (only bat stats named generically)
      // But we set isBowler in genRandomStats.
      // Let's use 'matches' and 'wickets' (mapped from runs for bowlers for demo?)
      // Actually, looking at generateRandomStats:
      // Bowler: runs(50-550), avg(5-20), sr(60-110). 
      // Note: in cricket bowling avg lower is better.
      let bowlScore = 0;
      if (p.role === "Bowler") {
        // Low avg is good. 
        bowlScore = Math.max(0, (35 - p.stats.avg) * 4);
      } else if (p.role === "All-Rounder") {
        bowlScore = Math.max(0, (45 - p.stats.avg) * 2);
      }

      totalBat += batScore;
      totalBowl += bowlScore;
    }
  });

  // Normalize by 11 players? Or just sum.
  // Let's cap at 100% for full team strength potential.
  // Approx max per player = 100. Max total = 1100.
  const batPerc = Math.min(100, (totalBat / 800) * 100);
  const bowlPerc = Math.min(100, (totalBowl / 800) * 100);
  const balance = (batPerc + bowlPerc) / 2;

  document.getElementById("power-bat").style.width = `${batPerc}%`;
  document.getElementById("power-bowl").style.width = `${bowlPerc}%`;
  document.getElementById("power-bal").style.width = `${balance}%`;
}

function openRetentionModal(teamId) {
  const team = state.teams.find(t => t.id === teamId);
  retentionState.activeTeamId = teamId;
  retentionState.selectedPlayers.clear();

  document.getElementById("ret-modal-team-name").textContent = `Retain for ${team.full}`;

  const list = document.getElementById("retention-candidates-list");
  list.innerHTML = "";

  // Filter candidates: Last team matches, not sold
  const candidates = state.players.filter(p => p.lastTeam === teamId && !p.sold);

  if (candidates.length === 0) {
    list.innerHTML = "<p style='text-align:center; padding:20px; color:#888;'>No eligible players found from last season.</p>";
  } else {
    candidates.forEach(p => {
      const li = document.createElement("li");
      li.className = "candidate-row";
      li.innerHTML = `
        <div style="display:flex; align-items:center; pointer-events:none;">
          <div class="checkbox-visual"></div>
          <div class="candidate-info">
             <h4>${p.name}</h4>
             <p>${p.role} • ${p.country}</p>
          </div>
        </div>
        <div class="candidate-price-action" onclick="event.stopPropagation()">
            <span style="font-size:0.8rem; color:#aaa; margin-right:5px;">₹</span>
            <input type="number" id="retention-price-${p.id}" class="retention-price-input" 
                   value="${p.base}" step="0.25" min="${p.base}" placeholder="Price">
            <span style="font-size:0.8rem; color:#aaa;">Cr</span>
        </div>
      `;
      li.onclick = (e) => toggleRetentionSelection(p.id, li, e);
      list.appendChild(li);
    });
  }

  document.getElementById("retention-modal").classList.remove("hidden");
}

function toggleRetentionSelection(playerId, liElement, event) {
  // Prevent toggle if clicking input
  if (event && event.target.tagName === "INPUT") return;

  const team = state.teams.find(t => t.id === retentionState.activeTeamId);
  const currentRetainedCount = team.purchased.filter(p => p.isRetention).length;
  const maxCanSelect = 2 - currentRetainedCount;

  if (retentionState.selectedPlayers.has(playerId)) {
    retentionState.selectedPlayers.delete(playerId);
    liElement.classList.remove("selected");
  } else {
    if (retentionState.selectedPlayers.size >= maxCanSelect) {
      showToast(`Can only retain ${maxCanSelect} more player(s) for this team!`, "error");
      return;
    }
    retentionState.selectedPlayers.add(playerId);
    liElement.classList.add("selected");
  }
}

function saveRetentions() {
  const teamId = retentionState.activeTeamId;
  const team = state.teams.find(t => t.id === teamId);

  if (retentionState.selectedPlayers.size > 0) {
    retentionState.selectedPlayers.forEach(pid => {
      const player = state.players.find(p => p.id === pid);

      // Get Custom Price
      const input = document.getElementById(`retention-price-${pid}`);
      let customPrice = parseFloat(input.value);
      if (!customPrice || customPrice < 0) customPrice = player.base;

      // Execute Retention
      player.sold = true;
      team.purchased.push({
        name: player.name,
        price: customPrice,
        isRetention: true,
        role: player.role
      });

      showToast(`Retained ${player.name} for ₹${customPrice.toFixed(2)} Cr`);

      // Add to Visual Rail immediately
      addSoldToRail(player.name, customPrice, team.name, team.id);
    });
    updateTopThreePlayers(); // Update Top 3 List
  }

  closeRetentionModal();
  renderRetentionTeams();
}

function closeRetentionModal() {
  document.getElementById("retention-modal").classList.add("hidden");
}

function finishRetentionPhase() {
  document.getElementById("retention-screen").classList.add("hidden");
  initTeamSelectionPhase();
}

// --- TEAM SELECTION LOGIC ---
function initTeamSelectionPhase() {
  document.getElementById("team-selection-screen").classList.remove("hidden");
  const grid = document.getElementById("selection-teams-grid");
  grid.innerHTML = "";

  state.teams.forEach(t => {
    const card = document.createElement("div");
    card.className = `team-card team-${t.id}`;
    card.style.cursor = "pointer";
    card.innerHTML = `
      <div class="team-logo-wrapper" style="margin: 0 auto 10px auto;">
          <img src="images/${t.id}.webp" onerror="this.src='https://ui-avatars.com/api/?name=${t.name}&background=random&color=fff&size=64'" alt="${t.name}" class="team-logo-img">
      </div>
      <div style="text-align:center; font-weight:bold; font-size: 1.2rem;">${t.name}</div>
    `;
    card.onclick = () => selectUserTeam(t.id);
    grid.appendChild(card);
  });
}

function selectUserTeam(teamId) {
  state.userTeamId = teamId;
  const team = state.teams.find(t => t.id === teamId);
  showToast(`You have selected ${team.full}`);

  document.getElementById("team-selection-screen").classList.add("hidden");
  document.getElementById("dashboard-screen").classList.remove("hidden");

  // Update profile display to indicate team
  const userDisp = document.getElementById("user-display");
  userDisp.textContent = `${state.user} (${team.name})`;

  // Need to update the dashboard with current state
  // Specifically update budget since we modified it during retention
  renderDashboard();

  // Start Auction Start Sequence
  playAuctionStartSequence();
}

function openTeamInfoModal(teamId) {
  const team = state.teams.find(t => t.id === teamId);
  const details = TEAM_DETAILS[teamId];
  if (!details) return;

  document.getElementById("info-team-name").textContent = team.full;
  document.getElementById("info-head-coach").textContent = details.coach;
  document.getElementById("info-assist-coach").textContent = details.assistant;
  document.getElementById("info-batting-coach").textContent = details.batting;
  document.getElementById("info-bowling-coach").textContent = details.bowling;
  document.getElementById("info-owner").textContent = details.owner;

  const historyDiv = document.getElementById("info-history");
  historyDiv.innerHTML = "";
  if (details.wins.length === 0) {
    historyDiv.innerHTML = "<div class='info-value'>No IPL titles yet</div>";
  } else {
    historyDiv.innerHTML = `
      <div class='info-value'>Total Wins: ${details.wins.length}</div>
      <div class='history-item'>Years: ${details.wins.join(", ")}</div>
    `;
  }

  document.getElementById("team-info-modal").classList.remove("hidden");
}

function closeTeamInfoModal() {
  document.getElementById("team-info-modal").classList.add("hidden");
}

function generateRandomStats(role) {
  const isBowler = role === "Bowler";
  const matches = Math.floor(Math.random() * 100) + 20;
  let runs, avg, sr, hs;

  if (isBowler) {
    // Bowlers have lower batting stats usually
    runs = Math.floor(Math.random() * 500) + 50;
    avg = (Math.random() * 15 + 5).toFixed(2);
    sr = (Math.random() * 50 + 60).toFixed(2);
    hs = Math.floor(Math.random() * 40) + 10;
  } else {
    // Batsmen/All-Rounders/WK
    runs = Math.floor(Math.random() * 4000) + 1000;
    avg = (Math.random() * 30 + 25).toFixed(2);
    sr = (Math.random() * 40 + 120).toFixed(2);
    hs = Math.floor(Math.random() * 60) + 60;
  }

  return { matches, runs, avg, sr, hs };
}

init();