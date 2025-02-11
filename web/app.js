

const robots = [
    document.getElementById("robot"),
    document.getElementById("robot1"),
    document.getElementById("robot2"),
    document.getElementById("robot3"),
    document.getElementById("robot4"),
    document.getElementById("robot5"),
    document.getElementById("robot6"),
]

const div = document.getElementById("disco")
const auto = document.getElementById("auto")
const buttonStopDance = document.getElementById("buttonStopDance")


//Reproducir musica
const buttonPlay = document.getElementById("play")

const srcArray = [
    "img/robot-l.png",
    "img/robot-c.png",
    "img/robot-r.png",
]

const colorArray = [
    "#FF00FF",
    "#FFFF00",
    "#33CC33",
]

//Mover robot

let beat = new Audio("audio/beat.ogg")
let intervalId
let lastDancing = -1

//Cancelar la accion y iniciar una nueva
//Comprobar si la accion ya se esta ejecutando

function startDancing() {

    let i = 0
    return setInterval(function() {
        div.style.backgroundColor = colorArray[i]
        for (let j = 0; j <= lastDancing; j++) {
            robots[j].src = srcArray[i]
        }
        i = (i + 1) % colorArray.length
    }, 1000)
}


auto.addEventListener("click", () => {
    intervalId = intervalId ?? startDancing()
    if (lastDancing < robots.length - 1) lastDancing++
    beat.play()
})


beat.addEventListener("ended", () => clearInterval(intervalId))



buttonStopDance.addEventListener("click", () => {
    beat.pause()
    beat.currentTime = 0
    clearInterval(intervalId)
    intervalId = null
    lastDancing = -1
})

