var robot = document.getElementById("robot");
var left = document.getElementById("left");
var right = document.getElementById("right");
var div = document.getElementById("disco");
var auto = document.getElementById("auto");

//Reproducir musica
var beat = new Audio("audio/beat.ogg");

var buttonPlay = document.getElementById("play");

buttonPlay.addEventListener("click", () => {
  beat.play();
});

//Mover robot

left.addEventListener("mousedown", () => {
  robot.src = "img/robot-l.png";
  div.style.backgroundColor = "#FF00FF";
});

left.addEventListener("mouseup", () => {
  positionZero();
  div.style.backgroundColor = "#FFFF00";
});

right.addEventListener("mousedown", () => {
  robot.src = "img/robot-r.png";
  div.style.backgroundColor = "#33CC33";
});

right.addEventListener("mouseup", () => {
  positionZero();
  div.style.backgroundColor = "#FFFF00";
});

function positionZero() {
  robot.src = "img/robot-c.png";
}

//auto

auto.addEventListener("mousedown", () => {
  setInterval(() => {
    robot.src = "img/robot-l.png";
  }, 2000);
});
