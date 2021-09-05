const buttonColours = ["red", "blue", "green", "yellow"];
var userClickedPattern = [];
var gamePattern = [];

var level = 0;

var redAudio = new Audio("sounds/red.mp3");
var blueAudio = new Audio("sounds/blue.mp3");
var greenAudio = new Audio("sounds/green.mp3");
var yellowAudio = new Audio("sounds/yellow.mp3");
var wrongAudio = new Audio("sounds/wrong.mp3");

function blinkButton(buttonColor) {
    $("#" + buttonColor).fadeOut(200).fadeIn(200);
}

function animatePress(currentColour) {
    $("#" + currentColour).addClass("pressed");
    setTimeout(function() {
        $("#" + currentColour).removeClass("pressed");
    }, 100);
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
    userClickedPattern = [];
    increaseLevel();
    var randomNumber = Math.floor(Math.random() * 4);
    var randomChosenColour = buttonColours[randomNumber];
    gamePattern.push(randomChosenColour);
    animatePress(randomChosenColour);
    playAudioButton(randomChosenColour);
}

$(".btn").click(function() {
    var userChosenColour = $(this).attr("id");
    userClickedPattern.push(userChosenColour);
    blinkButton(userChosenColour);
    playAudioButton(userChosenColour);
    checkAnswer(userClickedPattern.length - 1);
});

function checkAnswer(currentLevel) {
    if((userClickedPattern[currentLevel]) == (gamePattern[currentLevel])) {
        console.log("success");
        if(userClickedPattern.length == gamePattern.length) {
            setTimeout(function() {
                nextSequence();
            }, 1000);
        }
    }else{
        console.log("wrong");
        $("#level-title").text("Game Over");
        wrongAudio.play();
        $("body").addClass("game-over");
        setTimeout(function() {
            $("body").removeClass("game-over");
        }, 200);
    }
}

function increaseLevel() {
    level++;
    $("#level-title").text("level " + level);
}

$(document).keypress(function() {
    if(level == 0) {
        nextSequence();
    }
});
