function getComputerChoice(){
    let computerChoice = Math.floor(Math.random() *3 );
    if (computerChoice === 0){
        return "Rock";
    }else if(computerChoice === 1){
        return "Paper";
    }else{
        return "Scissor";
    }
    
}

function getHumanChoice(){
    let playerChoice = prompt("Please choose your move? Rock, Paper or Scissors ");
    let firstLetter = playerChoice[0].toUpperCase();
    let remainder = playerChoice.substring(1).toLowerCase();
    playerChoice = firstLetter + remainder;
    return playerChoice;
}

function playRound(human, computer){
    if((human === "Rock" && computer === "Scissor") || (human === "Scissor" && computer === "Paper") || (human === "Paper" && computer === "Rock")){
        humanScore++;
        return `You win! ${human} beats ${computer}!`
    }else if (human === computer){
        return `It's a draw! You chose ${human} and they chose ${computer}!`
    }else{
        computerScore++;
        return `You loss! ${human} loses to ${computer}!`;
    }
}


let humanScore = 0;
let computerScore = 0;

let playerChoice = "";
const rockButton = document.querySelector("#rock");
rockButton.addEventListener("click", function(e){
    playerChoice = "Rock";
    document.querySelector("#player").setAttribute("src", "imgs/" + playerChoice.toLowerCase() + ".png");
    let computer = getComputerChoice();
    document.querySelector("#computer").setAttribute("src","imgs/" + computer.toLowerCase() + ".png");

});

const paperButton = document.querySelector("#paper");
paperButton.addEventListener("click", function(e){
    playerChoice = "Paper";
    document.querySelector("#player").setAttribute("src", "imgs/" + playerChoice.toLowerCase() + ".png");
    let computer = getComputerChoice();
    document.querySelector("#computer").setAttribute("src","imgs/" + computer.toLowerCase() + ".png");
});

const scissorButton = document.querySelector("#scissor");
scissorButton.addEventListener("click", function(e){
    playerChoice = "Scissor";
    document.querySelector("#player").setAttribute("src", "imgs/" + playerChoice.toLowerCase() + ".png");
    let computer = getComputerChoice();
    document.querySelector("#computer").setAttribute("src","imgs/" + computer.toLowerCase() + ".png");
});




function playGame(){
    let round = 1;

    while(round <6){
        alert("Round number: " +round);
        let human = getHumanChoice();
        let computer = getComputerChoice();
        let result = (playRound(human, computer));
        alert(result);
        round++;
        alert("Your score: " +humanScore);
        alert("Computer's score: " +computerScore);    
    }

    if(humanScore > computerScore){
        alert(`You won! Your score of ${humanScore} was higher than their score of ${computerScore}!`);
    }else if (computerScore > humanScore){
        alert(`You lost! There score of ${computerScore} beat your score of ${humanScore}!`);
    }else{
        alert("You both had the same score! It's a draw!");
    }
}




