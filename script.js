function computerPlay() {
    let randomNumber = Math.floor(Math.random()*3) + 1;
  
    if (randomNumber ===3) {
      return "ROCK";
    } else if (randomNumber ===2) {
      return "PAPER";
    } else return "SCISSORS";
  }

let playerScore= 0;
let computerScore = 0;
let result = "";
  
function play(playerSelection, computerSelection) {
    computerSelection = computerPlay();
    playerSelection = prompt("Rock, Scissors, or Paper?");
    if ((computerSelection ==="ROCK" && playerSelection.toUpperCase() ==="ROCK") || (computerSelection ==="PAPER" && playerSelection.toUpperCase() ==="PAPER") || (computerSelection ==="SCISSORS" && playerSelection.toUpperCase() ==="SCISSORS")) {
        result = "Both picked, " + playerSelection +" that's a draw! The score is: Player "+ playerScore +" Computer " + computerScore;
        console.log(result);
    } else if (computerSelection === "ROCK" && playerSelection.toUpperCase() === "PAPER") {
        ++playerScore;
        result = "You won! Paper beats Rock! The score is: Player "+ playerScore +" Computer " + computerScore;
        console.log(result);
    } else if (computerSelection=== "ROCK" && playerSelection.toUpperCase() === "SCISSORS") {
        ++computerScore;
        result = "You lost. Rock beasts Scissors. The score is: Player "+ playerScore +" Computer " + computerScore;
        console.log(result);
    } else if (computerSelection === "PAPER" && playerSelection.toUpperCase()==="ROCK") {
        ++computerScore;
        result = "You lost. Paper beats Rock. The score is: Player "+ playerScore +" Computer " + computerScore;
        console.log(result);
    } else if (computerSelection=== "PAPER" && playerSelection.toUpperCase() === "SCISSORS") {
        ++playerScore;
        result = "You won. Scissors beats Paper. The score is: Player "+ playerScore +" Computer " + computerScore;
        console.log(result);
    } else if (computerSelection === "SCISSORS" && playerSelection.toUpperCase() === "PAPER") {
        ++computerScore;
        result = "You lost. Scissors beasts paper. The score is: Player "+ playerScore +" Computer " + computerScore;
        console.log(result);
    } else if (computerSelection === "SCISSORS" && playerSelection.toUpperCase() === "ROCK") {
      ++playerScore;
      result = "You win! Rock beats Scissors! The score is: Player "+ playerScore +" Computer " + computerScore;
      console.log(result);
    } return result;
}


function game () {
  for (let i = 0; i < 5; i++) {
    play() 
  }
  if (playerScore === computerScore) {
    return "Draw! After five rounds you and the computer both got the same score. Player "+ playerScore +" Computer " + computerScore;
  } else if  (playerScore > computerScore) {
    return "You win! After five rounds you have scored more than the computer. The score is Player "+ playerScore +" Computer " + computerScore;
  } else return "You lose. Sorry, after five rounds the computer has scored more than you. The final score is Player "+ playerScore +" Computer " + computerScore;
}