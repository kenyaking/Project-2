$( document ).ready(function() {

var playerAvatar;
var playerName;

$("img.avatar").on("click", function() {
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

  var room = findRoom(1)
  displayEntry("welcome")
  displayOptions(room.OptionListId)


});

// ***Test if jQuery is loading properly***
window.onload = function() {
    if (window.jQuery) {
        console.log('jQuery is loaded');
    }
    $("img.playerAvatar").attr("id", playerAvatar)
}
// Helper function when passed a roomid will return room data in rooms.js file
function findRoom(RoomID){
    $.ajax({
        type: "GET",
        url: "/next/" + RoomID,
        contentType: "application/json",
        success: function(data){
            return data
        }
    })
}

 function displayEntry(RoomEntry){
    var entry = "<p>"+ RoomEntry +"</p>"
    
    $("#game").prepend(entry) 
 }

 function displayResponse(ResponseText){
    var text = "<p>"+ ResponseText +"</p>"
    
    $("#game").prepend(text)   
 }
 // returns and array of options
 function displayOptions(listID){
    var options = []

    $.ajax({
        type: "GET",
        url: "/options/" + listID,
        contentType: "application/json",
        success: function(data){
            options = data
        }
    })

    var form = $("#gameOptions")
    form.remove(".radioInput")
    
    for (var i = 0; i < options.length; i++){
        form.append("<input class='radioInput' type='radio' name='options' >" + options[i].OptionText + "<br>")
    } 
 }