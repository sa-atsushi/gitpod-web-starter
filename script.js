/*

let omikujiButton = document.getElementById("omikuji-button");
let result = document.getElementById("result");

function omikuji() {
  let r = Math.random();
  if (r < 0.2) {
    result.textContent = "大吉";
    result.style.color = "red";
  } else if (r < 0.7) {
    result.textContent = "吉";
    result.style.color = "black";
  } else {
    result.textContent = "凶";
    result.style.color = "blue";
  }
}

omikujiButton.onclick = omikuji;

*/

let startButton = document.getElementById("start-button");
let stopButton = document.getElementById("stop-button");
let resetButton = document.getElementById("reset-button");
let result = document.getElementById("result");
let timerId;

function start() {
  timerId = setInterval(timer, 1000);
}
function stop() {
  clearInterval(timerId);
}
function reset() {
  time = 0;
  result.textContent = time;
}
let time = 0;
function tick() {
  time = time + 1;
}
function timer() {
  tick();
  result.textContent = time;
}

startButton.onclick = start;
stopButton.onclick = stop;
resetButton.onclick = reset;
