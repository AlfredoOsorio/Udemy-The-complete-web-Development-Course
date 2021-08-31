const buttonColours = ["red", "blue", "green", "yellow"];
const gamePattern

function nextSequence() {
    var randomNumber = Math.floor(Math.random() * 4);

    return randomNumber;
}

var randomChosenColour = buttonColours[nextSequence];

gamePattern.push(randomChosenColour);