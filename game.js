var buttonColours = ["red", "blue", "green", "yellow"];
var gamePattern = [];



function nextSequence() {
    
    var randomNumber = Math.floor(Math.random() * 4);
    var randomChosenColour = buttonColours[randomNumber];

    gamePattern.push(randomChosenColour);
    
    // Add flash animation to chosen colour
    $("#"+randomChosenColour).fadeOut(100).fadeIn(100);

    var soundTest  = new Audio("sounds/" + randomChosenColour + ".mp3");
    soundTest.play()

}