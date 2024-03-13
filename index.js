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
    let styleString = "";
    if (i < 3) {
      styleString += "border-bottom: 3px solid var(--text)";
    }
    if (i % 3 === 0) {
      styleString += "border-right: 3px solid var(--text)";
    }
    if (i % 3 === 2) {
      styleString += "border-left: 3px solid var(--text)";
    }
    if (i > 5) {
      styleString += "border-top: 3px solid var(--text)";
    }
    box.style = styleString;
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

restartBtn.addEventListener("click", restart);
restart();
drawBoard();
