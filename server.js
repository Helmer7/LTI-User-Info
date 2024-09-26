const express = require('express');
const cors = require('cors');
const app = express();


app.use(cors({
    origin: ['https://digitalskills.brightspace.com'], 
    methods: ['GET', 'POST'],
    allowedHeaders: ['Content-Type', 'Authorization']
}));


app.get('/api/test', (req, res) => {
    res.json({ message: 'GET request received' });
});


app.post('/api/test', (req, res) => {
    res.json({ message: 'POST request received' });
});

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});
