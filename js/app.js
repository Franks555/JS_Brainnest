
// Declarations

let computerSelection = "";
let playerSelection = "";
let computerWinning = 0;
let playerWinning = 0;

// Functions

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min);
}

function computerPlay(){
    let selection = getRandomInt(1,4);
    switch (selection){
        case 1 : computerSelection = "ROCK";
                break;
        case 2 : computerSelection = "PAPER";
                break;
        case 3 : computerSelection = "SCISSORS";
                break;
        default: 
                console.log("machine didn't select a option");
    }
}

function userSelection(){
    let inputSelection = "";
    while (inputSelection != "ROCK" || inputSelection != "PAPER" || inputSelection != "SCISSORS" || inputSelection != "EXIT"){
        inputSelection = prompt("Please, select a choise between Rock, Paper or Scissors:");
        inputSelection = inputSelection.toUpperCase();
        console.log(inputSelection);
        if (inputSelection == "EXIT") {
            playerSelection = "EXIT";
            break;
        }
        if (inputSelection == "ROCK") {
            playerSelection = "ROCK";
            break;
        }
        if (inputSelection == "PAPER") {
            playerSelection = "PAPER";
            break;
        }
        if (inputSelection == "SCISSORS") {
            playerSelection = "SCISSORS";
            break;
        }
        else{
            alert("the option is invalid, please enter the word Rock, Paper or Scissors");
        }
    }
    
}

function playRound (userChoise, computerChoise){
    if (userChoise == "EXIT"){
        console.log("user left the game");
    }
    if (userChoise == "ROCK"){
        switch (computerChoise){
            case "ROCK":{
                return "it's a tie!";
            }
            case "PAPER":{
                computerWinning++;
                return "You Lose! Paper beats Rock!";
            }
            case "SCISSORS":{
                playerWinning++;
                return "You Win! Rock beats Scissors!";
            }
        }
    }   
    if (userChoise == "PAPER"){
            switch (computerChoise){
                case "ROCK":{
                    playerWinning++;
                    return "You Win! Paper beats Rock";
                }
                case "PAPER":{
                    return "it's a tie!";
                }
                case "SCISSORS":{
                    computerWinning++;
                    return "You Lose! Scissors beats Paper!";
                }
            }
    }
    if (userChoise == "SCISSORS"){
        switch (computerChoise){
            case "ROCK":{
                computerWinning++;
                return "You Lose! Rock beats Scissors";
            }
            case "PAPER":{
                playerWinning++;
                return "You Win! Scissors beats Paper";
            }
            case "SCISSORS":{
                return "it's a tie!";
            }
        }
    }
}

function game(){

    for (let i = 0; i < 5; i++){
        computerPlay();
        userSelection();
        if (playerSelection == "EXIT"){
            break;
        }
        else{ 
            playRound(playerSelection, computerSelection);
        }
        
    }
    if (computerWinning > playerWinning){
        console.log("Computer Wins!");
    }
    else if (computerWinning < playerWinning){
        console.log("Player Wins!");
    }
    else {
        console.log("it's a tie!");
    }
}

// Excecutions

game();
