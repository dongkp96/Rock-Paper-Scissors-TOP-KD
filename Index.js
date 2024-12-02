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

function playRound(human, computer){
    document.querySelector("#player").setAttribute("src", "imgs/" + human.toLowerCase() +".png");
    document.querySelector("#computer").setAttribute("src", "imgs/" + computer.toLowerCase() +".png");
    if((human === "Rock" && computer === "Scissor") || (human === "Scissor" && computer === "Paper") || (human === "Paper" && computer === "Rock")){
        humanScore++;
        round++;
    }else if (human === computer){
        round++;
    }else{
        computerScore++;
        round++;
    }
}

const rockBtn = document.querySelector("#rock");
const paperBtn = document.querySelector("#paper");
const scissorBtn = document.querySelector("#scissor");

function game(){
    let humanScore = 0;
    let computerScore = 0;
    let round = 1;

    while (humanScore < 5 || computerScore < 5){  
        rockBtn.addEventListener("click", () =>{
            playRound("Rock", getComputerChoice());
        });
        paperBtn.addEventListener("click", () =>{
            playRound("Paper", getComputerChoice());
        });
        scissorBtn.addEventListener("click", () =>{
            playRound("Scissor", getComputerChoice());
        });
    }
}

game();

/*let humanScore = 0;
let computerScore = 0;
let playerChoice = "";
let round = 1;


const rockBtn = document.querySelector("#rock");
rockBtn.addEventListener("click", () =>{
    playRound("Rock", getComputerChoice());
});
const paperBtn = document.querySelector("#paper");
paperBtn.addEventListener("click", () =>{
    playRound("Paper", getComputerChoice());
});
const scissorBtn = document.querySelector("#scissor");
scissorBtn.addEventListener("click", () =>{
    playRound("Scissor", getComputerChoice());
}); */

/*function playGame(){
    let round = 1;


}*/

/* code for announcing result of game    
if(humanScore > computerScore){
        alert(`You won! Your score of ${humanScore} was higher than their score of ${computerScore}!`);
    }else if (computerScore > humanScore){
        alert(`You lost! There score of ${computerScore} beat your score of ${humanScore}!`);
    }else{
        alert("You both had the same score! It's a draw!");
    }
*/

/*
function getHumanChoice(){
    let playerChoice = prompt("Please choose your move? Rock, Paper or Scissors ");
    let firstLetter = playerChoice[0].toUpperCase();
    let remainder = playerChoice.substring(1).toLowerCase();
    playerChoice = firstLetter + remainder;
    return playerChoice;
}
*/

/*function updateScore(){
    document.querySelector("#round").textContent = "Round: " + round;
    document.querySelector("#player-score").textContent = "Player: " + humanScore;
    document.querySelector("#computer-score").textContent = "CPU: " + computerScore;
}*/

/*if((human === "Rock" && computer === "Scissor") || (human === "Scissor" && computer === "Paper") || (human === "Paper" && computer === "Rock")){
    return `You win! ${human} beats ${computer}!`
}else if (human === computer){
    return `It's a draw! You chose ${human} and they chose ${computer}!`
}else{
    return `You loss! ${human} loses to ${computer}!`;
}*/

