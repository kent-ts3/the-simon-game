var buttonColours = ["red", "blue", "green", "yellow"];
var gamePattern = [];
var userClickedPattern = [];



function nextSequence() {
    
    var randomNumber = Math.floor(Math.random() * 4);
    var randomChosenColour = buttonColours[randomNumber];

    gamePattern.push(randomChosenColour);
    
    // Add flash animation to chosen colour
    $("#"+randomChosenColour).fadeOut(100).fadeIn(100);

    var soundTest  = new Audio("sounds/" + randomChosenColour + ".mp3");
    soundTest.play();

}

$(".btn").click(function(){

    var userChosenColour = $(this).attr("id");
    userClickedPattern.push(userChosenColour);
    console.log(userClickedPattern);

});