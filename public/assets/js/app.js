    var url = window.location.pathname;
    var playerAvatar;
    var playerName;

    var state = "NEW";

    var currentPlayer;
    var currentRoom;
    var currentOptions = [];
    var questionResponse;
    var playerResp;

    document.ready(function(){
      if (url.indexOf("game/") !== -1) {
        console.log("something");
        playerId = url.split("/")[2];
        getPlayer(playerId);
  
        //update UI elements based on player status
        //updatePlayerElements(currentPlayer);
  
        //get initial room to start and store in currentRoom
        getStartingRoom();
  
        //get options for player based on starting room optionlist
        //getOptions(currentRoom.optionListId);
  
    }
  })


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

function getPlayer(playerId) {
  $.get("/api/player/" + playerId, function() {
    })
      .done(function(response) {
          console.log("player i got is: \n" + response.Name);
          currentPlayer = new player(response.PlayerId, response.Name, response.TeamId, response.ItemId, response.Lives, response.Gold)
          //TODO set starting room image here
          console.log(currentPlayer);
      })
      .fail(function() {
        console.log("Failed to get player with id: " + playerId);
      })
}

function getStartingRoom() {
  $.get("/api/start", function() {
  })
    .done(function(response) {
        currentRoom = new room(response.RoomId, response.RoomName, response.EnterText, response.OptionListId);
    })
    .fail(function() {
      console.log("Failed to get starting room");
    })  
}

function getNextRoom(roomId) {
  $.get("/api/next/" + roomId, function() {
  })
    .done(function(response) {
        currentRoom = new room(response.RoomId, response.RoomName, response.EnterText, response.OptionListId);
    })
    .fail(function() {
      console.log("Failed to get starting room");
    }) 
}

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

function loadGame() {

  switch(state) {
    case "NEW" :
      getPlayer
  }
}

//Game loop
function gameLoop() {
  console.log("currentPlayer is: " + currentPlayer);
  console.log("currentRoom is: " + currentRoom);

  currentOptions.forEach(element => {
    console.log("option: " + element);
  });
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

gameLoop();