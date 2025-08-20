// smoke.js
const express = require('express');
const app = express();
app.get('/__ok', (_,res) => res.type('text').send('OK'));
app.listen(5002, () => console.log('smoke up on 5002'));
