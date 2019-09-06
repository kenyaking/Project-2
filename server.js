var express = require("express")
var app = express()
var http = require("http").Server(app)
var io = require("socket.io")(http)
var path = require("path")

app.use(express.static(__dirname + "/public/assets/css"))
app.get("/",function(req, res){
    res.sendFile(path.join(__dirname,"./public/index.html"))
})

var Server = http.listen(3000,function(){
    console.log("listening on 3000")
})
