const rockBtn = document.getElementById('rock-btn');
const paperBtn = document.getElementById('paper-btn');
const scissorsBtn = document.getElementById('scissors-btn');

const result = document.querySelector(".result");
const scores = document.querySelector(".scores");

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


// const win = ["win", 1];
// const lose = ["lose", -1];
// const tie = ["tie", 0];

let totalScore = 0



function singleRound() {
    let a = playerSelection();
    let b = getComputerChoice();
    
    // BELOW: creates a new node that will appear above the one with 
    //result (as a first child). For adding future results.
    //const resultNew = document.createElement('div'); 
    //resultNew.classList.add('result'); 
    //scores.prepend(resultNew)
    //resultNew.innerText ="Test";
    
    if (gamesPlayed < 5)  {
        
        console.log("passed")

       
        if (a === "rock" && b === "rock") {
            result.innerText ="Tie! Rock vs Rock";
            rockBtn.classList.toggle("chosen", false);
            totalScore = totalScore + 0;
            return totalScore;
            
        }
        else if (a === "rock" && b === "paper") {
            result.innerText = "You Lose! Rock loses against Paper";
            rockBtn.classList.toggle("chosen", false);
            totalScore = totalScore - 1;
            return totalScore;
        }
        else if (a === "rock" && b === "scissors") {
            result.innerText = "You Win! Rock beats Scissors";
            rockBtn.classList.toggle("chosen", false);
            totalScore = totalScore + 1;
            return totalScore;
        }
        else if (a === "paper" && b === "rock") {
            result.innerText = "You Win! Paper beats Rock";
            paperBtn.classList.toggle("chosen", false);
            totalScore = totalScore + 1;
            return totalScore;
        }
        else if (a === "paper" && b === "paper") {
            result.innerText = "Tie! Paper vs Paper";
            paperBtn.classList.toggle("chosen", false);
            totalScore = totalScore + 0;
            return totalScore;
        }
        else if (a === "paper" && b === "scissors") {
            result.innerText = "You Lose! Paper loses against Scissors";
            paperBtn.classList.toggle("chosen", false);
            totalScore = totalScore - 1;
            return totalScore;
        }
        else if (a === "scissors" && b === "rock") {
            result.innerText = "You Lose! Scissors lose against Rock";
            scissorsBtn.classList.toggle("chosen", false);
            totalScore = totalScore - 1;
            return totalScore;
        }
        else if (a === "scissors" && b === "paper") {
            result.innerText = "You Win! Scissors beats Paper";
            scissorsBtn.classList.toggle("chosen", false);
            totalScore = totalScore + 1;
            return totalScore;
        }
        else if (a === "scissors" && b === "scissors") {
            result.innerText = "Tie! Scissors vs Scissors";
            scissorsBtn.classList.toggle("chosen", false);
            totalScore = totalScore + 0;
            return totalScore;
        }
    }
    else {
        console.log("passed 5")
        gameScore();
    }
}


/*
INFO : below working function
function singleRound() {
    let a = playerSelection();
    let b = getComputerChoice();

    
    // BELOW: creates a new node that will appear above the one with 
    //result (as a first child). For adding future results.
    //const resultNew = document.createElement('div'); 
    //resultNew.classList.add('result'); 
    //scores.prepend(resultNew)
    //resultNew.innerText ="Test";
    

    if (a === "rock" && b === "rock") {
        result.innerText ="Tie! Rock vs Rock";
        rockBtn.classList.toggle("chosen", false);
        return tie;
        
    }
    else if (a === "rock" && b === "paper") {
        result.innerText = "You Lose! Rock loses against Paper";
        rockBtn.classList.toggle("chosen", false);
        return lose;
    }
    else if (a === "rock" && b === "scissors") {
        result.innerText = "You Win! Rock beats Scissors";
        rockBtn.classList.toggle("chosen", false);
        return win;
    }
    else if (a === "paper" && b === "rock") {
        result.innerText = "You Win! Paper beats Rock";
        paperBtn.classList.toggle("chosen", false);
        return win;
    }
    else if (a === "paper" && b === "paper") {
        result.innerText = "Tie! Paper vs Paper";
        paperBtn.classList.toggle("chosen", false);
        return tie;
    }
    else if (a === "paper" && b === "scissors") {
        result.innerText = "You Lose! Paper loses against Scissors";
        paperBtn.classList.toggle("chosen", false);
        return lose;
    }
    else if (a === "scissors" && b === "rock") {
        result.innerText = "You Lose! Scissors lose against Rock";
        scissorsBtn.classList.toggle("chosen", false);
        return lose;
    }
    else if (a === "scissors" && b === "paper") {
        result.innerText = "You Win! Scissors beats Paper";
        scissorsBtn.classList.toggle("chosen", false);
        return win;
    }
    else if (a === "scissors" && b === "scissors") {
        result.innerText = "Tie! Scissors vs Scissors";
        scissorsBtn.classList.toggle("chosen", false);
        return tie;
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

/*
INFO : function below WON'T work - stack overflow
function game () {

    const totalOutput =[];
    let partialOutput = singleRound()
    let totalScore = 0;
    let gamesPlayed =0

    if (singleRound === "rock" || singleRound === "paper" || singleRound === "scissors") {
        console.log("passed1")
    }
  
    // for (let i = 0; i < 5; i++) {
    //   partialOutput = singleRound();
    //   totalOutput.push(partialOutput[0]);
    //   totalScore = totalScore + partialOutput[1];
    // }
      
    //   if (totalScore > 0) {
    //       alert("You've WON. Your score is: " + totalOutput)
    //   }
      
    //   else if (totalScore === 0) {
    //       alert("You've TIED. Your score is: " + totalOutput)
    //   }
  
    //   else if (totalScore < 0) {
    //       alert("You've LOST. Your score is: " + totalOutput)
    //   }
    else {
        game();
    }
  }
*/


function game () {

    const totalOutput =[];
    let partialOutput;
    let totalScore = 0;
  
    for (let i = 0; i < 5; i++) {
      partialOutput = singleRound();
      totalOutput.push(partialOutput[0]);
      totalScore = totalScore + partialOutput[1];
    }
      
     
  }


  function gameScore () {

    console.log(totalScore);

    if (totalScore > 0) {
        alert("You've WON")
    }
    
    else if (totalScore === 0) {
        alert("You've TIED")
    }

    else if (totalScore < 0) {
        alert("You've LOST")
    }
  }

    
  
/*
//INFO - below WORKING old 5 ROUNDS GAME 

function game () {

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
*/

/*
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

*/

