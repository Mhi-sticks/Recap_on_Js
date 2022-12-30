// recap on js--------------------------

var summ = 10 + 0;

console.log(summ);

// when you hav a string and you hav a quotation mark in the middle, you use backslash to escape it
var mystr = 'i am a "double quoted" string inside "double quotes"';
console.log(mystr);
/***
 code output
 \' single quote
 \" double quote
 \\ backslash
 \n newline
 \r carriage return
 \t tab
 \b backspace
 \f form feed
 ***/

 //push opertor------------------------------------
var array = ["send", "sleep", "car"];
array.push(["happy"], "joy");
console.log(array);

// pop operator----------------------------------
var removedArray = array.pop();
console.log(array);
console.log(removedArray);

// shift operator---------------------------
var shiftedArray = array.shift();
console.log(array);
console.log(shiftedArray);

// unshift operator--------------------------
var shiftedArray = array.unshift("jefferey");
console.log(array);
console.log(shiftedArray);

// function---------------------------
// for function, local variables takes precedence over global varibles

// immitating queue------------------------
function nextInLine(arr, item) {
    arr.push(item);
    // return item-----------------;
    return arr.shift();
  }
  
  var testArr = [1, 2, 3, 4, 5];
  console.log("Before:" + JSON.stringify(testArr));
  console.log(nextInLine(testArr, 6));
  console.log("After:" + JSON.stringify(testArr));
  
  // boolean-----------------------------------------
  function ourTrueOrFalse(isItTrue) {
    if (isItTrue) {
      return "yes, it's true";
    }
    return "No, it's false";
  }
  
  console.log(ourTrueOrFalse(true));
  
  function isLess(a, b) {
    return a < b;
  }
  
  console.log(isLess(2, 7));
  
  //returning early pattern from functions----------------
  function abTest(a, b) {
    if (a < 0 || b < 0) {
      return undefined;
    }
    return Math.round(Math.pow(Math.sqrt(a) + Math.sqrt(b), 2));
  }
  
  console.log(abTest(-2, 2));
  
  //counting cards----------------------
  
  var count = 0;
  
  function cc(card) {
    switch (card) {
      case 2:
      case 3:
      case 4:
      case 5:
      case 6:
        count++;
        break;
      case 10:
      case "J":
      case "Q":
      case "K":
      case "A":
        count--;
        break;
    }
  
    var holdbet = "Hold";
    if (count > 0) {
      holdbet = "Bet";
    }
    return count + " " + holdbet;
  }
  
  cc(2);
  cc("K");
  cc(10);
  cc("k");
  cc("A");
  console.log(cc(4));
  