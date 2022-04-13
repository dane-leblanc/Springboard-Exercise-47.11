function insertionSort(arr) {
  for (let i = 0; i < arr.length; i++) {
    let lowest = i;

    for (let j = i + 1; j < arr.length; j++) {
      if (arr[lowest] > arr[j]) {
        lowest = j;
      }
    }

    if (i !== lowest) swap(arr, i, lowest);
  }
  return arr;
}

function swap(arr, i, j) {
  let value = arr[i];
  arr[i] = arr[j];
  arr[j] = value;
}

console.log(insertionSort([4, 20, 12, 10, 7, 9]));

module.exports = insertionSort;
