const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const port = process.env.PORT || 3000;

app.use(bodyParser.json());

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html');
});

// Import and use the 'submit' route
const submitRoute = require('./submit'); // Adjust the path as needed
app.use('/submit', submitRoute); // Use the correct path for Netlify functions

// Removed the conditional for !process.env.NETLIFY as it's not needed
if (!process.env.NETLIFY) {
    const server = app.listen(port, () => {
        console.log(`Server is running on port ${port}`);
    });
}

module.exports = app;

