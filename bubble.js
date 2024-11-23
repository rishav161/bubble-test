const myCanvas = document.getElementById("canvas");
const con = myCanvas.getContext("2d");
const hitButton = document.getElementById("hit");
const resetButton = document.getElementById("reset");
const stopButton = document.getElementById("stop");

let arrowStart = 360;
let arrowEnd = 480;

let circleColor = "#" + Math.floor(Math.random() * 16777215).toString(16);
let hit = false;

function draw() {
  con.clearRect(0, 0, myCanvas.width, myCanvas.height);
  
  // Circle 
  con.fillStyle = circleColor;
  con.beginPath();
  con.arc(50, myCanvas.height / 2, 45, 0, 2 * Math.PI);
  con.fill();

  con.strokeStyle = "#000"; 
  con.lineWidth = 3; 
  con.beginPath();
  con.arc(50, myCanvas.height / 2, 45, 0, 2 * Math.PI);
  con.stroke();

  // Arrow
  con.strokeStyle = "#000";
  con.lineWidth = 5;
  con.beginPath();
  con.moveTo(arrowStart, myCanvas.height / 2);
  con.lineTo(arrowEnd, myCanvas.height / 2);
  con.stroke();

  con.fillStyle = "#000";
  con.beginPath();
  con.moveTo(arrowStart - 5, myCanvas.height / 2);
  con.lineTo(arrowEnd - 110, myCanvas.height / 2 - 10);
  con.lineTo(arrowEnd - 110, myCanvas.height / 2 + 10);
  con.closePath();
  con.fill();
}

function moveArrow() {
  if (arrowStart > 100) {
    arrowStart -= 5;
    arrowEnd -= 5;
    draw();
  } else {
    hit = true;
    circleColor = "#ff0000";
    draw();
    clearInterval(animation);
  }
}

// Button animations
let animation;
hitButton.addEventListener("click", () => {
  if (!hit) {
    animation = setInterval(moveArrow, 50);
  }
});

resetButton.addEventListener("click", () => {
  arrowStart = 360;
  arrowEnd = 480;
  circleColor = "#" + Math.floor(Math.random() * 16777215).toString(16);
  hit = false;
  clearInterval(animation);
  draw();
});

stopButton.addEventListener("click", () => {
  clearInterval(animation);
});

draw();
