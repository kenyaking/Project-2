var {rooms, items, players} = require("./data/test")


module.exports = function(app){
    // GET next room- When this call is made a random room will be selected and will provide the client with room information   
    app.get("/next", function(req, res){
        var length = rooms.length
        var random = Math.floor(Math.random() * length) 
    
        res.json({room:rooms[random]})
    })

    // GET Item - Returns information about an Item in the room if Inspectable or if picked up
    app.get("/item/:id", function(req, res){
        var item_id = req.params.id
        var item = items.find(function(element){ 
            return element.id == item_id
        })

        if(item) res.json(item)
        else res.json({
            message: "Item id does not exist"
        })

    })

    // GET player - Returns information about the player
    app.get("/player/:id",function(req, res){
        var player_id = req.params.id

        var player = players.find(function(element){ 
            return element.id == player_id
        })

        if(player) res.json(player)
        else res.json({
            message: "Player id does not exist"
        })
    })

    // GET Options - This will return options based on the room that the player is in
    app.get("/options/:id", function(req, res){
        var options_id = req.params.id
        var options = items.find(function(element){ 
            return element.id == options_id
        })

        if(options) res.json(options)
        else res.json({
            message: "Option id does not exist"
        })

    })


    // POST new player - POSTs information about a new player and stores in the db. Returns a teamId, PlayerId, and Live
    app.post("/player", function(req, res){
        var player = req.body
        var player_id = players.length + 1 

        players.push({
            id: player_id,
            name: player.name,
            lives: 3
        })

        res.json(players[player_id - 1])

    })
    


    // GET responses - This method will return responses based on the players option selection
    app.get("/responses/:id", function(req, res){
        var responses_id = req.params.id
        var responses = items.find(function(element){ 
            return element.id == responses_id
        })

        if(responses) res.json(responses)
        else res.json({
            message: "Response id does not exist"
        })

    })



    // GET Team - returns information about a team, either player or opponents if applicable
    app.get("/team/:id",function(req, res){
        var team_id = req.params.id

        var team = team.find(function(element){ 
            return element.id == team_id
        })

        if(team) res.json(team)
        else res.json({
            message: "Team id does not exist"
        })
    })

    // POST opposing team (MULTIPLAYER) - posts the opposing teamId based on get
    app.post("/multiPlayer", function(req, res){
        var multiPlayer = req.body
        var multiPlayer_id = multiPlayers.length + 1 

        players.push({
            id: multiPlayer_id,
            name: multiPlayer.name,
            lives: 3
        })

        res.json(multiPlayers[multiPlayer_id - 1])

    })



    // POST item - Sends item selection into player table
    app.post("/itemSelection", function(req, res){
        var itemSelection = req.body
        var itemSelection_id = itemSelection.length + 1 

        itemSelection.push({
            id: itemSelection_id,
        })

        res.json(itemSelection[itemSelection_id])

    })

    // Changing health – three lives

    app.post("/chaningHealth", function(req, res){
        var changingHealth = req.body
        var changingHealth_id = changingHealth.length - 1 

        changingHealth.push({
            id: changingHealth_id,
        })

        res.json(changingHealth[changingHealth_id])

    })

    // Adding gold – every time player finds more gold - Store it in the db and we should and have to update it to the web page so user sees their scr

    app.post("/gold", function(req, res){
        var gold = req.body
        var gold_id = gold.length + 1 

        gold.push({
            id: gold_id,
        })

        res.json(gold[gold_id])

    })

    // Get high score - Select max from table. Get name and score of person
    app.post("/highScore", function(req, res){
        var highScore = req.body
        var highScore_id = highScore.length + 1 

        gold.push({
            id: gold_id,
            name: highScore.name
        })

        res.json(highScore[highScore_id])

    })

}