const heading = document.querySelector('h1');
heading.textContent = "Hello World ";




let compare = 1;
let string = '1';

let iceCream = 'chocolate';
if(iceCream == 'chocolate') {
  alert('Yay, I love chocolate ice cream!');
} else {
  alert('Awwww, but chocolate is my favorite...');
}


function setUserName() {
  let myName = prompt('Please enter your name.');
  if(!myName) {
    setUserName();
  } else {
    localStorage.setItem('name', myName);
    heading.textContent = 'Mozilla is cool, ' + myName;
  }
}

if(!localStorage.getItem('name')) {
  setUserName();
} else {
  let storedName = localStorage.getItem('name');
  heading.textContent = 'Mozilla is cool, ' + storedName;
}

setUserName();
