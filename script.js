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


function playerSelection() {
    let playerChoice = prompt("Choose: Rock, Paper or Scissors").toLowerCase();
    return playerChoice;
}

function singleRound() {
    let a = playerSelection();
    let b = getComputerChoice();

    if (a === "rock" && b === "rock") {
        console.log("Tie! Rock vs Rock");
        return "tie";
    }
    else if (a === "rock" && b === "paper") {
        console.log("You Lose! Rock loses against Paper");
        return "lose";
    }
    else if (a === "rock" && b === "scissors") {
        console.log("You Win! Rock beats Scissors");
        return "win";
    }
    else if (a === "paper" && b === "rock") {
        console.log("You Win! Paper beats Rock");
        return "win";
    }
    else if (a === "paper" && b === "paper") {
        console.log("Tie! Paper vs Paper");
        return "tie";
    }
    else if (a === "paper" && b === "scissors") {
        console.log("You Lose! Paper loses against Scissors");
        return "lose";
    }
    else if (a === "scissors" && b === "rock") {
        console.log("You Lose! Scissors lose against Rock");
        return "lose";
    }
    else if (a === "scissors" && b === "paper") {
        console.log("You Win! Scissors beats Paper");
        return "win";
    }
    else if (a === "scissors" && b === "scissors") {
        console.log("Tie! Scissors vs Scissors");
        return "tie";
    }
    else {
        alert("Error. Type: Rock, Paper or Scissors");
        return singleRound();
    }
}


function game() {
    alert("Play 5 rounds of the Rock - Paper - Scissors game to see if you can win with the computer");

    let partialWin = 0;
    let partialLose = 0;

    let partialOutput1 = singleRound();
    if (partialOutput1 === "win") {
        partialWin++;
    }
    else if (partialOutput1 === "lose") {
        partialLose++;
    }

    let partialOutput2 = singleRound();
    if (partialOutput2 === "win") {
        partialWin++;
    }
    else if (partialOutput2 === "lose") {
        partialLose++;
    }

    let partialOutput3 = singleRound();
    if (partialOutput3 === "win") {
        partialWin++;
    }
    else if (partialOutput3 === "lose") {
        partialLose++;
    }

    let partialOutput4 = singleRound();
    if (partialOutput4 === "win") {
        partialWin++;
    }
    else if (partialOutput4 === "lose") {
        partialLose++;
    }

    let partialOutput5 = singleRound();
    if (partialOutput5 === "win") {
        partialWin++;
    }
    else if (partialOutput5 === "lose") {
        partialLose++;
    }

    if (partialWin > partialLose) {
        alert("You've won. Your score is: " + partialOutput1 + " - " + partialOutput2 + " - " + partialOutput3 + " - " + partialOutput4 + " - " + partialOutput5)
    }

    else if (partialLose > partialWin) {
        alert("You've lost. Your score is: " + partialOutput1 + " - " + partialOutput2 + " - " + partialOutput3 + " - " + partialOutput4 + " - " + partialOutput5)
    }

    else {
        alert("You've tied. Your score is: " + partialOutput1 + " - " + partialOutput2 + " - " + partialOutput3 + " - " + partialOutput4 + " - " + partialOutput5)
    }
}



game();


