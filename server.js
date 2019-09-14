var express = require("express")
var app = express()
var http = require("http").Server(app)
var io = require("socket.io")(http)
var PORT = process.env.PORT || 8080;
var db = require("./models");

//app.use(express.static(__dirname + "/public/assets/css"))
app.use(express.static("public"));
// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//Routes
require("./Routes/api.js")(app);
require("./Routes/htmlroutes.js")(app);

//var Server = http.listen(PORT,function(){
//    console.log("listening on 8080")
//})

// Sync models and start express
db.sequelize.sync({ force: false }).then(function() {
    app.listen(PORT, function() {
      console.log("App listening on PORT " + PORT);
    });
  });