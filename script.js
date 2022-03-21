function computerPlay() {
    let randomNumber = Math.floor(Math.random()*3) + 1;
  
    if (randomNumber ===3) {
      return "ROCK";
    } else if (randomNumber ===2) {
      return "PAPER";
    } else return "SCISSORS";
  }
  
  function play(playerSelection, computerSelection) {
    computerSelection = computerPlay();
    if ((computerSelection ==="ROCK" && playerSelection.toUpperCase() ==="ROCK") || (computerSelection ==="PAPER" && playerSelection.toUpperCase() ==="PAPER") || (computerSelection ==="SCISSORS" && playerSelection.toUpperCase() ==="SCISSORS")) {
        return "Both picked, " + playerSelection +" that's a draw!";
    } else if (computerSelection === "ROCK" && playerSelection.toUpperCase() === "PAPER") {
        return "You won! Paper beats Rock!";
    } else if (computerSelection=== "ROCK" && playerSelection.toUpperCase() === "SCISSORS") {
        return "You lost. Rock beasts Scissors.";
    } else if (computerSelection === "PAPER" && playerSelection.toUpperCase()==="ROCK") {
        return "You lost. Paper beats Rock.";
    } else if (computerSelection=== "PAPER" && playerSelection.toUpperCase() === "SCISSORS") {
        return "You won. Scissors beats Paper.";
    } else if (computerSelection === "SCISSORS" && playerSelection.toUpperCase() === "PAPER") {
        return "You lost. Scissors beasts paper";
    } else if (computerSelection === "SCISSORS" && playerSelection.toUpperCase() === "ROCK") {
      return "You win! Rock beats Scissors!";
    }
  }
  
  