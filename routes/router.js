const express = require('express');
const router = express.Router();
const getItems = require('../middlewares/getItems');


router.get('/api/items', getItems);


module.exports = router;