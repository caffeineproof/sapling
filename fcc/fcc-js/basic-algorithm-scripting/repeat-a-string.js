function repeatStringNumTimes(str, num) {
    let repeatArr = [];
    if (num <= 0) {
        return "";
    }
    else {
        for (let i = 0; i < num; i++) {
            repeatArr[i] = str;
        }
    }
    return repeatArr.join("");
}

console.log(repeatStringNumTimes("abc", 3));
console.log(repeatStringNumTimes("abc", -3));
console.log(repeatStringNumTimes("abc", 0));