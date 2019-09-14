$( document ).ready(function() {

var playerAvatar;
var playerName;

$("img").on("click", function() {
    playerAvatar = ($(this).attr("id"));
  });


  function getPlayer() {
    console.log("Selecting all products...\n");
    connection.query("SELECT * FROM players", function(err, res) {
      if (err) throw err;
      
      connection.end();
    });
  }

$("button#playGame").on("click", function() {
    // event.preventDefault();
    playerName = ($("input").val());

    if (playerName !== "" && playerAvatar !== "") {
        getPlayer();
        

    } else {
        event.preventDefault();
        alert("Please enter your player name and choose an avatar");
    }
    

  });




  











});

// ***Test if jQuery is loading properly***
window.onload = function() {
    if (window.jQuery) {
        console.log('jQuery is loaded');
    }
}