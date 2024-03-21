function gameObject() {
  debugger
    return {
       "home": {
         "teamName": "Brooklyn Nets",
         "colors": ["Black", "White"],
         "players": {
           "Alan Anderson": {
             "number": 0,
             "shoe": 16,
             "points": 22,
             "rebounds": 12,
             "assists": 12,
             "steals": 3,
             "blocks": 1,
             "slamDunks": 1
           },
           "Reggie Evans": {
             "number": 30,
             "shoe": 14,
             "points": 12,
             "rebounds": 12,
             "assists": 12,
             "steals": 12,
             "blocks": 12,
             "slamDunks": 7
           },
           "Brook Lopez": {
             "number": 11,
             "shoe": 17,
             "points": 17,
             "rebounds": 19,
             "assists": 10,
             "steals": 3,
             "blocks": 1,
             "slamDunks": 15
           },
           "Mason Plumlee": {
             "number": 1,
             "shoe": 19,
             "points": 26,
             "rebounds": 12,
             "assists": 6,
             "steals": 3,
             "blocks": 8,
             "slamDunks": 5
           },
           "Jason Terry": {
             "number": 31,
             "shoe": 15,
             "points": 19,
             "rebounds": 2,
             "assists": 2,
             "steals": 4,
             "blocks": 11,
             "slamDunks": 1
           },
           
         }
       },
       "away": {
         "teamName": "Charlotte Hornets",
         "colors": ["Turqouise", "Purple"],
         "players": {
           "Jeff Adrien": {
             "number": 4,
             "shoe": 18,
             "points": 10,
             "rebounds": 1,
             "assists": 1,
             "steals": 2,
             "blocks": 7,
             "slamDunks": 2
           },
           "Bismak Biyombo": {
             "number": 0,
             "shoe": 16,
             "points": 12,
             "rebounds": 4,
             "assists": 7,
             "steals": 7,
             "blocks": 15,
             "slamDunks": 10
           },
           "DeSagna Diop": {
             "number": 2,
             "shoe": 14,
             "points": 24,
             "rebounds": 12,
             "assists": 12,
             "steals": 4,
             "blocks": 5,
             "slamDunks": 5
           },
           "Ben Gordon": {
             "number": 8,
             "shoe": 15,
             "points": 33,
             "rebounds": 3,
             "assists": 2,
             "steals": 1,
             "blocks": 1,
             "slamDunks": 0
           },
           "Brendan Haywood": {
             "number": 33,
             "shoe": 15,
             "points": 6,
             "rebounds": 12,
             "assists": 12,
             "steals": 22,
             "blocks": 5,
             "slamDunks": 12
           },
         }
       }
    };
   }
   function homeTeamName() {
    debugger
       return gameObject()["home"]["teamName"]
    }
    
 function numPointScored(playerName){
    const gameData = gameObject()
    debugger
    //check both home and away teams for the player
    const homePlayer = gameData.home.players[playerName]
    const awayPlayer = gameData.away.players[playerName]

  //return points scored
      if (homePlayer) {
        
        return homePlayer.points;
      } else if (awayPlayer) {
      
          return awayPlayer.points;
      } else {
          return "Player not found"
      }
 }
 
 function shoeSize(playerName){
    const game = gameObject()
    debugger
    //check both home and away shoe size
    const homeSize = game.home.players[playerName]
    const awaySize = game.away.players[playerName]

    //return shoe size
    if(homeSize){
      return homeSize.shoe
    }else if(awaySize){
      return awaySize.shoe
    }else {
      return "player not found"
    }
 }
 function teamColors(teamName) {
    const game = gameObject();
    debugger
    if (game.home.teamName === teamName) {
      return game.home.colors;
    } else if (game.away.teamName === teamName) {
      return game.away.colors;
    } else {
      return "Team not found";
    }
 }
 function teamNames() {
    const game = gameObject();
    debugger
    return [game.home.teamName, game.away.teamName];
 }
 function playerNumbers(teamName) {
    const game = gameObject();
    let numbers = [];
    debugger
    if (game.home.teamName === teamName) {
      for (let player in game.home.players) {
        numbers.push(game.home.players[player].number);
      }
    } else if (game.away.teamName === teamName) {
      for (let player in game.away.players) {
        numbers.push(game.away.players[player].number);
      }
    } else {
      return "Team not found";
    }
    return numbers;
 }
 function playerStats(playerName) {
    const game = gameObject();
    let player = null;
    debugger
    for (let team in game) {
      for (let playerKey in game[team].players) {
        if (playerKey === playerName) {
          player = game[team].players[playerKey];
          break;
        }
      }
      if (player) break;
    }
    return player ? player : "Player not found";
  }
 function bigShoeRebounds() {
      // Access the game object
      const game = gameObject();
      let largestShoeSize = 0;
      let playerWithLargestShoe = null;
    
      // Function to iterate through players and find the player with the largest shoe size
      debugger
      function findPlayerWithLargestShoe(players) {
        for (let player in players) {
          
          if (players[player].shoe > largestShoeSize) {
            largestShoeSize = players[player].shoe;
            playerWithLargestShoe = players[player];
          }
        }
      }
 
        // Check both home and away teams for the player with the largest shoe size
        findPlayerWithLargestShoe(game.home.players);
        findPlayerWithLargestShoe(game.away.players);
 
      // Return the number of rebounds for the player with the largest shoe size
       return playerWithLargestShoe ? playerWithLargestShoe.rebounds : "No player found with the largest shoe size";
 }
 
  
 //console.log(teamColors("Brooklyn Nets"))