function quicksort(arr, l, r) {
  if (l < r) {
    p = partition(arr, l, r);
    quicksort(arr, l, p - 1);
    quicksort(arr, p + 1, r);
  }
}
function partition(arr, l, r) {
  let pivot = arr[r];
  let i = l - 1;
  for (j = l; j < r; j++) {
    if (arr[j] <= pivot) {
      i = i + 1;
      let temp = arr[i];
      arr[i] = arr[j];
      arr[j] = temp;
    }
  }
  let temp = arr[i + 1];
  arr[i + 1] = arr[r];
  arr[r] = temp;
  return i + 1;
}

let arr = [5, 1, 4, 7, 2, 3, 6, 9];
console.log(quicksort(arr, 0, 7));
console.log(arr);
