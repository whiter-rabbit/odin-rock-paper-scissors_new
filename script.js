console.log("Play Rock-Paper-Scissors")


function getComputerChoice() {
    computerNumber = (Math.floor(Math.random() * 3)) + 1;
    if (computerNumber === 1) {
        computerChoice = "rock";
    }
    else if (computerNumber === 2) {
        computerChoice = "paper"
    }
    else {
        computerChoice = "scissors"
    }
    return computerChoice;
}

/*
//INFO : below  WORKING ORIGINAL FUNCTION 

function playerSelection() {
    let playerChoice = prompt("Choose: Rock, Paper or Scissors").toLowerCase();
    return playerChoice;
}
*/

const rockBtn = document.getElementById('rock-btn');
const paperBtn = document.getElementById('paper-btn');
const scissorsBtn = document.getElementById('scissors-btn');

const playBtn = document.getElementById("playBtn");

rockBtn.addEventListener("click", e => {rockBtn.classList.add("chosen")});
paperBtn.addEventListener("click", e => {paperBtn.classList.add("chosen")});
scissorsBtn.addEventListener("click", e => {scissorsBtn.classList.add("chosen")});


function playerSelection() {
    if (rockBtn.classList.contains("chosen")) {
        return "rock"
    }
    else if (paperBtn.classList.contains("chosen")) {
        return "paper"
    }
    else if (scissorsBtn.classList.contains("chosen")) {
        return "scis"
    };


    console.log("playerChoice = " + playerChoice);
    console.log(typeof playerChoice);
    
}


const win = ["win", 1];
const lose = ["lose", -1];
const tie = ["tie", 0];

function singleRound() {
    let a = playerSelection();
    let b = getComputerChoice();

    if (a === "rock" && b === "rock") {
        console.log("Tie! Rock vs Rock");
        return tie;
    }
    else if (a === "rock" && b === "paper") {
        console.log("You Lose! Rock loses against Paper");
        return lose;
    }
    else if (a === "rock" && b === "scissors") {
        console.log("You Win! Rock beats Scissors");
        return win;
    }
    else if (a === "paper" && b === "rock") {
        console.log("You Win! Paper beats Rock");
        return win;
    }
    else if (a === "paper" && b === "paper") {
        console.log("Tie! Paper vs Paper");
        return tie;
    }
    else if (a === "paper" && b === "scissors") {
        console.log("You Lose! Paper loses against Scissors");
        return lose;
    }
    else if (a === "scissors" && b === "rock") {
        console.log("You Lose! Scissors lose against Rock");
        return lose;
    }
    else if (a === "scissors" && b === "paper") {
        console.log("You Win! Scissors beats Paper");
        return win;
    }
    else if (a === "scissors" && b === "scissors") {
        console.log("Tie! Scissors vs Scissors");
        return tie;
    }
    // else {
    //     alert("Error. Type: Rock, Paper or Scissors");
    //     return singleRound();
    // }
}

/* INFO - below WORKING 5 ROUNDS GAME TO BE BROUGHT BACK 

function game () {
    alert("Play 5 rounds of the Rock - Paper - Scissors game to see if you can win with the computer");

  const totalOutput =[];
  let partialOutput;
  let totalScore = 0;

  for (let i = 0; i < 5; i++) {
    partialOutput = singleRound();
    totalOutput.push(partialOutput[0]);
    totalScore = totalScore + partialOutput[1];
  }
    
    if (totalScore > 0) {
        alert("You've WON. Your score is: " + totalOutput)
    }
    
    else if (totalScore === 0) {
        alert("You've TIED. Your score is: " + totalOutput)
    }

    else if (totalScore < 0) {
        alert("You've LOST. Your score is: " + totalOutput)
    }
}


game();

*/


// INFO : below WORKING temporary 1 ROUND GAME 

function game () {
    alert("Play 1 round of the Rock - Paper - Scissors game to see if you can win with the computer");

  const totalOutput =[];
  let partialOutput;
  let totalScore = 0;

  for (let i = 0; i < 1; i++) {
    partialOutput = singleRound();
    totalOutput.push(partialOutput[0]);
    totalScore = totalScore + partialOutput[1];
  }
    
    if (totalScore > 0) {
        alert("You've WON. Your score is: " + totalOutput)
    }
    
    else if (totalScore === 0) {
        alert("You've TIED. Your score is: " + totalOutput)
    }

    else if (totalScore < 0) {
        alert("You've LOST. Your score is: " + totalOutput)
    }
}



