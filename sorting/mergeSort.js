function merge(arr, l, m, r) {
    const l1 = m - l + 1;
    const l2 = r - m;
    const L = new Array(l1);
    const R = new Array(l2);
    for (let i = 0; i < l1; i++) {
      L[i] = arr[l + i];
    }
    for (let i = 0; i < l2; i++) {
      R[i] = arr[m + 1 + i];
    }
    let i = 0;
    let j = 0;
    let k = l;
    while (i < l1 && j < l2) {
      if(L[i] < R[j]) {
        arr[k] = L[i];
        i++;
      }
      else {
        arr[k] = R[j];
        j++;
      }
      k++
    }
    while(i < l1) {
      arr[k] = L[i]
      i++;
      k++
    }
    while(j < l2) {
      arr[k] = R[j]
      j++;
      k++
    }
  }
  
  function mergeSort(arr, l, r) {
    if (l >= r) return;
    let m = parseInt((r + l) / 2);
    mergeSort(arr, l, m );
    mergeSort(arr, m + 1, r);
    merge(arr, l, m, r);
  }
  
  const arr = [12, 11, 13, 5, 6, 7, 58, 2];
  const size = arr.length;
  mergeSort(arr, 0, size - 1);
  console.log(arr)