function bouncer(arr) {
    let result = [];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i]) {
            result.push(arr[i]);
        }
    }
    return result;
}

console.log(bouncer([false, null, 0, NaN, undefined, ""]));
console.log(bouncer(["a", "b", "c"]));
console.log(bouncer([7, "ate", "", false, 9]));
console.log(bouncer([null, NaN, 1, 2, undefined]));