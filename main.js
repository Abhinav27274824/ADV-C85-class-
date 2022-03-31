canvas = document.getElementById("myCanvas")
ctx = canvas.getContext("2d")

rover_width = 100
rover_height = 90
roverX = 10
roverY = 10

background_image = "mars.jpg"
rover_image = "rover.png"

var backgroundimgTag

function add(){
    backgroundimgTag = new Image()
    backgroundimgTag.onload = uploadBackground
    backgroundimgTag.src = background_image


    roverimgTag = new Image()
    roverimgTag.onload = uploadRover
    roverimgTag.src = rover_image
}

function uploadBackground(){
    ctx.drawImage(backgroundimgTag,0,0,canvas.width,canvas.height)
}

function uploadRover(){
    ctx.drawImage(roverimgTag,roverX,roverY,rover_width,rover_height)
}

window.addEventListener("keydown",my_keydown)
function my_keydown(e){
    keyPressed = e.keyCode
    if (keyPressed == "38") {
        up ()
        console.log("up")
    }
    if (keyPressed == "40") {
        down ()
        console.log("down")
    }
    if (keyPressed == "37") {
        left ()
        console.log("left")
    }
    if (keyPressed == "39") {
        right ()
        console.log("right")
    }
}

function up(){
    if (roverY >= 0){
        roverY = roverY - 10
        uploadBackground()
        uploadRover()
    }
}

function down(){
    if (roverY <= 500){
        roverY = roverY + 10
        uploadBackground()
        uploadRover()
    }
}

function left(){
    if (roverX >= 0){
        roverX = roverX - 10
        uploadBackground()
        uploadRover()
    }
}

function right(){
    if (roverX <= 700){
        roverX = roverX + 10
        uploadBackground()
        uploadRover()
    }
}