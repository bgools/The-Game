

const player = [];
const computer = [];

function audio(){
    var music = document.getElementById('myAudio');
    music.volume = 0.1;
    music.play();
}

window.onload = audio;

function game(){
    function coinFlip() {
        const playerChoice = prompt("Heads or Tails");
        function flip(){
            return Math.floor((Math.random() * 2) + 1)
        }
        var results = flip()
        if (results === 1 && playerChoice == "heads") {
            //console.log("Player Wins");        
            player_win = player.push(results);
            document.getElementById('player_win').innerText = player_win;
            //console.log('Player has ' + player.length + ' points!');
            //console.log('Computer has ' + computer.length + ' points!');
        }else if(results === 2 && playerChoice == "tails"){
            //console.log("Player Wins");
            player.push(results);
            //console.log('Player has ' + player.length + ' points!');
            //console.log('Computer has ' + computer.length + ' points!');
        }else{
            //console.log("Computer Wins");        
            computer_win = computer.push(results);
            document.getElementById('computer_win').innerText = computer_win;
            //console.log('Computer has ' + computer.length + ' points!');
            //console.log('Player has ' + player.length + ' points!');
        }

        if (results === 1){
            document.getElementById("round_result").innerText = ("HEADS");
        }else{
            document.getElementById("round_result").innerText = ("TAILS");
        }

        if (player.length === 3) {
            document.getElementById('winner').innerText = ('Player Wins!!!');
            //alert("Game Over - refresh page to restart");
            setTimeout(newGame, 6000);
            
        }else if(computer.length === 3) {
            document.getElementById('winner').innerText = ('Computer Wins!!!');
            //alert("Game Over - refresh page to restart");
            setTimeout(newGame, 6000);
        }
    }
    coinFlip();
}



function newGame(){
    location.reload();
}

//function gameOver(){
//    if ((player.length + computer.length) === 5) {
//        alert('GAME OVER');
//    }else{
//        coinFlip()
//    }
//    var finalResults = gameOver()
//    if (player.length > computer.length){
//        document.getElementById('winner')
//        winner = 'Player is the Ultimate Champion'
//    }else{
//        document.getElementById('winner')
//        winner = 'Computer is the Ultimate Champion'
//    }
//}
//console.log(player);
//console.log(computer);

