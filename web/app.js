var robot = document.getElementById("robot");
var robot1 = document.getElementById("robot1");
var robot2 = document.getElementById("robot2");
var robot3 = document.getElementById("robot3");
var robot4 = document.getElementById("robot4");
var robot5 = document.getElementById("robot5");
var robot6 = document.getElementById("robot6");

// var left = document.getElementById("left");
// var right = document.getElementById("right");
var div = document.getElementById("disco");
var auto = document.getElementById("auto");
var buttonStopDance = document.getElementById("buttonStopDance");

//Reproducir musica
var beat = new Audio("audio/beat.ogg");

var buttonPlay = document.getElementById("play");


///Este es el comentario de juan


/* buttonPlay.addEventListener("click", () => {
  beat.play();
}); */

//Mover robot
/* 
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
} */

//auto
var srcArray = ["img/robot-l.png", "img/robot-c.png", "img/robot-r.png"];
var colorArray = ["#FF00FF", "#FFFF00", "#33CC33"];

/* auto.addEventListener("click", () => {
  beat.play();
  danceRobot(robot);
  danceRobot(robot1);
});

function danceRobot(robot) {
  let intervalDance = setInterval(() => {
    for (let i = 0; i < colorArray.length; i++) {
      setTimeout(function () {
        div.style.backgroundColor = colorArray[i];
      }, i * 350);
    }
    for (let i = 0; i < srcArray.length; i++) {
      setTimeout(function () {
        robot.src = srcArray[i];
      }, i * 350);
    }
    setTimeout(() => {
      robot.src = srcArray[1];
    }, 1400);
  }, 1750);

  beat.addEventListener("ended", () => {
    clearInterval(intervalDance);
  });

  stopDance.addEventListener("click", () => {
    beat.pause();
    clearInterval(intervalDance);
  });
}
 */

auto.addEventListener("click", () => {
  beat.play();
  intervalDancing(robot);
  intervalDancing(robot1);
  intervalDancing(robot2);
  intervalDancing(robot3);
  intervalDancing(robot4);
  intervalDancing(robot5);
  intervalDancing(robot6);
});

function danceRobot(robot) {
  //ring buffer
  let i = 0;
  return setInterval(function () {
    div.style.backgroundColor = colorArray[i];
    robot.src = srcArray[i];
    i = (i + 1) % colorArray.length;
  }, 1000);
}
let intervalDance;
buttonStopDance.addEventListener("click", () => {
  beat.pause();
  beat.currentTime = 0;
  clearInterval(intervalDance);
});

function intervalDancing(robot) {
  intervalDance = danceRobot(robot);

  beat.addEventListener("ended", () => {
    clearInterval(intervalDance);
  });
}
