function plusMinus(arr) {
    let positive = 0;
    let negative = 0;
    let zero = 0;
    
    for(let i=0; i < arr.length; i++){
    positive = /^[1-9][0-9]*$/.test(arr[i]) == true ? positive+1 : positive;
    negative = /^-\d*\.?\d+$/.test(arr[i]) == true ? negative+1 : negative;
    zero = arr[i] == 0 ? zero+1 : zero;
    }

    console.log(positive)
    
    let fraction1 = positive/arr.length;
    let fraction2 = negative/arr.length;
    let fraction3 = zero/arr.length;
    
    return fraction1.toFixed(6) + '\n' + fraction2.toFixed(6) + '\n' + fraction3.toFixed(6);
    }















//question 3 Braille translator
function translateToBraille(toTranslate) {
    //code here
    let brailleWord = "";
    let braille ={
      "a":"100000",
      "b":"110000",
      "c":"100100",
      "d":"100110",
      "e":"100010",
      "f":"110100",
      "g":"110110",
      "h":"110010",
      "i":"010100",
      "j":"010110",
      "k":"101000",
      "l":"111000",
      "m":"101100",
      "n":"101110",
      "o":"101010",
      "p":"111100",
      "q":"111110",
      "r":"111010",
      "s":"011100",
      "t":"011110",
      "u":"101001",
      "v":"111001",
      "w":"010111",
      "x":"101101",
      "y":"101111",
      "z":"101011",
      " ":"000000",
    }
    
    for (let i = 0; i < toTranslate.length; i++) {
      brailleWord +=
        toTranslateword == toTranslateword.toUpperCase() ? "000001"+braille[toTranslateword.toLowerCase()] : braille[toTranslateword];
    }
    return brailleWord;
  }
//   console.log(translateToBraille("phi"));













//question 9 String Reverse
function reverseWords(originalString) {
    var words = originalString.split(" ");
    var newString = "";
  
    for (let word of words) {
      let spChars = "";
      for (let i = word.length -1; i >= 0; i--) { // added -1
        if ( // removed [i] from word[i]
          (word.charCodeAt(i) > 47 && word.charCodeAt(i) < 58) ||
          (word.charCodeAt(i) > 64 && word.charCodeAt(i) < 91) ||
          (word.charCodeAt(i) > 96 && word.charCodeAt(i) < 123)
        )
          newString = newString + word[i];
        else spChars = spChars + word[i];
      }
      newString = newString + spChars + " "; // changed from "" no space to space " "
    }
    return newString;
  }
//   console.log(reverseWords('phindi, is really coco'))




  //reverse string 2
  function reverseString(str) {
      let newString = "";
      
      for (let i = str.length - 1; i >= 0; i--) {
          if (str[i] == " ") {
            str[i].replace(",")
          }
          newString += str[i]
      }
      return newString
  }






















function compareTriplets(a, b) {
  let scoreA = 0;
  let scoreB = 0;
  
  for (let i = 0; i < a.length; i++) {
          if (a[i] > b[i]) {
              scoreA++ 
          } else if (a[i] < b[i]) {
              scoreB++
          }
      }
  let finalScore = [scoreA, scoreB]
  return finalScore

}

console.log(compareTriplets([5, 6, 7], [3, 6, 10]))

























  // console.log(reverseString("hello xolani"))

  // function minimumNumber(n, password) {
  //   // Return the minimum number of characters to make the password strong
  //   let count = 5;
  //   if (n > 6) {
  //     count--;
  //   }
  //   if (n < 6) {
  //     count++;
  //   }
  //   if (/[a-z]+/.test(password) == true) {
  //     count--;
  //   }
  //   if (/[A-Z]+/.test(password) == true) {
  //     count--;
  //   }
  //   if (/\d+/.test(password) == true) {
  //     count--;
  //   }
  //   if (/\W|_+/.test(password) == true) {
  //     count--;
  //   }
  //   if (n < 4 && count > 3) {
  //     count = 6 - password.length;
  //   }
  //   return count;
  // }

  function minimumNumber(n, password) {
    // Return the minimum number of characters to make the password strong
    let numbers = /(?=.*?[0-9])/
    let lowerCase = /(?=.*?[a-z])/
    let upperCase = /(?=.*?[A-Z])/
    let specialCharacters = /\W/
    let minLength = /.{6,}/

    let counter = 4;
    let passwordRequirements = [upperCase, lowerCase, specialCharacters, numbers];

    for (let i = 0; i < passwordRequirements.length; i++) {    
        if (passwordRequirements[i].test(password) == true) {
            counter--; 
        }
    }

    if (n < 6 && counter > 0) {
      let newLength = n + counter
      if (newLength >= 6) {
        counter = counter
      } else {
        counter = 6 - n
      }
    } else if (n < 6 && counter <= 0) {
      counter = 6 - n
    }
    return counter
}

// console.log(minimumNumber(3, "Ah1") + " expected 3")
// console.log(minimumNumber(11, "#HackerRank") + " expected 1")
// console.log(minimumNumber(2, "Ah") + " expected 4")
// console.log(minimumNumber(2, "12") + " expected 4")
// console.log(minimumNumber(4, "4700") + " expected 3")
// console.log(minimumNumber(5, "z0%Zb") + " expected 1")
// console.log(minimumNumber(4, "g1A!") + " expected 2")
