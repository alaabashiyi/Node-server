const express = require('express');
const app = express();
const router = require('./routes/router');
const errorHandler = require('./middlewares/errorHandler');
const badRequest = require('./middlewares/badRequest');

const PORT = 3001;

app.use(router);
app.use(badRequest);
app.use(errorHandler);

app.listen(PORT, () => console.log(`Server started on port ${PORT}`))