function confirmEnding(str, target) {
  let targetLength = target.length;
  let strLength = str.length;
  let tarPointer = targetLength - 1;
  for (let i = strLength - 1; i >= strLength - targetLength; i--) {
    console.log("string = " + str[i] + " ; tar = " + target[tarPointer]);
    if (str[i] === target[tarPointer]) {
      tarPointer--;
    }
    else {
      return false;
    }
  }

  return true;
}

console.log(confirmEnding("Bastian", "n"));
console.log(confirmEnding("the child's sea", "sea"));

//   Check if a string (first argument, str) ends with the given target string (second argument, target).

// This challenge can be solved with the .endsWith() method, which was introduced in ES2015. But for the purpose of this challenge, we would like you to use one of the JavaScript substring methods instead.