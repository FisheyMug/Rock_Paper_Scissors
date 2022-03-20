function computerPlay() {
    let randomNumber = Math.floor(Math.random()*3) + 1;
  
    if (randomNumber ===3) {
      return "ROCK";
    } else if (randomNumber ===2) {
      return "PAPER";
    } else return "SCISSORS";
  }
  
  function play(playerSelection, computerSelection) {
    if ((computerSelection ==="ROCK" && playerSelection.toUpperCase() ==="ROCK") || (computerSelection ==="PAPER" && playerSelection.toUpperCase() ==="PAPER") || (computerSelection ==="SCISSORS" && playerSelection.toUpperCase() ==="SCISSORS")) {
      return "Both picked, " + playerSelection +" that's a draw!";
    } else if (computerSelection === "ROCK" && playerSelction.toUpperCase() == "PAPER") {
      return "You won! Paper beats Rock!";
    } else if (computerSelection=== "Rock" && playerSelection.toUpperCase() === "SCISSORS") {
      return "You lost. Rock beasts Scissors.";
    } else if (computerSelection == "PAPER" && playerSelection.toUpperCase()=="ROCK") {
      return "You lost. Paper beats Rock.";
    } else if (computerSelection== "PAPER" && PlayerSelection.toUpperCase() == "SCISSORS") {
      return "You won. Scissors beats Paper.";
    } else {
      return "still working";
    }
  }
  
  const playerSelection = "Rock";
  const computerSelection = computerPlay();
  console.log(play(playerSelection, computerSelection));