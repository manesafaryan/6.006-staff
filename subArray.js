function combination(arr, n, r, index, data, i) {
  if (index == r) {
    for (let j = 0; j < r; j++) console.log(data[j] + " ");
    console.log("           ")
    return;
  }
  if (i >= n) return;
  data[index] = arr[i];
  combination(arr, n, r, index + 1, data, i + 1);
  combination(arr, n, r, index, data, i + 1);
}

function findSubSets(arr, n, r) {
  let data = new Array(r);
  data.fill(0);
  combination(arr, n, r, 0, data, 0);
}

let arr = [ 10, 20, 30, 40, 50 ];
    let r = 3;
    let n = arr.length;
    findSubSets(arr, n, r);