$( document ).ready(function() {      



var name = localStorage.getItem("name");
var avatar = localStorage.getItem("avatar");
console.log(name, avatar);

$("h5#playerName").text(name);
$("img.avatarimg").attr("id", avatar);


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

    });