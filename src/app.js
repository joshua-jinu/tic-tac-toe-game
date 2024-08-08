// The winning combinations and elements from the DOM are referenced below for you
const boxElement = document.querySelectorAll('.box');
var winningCombinations = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];
var xAttempts = [];
var oAttempts = [];
var click = 1;
var wonTheGame = 0;
const message = document.getElementById('message');
const gameResult = document.getElementById('result');
const restart = document.getElementById('button');

//Challenge :- Here you are expected to complete the handleClick function, which will place X and O alternatively on clicking the DIV
boxElement.forEach((box) => {
  console.log(box);
  box.onclick = handleClick;
});
let xwon, ywon;
function handleClick() {
  click += 1;
  let thisele;
  console.log(this.id);
  if (click % 2 == 0) {
    thisele = document.createElement('p');
    thisele.innerText = 'X';
    xAttempts.push(parseInt(this.id) - 1);
  } else {
    thisele = document.createElement('p');
    thisele.innerText = 'O';
    oAttempts.push(parseInt(this.id) - 1);
  }
  console.log(xAttempts);
  xwon = result(winningCombinations, xAttempts, 'X');
  ywon = result(winningCombinations, oAttempts, 'Y');
  if (xwon || ywon) {
    wonTheGame = 1;
    gameResult.style.visibility = 'visible';
    click = 1;
  }

  if (click == 9 && !wonTheGame) {
    message.innerHTML = "It's a tie 🤝 ";
    gameResult.style.visibility = 'visible';
    wonTheGame = 1;
    click = 1;
  }

  this.appendChild(thisele);
}

//  Challenge 2: Result function
// Here you are expected to complete the result function that will give winningteam based on teh winning combinations
//should declare a tie when all boxes are filled with no winner
function result(winningCombinations, attempts, player) {
  let flag = false;
  for (let comb of winningCombinations) {
    flag = false;
    for (let box of comb) {
      flag = attempts.indexOf(box) != -1 ? true : false;
      if (flag == false) break;
    }
    if (flag == true) {
      message.innerHTML = `'${player}' Won the game!`;
      return flag;
    }
  }
  return false;
}

// Iteration 4: Restart function
//restarts the game when the user clicks on the button restart i.e play again
restart.onclick = () => {
  click = 1;
  history.go(0);
};
