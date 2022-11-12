// bubble Sort сортировка пузырьком

function bubbleSort(arr) {
  const lengthArr = arr.length  // 13
  const result = []
  let swapped = false

  for (let i = 0; i < lengthArr -1; i++) {
    swapped = false
    for (let j = 0; j < lengthArr -1; j++) {
      if (arr[j] > arr[j + 1] ) {
        const saveItem = arr[j]
        arr[j] = arr[j + 1]
        arr[j + 1] = saveItem

        swapped = true
      }
    }
    console.log(i, arr);
    if (!swapped) {
      break
    }
  }

  return arr
}

bubbleSort([8,2,3,4,5,6,7,1]); // O(N^2)  7 итераций
bubbleSort([3,2,5,7,1,23,1,56,7,8]); // O(N^2)  5 итераций