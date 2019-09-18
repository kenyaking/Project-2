$( document ).ready(function() {

    var url = window.location.pathname;
    var playerAvatar;
    var playerName;

    var currentPlayer;
    var currentRoom;
    var currentOptions = [];
    var questionResponse;
    var playerResp;

    if (url.indexOf("game/") !== -1) {
        console.log("something");
        playerId = url.split("/")[2];
        getPlayer(playerId);

        updatePlayerElements(currentPlayer);

        getStartingRoom();




    }


$("img").on("click", function() {
    playerAvatar = ($(this).attr("id"));
  });


  function setPlayer(name) {
    $.post("/api/player/", {Name: name})
      .done(function(data){
        playerResp = data;
        console.log(playerResp);
        
        loadGame(data);
      });
  }

  function getPlayer(playerId) {
    $.get("/api/player/" + playerId, function() {
      })
        .done(function(response) {
            console.log("player i got is: \n" + response.Name);
            currentPlayer = new player(response.PlayerId, response.Name, response.TeamId, response.ItemId, response.Lives, response.Gold)
            //TODO set starting room image here
        })
        .fail(function() {
          console.log("Failed to get player with id: " + playerId);
        })        
  }

  function getStartingRoom() {
    $.get("api/start", function() {
    })
      .done(function(response) {
          currentRoom = new room(response.RoomId, response.RoomName, response.EnterText, response.OptionListId);
      })
      .fail(function() {
        console.log("Failed to get starting room");
      })  
  }



  //loads new game url after player has entered a name and been entered to db
  function loadGame(data){
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

//Game Objects
//----------------------------------------------------------------------------------------------
function player(playerId, name, teamId, itemId, lives, gold) {
    this.playerId = playerId;
    this.name = name;
    this.teamId = teamId;
    this.itemId = itemId;
    this.lives = lives;
    this.gold = gold;
}

function room(roomId, roomName, enterText, optionListId) {
    this.roomId = roomId;
    this.roomName = roomName;
    this.enterText = enterText;
    this.optionListId = optionListId;
}

function gameOptions(optionId, optionText, optionListId, responseId, reqItemId) {
    this.optionId = optionId;
    this.optionText = optionText;
    this.optionListId = optionListId;
    this.responseId = responseId;
    this.reqItemId = reqItemId;
}

function gameResponses(responseId, responseText, optionListId, isDoorway, goldMultiplier, isDeath) {
    this.responseId = responseId;
    this.responseText = responseText;
    this.optionListId = optionListId;
    this.isDoorway = isDoorway;
    this.goldMultiplier = goldMultiplier;
    this.isDeath = isDeath;
}

function item(itemId, itemName, itemText) {
    this.itemId = itemId;
    this.itemName = itemName;
    this.itemText = itemText;
}

//----------------------------------------------------------------------------------------------
//End Game Objects


/*********************************************************************
*********UI update function section
**********************************************************************/

//update player elements gold, lives, item based on changes to player object
function updatePlayerElements(player) {

}

//add new response text to text scroller UI
function updateResponse(responseId) {

}

//add new options to radio selection in UI
function updateOptions(optionListId) {

}

//add new enter text to text scroller UI
function updateEnterText(enterText) {

}

//room pic needs to be updated on room change
function updateNewRoom() {

}

/*********************************************************************
*********End UI update function section
**********************************************************************/

/*********************************************************************
*********Game logic section
**********************************************************************/

function getOptions(optionListId) {
    $.get("/api/options/" + optionListId, function() {
    })
      .done(function(response) {
          response.forEach(element => {
              currentOptions.push(new gameOptions(element.OptionId, element.OptionText, element.OptionListId, element.ResponseId, element.ReqItemId));
          });
          updateOptions(currentOptions) 
          console.log("getOptions response is: " + response);
          console.log("getOptions currentOptions is: " + currentOptions);
      })
      .fail(function() {
        console.log("Failed to get player with id: " + playerId);
      })   
}

function getResponses(responseId) {
    $.get("/api/responses/" + responseId, function() {
    })
      .done(function(response) {
          questionResponse = new response(response.ResponseId, response.ResponseText, response.OptionListId, response.isDoorway, response.goldMultiplier, response.isDeath, response.NewItemId);
          updateResponse(response.ResponseText);
          console.log("getOptions response is: " + response);
          console.log("getOptions currentOptions is: " + currentOptions);
      })
      .fail(function() {
        console.log("Failed to get player with id: " + playerId);
      })
}



/*********************************************************************
*********Game logic section
**********************************************************************/

/*********************************************************************
*********Game loop section
**********************************************************************/

//Game loop
function gameLoop() {

    

}



/*********************************************************************
*********End game loop section
**********************************************************************/




// ***Test if jQuery is loading properly***
window.onload = function() {
    if (window.jQuery) {
        console.log('jQuery is loaded');
    }
}