const express = require('express');
const {linearSearch, jumpSearch} = require('./searchAlgorithms');

const app = express();
app.use(express.json());

app.post('/search/linear', (req, res) => {
  const {array, target} = req.body;
  const index = linearSearch(array, target);
  res.send({index});
});

app.post('/search/jump', (req, res) => {
  const {array, target} = req.body;
  const index = jumpSearch(array, target);
  res.send({index});
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

module.exports = app;
