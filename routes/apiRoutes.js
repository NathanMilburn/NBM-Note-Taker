const router = require('express').Router();
const fs = require('fs');
// const db = require('../db')
const path = require('path');
const uuid = require('uuid');

router.get('/notes', (req, res) => {
    res.sendFile(path.join(__dirname, './db/db.json'));
});

router.post('/notes', (req, res) => {
    const newNote = {
        id: uuid.v4(),
        title: req.body.title,
        text: req.body.text
    };

    const readNote = fs.readFileSync('./db/db.json');

    const parseNote = JSON.parse(readNote);

    parseNote.push(newNote);

    fs.writeFileSync('./db/db.json', JSON.stringify(parseNote));
    res.json(newNote);
});

// router.delete('');



module.exports = router;