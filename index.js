const canvas = document.getElementById("canvas")
const ctx = canvas.getContext("2d")
const Redcar = document.getElementById("Redcar")
const Bluecar = document.getElementById("Bluecar")
const btn = document.getElementById("btn")
const numbers = document.getElementById("numbers")
const winner = document.getElementById("winner")


let redA = true
let blueJ = true
const speed = 8

let redpos = 0
let bluepos = 0

let started = false

let win = new Audio("win.mp3")

const finishline = canvas.width - 25

document.addEventListener('keydown', vroom)
btn.addEventListener("click", start)

setInterval(draw, 33)

function detectwin(){
    if(redpos + 59 > finishline){
        winner.style.visibility = "visible"
        winner.innerHTML = "Red Wins!"
        started = false
        win.play()
    }
    else if(bluepos + 59 > finishline){
        winner.style.visibility = "visible"
        winner.innerHTML = "Blue Wins!"
        started = false
        win.play()
    }
}

function start(){
    winner.style.visibility = "hidden"
    started = false
    redpos = 0
    bluepos = 0
    countdown(3)
}

function countdown(timeleft){
    if(timeleft == 0){
        numbers.innerHTML = "GO!"
        started = true
        return
    }
    numbers.innerHTML = timeleft
    setTimeout(countdown, 1000, timeleft - 1)
}

function drawtrack(){
    ctx.fillStyle = "gray"
    ctx.fillRect(0, 0, canvas.width, canvas.height)
    ctx.fillStyle = "yellow"
    ctx.fillRect(finishline, 0, 10, canvas.height)
}

function draw(){
    drawtrack()
    ctx.drawImage(Redcar, redpos, -23, 90, 90)
    ctx.drawImage(Bluecar, bluepos, 16, 90, 90)
}

function vroom(event){
    if (!started){
        return
    }
    if(event.key == "a"){
        if (redA){
            redpos += speed
            redA = false
        }
    }
    else if(event.key == "s"){
        if (!redA){
            redpos += speed
            redA = true
        }
    }
    else if(event.key == "j"){
        if (blueJ){
            bluepos += speed
            blueJ = false
        }
    }
    else if(event.key == "k"){
        if (!blueJ){
            bluepos += speed
            blueJ = true
        }
    }

    detectwin()
}
