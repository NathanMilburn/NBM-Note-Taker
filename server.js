const express = require('express');
const path = require('path');
const api = require('./routes/apiRoutes.js'); 
const PORT = process.env.port || 3001;

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use('/api', api);

app.get('/', (req, res) =>
  res.sendFile(path.join(__dirname, '/assets/index.html'))
);

app.get('/notes', (req, res) =>
  res.sendFile(path.join(__dirname, '/assets/notes.html'))
);

app.get('*', (req, res) =>
  res.sendFile(path.join(__dirname, 'public/pages/404.html'))
);

app.listen(PORT, () =>
  console.log(`App listening at http://localhost:${PORT} 🚀`)
);