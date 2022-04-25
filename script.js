var player,
  winner = null;
var selectedPlayer = document.getElementById("selected-player");
var selectedWinner = document.getElementById("selected-winner");

switchPlayer("X");

function chooseSquare(id) {
  if (winner !== null) {
    return;
  }
  var square = document.getElementById(id);
  if (square.innerHTML !== "-") {
    return;
  }

  square.innerHTML = player;
  square.style.color = "#000";

  if (player === "X") {
    player = "O";
  } else {
    player = "X";
  }

  switchPlayer(player);
  winnerChecked();
}

function switchPlayer(valor) {
  player = valor;
  selectedPlayer.innerHTML = player;
}

function winnerChecked() {
  var square1 = document.getElementById(1);
  var square2 = document.getElementById(2);
  var square3 = document.getElementById(3);
  var square4 = document.getElementById(4);
  var square5 = document.getElementById(5);
  var square6 = document.getElementById(6);
  var square7 = document.getElementById(7);
  var square8 = document.getElementById(8);
  var square9 = document.getElementById(9);

  if (sequenceCheck(square1, square2, square3)) {
    changeSquareColor(square1, square2, square3);
    changeWinner(square1);
    return;
  }

  if (sequenceCheck(square4, square5, square6)) {
    changeSquareColor(square4, square5, square6);
    changeWinner(square4);
    return;
  }

  if (sequenceCheck(square7, square8, square9)) {
    changeSquareColor(square7, square8, square9);
    changeWinner(square7);
    return;
  }

  if (sequenceCheck(square1, square4, square7)) {
    changeSquareColor(square1, square4, square7);
    changeWinner(square1);
  }

  if (sequenceCheck(square2, square5, square8)) {
    changeSquareColor(square2, square5, square8);
    changeWinner(square2);
    return;
  }

  if (sequenceCheck(square3, square6, square9)) {
    changeSquareColor(square3, square6, square9);
    changeWinner(square3);
    return;
  }

  if (sequenceCheck(square1, square5, square9)) {
    changeSquareColor(square1, square5, square9);
    changeWinner(square1);
    return;
  }

  if (sequenceCheck(square3, square5, square7)) {
    changeSquareColor(square3, square5, square7);
    changeWinner(square3);
  }
}

function changeWinner(square) {
  winner = square.innerHTML;
  selectedWinner.innerHTML = winner;
}

function changeSquareColor(square1, square2, square3) {
  square1.style.background = "#0f0";
  square2.style.background = "#0f0";
  square3.style.background = "#0f0";
}

function sequenceCheck(square1, square2, square3) {
  var equal = false;

  if (
    square1.innerHTML !== "-" &&
    square1.innerHTML === square2.innerHTML &&
    square2.innerHTML == square3.innerHTML
  ) {
    equal = true;
  }

  return equal;
}

function restart() {
  winner = null;
  selectedWinner.innerHTML = "";

  for (var i = 1; i <= 9; i++) {
    var square = document.getElementById(i);
    square.style.background = "#eee";
    square.style.color = "#eee";
    square.innerHTML = "-";
  }

  switchPlayer("X");
}
