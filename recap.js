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

// classes-----------------------------
var ourDog = {
  name: "camper",
  legs: "4",
  tails: 1,
  friends: ["everything!"],
};

var myDog = {
  name: "sparkie",
  legs: "2",
  tails: 2,
  friends: [],
};

var dogTail = myDog.tails;
var entreeValue = myDog["name"];
var enterValue = myDog["name"];
console.log(dogTail);
console.log(entreeValue);

var testObj = {
  12: "Namath",
  16: "Montana",
  19: "Unitas",
};

var playerNumber = 16;
var player = testObj[playerNumber];

myDog.name = "Happy Sparkie";
var enterValue = myDog["name"];
console.log(enterValue);

ourDog.bark = "bow-bow";
myDog["bark"] = "woof!";

delete ourDog.bark;

function phoneticLookup(val) {
  var result = "";

  var lookup = {
    alpha: "Adams",
    bravo: "Boston",
    charlie: "Chicago",
    delta: "Denver",
    echo: "Easy",
    foxtrot: "Frank",
  };
  result = lookup[val];
  return result;
}

console.log(phoneticLookup("charlie"));

var myObj = {
  gift: "pony",
  pet: "kitten",
  bed: "sleigh",
};

function checkObj(checkProp) {
  if (myObj.hasOwnProperty(checkProp)) {
    return myObj[checkProp];
  } else {
    return "Not Found";
  }
}

console.log(checkObj("pet"));

// manipulating complex objects-----------------

var myMusic = [
  {
    artist: "Billy Joel",
    title: "Piano Man",
    release_year: 1973,
    formats: ["CD", "8T", "LP"],
    gold: true,
  },
  {
    artist: "Beau Carnes",
    title: "Cereal Man",
    release_year: 2001,
    formats: ["YouTube videos"],
  },
];

// accessing nested objects-----------------
// when we hav objects within objects
var myStorage = {
  car: {
    inside: {
      "glove box": "maps",
      "passenger seat": "crumbs",
    },
    outside: {
      trunk: "jack",
    },
  },
};

var carContents = myStorage.car.inside;
// it is preferred to use bracket notation to accesss the object property instead of dot as shown below
var gloveBoxcontents = myStorage.car.inside["glove box"];
console.log(carContents);
console.log(gloveBoxcontents);

var myPlants = [
  {
    type: "flowers",
    list: ["rose", "tulip", "dandelion"],
  },
  {
    type: "trees",
    list: ["fir", "pine", "birch"],
  },
];

var secondTree = myPlants[1].list[1];
console.log(secondTree);

var collection = {
  245: {
    album: "slippery when met",
    artist: "Bon Jovi",
    tracks: ["Let It Rock", "You Give Love a Bad Name"],
  },
  565: {
    album: "1999",
    artist: "Prince",
    tracks: ["1999", "Little Red Corvette"],
  },
  135: {
    artist: "Robert Palmer",
    tracks: [],
  },
  567: {
    album: "ABBA Gold",
  },
};
// keep a copy of collection for trees-------------
var collectionCopy = JSON.parse(JSON.stringify(collection));

function updateRecords(id, prop, value) {
  if (value === "") {
    delete collection[id][prop];
  } else if (prop === "tracks") {
    collection[id][prop] = collection[id][prop] || [];
    collection[id][prop].push(value);
  } else {
    collection[id][prop] = value;
  }
  return collection;
}
updateRecords(135, "tracks", "test");
console.log(updateRecords(567, "artist", "ABBA"));

// loops----------------
// the while loop is broken down into 3 stages
// the for loop has all the parameters is the single bracket before the code execution

// nested for loops-----------------------
function multiplyAll(arr) {
  var product = 1;
  for (var i = 0; i < arr.length; i++) {
    for (var j = 0; j < arr[i].length; j++) {
      product *= arr[i][j];
    }
  }

  return product;
}

var product = multiplyAll([
  [1, 2],
  [3, 4],
  [5, 6, 7],
]);

console.log(product);

// do while loop--------------------------
var myArray = [];
var i = 10;

do {
  myArray.push(i);
  i++;
} while (i < 5);

console.log(i, myArray);

// profile lookup ------------------------
var contacts = [
  {
    firstName: "Harry",
    lastName: "Potter",
    number: "93480959",
    likes: ["Hogwarts", "Magic", "Hagrid"],
  },
  {
    firstName: "Akira",
    lastName: "Laine",
    number: "0938539",
    likes: ["Pizza", "Coding", "Brownie Points"],
  },
  {
    firstName: "Sherlock",
    lastName: "Holmes",
    number: "91835899",
    likes: ["Intriguing Cases", "Puzzles", "Violin"],
  },
  {
    firstName: "Kristian",
    lastName: "Vos",
    number: "unknown",
    likes: ["Javascript", "Gaming", "Foxes"],
  },
];

function lookUpProfile(name, prop) {
  for (var i = 0; i < contacts.length; i++) {
    if (contacts[i].firstName === name) {
      return contacts[i][prop] || "No such property";
    }
  }
  return "No such contacvt";
}

var data = lookUpProfile("Akira", "likes");
console.log(data);

// generate random fractions -----------------------
// Math.random gives random decimals
function randomFraction() {
  return Math.random();
}

console.log(randomFraction());

// generate random whole numbers -----------------------
// Math.floor rounds down to the nearest whole number
var randomNumberBetween0an19 = Math.floor(Math.random() * 20);

function randomWholeNum() {
  return Math.floor(Math.random() * 20);
}

console.log(randomWholeNum());

// generate random whole numbers within a range
function ourRandomRange(ourMin, ourMax) {
  return Math.floor(Math.random() * (ourMax - ourMin + 1)) + ourMin;
}

var ourRandom = ourRandomRange(1, 9);

function randomRange(myMin, myMax) {
  return Math.floor(Math.random() * (myMax - myMin + 1)) + myMin;
}

var myRandom = randomRange(5, 15);
console.log(ourRandom);
console.log(myRandom);

// use the paseint function--------------------------
function convertToNum(str) {
  return parseInt(str);
}
console.log(convertToNum("56"));

// using the parseint function with a radix-----------
function convertToInteger(str) {
  return parseInt(str, 2);
}
console.log(convertToInteger("10011"));

// using the conditional ternary operator------------------
// condition ? statement-if-true : statement-if-false -------
function checkEqual(a, b) {
  return a === b ? true : false;
}

function checkEqual(a, b) {
  return a === b;
}
// the 2 functions above do the same thing
console.log(checkEqual(1, 1));

// using multiple conditional ternary operator-------
function checkSign(num) {
  return num > 0 ? "positive" : num < 0 ? "negative" : "zero";
}
console.log(checkSign(10));

// const prevents object mutation---------
function freezeObj() {
  "use strict";
  const MATH_CONSTANTS = {
    PI: 3.142,
  };
  // Object.freeze(MATH_CONSTANTS);to stop the constant from being chamged
  try {
    MATH_CONSTANTS.PI = 99;
  } catch (ex) {
    console.log(ex);
  }
  return MATH_CONSTANTS.PI;
}
const PI = freezeObj();

console.log(PI);

// arrow functions for concise anonymous functions-------

// to do that, you remove the function word and place "=>" after the brackets "()"
var magic = function () {
  return new Date();
};

var magic = () => new Date();

var magic = () => {
  return new Date();
};
// three functions above are the same
// if you're returning only 1 value, you can remove the return keyword and the curly braces "{}"

// arrow functions with parameters---------------
const myConcat = (arr1, arr2) => arr1.concat(arr2);

console.log(myConcat([1, 2], [3, 4, 5]));

// write higher order arrow functions------------------
const realNumberArray = [4, 5.6 - 9.8, 3.14, 42, 6, 8.34, -2];

const squareList = (arr) => {
  const squaredIntegers = arr
    .filter((num) => Number.isInteger(num) && num > 0)
    .map((x) => x * x);
  return squaredIntegers;
};

const squaredIntegers = squareList(realNumberArray);
console.log(squaredIntegers);

const increment = (function () {
  return function increment(number, value = 1) {
    return number + value;
  };
})();
console.log(increment(5, 2));
console.log(increment(5));

// using the rest operator with function parameters
const sum = (function () {
  /* rest operator */
  return function sum(...args) {
    //   return function sum(x, y, z) {
    // const args = [x, y, z];
    return args.reduce((a, b) => a + b, 0);
  };
})();
console.log(sum(1, 2, 3));

// using the spread operator to evaluate arrays in-place
const arr1 = ["JAN", "FEB", "MAR", "APR", "MAY"];
let arr2;
(function () {
  arr2 = [...arr1]; //spread operator
  arr1[0] = "potatoe";
})();
console.log(arr2); //result is [ 'JAN', 'FEB', 'MAR', 'APR', 'MAY' ]

// using destructing assignment to assign variables from objects
var voxel = { x: 3.6, y: 7.4, z: 6.54 };

var x = voxel.x;
var y = voxel.y;
var z = voxel.z;

const { x: a, y: b, z: c } = voxel; //destructuring sentence

const AVG_TEMPERATURES = {
  today: 77.5,
  tomorrow: 79,
};

function getTempOfTmrw(avgTemperatures) {
  "use strict";

  const { tomorrow: tempOfTomorrow } = avgTemperatures;
  return tempOfTomorrow;
}

console.log(getTempOfTmrw(AVG_TEMPERATURES));

//destructuring assignment with nexted objects
const LOCAL_FORCAST = {
  today: { min: 72, max: 83 },
  tomorrow: { min: 73.3, max: 84.6 },
};

function getMaxOfTmrw(forecast) {
  "use strict";

  const {
    tomorrow: { max: MaxOfTomorrow },
  } = forecast;

  return MaxOfTomorrow;
}

console.log(getMaxOfTmrw(LOCAL_FORCAST));

// using destructuring to assign variables from arrays
const [l, m, , n] = [1, 2, 3, 4, 5, 6];
console.log(l, m, n);

(u = 8), (v = 6);
(() => {
  "use strict";
  [u, v] = [v, u];
})();
console.log(u);
console.log(v);

// using destructuring with rest operator
const source = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
function removeFirstTwo(list) {
  const [, , ...arrs] = list;
  return arrs;
}
const arrs = removeFirstTwo(source);
console.log(arrs);
console.log(source);

// using destructuring assignment to pass an object as a function's parameters
const stats = {
  max: 56.78,
  standard_deviation: 4.34,
  median: 34.54,
  mode: 23.87,
  min: -0.75,
  average: 35.85,
};
const half = (function () {
  return function half({ max, min }) {
    return (max + min) / 2.0;
  };
})();
console.log(stats);
console.log(half(stats));

// creating strings using tempelate literals
const person = {
  name: "Zodiac Hasbro",
  age: 56,
};

// template literal with multi-line and string interpolation
const greeting = `Hello, my name is ${person.name}!
I am ${person.age} years old.`;

console.log(greeting);

const result = {
  success: ["max-length", "no-amd", "prefer-arrow-functions"],
  failure: ["no-var", "var-on-top", "linebreak"],
  skipped: ["id-blacklist", "no-dup-keys"],
};
function makeList(arr) {
  const resultDisplayArray = [];
  for (let i = 0; i < arr.length; i++) {
    resultDisplayArray.push(`<li class="text-warning>${arr[i]}</li>`);
  }

  return resultDisplayArray;
}
// makeList(result.failure) should return:
// [`<li class="text-warning"> no-var</li>`
// `<li class="text-warning"> var-on-top</li>`
// `<li class="text-warning"> linebreak</li>`]

const resultDisplayArray = makeList(result.failure);
console.log(resultDisplayArray);
// write concise object literal declarations using simple fields
const createPerson = (name, age, gender) => ({ name, age, gender });
// {
//   return {
//     name: name,
//     age: age,
//     gender: gender,
//   };
// };

console.log(createPerson("Zodiac Hasbro", 56, "male"));

// writing concise declarative functions
const bicycle = {
  gear: 2,
  setGear(newGear) {
    //way of declaring func in object
    "use strict";
    this.gear = newGear;
  },
};

bicycle.setGear(3);
console.log(bicycle.gear);

// using class syntax to define a constructor function
class spaceShuttle {
  constructor(targetPlanet) {
    this.targetPlanet = targetPlanet;
  }
}

var zeus = new spaceShuttle("jupiter");
console.log(zeus.targetPlanet);

// for vegetables class
function makeClass() {
  class vegetable {
    constructor(name) {
      this.name = name;
    }
  }
  return vegetable;
}
const vegetable = makeClass();
const carrot = new vegetable("carrot");
console.log(carrot.name);

// using getters and setters to control access to an object
class Book {
  constructor(author) {
    this.author = author;
  }

  //getter
  get writer() {
    return this._author;
  }
  //setter
  set writer(updatedAuthor) {
    this._author = updatedAuthor;
  }
}

function makeClass() {
  class Thermostat {
    constructor(temp) {
      this._temp = (5 / 9) * (temp - 32);
    }
    get temperature() {
      return this._temp;
    }
    set temperature(updatedTemp) {
      this._temp = updatedTemp;
    }
  }
  return Thermostat;
}

const Thermostat = makeClass();
const thermos = new Thermostat(76);
let temp = thermos.temperature;
thermos.temperature = 26;
temp = thermos.temperature;
console.log(temp);

// understanding d difference btw import and require--------
// import { capitalizeString } from "./string_func";
// const cap = capitalizeString("hello");

// console.log(cap);

// use export to reuse a code block-------
// const capitalizeString = (string) => {
//   return string.charAt(0).toUpperCase() + string.slice(1);
// };
// export { capitalizeString };
// const foo = "bar";
// const bar = "foo";

// use * to import everything from a file----------
// import * as capitalizeString from "./string_func";

//create an export fallback with export default-------
// export default function subtract(x, y) {
//   return x - y;
// }
//import a default export-------------------
// import subtract from "./string_func"; //we don't use curly brces when we are importing from export default
// subtract(7, 4);

//function to print even numbers
function countEven(arrayNo) {
  let count;
  for (let i = 0; i < arrayNo.length; i++) {
    if (arrayNo[i] % 2 === 0) {
      count = arrayNo[i];
      console.log(count);
    }
  }
  return count;
}

const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 20, 30, 5];
// countEven(arr);
