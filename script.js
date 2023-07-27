const rockBtn = document.getElementById('rock-btn');
const paperBtn = document.getElementById('paper-btn');
const scissorsBtn = document.getElementById('scissors-btn');


const scores = document.querySelector(".scores");
let score = document.querySelector(".score");
const buttons = document.querySelector(".buttons")
const result = document.querySelector(".result");
const playAgain = document.querySelector(".play-again");
const allButtons = document.querySelector(".all-buttons");

rockBtn.addEventListener("click", function(e) {
    rockBtn.classList.add("chosen");
    gamesPlayed++;
    game();
    
    
});
paperBtn.addEventListener("click", function(e) {
    paperBtn.classList.add("chosen");
    gamesPlayed++;
    game();
    
});
scissorsBtn.addEventListener("click",  function(e) {
    scissorsBtn.classList.add("chosen");
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
}


function singleRound() {
    let a = playerSelection();
    let b = getComputerChoice();

    score = document.createElement('p');
    score.classList.add("score")
    
        if (a === "rock" && b === "rock") {
            scores.prepend(score);
            score.innerText ="Tie! Rock vs Rock";
            score.classList.add("orange-text");
            setTimeout(() => {
                score.classList.remove("orange-text")
              }, "150");
            setTimeout(() => {
                rockBtn.classList.remove("chosen")
              }, "250");
            totalScore = totalScore + 0;
            
        }
        else if (a === "rock" && b === "paper") {
            scores.prepend(score);
            score.innerText = "You Lose! Rock loses against Paper";
            score.classList.add("orange-text");
            setTimeout(() => {
                score.classList.remove("orange-text")
              }, "150");
            setTimeout(() => {
                rockBtn.classList.remove("chosen")
              }, "250");
            totalScore = totalScore - 1;
            
        }
        else if (a === "rock" && b === "scissors") {
            scores.prepend(score);
            score.innerText = "You Win! Rock beats Scissors";
            score.classList.add("orange-text");
            setTimeout(() => {
                score.classList.remove("orange-text")
              }, "150");
            setTimeout(() => {
                rockBtn.classList.remove("chosen")
              }, "250");
            totalScore = totalScore + 1;
            
        }
        else if (a === "paper" && b === "rock") {
            scores.prepend(score);
            score.innerText = "You Win! Paper beats Rock";
            score.classList.add("orange-text");
            setTimeout(() => {
                score.classList.remove("orange-text")
              }, "150");
            setTimeout(() => {
                paperBtn.classList.remove("chosen")
              }, "250");
            totalScore = totalScore + 1;
            
        }
        else if (a === "paper" && b === "paper") {
            scores.prepend(score);
            score.innerText = "Tie! Paper vs Paper";
            score.classList.add("orange-text");
            setTimeout(() => {
                score.classList.remove("orange-text")
              }, "150");
            setTimeout(() => {
                paperBtn.classList.remove("chosen")
              }, "250");
            totalScore = totalScore + 0;
            
        }
        else if (a === "paper" && b === "scissors") {
            scores.prepend(score);
            score.innerText = "You Lose! Paper loses against Scissors";
            score.classList.add("orange-text");
            setTimeout(() => {
                score.classList.remove("orange-text")
              }, "150");
            setTimeout(() => {
                paperBtn.classList.remove("chosen")
              }, "250");
            totalScore = totalScore - 1;
            
        }
        else if (a === "scissors" && b === "rock") {
            scores.prepend(score);
            score.innerText = "You Lose! Scissors lose against Rock";
            score.classList.add("orange-text");
            setTimeout(() => {
                score.classList.remove("orange-text")
              }, "150");
            setTimeout(() => {
                scissorsBtn.classList.remove("chosen")
              }, "250");
            totalScore = totalScore - 1;
            
        }
        else if (a === "scissors" && b === "paper") {
            scores.prepend(score);
            score.innerText = "You Win! Scissors beats Paper";
            score.classList.add("orange-text");
            setTimeout(() => {
                score.classList.remove("orange-text")
              }, "150");
            setTimeout(() => {
                scissorsBtn.classList.remove("chosen")
              }, "250");
            totalScore = totalScore + 1;
            
        }
        else if (a === "scissors" && b === "scissors") {
            scores.prepend(score);
            score.innerText = "Tie! Scissors vs Scissors";
            score.classList.add("orange-text");
            setTimeout(() => {
                score.classList.remove("orange-text")
              }, "150");
            setTimeout(() => {
                scissorsBtn.classList.remove("chosen")
              }, "250");
            totalScore = totalScore + 0;
            
        }

}


function getComputerChoice() {
    const buttons2 = document.createElement("div");
    buttons2.classList.add("buttons2");
    allButtons.appendChild(buttons2);
    const computersBtn = document.createElement("button");
    computersBtn.classList.add("computers-btn");
    computersBtn.classList.add("chosen");
    buttons2.append(computersBtn);
    
    computerNumber = (Math.floor(Math.random() * 3)) + 1;
    
    if (computerNumber === 1) {
        computerChoice = "rock";
        computersBtn.innerText = "rock";
    }
    else if (computerNumber === 2) {
        computerChoice = "paper";
        computersBtn.innerText = "paper";
        buttons2.classList.add("center-btn");
    }
    else if (computerNumber === 3) {
        computerChoice = "scissors";
        computersBtn.innerText = "scissors";
        buttons2.classList.add("right-btn");
    }
    setTimeout(() => {
        computersBtn.classList.remove("chosen")
      }, "350");
    setTimeout(() => {
        computersBtn.setAttribute("disabled", "")
        }, "500");

    setTimeout(() => {
        computersBtn.remove()
        }, "500");
    setTimeout(() => {
        buttons2.remove()
        }, "500");

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
    let playAgainBtn = document.createElement("button");
    playAgainBtn.innerText ="play again";
    playAgain.prepend(playAgainBtn);
    rockBtn.setAttribute("disabled", "");
    paperBtn.setAttribute("disabled", "");
    scissorsBtn.setAttribute("disabled", "");

    playAgainBtn.addEventListener("click", function(e) {
        gamesPlayed = 0;
        for (let i = 0; i < 5; i++) {
            scores.firstElementChild.remove();
        }
        result.innerText = "";
        rockBtn.removeAttribute("disabled", "");
        paperBtn.removeAttribute("disabled", "");
        scissorsBtn.removeAttribute("disabled", "");
        playAgain.firstElementChild.remove();
        totalScore = 0;

});

  }

    
  
