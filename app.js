const express = require('express');
const app = express();
const PORT = 3001;


app.get('/api', (req, res) => {
    res.send('Hello World !');
})


app.listen(PORT, () => console.log(`Server started on port ${PORT}`))