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