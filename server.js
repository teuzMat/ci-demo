const express = require('express');
const { sum } = require('./math');

const app = express();
const port = 3000;

app.use(express.static('public'));

app.get('/sum', (req, res) => {
  const a = Number(req.query.a);
  const b = Number(req.query.b);

  const result = sum(a, b);

  res.json({ result });
});

app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
});