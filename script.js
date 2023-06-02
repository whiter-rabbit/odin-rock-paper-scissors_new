console.log("Play Rock-Paper-Scissors")


function getComputerChoice () {
    computerNumber = (Math.floor(Math.random()*3))+1;
    if (computerNumber === 1) {
        computerChoice = "rock";
    }
    else if (computerNumber === 2 ) {
        computerChoice = "paper"
    }
    else {
        computerChoice = "scissors"
    }
    return computerChoice;
}


function playerSelection () {
    let playerChoice = prompt("Choose: Rock, Paper or Scissors").toLowerCase();
    return playerChoice;
}

// INFO - the function below is connected with not working properly function game.
//  As itself it works well, but it reutrns strings instead of numbers.
// function singleRound() {
//     let a = playerSelection();
//     let b = getComputerChoice();

//         if (a === "rock" && b=== "rock"){
//             alert("Tie! Rock vs Rock");
//             console.log("tie");
//             return "tie";
//         }
//         else if (a === "rock" && b === "paper") {
//             alert("You Lose! Rock loses against Paper");
//             console.log("lose");
//             return "lose";
//         }
//         else if (a === "rock" && b === "scissors") {
//             alert("You Win! Rock beats Scissors");
//             console.log("win");
//             return "win";
//         }
//         else if (a === "paper" && b === "rock") {
//             alert("You Win! Paper beats Rock");
//             console.log("win");
//             return "win";
//         }
//         else if (a === "paper" && b === "paper") {
//             alert("Tie! Paper vs Paper");
//             console.log("tie");
//             return "tie";
//         }
//         else if (a ==="paper" && b === "scissors") {
//             alert("You Lose! Paper loses against Scissors");
//             console.log("lose");
//             return "lose";
//         }
//         else if (a ==="scissors" && b ==="rock") {
//             alert("You Lose! Scissors lose against Rock");
//             console.log("lose");
//             return "lose";
//         }
//         else if (a === "scissors" && b === "paper") {
//             alert("You Win! Scissors beats Paper");
//             console.log("win");
//             return "win";
//         }
//         else if (a === "scissors" && b ==="scissors") {
//             alert("Tie! Scissors vs Scissors");
//             console.log("tie");
//             return "tie";
//         }
//         else { 
//             alert("Error. Type: Rock, Paper or Scissors");
//             singleRound();
//             return "error";
//          }
// }

function singleRound() {
    let a = playerSelection();
    let b = getComputerChoice();
        if (a === "rock" && b=== "rock"){
            alert("Tie! Rock vs Rock");
            console.log("tie");
            return 0;
        }
        else if (a === "rock" && b === "paper") {
            alert("You Lose! Rock loses against Paper");
            console.log("lose");
            return -1;
        }
        else if (a === "rock" && b === "scissors") {
            alert("You Win! Rock beats Scissors");
            console.log("win");
            return 1;
        }
        else if (a === "paper" && b === "rock") {
            alert("You Win! Paper beats Rock");
            console.log("win");
            return 1;
        }
        else if (a === "paper" && b === "paper") {
            alert("Tie! Paper vs Paper");
            console.log("tie");
            return 0;
        }
        else if (a ==="paper" && b === "scissors") {
            alert("You Lose! Paper loses against Scissors");
            console.log("lose");
            return -1;
        }
        else if (a ==="scissors" && b ==="rock") {
            alert("You Lose! Scissors lose against Rock");
            console.log("lose");
            return -1;
        }
        else if (a === "scissors" && b === "paper") {
            alert("You Win! Scissors beats Paper");
            console.log("win");
            return 1;
        }
        else if (a === "scissors" && b ==="scissors") {
            alert("Tie! Scissors vs Scissors");
            console.log("tie");
            return 0;
        }
        else { 
            alert("Error. Type: Rock, Paper or Scissors");
            singleRound();
            return 0;
         }
}


//INFO - the function below takes only the last (5th) play and consider winning/losing according to it. 
//  (in singleRound() function there was also: return finalNumber=-1 (or different numner))
// function game() {
//     alert ("Play 5 rounds of the Rock - Paper - Scissors game to see if you can win with the computer")
//     for (let i=0; i<5; i++) {
//         singleRound();
//     }
//     if (finalNumber+finalNumber+finalNumber+finalNumber+finalNumber < 0) {
//         alert ("You've lost");
//         console.log ("You've lost");
//     }
//     else if (finalNumber+finalNumber+finalNumber+finalNumber+finalNumber === 0) {
//         alert ("You've tied");
//         console.log("You've tied");
//     }
//     else if (finalNumber+finalNumber+finalNumber+finalNumber+finalNumber > 0){
//         alert ("You've won");
//         console.log ("You've won");
//     }

// }


// INFO - the global variables below and the funcion 'game' below does NOT work properly: 
//  the final result is always win (because W > L), 
//  but it has a working feature of showing all the partial reults as win-lose-tie etc. at the very end. 

// let win = "win";
// let lose = "lose"; 
// let tie = "tie"; 
// let error = "error"

// function game() {
//     alert ("Play 5 rounds of the Rock - Paper - Scissors game to see if you can win with the computer");

//   // INFO - the loop below doesn't work
//   // for (let i=0; i<5; i++) {
//   //     let partialOutput.concat(i++) = singleRound();
//   // }

//     let partialOutput1 = singleRound();
//     let partialOutput2 = singleRound();
//     let partialOutput3 = singleRound();
//     let partialOutput4 = singleRound();
//     let partialOutput5 = singleRound();

//     if (win < lose) {
//         alert ("You've lost. Your score is: " + partialOutput1 + " - " + partialOutput2 + " - " + partialOutput3 + " - " + partialOutput3 + " - " + partialOutput4 + " - " + partialOutput5);
//         console.log ("You've lost");
//     }
//     else if (win > lose) {
//         alert ("You've won. Your score is: " + partialOutput1 + " - " + partialOutput2 + " - " + partialOutput3 + " - " + partialOutput3 + " - " + partialOutput4 + " - " + partialOutput5);
//         console.log ("You've won");
//     }
//     else {
//         alert ("You've tied. Your score is: " + partialOutput1 + " - " + partialOutput2 + " - " + partialOutput3 + " - " + partialOutput3 + " - " + partialOutput4 + " - " + partialOutput5);
//         console.log("You've tied");
//     }

// }

function game() {
    alert ("Play 5 rounds of the Rock - Paper - Scissors game to see if you can win with the computer");
    let partialOutput1 = singleRound();
    let partialOutput2 = singleRound();
    let partialOutput3 = singleRound();
    let partialOutput4 = singleRound();
    let partialOutput5 = singleRound();

    if (partialOutput1 + partialOutput2 + partialOutput3 + partialOutput4 + partialOutput5 < 0) {
        alert ("You've played 5 times. You've lost");
        console.log ("You've lost");
    }
    else if (partialOutput1 + partialOutput2 + partialOutput3 + partialOutput4 + partialOutput5 === 0) {
        alert ("You've played 5 times. You've tied");
        console.log("You've tied");
    }
    else if (partialOutput1 + partialOutput2 + partialOutput3 + partialOutput4 + partialOutput5 > 0){
        alert ("You've played 5 times. You've won");
        console.log ("You've won");
    }

}


game();

// singleRound ();
// console.log(getComputerChoice());
// console.log(playerSelection());
