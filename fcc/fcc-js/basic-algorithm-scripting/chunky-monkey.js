function chunkArrayInGroups(arr, size) {
    let chunked = [];
    let index = 0;
    for (let i = 0; i < arr.length / size; i++) {
        chunked[i] = arr.slice(index, index + size);
        //console.log(arr.slice(index,index+size));
        //console.log(arr)
        //console.log(chunked[i]);
        index = index + size;
    }
    return chunked;
}

console.log(chunkArrayInGroups(["a", "b", "c", "d"], 2));