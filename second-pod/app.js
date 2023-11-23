const express = require('express');
const {binarySearch, bubbleSort} = require('./searchAlgorithms');

const app = express();
app.use(express.json());

app.post('/search/binary', (req, res) => {
  const {sortedArray, target} = req.body;
  const index = binarySearch(sortedArray, target);
  res.send({index});
});

app.post('/sort/bubble', (req, res) => {
  const {array} = req.body;
  const sortedArray = bubbleSort(array);
  res.send({sortedArray});
});

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

module.exports = app;
