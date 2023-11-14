var x = 0;
var y = 0;
var drawCircle = "";
var drawRect = "";
var SpeechRecognition = window.webkitSpeechRecognition;
var Recognition = new SpeechRecognition();

function setup() {
    canvas = createCanvas(900, 600);
}

function draw() {
    if (drawCircle == "set") {
        circle(x, y, 60);
        document.getElementById("status").innerHTML = "um circulo foi desenhado";
        drawCircle = "";
    }
}

function start() {
    document.getElementById("status").innerHTML = "o sistema esta ouvindo a criatura";
    Recognition.start();
}

Recognition.onresult = function (event) {
    console.log(event);
    var content = event.results[0][0].transcript;
    document.getElementById("status").innerHTML = "o fale da criatura foi ouvida:" + content;
    if (content == "círculo") {
        x = Math.floor(Math.random() * 900);
        y = Math.floor(Math.random() * 600);
        drawCircle = "set";
    }
}