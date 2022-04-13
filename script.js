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
let result = document.querySelector(".display")

function play(playerSelection, computerSelection) {
  if ((computerSelection ==="ROCK" && playerSelection ==="ROCK") || (computerSelection ==="PAPER" && playerSelection ==="PAPER") || (computerSelection ==="SCISSORS" && playerSelection ==="SCISSORS")) {
      result.innerHTML = "Both picked, " + playerSelection +" that's a draw! The score is: Player "+ playerScore +" Computer " + computerScore;
      console.log(result.innerHTML);
  } else if (computerSelection === "ROCK" && playerSelection === "PAPER") {
      ++playerScore;
      result.innerHTML = "You won! Paper beats Rock! The score is: Player "+ playerScore +" Computer " + computerScore;
      console.log(result.innerHTML);
  } else if (computerSelection=== "ROCK" && playerSelection === "SCISSORS") {
      ++computerScore;
      result.innerHTML = "You lost. Rock beasts Scissors. The score is: Player "+ playerScore +" Computer " + computerScore;
      console.log(result.innerHTML);
  } else if (computerSelection === "PAPER" && playerSelection==="ROCK") {
      ++computerScore;
      result.innerHTML = "You lost. Paper beats Rock. The score is: Player "+ playerScore +" Computer " + computerScore;
      console.log(result.innerHTML);
  } else if (computerSelection=== "PAPER" && playerSelection === "SCISSORS") {
      ++playerScore;
      result.innerHTML = "You won. Scissors beats Paper. The score is: Player "+ playerScore +" Computer " + computerScore;
      console.log(result.innerHTML);
  } else if (computerSelection === "SCISSORS" && playerSelection === "PAPER") {
      ++computerScore;
      result.innerHTML = "You lost. Scissors beasts paper. The score is: Player "+ playerScore +" Computer " + computerScore;
      console.log(result.innerHTML);
  } else if (computerSelection === "SCISSORS" && playerSelection === "ROCK") {
    ++playerScore;
    result.innerHTML = "You win! Rock beats Scissors! The score is: Player "+ playerScore +" Computer " + computerScore;
    console.log(result.innerHTML);
  } return result.innerHTML;
}



// adding selector and event listener for buttons to play the game
const buttons = document.querySelectorAll('button');
buttons.forEach((button) => {
  button.addEventListener('click', () => {
      play(button.id, computerPlay());
  })
});
