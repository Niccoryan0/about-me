'use strict';

function askQ(question, variable, ans) {
  let response = confirm(question);
  if (response === ans) {
    alert(variable + ': Correct!');
  } else {
    alert(variable + ': Incorrect.');
  }
}

askQ('Is my hair red? Ok for Yes, Cancel for No', 'Hair Color', true);
askQ('Was I born in Washington?', 'Birthplace', true);
askQ('Did I study anthropology?', 'Degree', false);
askQ('Have I ever been to Mexico?', 'Mexico', false);
askQ('Am I a software developer?', 'Software Dev', true);

let userName = prompt('But enough about me, what\'s your name?');
alert('Hi, ' + userName + ' glad to have you here!');
alert('It was nice to see you today ' + userName + ', hope to see you again soon!');

// For the sticky header, information from W3 Schools: 
// To execute when the user scrolls:
window.onscroll = function() {myFunction()};

//  Get the header element
let header = document.getElementById('header');

// Get offset position of navbar
let sticky = header.offsetTop;

// Add sticky to the header when scroll position is reached, remove sticky whne it isn't
function myFunction() {
  if (window.pageYOffset > sticky) {
    header.classList.add("sticky");
  } else {
    header.classList.remove("sticky");
  }
}
