var robot = document.getElementById("robot");
var robot1 = document.getElementById("robot1");
var robot2 = document.getElementById("robot2");
var robot3 = document.getElementById("robot3");
var robot4 = document.getElementById("robot4");
var robot5 = document.getElementById("robot5");
var robot6 = document.getElementById("robot6");

var div = document.getElementById("disco");
var auto = document.getElementById("auto");
var buttonStopDance = document.getElementById("buttonStopDance");

//Reproducir musica
var beat = new Audio("audio/beat.ogg");

var buttonPlay = document.getElementById("play");

//Mover robot

//auto
var srcArray = ["img/robot-l.png", "img/robot-c.png", "img/robot-r.png"];
var colorArray = ["#FF00FF", "#FFFF00", "#33CC33"];


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
    return setInterval(function() {
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

//crear intervalo
function intervalDancing(robot) {
    intervalDance = danceRobot(robot);

    beat.addEventListener("ended", () => {
        clearInterval(intervalDance);
    });
}
//
