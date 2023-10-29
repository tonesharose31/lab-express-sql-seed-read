


// Import this at the top of your app.js
const pgp = require('pg-promise')();
const db = pgp(process.env.VITE_BASE_URL);
const cors = require("cors");
const songController = require("./controllers/songController");


app.use(cors());
app.use(express.json());

// Index Route: Get a list of all songs
app.get('/songs', async (req, res) => {
  try {
    const songs = await db.any('SELECT * FROM songs');
    res.json(songs);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

// Welcome Route
app.get('/', (req, res) => {
  res.send('Welcome to Tuner');
});

// Songs Route: Show an array of songs
app.get('/songs', (req, res) => {
  
});

// 404 Route: Handle routes that don't exist
app.use((req, res) => {
  res.status(404).send('Page not found');
});


 module.exports = app;