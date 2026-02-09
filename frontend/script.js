/*
IPL Mega Auction 2025 - Engine
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

// Generate 50+ Players
const PLAYERS_DB = [
  // Marquee Set
  { name: "Virat Kohli", country: "India", role: "Batsman", base: 2.0 },
  { name: "Rohit Sharma", country: "India", role: "Batsman", base: 2.0 },
  { name: "Ben Stokes", country: "England", role: "All-Rounder", base: 2.0 },
  { name: "Jasprit Bumrah", country: "India", role: "Bowler", base: 2.0 },
  { name: "Hardik Pandya", country: "India", role: "All-Rounder", base: 2.0 },
  { name: "Rashid Khan", country: "Afghanistan", role: "Bowler", base: 2.0 },
  { name: "David Warner", country: "Australia", role: "Batsman", base: 2.0 },
  { name: "Ravindra Jadeja", country: "India", role: "All-Rounder", base: 2.0 },
  { name: "Jos Buttler", country: "England", role: "Wicketkeeper", base: 2.0 },
  { name: "Pat Cummins", country: "Australia", role: "Bowler", base: 2.0 },

  // Set 1
  { name: "Shubman Gill", country: "India", role: "Batsman", base: 1.5 },
  { name: "Rishabh Pant", country: "India", role: "Wicketkeeper", base: 1.5 },
  { name: "K.L. Rahul", country: "India", role: "Wicketkeeper", base: 1.5 },
  { name: "Suryakumar Yadav", country: "India", role: "Batsman", base: 1.5 },
  { name: "Jofra Archer", country: "England", role: "Bowler", base: 1.5 },
  { name: "Trent Boult", country: "New Zealand", role: "Bowler", base: 1.5 },
  { name: "Glenn Maxwell", country: "Australia", role: "All-Rounder", base: 1.5 },
  { name: "Kagiso Rabada", country: "South Africa", role: "Bowler", base: 1.5 },
  { name: "Shreyas Iyer", country: "India", role: "Batsman", base: 1.5 },
  { name: "Sanju Samson", country: "India", role: "Wicketkeeper", base: 1.5 },

  // Set 2
  { name: "Ishan Kishan", country: "India", role: "Wicketkeeper", base: 1.0 },
  { name: "Mohammed Shami", country: "India", role: "Bowler", base: 1.0 },
  { name: "Yuzvendra Chahal", country: "India", role: "Bowler", base: 1.0 },
  { name: "Faf du Plessis", country: "South Africa", role: "Batsman", base: 1.0 },
  { name: "Moeen Ali", country: "England", role: "All-Rounder", base: 1.0 },
  { name: "Sunil Narine", country: "West Indies", role: "All-Rounder", base: 1.0 },
  { name: "Andre Russell", country: "West Indies", role: "All-Rounder", base: 1.0 },
  { name: "Quinton de Kock", country: "South Africa", role: "Wicketkeeper", base: 1.0 },
  { name: "Shikhar Dhawan", country: "India", role: "Batsman", base: 1.0 },
  { name: "Bhuvneshwar Kumar", country: "India", role: "Bowler", base: 1.0 },

  // Set 3 (Uncapped/Lower Base)
  { name: "Arshdeep Singh", country: "India", role: "Bowler", base: 0.5 },
  { name: "Umran Malik", country: "India", role: "Bowler", base: 0.5 },
  { name: "Rahul Tripathi", country: "India", role: "Batsman", base: 0.5 },
  { name: "Ruturaj Gaikwad", country: "India", role: "Batsman", base: 0.5 },
  { name: "Devdutt Padikkal", country: "India", role: "Batsman", base: 0.5 },
  { name: "Venkatesh Iyer", country: "India", role: "All-Rounder", base: 0.5 },
  { name: "Harshal Patel", country: "India", role: "Bowler", base: 0.5 },
  { name: "Varun Chakravarthy", country: "India", role: "Bowler", base: 0.5 },
  { name: "Ravi Bishnoi", country: "India", role: "Bowler", base: 0.5 },
  { name: "Yashasvi Jaiswal", country: "India", role: "Batsman", base: 0.5 },

  // Foreign Stars
  { name: "Sam Curran", country: "England", role: "All-Rounder", base: 1.5 },
  { name: "Liam Livingstone", country: "England", role: "All-Rounder", base: 1.0 },
  { name: "Wanindu Hasaranga", country: "Sri Lanka", role: "All-Rounder", base: 1.0 },
  { name: "Nicholas Pooran", country: "West Indies", role: "Wicketkeeper", base: 1.0 },
  { name: "Shimron Hetmyer", country: "West Indies", role: "Batsman", base: 1.0 },
  { name: "Tim David", country: "Australia", role: "Batsman", base: 0.75 },
  { name: "Marco Jansen", country: "South Africa", role: "Bowler", base: 0.75 },
  { name: "Aiden Markram", country: "South Africa", role: "Batsman", base: 1.0 },
  { name: "David Miller", country: "South Africa", role: "Batsman", base: 1.0 },
  { name: "Lockie Ferguson", country: "New Zealand", role: "Bowler", base: 1.0 },

  // Fillers
  { name: "Riyan Parag", country: "India", role: "All-Rounder", base: 0.2 },
  { name: "Abdul Samad", country: "India", role: "Batsman", base: 0.2 },
  { name: "Abhishek Sharma", country: "India", role: "All-Rounder", base: 0.2 },
  { name: "Kartik Tyagi", country: "India", role: "Bowler", base: 0.2 },
  { name: "Shahrukh Khan", country: "India", role: "Batsman", base: 0.2 }
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
    rtmActive: false,
    rtmContext: null,
    involvedTeams: []
  },
  user: null
};

// --- INIT ---
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
}

// --- LOGIC: Login ---
function handleLogin() {
  const user = document.getElementById("username").value;
  const key = document.getElementById("password").value;

  if (key === "ipl2025" || key === "") { // Allow empty for ease
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
    if (filter !== "all" && p.role !== filter) return;

    const li = document.createElement("li");
    li.className = `player-row ${p.sold ? "sold" : ""}`;
    li.innerHTML = `
            <div>
                <strong>${p.name}</strong>
                <small style="color:#aaa; display:block;">${p.role} • ${p.country}</small>
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

  section.classList.remove("hidden");
  container.innerHTML = "";

  involved.forEach(tId => {
    const team = state.teams.find(t => t.id === tId);
    const spent = team.purchased.reduce((a, c) => a + c.price, 0);
    const remaining = (team.budget - spent).toFixed(2);

    const chip = document.createElement("div");
    chip.className = "war-chip";
    chip.innerHTML = `
      <img src="images/${team.id}.webp" onerror="this.src='https://ui-avatars.com/api/?name=${team.name}&background=random&color=fff&size=32'" class="war-team-logo">
      <div class="war-team-info">
        <span class="war-team-name">${team.name}</span>
        <span class="war-team-budget">₹${remaining} Cr</span>
      </div>
    `;
    container.appendChild(chip);
  });
}

function endAuction() {
  clearInterval(state.auction.interval);
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
  team.purchased.push({ name: player.name, price: price, isRTM: isRTM });
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
  playTeamTheme(team.id);
  renderTeamsGrid();
  renderPlayersList(document.querySelector(".filter-btn.active").dataset.filter);
  updatePlayerCount();
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
  const audioPath = `sounds/${teamId}.mp3`;
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

  const audioPath = `sounds/ipl.mp3`; // Ensure case

  currentAudio = new Audio(audioPath);
  currentAudio.volume = 0.5;

  currentAudio.play().catch(e => {
    console.warn("IPL Theme play failed:", e);
  });
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
function filterPlayers(role) {
  document.querySelectorAll(".filter-btn").forEach(b => b.classList.remove("active"));
  document.querySelector(`.filter-btn[data-filter="${role}"]`).classList.add("active");
  renderPlayersList(role);
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
        isRetention: true
      });

      showToast(`Retained ${player.name} for ₹${customPrice.toFixed(2)} Cr`);

      // Add to Visual Rail immediately
      addSoldToRail(player.name, customPrice, team.name, team.id);
    });
  }

  closeRetentionModal();
  renderRetentionTeams();
}

function closeRetentionModal() {
  document.getElementById("retention-modal").classList.add("hidden");
}

function finishRetentionPhase() {
  document.getElementById("retention-screen").classList.add("hidden");
  document.getElementById("dashboard-screen").classList.remove("hidden");

  // Need to update the dashboard with current state
  // Specifically update budget since we modified it during retention
  renderDashboard();

  // Start IPL Theme
  playIPLTheme();
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