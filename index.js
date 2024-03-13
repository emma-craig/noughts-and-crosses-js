// access the DOM

const boxes = document.querySelectorAll(".box");
const text = document.querySelector("#heading");
const strategy = document.querySelector("#strategy");
const restartBtn = document.querySelector("#restart");

let spaces = [];

let player1 = "X";
let player2 = "O";
let currentPlayer = player1;

const drawBoard = () => {
  boxes.forEach((box, i) => {
    let className = "";
    if (i < 3) {
      box.className += " bottom-lines";
    }
    if (i % 3 === 0 || i % 3 === 1) {
      box.className += " right-lines";
    }

    if (i % 3 === 2) {
      box.className += " left-lines";
    }

    if (i > 5) {
      box.className += " top-lines";
    }

    box.addEventListener("click", boxClicked);
  });
};

const boxClicked = (e) => {
  const id = e.target.id;
  if (!spaces[id]) {
    spaces[id] = currentPlayer;
    e.target.innerText = currentPlayer;
  }
  if (playerWon()) {
    text.innerText = `${currentPlayer} has won!`;
    restart();
    return;
  }
  if (playerDraw()) {
    text.innerText = "It's a draw!";
  }
  currentPlayer = currentPlayer === "X" ? "O" : "X";
};

const restart = () => {};


restartBtn.addEventListener("click", restart);
restart();
drawBoard();
