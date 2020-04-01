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

// askQ('Is my hair red?', 'Hair Color', 'y');
// askQ('Was I born in Washington?', 'Birthplace', 'y');
// askQ('Did I study anthropology?', 'Degree', 'n');
// askQ('Have I ever been to Mexico?', 'Mexico', 'n');
// askQ('Am I a software developer?', 'Software Dev', 'y');


// let usersName = prompt('But enough about me, what\'s your name?');
// alert('Hi, ' + usersName + ' glad to have you here!');
// alert('It was nice to see you today ' + usersName + ', hope to see you again soon!');

alert('Let\' play a game now, I\'m thinking of a number between 1 and 50')

let numAns = 10;
let guessCount = 0;
do {
  var guessNumber = Number(prompt('Choose a number (1-50)!'));
  if (guessNumber === numAns) {
    console.log(numAns + ' is correct, congratulations!');
    scoreCount++;
    break;
  } else if (guessNumber > numAns){
    console.log('Too high! Try something lower.')
  } else if (guessNumber < numAns){
    console.log('Too low! Try something higher.')
  }
  guessCount++;
  // Runs game until guess limit reached OR the correct answer is guessed
} while(guessCount < 4);
console.log(guessNumber);

if (guessCount === 4){
  console.log('Attempt limit (4) reached! The number was' + numAns);
}

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
