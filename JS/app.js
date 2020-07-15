

// for loop goes here
/*
const Player = [];
const Computer = [];

function play(){
    const audio = document.getElementById("audio");
    audio.play();
}

function coinFlip() {
    function flip(){
            return Math.floor((Math.random() * 2) + 1)
    }
    var result = flip();
    if (result === 1){
            document.getElementById("coin").src="/IMAGES/michigan coin heads.png";
            winner = `HEADS`;
            Player_Win = Player.push(result);
    document.getElementById("head_win").innerText = Player_Win;
    } else if (result === 2) {
            document.getElementById("coin").src="/IMAGES/michigan coin tails.png";
            winner = `TAILS`;
          Computer_Win = `${Computer.push(result)}`;
    document.getElementById("tail_win").innerText = Computer_Win;
    }
    document.getElementById("winner").innerText = winner;
}

function score(){
    if (Player.length + Computer.length === 5){
        if (Player.length > Computer.length){
            document.getElementById("coin").src="/IMAGES/heads.png";
            final_winner = `The winner is Player with ${Player.length} wins!`;
    print_winner();
        } else if (Computer.length > Player.length) {
            document.getElementById("coin").src="/IMAGES/tails.png";
            final_winner = `The winner is Computer with ${Computer.length} wins!`;
    print_winner();
        }
    }
}

function print_winner(){
    winner = ''
    document.getElementById("final_winner").innerHTML = final_winner;
    // debugger;
    fallingCoins()
    // setTimeout(playAgain, 4000);
  }

  function playAgain(){
    alert("Play again?");
    window['location'].reload();
  }
*/
/*
const player = [];
const computer = [];

function flipGame() {
    function getRandomInt(min, max) {
        return Math.floor(Math.random() * (max - min)) + min;
      }
      let num = getRandomInt(1, 3);

      switch(num) {
          case 1:
            answer = "Heads";
            break;
          case 2:
            answer = "Tails";
            break;
      }

      document.getElementById('coin').innerHTML = answer;
}
*/

//choiceHeads() {

//}
//
//choiceTails() {

//}
//console.log('Heads or Tails');

const player = [];
const computer = [];
const playerChoice = prompt("Heads or Tails")


function coinFlip() {
    function flip(){
        return Math.floor((Math.random() * 2) + 1)
    }
        var results = flip()
    if (results === 1 && playerChoice == "heads") {
        console.log("Player Wins");        
        player.push(results)
    }else if(results === 2 && playerChoice == "tails"){
        console.log("Player Wins");
        player.push(results)
    }else{
        console.log("Computer Wins");        
        computer.push(results)
    }
}

coinFlip()
console.log(player);
console.log(computer);


