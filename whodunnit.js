// Episode 1
var name = 'Bob';

var printName = function() {
  console.log('My name is ' + name );
};

printName();

// Episode 1 should print out 'My name is Bob'






// Episode 2
score = 5;

var result = function() {
  var score = 3;
  return score;
};

console.log(result());

// Episode 2 should print out 3





// Episode 3
var myAnimals = ['Chickens', 'Cats', 'Rabbits'];

var listAnimals = function() {
  myAnimals = ['Ducks', 'Dogs', 'Lions'];
  for(var i=0;i<myAnimals.length; i++){
    console.log(i + ": " + myAnimals[i]);
  }
}

listAnimals();

// Episode 3 should print out:
// 0: Ducks
// 1: Dogs
// 2: Lions






// Episode 4
var suspectOne = 'Ally';
var suspectTwo = 'Alan';
var suspectThree = 'Upul';
var suspectFour = 'Alistair';

var allSuspects = function() {
  var suspectThree = 'Colin'
  console.log('Suspects include: ' + suspectOne + ', ' + suspectTwo + ', ' + suspectThree + ', ' + suspectFour)
};

allSuspects();
console.log( 'Suspect three is:' + suspectThree );

// Episode 4 will run the allSuspects() method and output 'Suspects include:  Ally, Alan, Colin, Alistair'.
// Also, it will log 'Suspect three is: Upul'
//Upul is suspectThree globally and Colin is suspectThree locally in the allSuspects method.





// Episode 5
var detective = {
  name : 'Ace Ventura',
  pet : 'monkey'
};

var printName = function(detective) {
  return detective.name
};

var detectiveInfo = function() {
  detective['name'] = 'Poirot'
  return printName(detective);
};

console.log(detectiveInfo());

// Episode 5 will log 'Poirot' to the console.  The first variable detective is not used in detectiveInfo function.





// Episode 6
var murderer = 'Rick';

var outerFunction = function() {
  var murderer = 'Morty';

  var innerFunction = function() {
    murderer = 'Jerry';
  }

  innerFunction();
}

outerFunction();
console.log('the murderer is ', murderer);





//  Episode 6 will print: 'the murderer is Rick'.
// The outerFunction function is never called.

function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
}

var murdererArray = ["Ally", "Alan", "Upul", "Alistair"];

var murdererSelection = function(){
  console.log("The murderer is: " + murdererArray[getRandomInt(3)]);
}

murdererSelection();
