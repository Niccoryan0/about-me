'use strict';

function askQ(question, variable, ans) {
  let response = confirm(question);
  if (response === ans) {
    console.log(variable + ': Correct!');
  } else {
    console.log(variable + ': Incorrect.');
  }
}

askQ('Is my hair red?', 'Hair Color', true);
askQ('Was I born in Washington?', 'Birthplace', true);
askQ('Did I study anthropology?', 'Degree', false);
askQ('Have I ever been to Mexico?', 'Mexico', false);
askQ('Am I a software developer?', 'Software Dev', true);

let userName = prompt('But enough about me, what\'s your name?');
console.log('Hi, ' + userName + ' glad to have you here!');
