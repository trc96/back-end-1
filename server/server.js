const express = require('express');

const app = express();

app.use(express.json());

app.get('/api/users/', (req, res) => {
    res.status(200).send()
})

const SERVER_PORT = 4000;
app.listen(4000, () => console.log(`Server running on ${SERVER_PORT}`))