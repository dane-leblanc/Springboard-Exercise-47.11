function insertionSort(arr) {
  let min;
  let idx;
  for (let i = 0; i < arr.length - 1; i++) {
    min = arr[i];
    idx = i;
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j] < min) {
        min = arr[j];
        idx = j;
      }
    }
    if (idx !== i) {
      arr[idx] = arr[i];
      arr[i] = min;
    }
  }
  return arr;
}

console.log(insertionSort([4, 20, 12, 10, 7, 9]));

module.exports = insertionSort;
