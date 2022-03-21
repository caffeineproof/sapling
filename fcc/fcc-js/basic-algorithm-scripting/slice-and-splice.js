// console.log(arr1); //[1,2,3]
// console.log(arr1.slice(0, 2)); //[1,2]
// console.log(arr1); //[1,2,3]
// console.log(arr1.slice(0, 1)); //[1]
// console.log(arr1); //[1,2,3]
// console.log(arr1.splice(2, 1)); //[3]
// console.log(arr1); //[1,2]
function frankenSplice(arr1, arr2, n) {
    let result = arr2.slice(0, n);
    for (let i = 0; i < arr1.length; i++) {
        result.splice(n + i, 0, arr1[i])
        console.log(result);
    }
    for (let j = n; j < arr2.length; j++) {
        result.splice(arr1.length + n + j, 0, arr2[j]);
        console.log(result);
    }
    console.log(arr1);
    console.log(arr2);
    return result;
}

frankenSplice([1, 2, 3], [4, 5, 6], 1);