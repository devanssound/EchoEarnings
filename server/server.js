// server.js - Node.js server for EchoEarnings Web App

const express = require('express');
const path = require('path');

const app = express();
const port = process.env.PORT || 3000;

// Serve static files from the 'webapp' directory
app.use(express.static(path.join(__dirname, 'webapp')));

app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`);
});
