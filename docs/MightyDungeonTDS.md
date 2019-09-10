# Mighty Dungeon Gold Getter

### Overview

This is a text based rpg game where the purpose is to venture into the dark dungeon and collect as much gold as you can.  The game has a one or two player mode, and has teams of one or two players.  Each team competes against each other to collect gold, one team at a time.  The team that is not in play has a limited view of their opponents progress.

### Features

A list of features of the game.

- Games of 1 v 1 or 2 v 2 teams
- Team based chat messages
- Text based challenges per dungeon room

### Game Play

###### New Game --

1. A new player starts by creating a character and giving their character a name. 
2. The new player selects a one player solo, 1 v 1 or 2 v 2 game modes
   1. If one player solo, we move to the opening dungeon room and begin the game
   2. If 1 v 1, the player waits for an opponent list and selects an opponent
      1. If player is chosen by a different player as the opponent, a dialog will pop-up telling them they are challenged and asking if they are ready.
   3. If 2 v 2, the player selects a teammate, and then waits for an opposing team list.
      1. If the player's team is chosen by a different team as the opponent, a dialog will pop-up telling them they are challenged and asking if they are ready.
3. After teams and opponents are chosen we move to the dungeon start with one team selected to go first (challenging team goes first)

###### Running the Dungeon --

1. The player walks into the first dungeon room.  There will be text telling them a description of the room, and all available exits.
2. The player will have the option to proceed through any exit, search the room, and any action specific to the room.  
   1. If any items that can be picked up are in view before or after the search room action, then picking up the item will become an option.
      1. A player can only carry one item.  If they are carrying an item they will have the option to - 
         1. Drop their item and take the new one
         2. Keep their current item
         3. Pass to team mate (if applicable)
3. If the player enters a new room the process begins anew.
4. Each dungeon room can contain some amount of gold.  Gold can be collected by solving puzzles, completing challenges, or defeating enemies.  Gold is the point system for the game.
5. Players can be killed or maimed by many different mechanics in the dungeon.  If a player has an encounter that kills them, they are returned to the dungeon start without any item they were holding (single player), or it is the other teams turn to run (multiplayer).
6. A game is complete when a solo player or both teams have died three times, or a solo player or team has completed the __*Ultimate Challenge*__.  Completing the __*Ultimate Challenge*__  is an automatic win in any game.
   1. When the game is complete and no player has defeated the __*Ultimate Challenge*__, the team with the highest score is declared the winner.

### User Interface

The user interface will have a medieval/fantasy theme with a display of useful information for the player.

1. A health bar with a number starting at 3/3 to denote the number of tries a character has left.
2. An indicator of any item that the character is carrying.
3. A display showing how much gold a player has collected

*Multiplayer additional display items*

1. Display showing team mate
2. Display showing opponent(s)
3. Team chat window

### Database

The database will contain tables that define the player attributes, team attributes, the room information, the options text, and item information

###### Player table

1. PlayerId - int, auto, PK, NOT NULL
2. Name - varchar, NOT NULL
3. TeamId - int, fk, NOT NULL
4. ItemId - int, fk
5. Lives - int, default 3, NOT NULL
6. OpposingTeamId - int

###### Team table

1. teamId - int, auto, PK, NOT NULL
2. Gold - int, NOT NULL
3. MessageText - varchar (Last message from team chat)
4. IsActive - bool, NOT NULL (Determines if a team is active and available.  Deactivate team after game has begun, only used for matching in vs. mode)

###### Item table

1. ItemId - int, auto, PK, NOT NULL
2. ItemName - varchar, NOT NULL
3. ItemAction - varchar, NOT NULL (action that this item can make when it is useable in a situation)
4. ItemText - varchar, (Text information about the item)
5. OptionListId - int, NOT NULL

###### Room table

1. RoomId - int, auto, PK, NOT NULL
2. RoomName - varchar, NOT NULL
3. EnterText - varchar, NOT NULL (Text for entering a new room)
4. OptionListId - int, FK, NOT NULL
5. IsUnique - bool, NOT NULL

###### Options Table(Table with option selections and responses )

1. OptionId - int, auto, PK, NOT NULL
2. OptionText - varchar, NOT NULL
3. OptionListId - int, FK, NOT NULL
4. ResponseId - int, NOT NULL
5. ResponseEnum - varchar

###### OptionList Table(Table to identify all options in option table that should be grouped for an interaction)

1. OptionListId - int, auto, PK, NOT NULL
2. OptionListName - varchar (description of option list)

###### Response Table (Table for responses, OptionListId is NULL if there is not player action required (like you are dead)

1. ResponseId - int, auto, PK, NOT NULL
2. ResponseText - varchar, NOT NULL
3. OptionListId - int 

### 

### API Layer

In order to get the game change information from the client to the server to track player decisions, and to send information to the client to update their game an API will provide an interface between the front and back-ends of the game.

A list of api calls that will be used by the game.

- GET next room
  - When this call is made a random room will be selected and will provide the client with room information
- GET Options
  - This will return options based on the room that the player is in
- GET responses
  - This method will return responses based on the players option selection
- GET player
  - Returns information about the player
- GET Item
  - Returns information about an Item in the room if *Inspectable* or if picked up
- GET Team
  - returns information about a team, either player or opponents if applicable
- POST new player
  - POSTs information about a new player and stores in the db. Returns a teamId, PlayerId, and Lives
- POST  opposing team (MULTIPLAYER)
  - posts the opposing teamId based on get
- POST item
  - Sends item selection into player table



##### 