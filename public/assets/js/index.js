$( document ).ready(function() {      


    $("img").on("click", function() {
        playerAvatar = ($(this).attr("id"));
      });
    
    
      function setPlayer(name) {
        $.post("/api/player/", {Name: name})
          .done(function(data){
            playerResp = data;
            console.log(playerResp);
            
            loadGamePage(data);
          });
      }
    
      //loads new game url after player has entered a name and been entered to db
      function loadGamePage(data){
            var nextU = "/game/" + data.PlayerId;
            window.location.href = nextU;
        };
    
    //listen for player name entry
    $("button#playGame").on("click", function() {
        event.preventDefault();
        playerName = ($("#inputGroup-sizing-lg").val());
    
        if (playerName !== "" && playerAvatar !== "") {
            setPlayer(playerName);
        } else {
            event.preventDefault();
            alert("Please enter your player name and choose an Avatar");
        }
    });
    
      //this will cycle room images on submit
      $("button#next").on("click", function() {
        event.preventDefault();
        console.log(currentPlayer);
        var j = Math.floor(Math.random() * 5) + 1;
        $("img.room").attr("id", "room" + j);
      });
    
    
    
    });