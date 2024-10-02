const express = require('express');
const cors = require('cors');
const app = express();


app.use(cors({
    origin: 'https://digitalskills.brightspace.com', 
    methods: ['GET', 'POST', 'PUT', 'DELETE', 'PATCH', 'OPTIONS'], 
    allowedHeaders: ['Content-Type', 'Authorization', 'X-Requested-With'] 
}));


app.get('/api/test', (req, res) => {
    res.json({ message: 'GET request realizado com sucesso' });
});


app.post('/api/test', (req, res) => {
    res.json({ message: 'POST request realizado com sucesso' });
});


module.exports = app;
