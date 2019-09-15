var express = require("express")
var app = express()
var http = require("http").Server(app)
var io = require("socket.io")(http)
var path = require("path")
var bodyParser = require("body-parser")
var mysql = require("mysql");

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:true}))


// create the connection information for the sql database
var connection = mysql.createConnection({
    host: "tviw6wn55xwxejwj.cbetxkdyhwsb.us-east-1.rds.amazonaws.com",
    port: 3306,
    user: "uampfunil9okfned",
    password: "bu46edqg8m8c5sbs",
    database: "kl96hek60jh5nqd4"
});

connection.connect(function(err) {
  if (err) throw err;
  console.log("connected as id " + connection.threadId + "\n");
  readfunction();
});

function readfunction() {
  connection.query("SHOW TABLES", function(err, res) {
    if (err) throw err;

    // Log all results of the SELECT statement
    console.log(res);
    connection.end();
  });
}

require("./Routes/api.js")(app)

app.use(express.static(__dirname + "/public/assets/css"))
app.get("/",function(req, res){
    res.sendFile(path.join(__dirname,"./public/index.html"))
})
app.get("/test", function(req, res){
    res.sendFile(path.join(__dirname,"/test_page.html"))

})
app.post("/test",function(req, res){
    console.log(req.body)
    res.json({
        message:"Hello " + req.body.name + " Your email is " + req.body.email
    })
})

var Server = http.listen(3000,function(){
    console.log("listening on 3000")
})


