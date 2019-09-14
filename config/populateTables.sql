USE project2_DB;
INSERT INTO optionList (optionListName)
VALUES ("Entrance options to great hall"),
("response options to great hall room search"),
("Found toaster options"),
("Entrance options to library"),
("Library search options"),
("Leave library options"),
("Crossbow options"),
("Library spider battle options"),
("Library sticky crossbow battle options"),
("Entrance options to guard chamber"),
("Guard Chamber Knight"),
("Guard Chamber search"),
("Entrance options to Solar"),
("Already inspected the bed Solar"),
("Solar inspect the cauldron"),
("Inspected the cauldron"),
("Entrance options to Chapel");

INSERT INTO responses (responseText, optionListId, isDoorway, goldMultiplier, isDeath, NewItemId)
VALUES ("You are surprised to see that everything around the grand room is in impeccable condition. You would suspect that someone lives here still, but the ghostly light from the torches make you hesitant to settle on that thought.", 2, 0, 0, 0, NULL),
("You cross the room towards the door hoping to find some great treasure. There is no turning back now.", NULL, 1, 0, 0, NULL),
("You found a toaster!", 3, 0, 1, 0, NULL),
("You pick it up and move on through the door sensing there is nothing left for you here.", NULL, 1, 1, 0, 1),
("Though you hope not to regret it later you leave the toaster and move on through the door feeling there is nothing left for you here.", NULL, 1, 0, 0, NULL),
("The dust in the air makes your breath wheezy. No appreciation for knowledge here you think to yourself, staring at the long forgotten books. You push over a stack of books on a rickety old table and find some coins.", 5, 0, 2, 0, NULL),
("The door is covered in webbing. What do you do?", 6, 0, 0, 0, NULL),
("You found a crossbow! It is totally loaded with one bolt too.", NULL, 0, 1, 0, NULL),
("The crossbow is sturdy and makes you feel safe. You head for the door.", NULL, 0, 2, 0, 2),
("Crossbow? You don't even know how to use it! What use could that be anyway! Off you go without a second thought.", 6, 0, 1, 0, NULL),
("You pick up the crossbow and move to the next room", 6, 0, 1, 0, 2),
("You keep your toaster and move to the next room", 6, 0, 1, 0, NULL),
("EWW Your hand is sticky! A giant spider screeches and climbs down the wall at you! You sense its irritation as you may have destroyed its favorite hammock.", 8, 0, 0, 0, NULL),
("The web is thick, and there is no lightly toasted bread going into this gross kitchen appliance now. However, it did the job and you even noticed a shiny coin in your toaster! You carry on you lucky dog!", NULL, 1, 2, 0, NULL),
("You wave the stock of your crossbow around in the webs at the door, careful not to get the firing mechanism sticky. A shadow moves above you and drops down behind you.", 9, 0, 0, 0, NULL),
("You totally missed, but impressed by your sticky handed karate skillz the spider gives you a bow and walks off. You continue on and", NULL, 1, 3, 0, NULL),
("Your toaster has a dent in it! The spider isn't amused and webs you up to eat for lunch.", NULL, 0, 0, 1, NULL),
("One eye down! That should level the playing field! The spider skitters away to nurse its wound, and you continue onward. ", NULL, 1, 3, 0, NULL),
("You walk down the room and pick a chest a little ways in. You don't want to be tacky and loot the first chest you see do you? You are an expert looter. You crack a chest open and as the chest is opened you see a gleam make it's way through, covering your clothes in a shimmering golden light. Your eyes go wide as you take in the sight before you. A chest brimming with gold coins and gems! You are captivated by the riches before you! As you gawk at your new-found wealth you are grabbed roughly by your arms and dragged away.. Screaming..", NULL, 2, 0, 0, NULL),
("You travel down the corridor and as it curves you see a door, but before it stands a great armored knight, ready to do battle! He stands still and regards you with a stare so cold you feel a shiver run up your spine. Prepare yourself! What do you do?", 11, 0, 0, 0, NULL),
("You approach the knight without fear and strike him with fury! He cuts you down without mercy.", NULL, 0, 0, 1, NULL),
("The toaster clangs off his head and he stumbles! You waste no time and rush past through the door, bolting it on the other side. Resourceful! However, no toast.", NULL, 1, 2, 0, NULL),
("You take a shot at the knight and hit him right in the heart. Turns out it was just an empty suit of armor, and it clangs to the floor. Looks like your only ammo broke, and you are glad no one saw how stupid you looked just now. You grab the bolt from the ground and reload your empty crossbow, ready to move on.", NULL, 1, 3, 0, NULL),
("The knight comes at you and slashes down at you viciously! You bring the power from your mighty adventurer thighs and raise your blade to block your foe! The swords connect in a shower of sparks and throw your opponent off balance. You waste no time and drive your sword straight through his black heart! You recover your sword from his chest and walk through the door, wiping black blood from the blade as you go.", NULL, 1, 3, 0, NULL),
("You take some time to walk through the room a bit and observe your surroundings a bit more. As you walk down the hall and peek around the corner you notice a burly figure standing in front of a door. He doesn't seem to notice you. Against the wall there leans a sword. What do you do?", 12, 0, 3, 0, NULL),
("The sword is large, but well balanced. The blade is dull, but strong and the hilt is covered in ornate dragon-like designs. You hook it to your belt and walk to the figure by the door.", 11, 0, 2, 0, 3),
("You ignore the sword and head down towards the door, and the ominous black armored figure.", 11, 0, 1, 0, NULL),
("You drop your toaster in lieu of a better weapon. Perhaps this will be the tool that keeps you safe from any other spider encounters. The sword is large, but well balanced. The blade is dull, but strong and the hilt is covered in ornate dragon-like designs. You hook it to your belt and walk to the figure by the door.", 11, 0, 2, 0, 3),
("You set your crossbow down. You didn't have it long, and it has served you well, but you decide that if you face another foe it will be up close and personal. You pick up the sword, and it is large but well balanced. The blade is dull, but strong and the hilt is covered in ornate dragon-like designs. You hook it to your belt and walk to the figure by the door.", 11, 0, 2, 0, 3),
("You walk over to the bed and have a look. The bed is very ornate, fit for royalty. You poke around the covers and find some gems. ", 14, 0, 4, 0, NULL),
("You approach the cauldron. It is a large object made of a glimmering black metal, with two large rings at the sides hanging from well sculpted mouths of gargoyles. When you take your eyes off them you feel a red glow from their sockets on the edge of your vision and feel a sense of unease. As you draw closer you look inside and see a golden glowing translucent liquid. What do you do?", 15, 0, 0, 0, NULL),
("As your hand touches the liquid it feels cool and refreshing like a cool breeze teasing through your hair that heralds the coming of Autumn. You close your eyes and embrace the sensation. You open them a second later and try to pull your hand out. You look down and see that you cannot - the liquid is climbing up your arm and turning it to solid gold! You struggle but to no avail, the magic has gripped you and your whole body is engulfed and turned to solid gold. You turn your head to the sky and release a silent scream as the spell finishes its work and as your remaining eye is turned to gold everything goes black, and you know no more.", NULL, 0, 0, 1, NULL),
("You dip your toaster into the liquid and from end to end it is turned into solid gold! It is really heavy now, but worth a fortune! You take your toaster and feel ready to carry on through the door with your now beaming smile.", 16, 0, 5, 0, 5),
("You dip the tip of your crossbow into the golden liquid, getting just the bolt wet. The golden liquid surges up over the bolt and it turns solid gold! It makes the crossbow heavier, but certainly is worth some money now! You are ready to move on through the door. ", 16, 0, 4, 0, 6),
("You brandish your sword in a flourish, trying to be dramatic before dipping the tip of the sword into the liquid to see what will happen. As soon as you do there is a golden explosion of light as the sword is engulfed in the shimmery substance. After the light dies down the sword blade has turned to gold, and the once dull dusty features have become like new! You sense that some magical potential of this blade was unlocked and you are ready to move onward ready for whatever challenge awaits.", 16, 0, 4, 0, 7),
("You open the door of the room and continue your quest. As you step through the doorway your vision ripples as though reality is a pond and you are a stone. You feel yourself falling, and then you hit something hard and everything goes dark.", NULL, 1, 0, 0, NULL),
("You clamor to your feet and dart away as quickly as you can! You take one step and the dragon snaps down! Only one of your legs remains on the ground and the dragon slathers your remains across its greedy maw in a bloody mess.", NULL, 0, 0, 1, NULL),
("You reach for your weapon and realize you only have a toaster. How silly. The dragon flashes down and devours you. There is nothing left. ", NULL, 0, 0, 1, NULL),
("You hold up your golden toaster in a desperate defense against the terrible creature before you, and as it snaps down at you it stops suddenly and seems to admire its own reflection in your toaster. Not one to waste an opportunity you slowly set the toaster down and leave. You lose a golden toaster, but escape with your life.", NULL, 0, -5, 1, NULL),
("From your back as the dragon moves to attack you whip out your crossbow and fire. Luck is with you this day, and your bolt catches the back of the dragons throat. It hacks and coughs at the bolt lodged in its throat. Not a death blow, but you don't argue with your good fortune and race from the chapel with your life.", NULL, 0, 0, 1, NULL),
("Remembering that you now have a magical crossbow you stand defiantly and face your gargantuan foe. As the dragon rushes to the kill you level the crossbow to your eye and take aim. You smirk defiantly at the beast and pull the trigger. In an instant, the golden bolt clatters straight to the floor without so much as a bounce due to its weight, and you never even knew what happened before the dragon ended your journey.", NULL, 0, 2, 1, NULL),
("You jump to your feet and brandish your sword ready to die like a hero if that is what it comes to. The dragon chomps down and you dive to the left rolling to a crouch and spring back at the dragon to slash at its exposed belly. You strike and the sword clangs against the dragons hide ineffectively. Blood splashes from your mouth as you feel claws the size of your sword punch into your back.", NULL, 0, 0, 1, NULL),
("You lie on the ground, gripped with fear at the sight before you. As the dragon bears down on you, slowly approaching and drooling rank, steaming globs of saliva onto the stone chapel floor you feel a swell of courage. The courage you feel is coming from.. your sword? Your golden sword seems now to be as hungry for the dragons blood as the dragon is for yours. With more a feeling than a thought you bring the blade to bear. Like a shining golden beacon in dark sea of despair you walk forward to do battle. In two it is done, the dragon snaps its long neck down at you and you swing across knocking its massive jaws wide in a swing to the teeth. You cross your sword back in the same instant and the dragons head falls to the floor. The sword evaporates in your hand and light streams into the chapel. The dragons neck erupts not with blood but with coins.", NULL, 0, 7, 0, NULL);


INSERT INTO rooms (roomName, enterText, optionListId, isUnique)
VALUES ("Great Hall", "You enter the time-worn gates of the old castle. Almost immediately ornate sconces along the wall spring to life with bright blue flames. The fire light adds an eerie luminescence to the chamber. While the outside was decrepit and old looking, the Great Hall before you is beautiful and enchanting.", 1, 1),
("library", "As you leave the Great Hall feeling surprising optimism about your journey and expect to find many treasures. You travel a short way down the hall and turn to the door of an altogether different chamber. A musty odor greets you before you have a chance to let go of the handle. As you walk in the most remarkable thing about the room is rows and rows of books and tattered scrolls lining the walls. All surfaces are covered in thick webbing that clings to you.  There is a door at the far end of the hall.

What do you do?", 4, 1),
("Guard Chamber", "You continue down a corridor that begins to look less grand, and more drab, less decorative. You enter a long room where the walls are lined with simple cots, each with a chest at the foot of the bed. The room looks like it curves off to the left farther down. In between each cot on the wall hangs a tattered banner with an old crest. This appears to have been a dusty Guard Chamber.", 10, 1),
("Solar", "Through the door you have gone, and you begin to climb a set of dusty stone steps that spiral around in a tight spiral. Clearly you are headed up to some tower. As you walk through a set of heavy wooden doors you come into a room with decor that matches that of the Great Hall. There sits a cauldron in the center of the room, a door to the left, and a bed in the far corner. You sense there is no danger here. What do you do?", 13, 1),
("Chapel", "You awaken from your last ordeal on a cold stone floor. Raising your head with a groan you look around. Through your pounding headache your vision begins to clear and you see a terrifying sight. The room is covered in a sickly red light and what you can clearly see was once a beautiful soaring chapel is now invaded by a dark presence. In the middle of the chapel is a great and terrifying dragon with row upon row of jagged teeth and scales as black as the night! It leers down at you with a cold ruthless hunger. You are seconds from being consumed! What do you do?", 17, 1);


INSERT INTO items (itemName, itemText)
VALUES ("Toaster", "A shiny red appliance that toasts bread.  The surfaces are smooth and flowing in design.  Looking at the toaster a word comes to mind - retro."),
("Crossbow", "A medieval weapon that uses mechanics of sturdy wood and springy metals to propel a sharp object at a deadly speed."),
("Sword", "A shiny double edged longsword that makes you feel dangerous."),
("None", " "),
("Golden Toaster", "A Heavy and wonderfully gleaming toaster!  Only the most obscenely wealthy would have such a luxury!"),
("Golden Crossbow", "A sturdy crossbow that is loaded with a magical golden bolt.  Look out enemies!"),
("Golden Sword", "A golden sword!  You can sense its power.");


INSERT INTO gameOptions (optionText, optionListId, responseId, reqItemId)
VALUES ("Search the room", 1, 1, NULL),
("Move to the next room", 1, 2, NULL),
("You see an item gleaming near the corner by the door", 2, 3, NULL),
("Pick it up?", 3, 4, NULL),
("Leave it behind", 3, 5, NULL),
("Search the room", 4, 6, NULL),
("Move to the next room", 4, 7, NULL),
("You see something leaning against the wall. Inspect it?", 5, 8, NULL),
("Leave it alone and move on", 5, 7, NULL),
("Pick up the crossbow?", 7, 9, 4),
("Leave it behind.", 7, 10, 4),
("Put the toaster down and pick up the crossbow?", 7, 11, 1),
("Ignore the crossbow and keep your beloved new toaster?", 7, 12, 1),
("Ignore it and move on", 7, 7, NULL),
("Clear it with my hand", 6, 13, NULL),
("Wave my toaster around in the webs", 6, 14, NULL),
("Wave my crossbow around in the webs", 6, 15, 2),
("Judo Chop!", 8, 16, NULL),
("Bash it with a toaster!", 8, 17, 1),
("Shoot one of its eight eyes out!", 8, 18, 2),
("Dropkick it!", 9, 19, NULL),
("Shoot it!", 9, 18, NULL),
("Open a chest.", 10, 19, NULL),
("Look for a way out", 10, 20, NULL),
("Search for loot", 10, 25, NULL),
("Karate time!", 11, 21, NULL),
("Throw your toaster at his head!", 11, 22, 1),
("Fire your crossbow!", 11, 23, 2),
("Cross swords with this fiend!", 11, 24, 3),
("Take the sword", 12, 26, 4),
("Leave your beloved toaster behind for an arguably better weapon?", 12, 28, 1),
("Give up your ranged fire power for a knight's weapon?", 12, 29, 2),
("Approach the figure", 12, 27, NULL),
("Inspect the bed", 13, 30, NULL),
("Inspect the cauldron", 13, 31, NULL),
("Head through the door", 13, 36, NULL),
("Inspect the cauldron", 14, 31, NULL),
("Head through the door", 14, 36, NULL),
("Dip your hand in the cauldron", 15, 32, NULL),
("Dip your toaster", 15, 33, 1),
("Dip your crossbow", 15, 34, 2),
("Dip your sword", 15, 35, 3),
("Head through the door", 16, 36, NULL),
("Run away!", 17, 37, NULL),
("Draw your toaster", 17, 38, 1),
("Draw your golden toaster", 17, 39, 5),
("Draw your crossbow", 17, 40, 2),
("Draw your golden crossbow", 17, 41, 6),
("Draw your sword", 17, 42, 3),
("Draw your golden sword", 17, 43, 7);




