function getIndexToIns(arr, num) {
    let index = 0;
    let temp;
    for (let i = 0; i < arr.length; i++) {
        for (let j = i; j < arr.length; j++) {
            if (arr[j] > arr[j + 1]) {
                temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
            }
            //console.log(arr);
        }
    }

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] < num) {
            index = i + 1;
        }
    }

    return index;
}

console.log(getIndexToIns([40, 60], 50));