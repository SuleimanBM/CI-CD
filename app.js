// app.js
const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

app.get('/', (req, res) => {
    res.send('Hello from your dummy Node.js project!');
});
app.get('/cicd', (req, res) => {
    res.send(`
        You created a CI/CD flow but your understanding was less than 50%
        Congratulations
        `);
});

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});