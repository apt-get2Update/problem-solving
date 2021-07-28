longestIncreasingSubarray([5, 6, 1, 2, 3, 7, 11, 14, 15, 16, 8, 9])


function longestIncreasingSubarray(array) {
  let result = [];
  for (let i = 0; i < array.length; i++) {
    let subArray = [];
    subArray.push(array[i]);
    for (let j = i + 1; j < array.length; j++) {
      if (subArray[subArray.length - 1] < array[j]) {
        subArray.push(array[j]);
      } else if (
        subArray[subArray.length - 2] < array[j] &&
        array[j] < array[j + 1]
      )
        subArray[subArray.length - 1] = array[j];
    }
    if (result.length < subArray.length) {
      result = a;
    }
  }
  return result;
}

minifiedString("aabbbccdd");
function minifiedString(s) {
  let ss = "";
  let c = 1;
  for (let i = 0; i < s.length; i++) {
    if (s[i] == s[i + 1]) {
      c++;
    } else {
      ss = ss + s[i] + c;
      c = 1;
    }
  }
  return ss;
}

carCount("aabbbccdd");

function carCount(s){
    let map = new Map();
    for (let i = 0; i < s.length; i++) {
        let char = s[i];
        if(map.has(char)){
            map.set(char, map.get(char)+1)
        }else{
            map.set(char,1)
        }
    }
    return map;
}

# CoinChangeProblem : [1,5,7,9,11] : find minimum number of coins for any input < than 250
# for eg 25 requires 3 coins and 88 requires 8 coins
# 25 (11 , 9 , 5)
# 88 (11,11,11,11,11,11,11,11)
# 6 ( 5,1) 


