const express = require('express');
const router = express.Router(); 
const path = require('path');

router.get('/home', (req, res,next) => (
    res.sendFile(path.join(__dirname, 'build', 'index.html'))
));

module.exports = router;