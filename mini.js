const express = require('express');
const app = express();
app.get('/__ping', (_req, res) => res.type('text').send('pong'));
app.listen(5001, () => console.log('Mini server running at http://localhost:5001'));
