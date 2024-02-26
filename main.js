x = 0
y = 0

draw_circle = ""
draw_rect = ""

var sr = window.webkitSpeechRecognition

r = new sr()

function start() {
    document.getElementById("status").innerHTML = "Please speak to the mic, I am listening"
    r.start()
}

r.onresult = function (event) {
    console.log(event)
    c = event.results[0][0].transcript
    document.getElementById("status").innerHTML = "The speech has been recognised as " + c
    if (c == "circle") {
        x = Math.floor(Math.random() * 500)
        y = Math.floor(Math.random() * 500)

        draw_circle = "set"
    }

    if (c == "rectangle") {
        x = Math.floor(Math.random() * 500)
        y = Math.floor(Math.random() * 500)

        draw_rect = "set"
    }
}

function setup() {
    canvas = createCanvas(900, 900)
}

function draw() {

    console.log(draw_circle)
    console.log(draw_rect)

    if (draw_circle == "set") {
        radius = Math.floor(Math.random() * 100)
        circle(x, y, radius)
        document.getElementById("status").innerHTML = "Circle drawn"
        draw_circle = ""
    }

    if (draw_rect == "set") {
        w = Math.floor(Math.random() * 100)
        h = Math.floor(Math.random() * 100)
        rect(x, y, w, h)
        document.getElementById("status").innerHTML = "Rectangle drawn"
        draw_rect = ""
    }
}