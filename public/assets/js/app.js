$( document ).ready(function() {

var playerAvatar;
var playerName;

$("img").on("click", function() {
    playerAvatar = ($(this).attr("id"));
  });



$("button#playGame").on("click", function() {
    // event.preventDefault();
    playerName = ($("input").val());

    if (playerName !== "" && playerAvatar !== "") {
        console.log(playerName + " " + playerAvatar);
        $("#playerName").text(playerName);
    } else {
        event.preventDefault();
        alert("Please enter your player name and choose an Avatar");
    }
    

  });




  











});

// ***Test if jQuery is loading properly***
window.onload = function() {
    if (window.jQuery) {
        console.log('jQuery is loaded');
    }
}