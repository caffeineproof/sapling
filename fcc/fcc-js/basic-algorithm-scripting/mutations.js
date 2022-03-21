// function mutation(arr) {
//     let str1 = [...arr[0]];
//     let str2 = [...arr[1]];
//     let ogLen = str2.length;
//     console.log(ogLen);
//     let count = 0;
//     for(let i = 0 ; i < str2.length ;i++){
//       for(let j = 0 ; j < str1.length; j++){
//         if(str2[i].toLowerCase() == str1[j].toLowerCase()){ 
//           count++;
//           console.log(str1[j] + " " + str2[i]  + " " + count);
//           console.log(str2);
//           //str2.splice(i,1);
//           console.log(str2);
//           //console.log(count);
//         }
//       }
//     }
//     //console.log(count + " " + ogLen);
//     if(count >= ogLen){
//       return true;
//     }
//     else{
//       return false;
//     }
//   }

//   console.log(mutation(["voodoo", "no"]));
//   //console.log(mutation(["Mary", "Aarmy"]));

//there's like such a better way to do this ;-;

function mutation(arr) {
    let str1 = [...arr[0].toLowerCase()];
    let str2 = [...arr[1].toLowerCase()];
    let count = 0;

    for (let i = 0; i < str2.length; i++) {
        if (str1.indexOf(str2[i]) === -1) {
            return false;

        }
        else {
            count++;
        }
    }
    if (count === str2.length)
        return true;
}

console.log(mutation(["voodoo", "no"]));
console.log(mutation(["Mary", "Aarmy"]));