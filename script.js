const rockBtn = document.getElementById('rock-btn');
const paperBtn = document.getElementById('paper-btn');
const scissorsBtn = document.getElementById('scissors-btn');

const scores = document.querySelector(".scores");
let score = document.querySelector(".score")
const result = document.querySelector(".result");
const infoAboutRepeat = document.querySelector(".info-repeat")

rockBtn.addEventListener("click", function(e) {
    rockBtn.classList.add("chosen");
    paperBtn.classList.toggle("chosen", false);
    scissorsBtn.classList.toggle("chosen", false);
    gamesPlayed++;
    game();
    
});
paperBtn.addEventListener("click", function(e) {
    paperBtn.classList.add("chosen");
    rockBtn.classList.toggle("chosen", false);
    scissorsBtn.classList.toggle("chosen", false);
    gamesPlayed++;
    game();
    
});
scissorsBtn.addEventListener("click",  function(e) {
    scissorsBtn.classList.add("chosen");
    rockBtn.classList.toggle("chosen", false);
    paperBtn.classList.toggle("chosen", false);
    gamesPlayed++;
    game();
    
});

let gamesPlayed = 0
let totalScore = 0

function game() {
    
    if (gamesPlayed < 5 )  {
        singleRound();
    }
    else if (gamesPlayed === 5){
        singleRound();
        gameScore();
    }
    else {
        gamesPlayed = 0;
        for (let i = 0; i < 5; i++) {
            scores.firstElementChild.remove();
        }
        result.innerText = "";
        infoAboutRepeat.innerText = "";
        rockBtn.classList.toggle("chosen", false);
        paperBtn.classList.toggle("chosen", false);
        scissorsBtn.classList.toggle("chosen", false);
    }
}


function singleRound() {
    let a = playerSelection();
    let b = getComputerChoice();

    score = document.createElement('p');
    score.classList.add("score")
    
        if (a === "rock" && b === "rock") {
            scores.prepend(score);
            score.innerText ="Tie! Rock vs Rock";
            rockBtn.classList.toggle("chosen", false);
            totalScore = totalScore + 0;
            return totalScore;
        }
        else if (a === "rock" && b === "paper") {
            scores.prepend(score);
            score.innerText = "You Lose! Rock loses against Paper";
            rockBtn.classList.toggle("chosen", false);
            totalScore = totalScore - 1;
            return totalScore;
        }
        else if (a === "rock" && b === "scissors") {
            scores.prepend(score);
            score.innerText = "You Win! Rock beats Scissors";
            rockBtn.classList.toggle("chosen", false);
            totalScore = totalScore + 1;
            return totalScore;
        }
        else if (a === "paper" && b === "rock") {
            scores.prepend(score);
            score.innerText = "You Win! Paper beats Rock";
            paperBtn.classList.toggle("chosen", false);
            totalScore = totalScore + 1;
            return totalScore;
        }
        else if (a === "paper" && b === "paper") {
            scores.prepend(score);
            score.innerText = "Tie! Paper vs Paper";
            paperBtn.classList.toggle("chosen", false);
            totalScore = totalScore + 0;
            return totalScore;
        }
        else if (a === "paper" && b === "scissors") {
            scores.prepend(score);
            score.innerText = "You Lose! Paper loses against Scissors";
            paperBtn.classList.toggle("chosen", false);
            totalScore = totalScore - 1;
            return totalScore;
        }
        else if (a === "scissors" && b === "rock") {
            scores.prepend(score);
            score.innerText = "You Lose! Scissors lose against Rock";
            scissorsBtn.classList.toggle("chosen", false);
            totalScore = totalScore - 1;
            return totalScore;
        }
        else if (a === "scissors" && b === "paper") {
            scores.prepend(score);
            score.innerText = "You Win! Scissors beats Paper";
            scissorsBtn.classList.toggle("chosen", false);
            totalScore = totalScore + 1;
            return totalScore;
        }
        else if (a === "scissors" && b === "scissors") {
            scores.prepend(score);
            score.innerText = "Tie! Scissors vs Scissors";
            scissorsBtn.classList.toggle("chosen", false);
            totalScore = totalScore + 0;
            return totalScore;
        }
}



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


function playerSelection() {
    if (rockBtn.classList.contains("chosen")) {
        return "rock"
    }
    else if (paperBtn.classList.contains("chosen")) {
        return "paper"
    }
    else if (scissorsBtn.classList.contains("chosen")) {
        return "scissors"
    }; 
}


  function gameScore () {

    console.log(totalScore);

    if (totalScore > 0) {
        result.innerText = "You've WON";
    }
    
    else if (totalScore === 0) {
        result.innerText = "You've TIED";
    }

    else if (totalScore < 0) {
        result.innerText = "You've LOST";
    }
    infoAboutRepeat.innerText = "Click on rock, paper or scissors button if you would like to play again."
  }

    
  
