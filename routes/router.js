const express = require('express');
const router = express.Router();

router.get('/api/data', (req, res) => {
    res.send('Hello World !');
});


module.exports = router;