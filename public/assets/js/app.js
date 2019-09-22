var url = window.location.pathname;
var playerAvatar;
var playerName;

//var state = "NEW";

var currentPlayer;
var currentRoom;
var currentOptions = [];
var questionResponse;
var playerResp;

$( document ).ready(function() {
      
  var name = localStorage.getItem("name");
  var avatar = localStorage.getItem("avatar");
  console.log(name, avatar);

  $("h5#playerName").text(name);
  $("img.avatarimg").attr("id", avatar);

  if (url.indexOf("game/") !== -1) {
      playerId = url.split("/")[2];
      loadGame(playerId); 
  }
})



//--------------------------------------------------------------------
//--------------------------Game Objects------------------------------
//--------------------------------------------------------------------
function Player(playerId, name, teamId, itemId, lives, gold) {
    this.playerId = playerId;
    this.name = name;
    this.teamId = teamId;
    this.itemId = itemId;
    this.lives = lives;
    this.gold = gold;
}

function Room(roomId, roomName, enterText, optionListId) {
    this.roomId = roomId;
    this.roomName = roomName;
    this.enterText = enterText;
    this.optionListId = optionListId;
}

function GameOptions(optionId, optionText, optionListId, responseId, reqItemId) {
    this.optionId = optionId;
    this.optionText = optionText;
    this.optionListId = optionListId;
    this.responseId = responseId;
    this.reqItemId = reqItemId;
}

function GameResponse(responseId, responseText, optionListId, isDoorway, goldMultiplier, isDeath) {
    this.responseId = responseId;
    this.responseText = responseText;
    this.optionListId = optionListId;
    this.isDoorway = isDoorway;
    this.goldMultiplier = goldMultiplier;
    this.isDeath = isDeath;
}

function Item(itemId, itemName, itemText) {
    this.itemId = itemId;
    this.itemName = itemName;
    this.itemText = itemText;
}

//--------------------------------------------------------------------
//-----------------------End Game Objects-----------------------------
//--------------------------------------------------------------------

//--------------------------------------------------------------------
//------------------UI update function section------------------------
//--------------------------------------------------------------------

//update player elements gold, lives, item based on changes to player object
function updatePlayerElements(player) {

}

//add new response text to text scroller UI
function updateResponse(responseText) {
  var text = "<p id='responseText'>"+ responseText +"</p>"   

  $("#game").prepend(text)
}

//add new options to radio selection in UI
function updateOptions(optionList) {  
  var form = $("#gameOptions")
  form.remove(".radioInput")

  var radioIdValue = "resId_"; 
  
  for (var i = 0; i < optionList.length; i++){
      form.append("<input class='radioInput' type='radio' name='options' value='"+ radioIdValue + optionList[i].responseId + "'>" + optionList[i].optionText + "<br>")
  } 
}

//add new enter text to text scroller UI
function updateEnterText(enterText) {
  var entry = "<p id='enterText'>"+ enterText +"</p>"
  
  $("#game").prepend(entry) 
}


//room pic needs to be updated on room change
function updateNewRoom() {

}

//Give some gold to the player
function giveGold(multiplier, player) {
  
}

//function that returns player to start, or ends game based on life counter
function dead() {
  
}

//--------------------------------------------------------------------
//--------------End UI update function section------------------------
//--------------------------------------------------------------------

//--------------------------------------------------------------------
//--------------------Game API call section---------------------------
//--------------------------------------------------------------------

const getPlayer = async (playerId) => {

  try {

    let response = await $.get("/api/player/" + playerId);
    return await response;

  } catch (err) {
    console.log("Failed to get player with id: " + playerId + " " + err);
  }
    
}

const getStartingRoom = async () => {

  try {

    let response = await $.get("/api/start")
    return await response;

  } catch (err) {
    console.log("Failed to get player with id: " + playerId + " " + err);
  }
}

const getNextRoom = async (roomId) => {
  
  try {
    let response = await $.get("/api/next/" + roomId)
    return await response;

  } catch (err) {
    console.log("Failed to get the next room with roomId: " + roomId);
  }        
}

const getOptions = async (optionListId) => {
    
  try {
    let response = await $.get("/api/options/" + optionListId)
    return await response;

  } catch (err) {
    console.log("Failed to get options with id: " + OptionListId);
  }
}

const getResponses = async (responseId) => {

  try {
    let response = await $.get("/api/responses/" + responseId)
    return await response;
  } catch (err) {
    console.log("Failed to get response with id: " + responseId);
  }
    
}

const getItem = async (itemId) => {

  try {
    let response = await $.get("/api/item/" + itemId)
    return await response;
  } catch (err) {
    console.log("Failed to get item with id: " + itemId);
  }
}

const setItem = async (playerId, itemId) => {
  
  try {
    let response = await $.post("/api/player/", {PlayerId: playerId, ItemId: itemId})
    return await response;
  } catch (err) {
    console.log("Failed to set item to player");
  }    
}



//--------------------------------------------------------------------
//-------------------End Game API call section------------------------
//--------------------------------------------------------------------

//--------------------------------------------------------------------
//-------------------Game loop section--------------------------------
//--------------------------------------------------------------------

const loadGame = async (playerId) => {

  //get player info to start from id in URL and store in currentPlayer global var
  const gotPlayer = await getPlayer(playerId);
  console.log( gotPlayer );
  currentPlayer = new Player(gotPlayer.PlayerId, gotPlayer.Name, gotPlayer.TeamId, gotPlayer.ItemId, gotPlayer.Lives, gotPlayer.Gold);
  

  //get initial room to start and store in currentRoom global var
  const gotRoom = await getStartingRoom();
  currentRoom = new Room(gotRoom.RoomId, gotRoom.RoomName, gotRoom.EnterText, gotRoom.OptionListId);

  //load entrance text to page and update UI
  updateEnterText(currentRoom.enterText);
  //updateNewRoom()

  //update UI elements based on player status
  //updatePlayerElements(currentPlayer);
  
  // get options for player based on starting room optionlist
  const gotOptions = await getOptions(currentRoom.optionListId);
  gotOptions.forEach(element => {
     currentOptions.push(new GameOptions(element.OptionId, element.OptionText, element.OptionListId, element.ResponseId, element.ReqItemId));
  });

  //load options onto page for player
  updateOptions(currentOptions);

  
  //console.log("currentOptions are " + currentOptions);
  logObjectInfo();
}

//Game loop
const gameLoop = async (optionResponseId) => {
  var optionGrab;

  const gotResponse = await getResponses(optionResponseId);
  questionResponse = new GameResponse(gotResponse.ResponseId, gotResponse.ResponseText, gotResponse.OptionListId, gotResponse.isDoorway, gotResponse.goldMultiplier, gotResponse.isDeath, gotResponse.NewItemId);

  if(questionResponse.isDeath) {
    //have a place in db to store lives, but not necessary @version1
    currentPlayer.Lives -= 1;
      if(currentPlayer.Lives <= 0)
      {
        alert("GAME OVER");
      }
  }

  updateResponse(questionResponse.responseText);
  scoreGold(gotResponse.goldMultiplier, currentPlayer);

  if(questionResponse.isDoorway > 0) {
    optionGrab = currentRoom.RoomId + questionResponse.isDoorway;
  }
  else {
    optionGrab = questionResponse.OptionListId;
  }




  // const gotOptions = await getOptions(currentRoom.optionListId);
  // gotOptions.forEach(element => {
  //    currentOptions.push(new GameOptions(element.OptionId, element.OptionText, element.OptionListId, element.ResponseId, element.ReqItemId));
  // });


  
  //         updateResponse(response.ResponseText);
  // });

  //currentRoom = new Room(response.RoomId, response.RoomName, response.EnterText, response.OptionListId);
}



//--------------------------------------------------------------------
//--------------------End game loop section---------------------------
//--------------------------------------------------------------------


//--------------------------------------------------------------------
//-------------------Helper section-----------------------------------
//--------------------------------------------------------------------
    
    function objInfo(object) {
      const objInfo = Object.entries(object);
      var stringified = "";

      objInfo.forEach(element => {
        let key = element[0];
        let value = element[1];
    
        stringified = stringified + key + ":" + value + "\n";
    });

      return stringified;
    }

    function logObjectInfo() {
      var count = 1;
      console.log("currentPlayer is " + objInfo(currentPlayer));
      console.log("currentRoom is " + objInfo(currentRoom));
      currentOptions.forEach(element => {
        console.log("currentOption " + count + " is: " + objInfo(element));
        count++;        
      });
      console.log("questionResponse is: " + questionResponse);
    }


//--------------------------------------------------------------------
//-------------------End Helper section-------------------------------
//--------------------------------------------------------------------

//--------------------------------------------------------------------
//-------------------Listener section---------------------------------
//--------------------------------------------------------------------

$("button#next").on("click", function() {
  event.preventDefault();
  //get selected response value and parse out 
  var optionResponseId = $( "input:checked" ).val().split('_')[1];
  console.log(optionResponseId); 
  
  gameLoop(optionResponseId);
  
});

//this will cycle room images on submit
$("button#nextRoom").on("click", function() {
  event.preventDefault();
  var roomImageId = ["room1","room2","room3","room4","room5"];
  var roomImage = ["Chapel","Great Hall","Guard Chamber","Library","Solar"];
  var j = Math.floor(Math.random() * 5);
  $("img.room").attr("id", roomImageId[j]);
  $("p#roomName").text(roomImage[j]);
});

//this will cycle item images on submit
$("button#nextItem").on("click", function() {
  event.preventDefault();
  var items = ["toaster","crossbow","sword","golden_toaster","golden_crossbow","golden_sword","none"];
  var itemName = ["Toaster", "Crossbow", "Sword", "Golden Toaster", "Golden Crossbow", "Golden Sword", "Nothing"];
  var k = Math.floor(Math.random() * 7);
  $("img.item").attr("src", "/assets/images/" + items[k] + ".png");
  $("p.item").text(itemName[k]);
});  

//--------------------------------------------------------------------
//-------------------Listener section---------------------------------
//--------------------------------------------------------------------

// ***Test if jQuery is loading properly***
window.onload = function() {
    if (window.jQuery) {
        console.log('jQuery is loaded');
    }
}
