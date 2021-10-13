const express = require('express');
const app = express();
const router = require('./routes/router');
const PORT = 3001;

app.use(router);

app.listen(PORT, () => console.log(`Server started on port ${PORT}`))