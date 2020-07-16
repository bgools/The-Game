

const player = [];
const computer = [];
function game(){
    function coinFlip() {
        const playerChoice = prompt("Heads or Tails");
        function flip(){
            return Math.floor((Math.random() * 2) + 1)
        }
        var results = flip()
        if (results === 1 && playerChoice == "heads") {
            console.log("Player Wins");        
            player.push(results);
            console.log('Player has ' + player.length + ' points!');
            console.log('Computer has ' + computer.length + ' points!');
        }else if(results === 2 && playerChoice == "tails"){
            console.log("Player Wins");
            player.push(results);
            console.log('Player has ' + player.length + ' points!');
            console.log('Computer has ' + computer.length + ' points!');
        }else{
            console.log("Computer Wins");        
            computer.push(results);
            console.log('Computer has ' + computer.length + ' points!');
            console.log('Player has ' + player.length + ' points!');
        }
    }
    coinFlip()
}
//console.log(player);
//console.log(computer);

