const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.setHeader('Content-Type', 'application/json');
  res.send(JSON.stringify({
    status: 'ok',
    diceRoll: Math.ceil(Math.random() * 6)
  }));
});

app.listen(8080);
