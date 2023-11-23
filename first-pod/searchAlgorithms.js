const linearSearch = (array, target) => {
  for (let i = 0; i < array.length; i++) {
    if (array[i] === target) {
      return i;
    }
  }
  return -1;
};

const jumpSearch = (array, target) => {
  let n = array.length;
  let step = Math.floor(Math.sqrt(n));
  let prev = 0;

  while (array[Math.min(step, n) - 1] < target) {
    prev = step;
    step += Math.floor(Math.sqrt(n));
    if (prev >= n) return -1;
  }

  while (array[prev] < target) {
    prev++;
    if (prev === Math.min(step, n)) return -1;
  }

  if (array[prev] === target) {
    return prev;
  }

  return -1;
};

module.exports = {linearSearch, jumpSearch};
