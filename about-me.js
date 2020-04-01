'use strict';

var scoreCount = 0;

function askQ(question, variable, ans) {
  let response = prompt(question).toLowerCase();

  while(!response.startsWith('y') && !response.startsWith('n')) {
    response = prompt('I\'m sorry I didn\'t understand that, please enter yes or no').toLowerCase();
  }
  if (response.startsWith(ans)) {
    alert(variable + ': Correct!');
    scoreCount++;
  } else {
    alert(variable + ': Incorrect.');
  }
}

let qList = ['Is my hair red?', 'Was I born in Washington?', 'Did I study anthropology?', 'Have I ever been to Mexico?', 'Am I a software developer?'];
let varList = ['Hair Color', 'Birthplace', 'Degree', 'Mexico', 'Software Dev'];
let ansList = ['y', 'y', 'n', 'n', 'y'];

for (var i = 0; i < qList.length(); i++) {
  askQ(qList[i], varList[i], ansList[i]);
}

// let usersName = prompt('But enough about me, what\'s your name?');
// alert('Hi, ' + usersName + ' glad to have you here!');
// alert('It was nice to see you today ' + usersName + ', hope to see you again soon!');

// Number Guessing Game! Set the number and give the user 4 attempts to solve it while telling them if their guess is too high or low.
alert('Let\' play a guessing game now.');

let numAns = 24;
let guessCountNum = 0;
do {
  var guessNumber = parseInt(prompt('How old am I? Attempts remaining: ' + (4 - guessCountNum)), 10);
  // Check if guess is correct, too high, or too low, respond accordingly
  if (guessNumber === numAns) {
    console.log(numAns + ' is correct, congratulations! You used: ' + guessCountNum + ' attempts, not bad!');
    scoreCount++;
    break;
  } else if (guessNumber > numAns){
    console.log('Too high! Try something lower.');
  } else if (guessNumber < numAns){
    console.log('Too low! Try something higher.');
  }
  guessCountNum++;
  // Runs game until guess limit reached OR the correct answer is guessed
} while(guessCountNum < 4);

if (guessCountNum === 4){
  console.log('Attempt limit (4) reached! The number was ' + numAns);
}

// Multiple correct answers guessing game, make a question with more than one right answer, give the user 6 attempts to guess one of the correct answers
var favMinerals = ['Tourmaline', 'Bismuth', 'Opal', 'Fluorite', 'Amethyst', 'Azurite', 'Realgar', 'Rhodochrosite', 'Pyrite', 'Labradorite'];
var guessCountMulti = 0;
var correct = false;
while (guessCountMulti < 6) {
  var guessMulti = prompt('Try to guess one of my favorite minerals! Attempts remaining: ' + (6 - guessCountMulti));
  for (var x = 0; x < favMinerals.length; x++) {
    if (guessMulti.toLowerCase() === favMinerals[x].toLowerCase()) {
      console.log('You got one! My favorite minerals are: ' + favMinerals);
      correct = true;
      scoreCount++;
      break;
    }
  }
  if (correct) {
    break;
  } else {
    guessCountMulti++;
  }
}
if (guessCountMulti >= 4) {
  console.log('Sorry, attempt limit (6) reached, my favorite minerals are: ' + favMinerals);
}

// Display final score
let usersName = prompt('Thanks for playing! Enough about me though, what\'s your name?');
switch (scoreCount){
case 0:
  alert('Its like you don\'t know me at all ' + usersName + '! You got 0 answer\'s correct, better luck next time!');
  break;
case 1:
case 2:
case 3:
case 4:
case 5:
case 6:
  alert('Thanks for playing ' + usersName + '! You scored: ' + scoreCount + ' points total');
  break;
case 7:
  alert('Wow!! You got all 7, way to go' + usersName + '!');
  break;
}
alert('Good job ' + usersName + ', you scored a total of ' + scoreCount + ' points across all those games!');
alert('I hope you enjoyed these games today ' + usersName + ', and maybe you\'ll find my bio informative and enjoy your visit!');

// For the sticky header, information from W3 Schools:
// To execute when the user scrolls:
window.onscroll = function() {myFunction();};

//  Get the header element to modify it
let header = document.getElementById('header');

// Get the offset position of the navbar
let sticky = header.offsetTop;

// Add sticky to the header when scroll position is reached, remove sticky whne it isn't
function myFunction() {
  if (window.pageYOffset > sticky) {
    header.classList.add('sticky');
  } else {
    header.classList.remove('sticky');
  }
}
