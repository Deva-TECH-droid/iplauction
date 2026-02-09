const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());

/* ================== MongoDB Connection ================== */
mongoose.connect("mongodb+srv://devanshupadhyay745_db_user:Auction2026@cluster0.letg3zr.mongodb.net/auctionDB")
    .then(() => console.log("Database Connected Successfully"))
    .catch((err) => console.log("Database Error:", err));


/* ================== Player Model ================== */
const playerSchema = new mongoose.Schema({
    name: String,
    basePrice: Number,
    soldPrice: Number,
    team: String,
    status: String
});

const Player = mongoose.model("Player", playerSchema);


/* ================== Routes ================== */

// Test Route
app.get("/", (req, res) => {
    res.send("Server Running");
});

// Add Player
app.post("/add-player", async (req, res) => {
    try {
        const player = new Player(req.body);
        await player.save();
        res.json({ message: "Player Added Successfully" });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// Get All Players
app.get("/players", async (req, res) => {
    const players = await Player.find();
    res.json(players);
});

// 🔥 METHOD 2 – Get Sold Players
app.get("/players/sold", async (req, res) => {
    const soldPlayers = await Player.find({ status: "sold" });
    res.json(soldPlayers);
});

// 🔥 METHOD 2 – Get Unsold Players
app.get("/players/unsold", async (req, res) => {
    const unsoldPlayers = await Player.find({ status: "unsold" });
    res.json(unsoldPlayers);
});


/* ================== Server ================== */
app.listen(5000, () => {
    console.log("Server running on port 5000");
});