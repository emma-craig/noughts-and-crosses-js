// access the DOM

const boxes = document.querySelectorAll(".box");
const text = document.querySelector("#heading");
const strategy = document.querySelector("#strategy");
const restartBtn = document.querySelector("#restart");
const playerOne = document.querySelector("#player1");
const playerTwo = document.querySelector("#player2");

let spaces = [];

let players = {
  player1: "X",
  player2: "O",
};
let currentPlayer = players.player1;
console.log(currentPlayer);
playerOne.classList.add("active");

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
    currentPlayer = player1;
    box.addEventListener("click", boxClicked);
  });
};

const boxClicked = (e) => {
  const id = e.target.id;
  if (!spaces[id]) {
    spaces[id] = currentPlayer;
    e.target.innerText = currentPlayer;

    if (playerWon()) {
      text.innerText = `${currentPlayer} has won!`;
      restart();
      return;
    }
    if (playerDraw()) {
      text.innerText = "It's a draw!";
    }
    currentPlayer = currentPlayer === "X" ? "O" : "X";
    updatePlayerLabels();
  }
};

const playerWon = () => {
  if (spaces[0] === currentPlayer) {
    if (spaces[1] === currentPlayer && spaces[2] === currentPlayer) {
      strategy.innerText = `${currentPlayer} wins!`;

      return true;
    }
    if (spaces[3] === currentPlayer && spaces[6] === currentPlayer) {
      strategy.innerText = `${currentPlayer} wins!`;

      return true;
    }
    if (spaces[4] === currentPlayer && spaces[8] === currentPlayer) {
      strategy.innerText = `${currentPlayer} wins!`;

      return true;
    }
  }
  if (spaces[8] === currentPlayer) {
    if (spaces[7] === currentPlayer && spaces[6] === currentPlayer) {
      strategy.innerText = `${currentPlayer} wins!`;

      return true;
    }
    if (spaces[5] === currentPlayer && spaces[2] === currentPlayer) {
      strategy.innerText = `${currentPlayer} wins!`;

      return true;
    }
  }
  if (spaces[4] === currentPlayer) {
    if (spaces[3] === currentPlayer && spaces[2] === currentPlayer) {
      strategy.innerText = `${currentPlayer} wins!`;

      return true;
    }
    if (spaces[1] === currentPlayer && spaces[7] === currentPlayer) {
      strategy.innerText = `${currentPlayer} wins!`;

      return true;
    }
    if (spaces[2] === currentPlayer && spaces[6] === currentPlayer) {
      strategy.innerText = `${currentPlayer} wins!`;

      return true;
    }
  }
};

const playerDraw = () => {
  let count = 0;
  spaces.forEach((box, i) => {
    if (spaces[i] !== null) count++;
  });
  if (count === 9) {
    text.innerText = "It's a draw!";
    restart();
  }
};

const updateStatus = (message) => (strategy.innerText = message);

const restart = () => {
  playerOne.classList.add("active");

  setTimeout(() => {
    spaces.forEach((space, i) => {
      spaces[i] = null;
    });
    boxes.forEach((box) => {
      box.innerText = "";
    });
    text.innerText = `Play`;
    strategy.innerText = ``;
  }, 1000);
};

const updatePlayerLabels = () => {
  playerOne.classList.toggle("active");
  playerTwo.classList.toggle("active");

  currentPlayer === player1
    ? updateStatus("Player 1's turn (X)")
    : updateStatus("Player 2's turn (O)");
};

restartBtn.addEventListener("click", restart);
restart();
drawBoard();
