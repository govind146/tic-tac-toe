let boxes = document.querySelectorAll(".box");
let screen = document.querySelector(".screen");
let h = document.querySelector("h1");
let btn = document.querySelector(".btn");
let p1 = document.querySelector(".p1");
let p2 = document.querySelector(".p2");
// console.log(boxes);
let count = 0;
const winPatterns = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [2, 4, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
];

for (let i = 0; i < 9; i++) {
  boxes[i].addEventListener("click", function () {
    putOX(count, i);
    count++;
    if (winner(count)) {
      end(9);
      disable();
    }
    end(count);
  });
}

// to disable the remaining boxes after the winner is decided
function disable() {
  for (let i = 0; i < 9; i++) {
    boxes[i].disabled = true;
  }
}

// to enable the boxes for a new game
function enable() {
  for (let i = 0; i < 9; i++) {
    boxes[i].disabled = false;
  }
}
let x = 0;
let o = 0;

// to check the winning pattern
function winner(count) {
  if (count > 4) {
    for (let j = 0; j < 8; j++) {
      if (
        boxes[winPatterns[j][0]].innerText != "" &&
        boxes[winPatterns[j][1]].innerText != "" &&
        boxes[winPatterns[j][2]].innerText != "" &&
        boxes[winPatterns[j][0]].innerText == "O" &&
        boxes[winPatterns[j][1]].innerText == "O" &&
        boxes[winPatterns[j][2]].innerText == "O"
      ) {
        p2.innerText = `player O score :${++o}`;
        return true;
      } else if (
        boxes[winPatterns[j][0]].innerText != "" &&
        boxes[winPatterns[j][1]].innerText != "" &&
        boxes[winPatterns[j][2]].innerText != "" &&
        boxes[winPatterns[j][0]].innerText == "X" &&
        boxes[winPatterns[j][1]].innerText == "X" &&
        boxes[winPatterns[j][2]].innerText == "X"
      ) {
        p1.innerText = `player X score :${++x}`;
        return true;
      }
    }
  }
}
// to display "x" or "o"
function putOX(count, i) {
  if (count % 2 == 0 && boxes[i].innerText == "") {
    boxes[i].innerText = "X";
    // screen.style.backgroundColor = "rgb(218, 67, 67)";
    h.innerText = "PLAYER O";
  } else if (boxes[i].innerText == "") {
    boxes[i].innerText = "O";
    // screen.style.backgroundColor = "rgb(45, 93, 215)";
    h.innerText = "PLAYER X";
  }
}
// to display game over
function end(count) {
  if (count == 9) {
    h.innerText = "GAME OVER";
  }
}
// to clear the table
function defaultGame() {
  for (let i = 0; i < 9; i++) {
    boxes[i].innerText = "";
    count = 0;
  }
}


// reset button
btn.addEventListener("click", function () {
  defaultGame();
  enable();
  // btn.innerText = "reset";
   h.innerText = "PLAY";
  screen.style.backgroundColor = "#8DD8FF";
});
