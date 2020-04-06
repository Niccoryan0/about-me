'use strict';

var scoreCount = 0;
// Set up my 5 arrays for each part of the first function
let qList = ['Is my hair red?', 'Was I born in Washington?', 'Did I study anthropology?', 'Have I ever been to Mexico?', 'Am I a software developer?'];
let varList = ['Hair Color', 'Birthplace', 'Degree', 'Mexico', 'Software Dev'];
let ansList = ['y', 'y', 'n', 'n', 'y'];

// First 5 Qs function: Takes parameters that change for each question including the question itself, the variable that the question is about, and the ans in y or n.
function askQ(question, variable, ans) {
  let response = prompt(question).toLowerCase();
  // Check for invalid responses with a while loop first
  while(!response.startsWith('y') && !response.startsWith('n')) {
    response = prompt('I\'m sorry I didn\'t understand that, please enter yes or no').toLowerCase();
  }
  // Compare first letter of response with correct answer, add score if correct.
  if (response.startsWith(ans)) {
    alert(variable + ': Correct!');
    scoreCount++;
  } else {
    alert(variable + ': Incorrect.');
  }
}

// Number Guessing Game! Set a random number and give the user 4 attempts to solve it while telling them if their guess is too high or low.
function askNumQ() {
  let numQAns = Math.floor(Math.random() * 20);
  console.log(numQAns);
  let guessCountNum = 0;
  do {
    var guessNumber = parseInt(prompt('Guess a random number from 1 to 20! Attempts remaining: ' + (4 - guessCountNum)), 10);
    // Check if guess is correct, too high, or too low, respond accordingly
    if (guessNumber === numQAns) {
      alert(numQAns + ' is correct, congratulations! You used: ' + guessCountNum + ' attempts, not bad!');
      scoreCount++;
      break;
    } else if (typeof guessNumber !== 'number') {
      alert('Enter a NUMBER between 1 and 20');
    } else if (guessNumber > numQAns){
      alert('Too high! Try something lower.');
    } else if (guessNumber < numQAns){
      alert('Too low! Try something higher.');
    } else {
      alert('Sorry I didn\'t catch that, please guess a number between 1 and 20');
    }
    guessCountNum++;
    // Runs game until guess limit reached OR the correct answer is guessed
  } while(guessCountNum < 4);

  if (guessCountNum === 4){
    alert('Attempt limit (4) reached! The number was ' + numQAns);
  }
}

// Multiple correct answers guessing game, make a question with more than one right answer, give the user 6 attempts to guess one of the correct answers
function askMinQ() {
  var favMinerals = ['Tourmaline', 'Bismuth', 'Opal', 'Fluorite', 'Amethyst', 'Azurite', 'Realgar', 'Rhodochrosite', 'Pyrite', 'Labradorite'];
  var favMinString = favMinerals.join(', ');
  var guessCountNum = 0;
  var correct = false;
  while (guessCountNum < 6) {
    var guessMulti = prompt('Try to guess one of my favorite minerals! Attempts remaining: ' + (6 - guessCountNum)).toLowerCase();
    // Check user's guess against all items in the favMinerals list
    for (var x = 0; x < favMinerals.length; x++) {
      if (guessMulti === favMinerals[x].toLowerCase()) {
        alert('You got one! My favorite minerals are: ' + favMinString);
        correct = true;
        scoreCount++;
        break;
      }
    }
    // Check if they won:
    if (correct) {
      break;
    } else {
      guessCountNum++;
    }
  }
  if (guessCountNum >= 4) {
    alert('Sorry, attempt limit (6) reached, my favorite minerals are: ' + favMinString);
  }
}

// Asks name, returns a response based on user's score in the questions, says goodbye
function finalScore() {
  let usersName = prompt('Alright, well that\'s enough about me though, what\'s your name?');
  switch (scoreCount){
  case 0:
    alert('Its like you don\'t know me at all ' + usersName + '! You got 0 points, womp womp womp.');
    document.getElementById('ifPerfect').innerHTML='You\'d better study up ' + usersName + ', seeing as you don\'t know anything about me!';
    break;
  case 1:
  case 2:
  case 3:
  case 4:
  case 5:
  case 6:
    alert('Thanks for playing ' + usersName + '! You scored: ' + scoreCount + ' points out of 7!');
    break;
  case 7:
    alert('Wow!! You got all 7 points, way to go ' + usersName + '!!');
    document.getElementById('ifPerfect').innerHTML='But you already know all this, ' + usersName + '! You got a perfect score on the questions!';
    break;
  }
  alert('I hope you enjoyed these games today ' + usersName + ', and maybe you\'ll find my bio informative and enjoy your visit!');
}

alert('Hi! Welcome to my About Me page, I\'m Nicco Ryan and I have a few questions to see how well you might know me!');

// Call the functions:
for (var i = 0; i < qList.length; i++) {
  askQ(qList[i], varList[i], ansList[i]);
}
askNumQ();
askMinQ();
finalScore();



// =================================== STICKY HEADER ==============================
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

