function binarySearch(array, target) {
  let left = 0;
  let right = array.length - 1;

  while (left <= right) {
    const mid = Math.floor((left + right) / 2);
    const foundVal = array[mid];

    if (foundVal === target) {
      return mid;
    } else
      if (foundVal < target) {
        left = mid + 1;
      } else {
        right = mid - 1;
      }
  }

  return -1;
}

function bubbleSort(array) {
  let n = array.length;
  for (let i = 0; i < n - 1; i++) {
    for (let j = 0; j < n - i - 1; j++) {
      if (array[j] > array[j + 1]) {
        let temp = array[j];
        array[j] = array[j + 1];
        array[j + 1] = temp;
      }
    }
  }
  return array;
}

module.exports = {binarySearch, bubbleSort};
