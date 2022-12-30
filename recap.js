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
