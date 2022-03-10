function findLongestWordLength(str) {
    let counter = 0;
    let longest = 0;
    let strLen = str.length;
    //let arr = [...str];
    let regEx = /[a-zA-Z\-]/;
    for(let i = 0 ; i < str.length ; i++){
        if(regEx.test(str[i])){
            counter++;
            if(counter>longest){
                longest = counter;
            }
            //console.log(counter+","+longest);
            //console.log(str[i+1]);
        }
        else if(str[i] === " " /*|| i === strLen-1*/){
            if(longest < counter){
                longest = counter;
                counter = 0;
                //console.log(longest + "," + counter + "," + str[i]);
            }
            else{
                counter = 0;
            }
        }
    }
    console.log(longest);
    return longest;
  }
  
  //findLongestWordLength("The quick brown fox jumped over the lazy dog");
  findLongestWordLength("What if we try a super-long word such as otorhinolaryngology");