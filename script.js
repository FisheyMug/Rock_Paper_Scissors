//variables
let playerScore= 0;
let computerScore = 0;




//function for program to randomly pick rock paper or scissors
function computerPlay() {
  let randomNumber = Math.floor(Math.random()*3) + 1;

  if (randomNumber ===3) {
    return "ROCK";
  } else if (randomNumber ===2) {
    return "PAPER";
  } else return "SCISSORS";
}

//main game round function
function play(playerSelection, computerSelection) {
  if (playerScore == 5) {
  result.innerHTML = "You win! Game over.";
} else if (computerScore==5) {
    result.innerHTML = "You lose! Game over."
} else if (computerSelection === playerSelection) {
      result.innerHTML = "Both picked, " + playerSelection +" that's a draw! The score is: Player "+ playerScore +" Computer " + computerScore;
      console.log(result.innerHTML);
  } else if ((computerSelection === "ROCK" && playerSelection === "PAPER") || (computerSelection=== "PAPER" && playerSelection === "SCISSORS") || (computerSelection === "SCISSORS" && playerSelection === "ROCK")) {
      ++playerScore;
      result.innerHTML = "You won! " + playerSelection+ " beats " + computerSelection + " The score is: Player "+ playerScore +" Computer " + computerScore;
      console.log(result.innerHTML);
      playerScoreBoard.innerHTML = playerScore;
  } else if ((computerSelection=== "ROCK" && playerSelection === "SCISSORS") || (computerSelection === "PAPER" && playerSelection==="ROCK") || (computerSelection === "SCISSORS" && playerSelection === "PAPER")) {
      ++computerScore;
      result.innerHTML = "You lost. " + computerSelection + " beats " + playerSelection + ". The score is: Player "+ playerScore +" Computer " + computerScore;
      console.log(result.innerHTML);
      computerScoreBoard.innerHTML = computerScore;
  } return result.innerHTML;
}

function restart() {
  playerScore = 0;
  playerScoreBoard.innerHTML = playerScore;
  computerScore = 0;
  result.innerHTML = "Let's Play"
};

// UI
let result = document.querySelector(".display")

const buttons = document.querySelectorAll('button');
buttons.forEach((button) => {
  button.addEventListener('click', () => {
      play(button.id, computerPlay());
  })
});

const restartBtn = document.getElementById("restart");
restartBtn.addEventListener('click', restart);

const playerScoreBoard = document.querySelector(".pScoreText");
const computerScoreBoard = document.querySelector(".cScoreText");


