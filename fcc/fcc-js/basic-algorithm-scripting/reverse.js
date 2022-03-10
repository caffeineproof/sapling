function reverseString(str) {
    let strArr = [...str];
    let len = strArr.length;
    let revArr = [];
    let revStr = "";
    let temp = 0;
    for(let i = 0; i < strArr.length ; i++){
      revArr[len - i - 1] = strArr[i];
    }
    //console.log(strArr);
    //console.log(revArr.join(""));
  
  
    return revArr.join("");
  }
  
  console.log(reverseString("hello"));