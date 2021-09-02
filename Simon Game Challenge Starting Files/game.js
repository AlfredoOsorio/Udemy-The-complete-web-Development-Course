const buttonColours = ["red", "blue", "green", "yellow"];
const gamePattern = [];

const audioByColor = ["redAudio", "blueAudio", "greenAudio", "yellowAudio"];

var redAudio = new Audio("sounds/red.mp3");
var blueAudio = new Audio("sounds/blue.mp3");
var greenAudio = new Audio("sounds/green.mp3");
var yellowAudio = new Audio("sounds/yellow.mp3");

function blinkButton(buttonColor) {
    $("#" + buttonColor).fadeOut(200).fadeIn(200);
}

function playAudioButton(buttonColor) {

    switch (buttonColor) {
        case "red":
            redAudio.play();
            break;
    
        case "blue":
            blueAudio.play();
            break;
    
        case "green":
            greenAudio.play();
            break;
    
        case "yellow":
            yellowAudio.play();
            break;
    
        default:
            break;
    }
}

function nextSequence() {
    var randomNumber = Math.floor(Math.random() * 4);
    var randomChosenColour = buttonColours[randomNumber];
    gamePattern.push(randomChosenColour);
    blinkButton(randomChosenColour);
    playAudioButton(randomChosenColour);
}

nextSequence();
nextSequence();
nextSequence();
nextSequence();
nextSequence();
nextSequence();
