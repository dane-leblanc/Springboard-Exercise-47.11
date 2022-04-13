function bubbleSort(arr) {
  for (let i = arr.length - 1; i >= 0; i--) {
    for (let j = 0; j < i ; j++) {
      let current = arr[j];
      let next = arr[j + 1];
      if (current > next) {
        arr[j] = next;
        arr[j + 1] = current;
      }
    }
  }
  return arr;
}

console.log(bubbleSort([4, 17, 9, 22, -6, 10]));

module.exports = bubbleSort;
