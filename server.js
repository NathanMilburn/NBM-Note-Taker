const express = require('express');
const path = require('path');
const api = require('./routes/apiRoutes.js'); 

// Current Port
const PORT = process.env.PORT || 3001;

const app = express();

// Middleware
app.use(express.static('public'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use('/api/notes', api);


// HTML Routes
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'))
});

// Check to see if 'public' needs to be listed when running
app.get('/notes', (req, res) =>{
  res.sendFile(path.join(__dirname, 'public', 'notes.html'))
});

app.get('*', (req, res) => {
  res.status(404)
  res.sendFile(path.join(__dirname, 'public', 'index.html'))
});

app.listen(PORT, () => {
  console.log(`App listening at port: ${PORT}`)
});