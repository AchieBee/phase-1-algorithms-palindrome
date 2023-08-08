//FUNCTION isPalindrome(str)
  //  cleanStr = removeNonLettersAndLowercase(str)
    //reversedStr = reverse(cleanStr)
    //RETURN cleanStr EQUALS reversedStr
//END FUNCTION

//FUNCTION removeNonLettersAndLowercase(str)
  //  cleanStr = ""
    //FOR each character in str
      //  IF character IS a lowercase letter
        //    Append character to cleanStr
    //RETURN cleanStr
//END FUNCTION

//FUNCTION reverse(str)
  //  reversedStr = ""
    //FOR i from length of str - 1 down to 0
      //  Append str[i] to reversedStr
    //RETURN reversedStr
//END FUNCTION

function isPalindrome(str) {
  const cleanStr = removeNonLettersAndLowercase(str);
  const reversedStr = reverse(cleanStr);
  return cleanStr === reversedStr;
}

function removeNonLettersAndLowercase(str) {
  let cleanStr = "";
  for (let i = 0; i < str.length; i++) {
    if (/[a-z]/.test(str[i])) {
      cleanStr += str[i];
    }
  }
  return cleanStr.toLowerCase();
}

function reverse(str) {
  let reversedStr = "";
  for (let i = str.length - 1; i >= 0; i--) {
    reversedStr += str[i];
  }
  return reversedStr;
}

// Test cases
console.log(isPalindrome("abba"));
console.log(isPalindrome("racecar"));
console.log(isPalindrome("a"));  
console.log(isPalindrome("robot")); 
console.log(isPalindrome("ab"));
