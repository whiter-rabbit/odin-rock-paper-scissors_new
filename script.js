const rockBtn = document.getElementById('rock-btn');
const paperBtn = document.getElementById('paper-btn');
const scissorsBtn = document.getElementById('scissors-btn');

const scores = document.querySelector(".scores");
let score = document.querySelector(".score")
const result = document.querySelector(".result");

let gamesPlayed = 0

rockBtn.addEventListener("click", function(e) {
    rockBtn.classList.add("chosen");
    paperBtn.classList.toggle("chosen", false);
    scissorsBtn.classList.toggle("chosen", false);
    gamesPlayed++;
    singleRound();
    
});
paperBtn.addEventListener("click", function(e) {
    paperBtn.classList.add("chosen");
    rockBtn.classList.toggle("chosen", false);
    scissorsBtn.classList.toggle("chosen", false);
    gamesPlayed++;
    singleRound();
    
});
scissorsBtn.addEventListener("click",  function(e) {
    scissorsBtn.classList.add("chosen");
    rockBtn.classList.toggle("chosen", false);
    paperBtn.classList.toggle("chosen", false);
    gamesPlayed++;
    singleRound();
    
});


let totalScore = 0

function singleRound() {
    let a = playerSelection();
    let b = getComputerChoice();

    score = document.createElement('p');
    scores.prepend(score);
    
    if (gamesPlayed <= 5 )  {
        
       
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
    else {
        gameScore();
    }
}


/*
function singleRound() {
    let a = playerSelection();
    let b = getComputerChoice();
    
    // BELOW: creates a new node that will appear above the one with 
    //result (as a first child). For adding future results.
    // const resultNew = document.createElement('div'); 
    // resultNew.classList.add('result'); 
    // scores.prepend(resultNew)
    // resultNew.innerText ="Test";
    
    if (gamesPlayed < 5)  {
        
       
        if (a === "rock" && b === "rock") {
            scores.innerText ="Tie! Rock vs Rock";
            rockBtn.classList.toggle("chosen", false);
            totalScore = totalScore + 0;
            return totalScore;
            
        }
        else if (a === "rock" && b === "paper") {
            scores.innerText = "You Lose! Rock loses against Paper";
            rockBtn.classList.toggle("chosen", false);
            totalScore = totalScore - 1;
            return totalScore;
        }
        else if (a === "rock" && b === "scissors") {
            scores.innerText = "You Win! Rock beats Scissors";
            rockBtn.classList.toggle("chosen", false);
            totalScore = totalScore + 1;
            return totalScore;
        }
        else if (a === "paper" && b === "rock") {
            scores.innerText = "You Win! Paper beats Rock";
            paperBtn.classList.toggle("chosen", false);
            totalScore = totalScore + 1;
            return totalScore;
        }
        else if (a === "paper" && b === "paper") {
            scores.innerText = "Tie! Paper vs Paper";
            paperBtn.classList.toggle("chosen", false);
            totalScore = totalScore + 0;
            return totalScore;
        }
        else if (a === "paper" && b === "scissors") {
            scores.innerText = "You Lose! Paper loses against Scissors";
            paperBtn.classList.toggle("chosen", false);
            totalScore = totalScore - 1;
            return totalScore;
        }
        else if (a === "scissors" && b === "rock") {
            scores.innerText = "You Lose! Scissors lose against Rock";
            scissorsBtn.classList.toggle("chosen", false);
            totalScore = totalScore - 1;
            return totalScore;
        }
        else if (a === "scissors" && b === "paper") {
            scores.innerText = "You Win! Scissors beats Paper";
            scissorsBtn.classList.toggle("chosen", false);
            totalScore = totalScore + 1;
            return totalScore;
        }
        else if (a === "scissors" && b === "scissors") {
            scores.innerText = "Tie! Scissors vs Scissors";
            scissorsBtn.classList.toggle("chosen", false);
            totalScore = totalScore + 0;
            return totalScore;
        }
    }
    else {
        gameScore();
    }
}

*/

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
  }

    
  
