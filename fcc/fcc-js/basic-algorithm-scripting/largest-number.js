function largestOfFour(arr) {
    let max = 0;
    let arrResult = [];
    for(let i = 0 ; i < 4 ; i++){
        max = arr[i][0]; //don't forget this again
        for(let j = 0 ; j < 4 ; j++){ 
            if(arr[i][j] > max){
                max = arr[i][j];
            }
        }
        arrResult[i] = max;
        max = 0;
    }
    console.log(arrResult);
    return arrResult;
  }
  
  largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]);
  largestOfFour([[17, 23, 25, 12], [25, 7, 34, 48], [4, -10, 18, 21], [-72, -3, -17, -10]]);

  //you dumbass :') its not return the arry with the max number
// function largestOfFour(arr) {
//     let max = 0;
//     let arrIndex = 0;
//     for(let i = 0 ; i < 4 ; i++){
//         for(let j = 0 ; j < arr[i].length ; j++){
//             if(arr[i][j] > max || arr[i][j] === max){
//                 max = arr[i][j];
//                 arrIndex = i;
//             }
//         }
//     }
//     console.log(arr[arrIndex]);
//     return arr[arrIndex];
//   }
  
//   largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]);
//   largestOfFour([[13, 27, 18, 26], [4, 5, 1, 3], [32, 35, 37, 39], [1000, 1001, 857, 1]]);
//   largestOfFour([[4, 9, 1, 3], [13, 35, 18, 26], [32, 35, 97, 39], [1000000, 1001, 857, 1]]);
//   largestOfFour([[17, 23, 25, 12], [25, 7, 34, 48], [4, -10, 18, 21], [-72, -3, -17, -10]]);