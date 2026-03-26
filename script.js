
function getComputerChoice(){
    if(Math.random()<=1/3){
        return "rock";
    } else if (Math.random()>(1/3) && Math.random()<=(2/3)){
        return "paper";
    } else {
        return "scissors";
    }
}


function getHumanChoice(){
    return prompt("Enter your choice: ");
}


function playRound(humanChoice, computerChoice){
    humanChoice = humanChoice.toLowerCase();

    if(humanChoice==="rock" && computerChoice==="paper"){
        computerScore++;
        console.log("You lose! rock cannot beats paper");
    } else if (humanChoice==="rock" && computerChoice==="scissors"){
        humanScore++;
        console.log("You win! Rock beats scissors");
    } else if (humanChoice==="paper" && computerChoice==="scissors"){
        computerScore++;
        console.log("You lose! paper cannot beats scissors");
    } else if (humanChoice==="paper" && computerChoice==="rock"){
        humanScore++;
        console.log("You win! Paper beats Rock");
    } else if (humanChoice==="scissors" && computerChoice==="rock"){
        computerScore++;
        console.log("You lose! scissors cannot beats rock");
    } else if (humanChoice==="scissors" && computerChoice==="paper"){
        humanScore++;
        console.log("You win! Scissors beats paper");
    } else {
        console.log("No winner today!");
    }
}

let humanScore = 0;
let computerScore = 0;

function playGame(){
    

    
    for (let i = 1; i <= 5; i++){
        const humanSelection = getHumanChoice();
        const computerSelection = getComputerChoice();
        playRound(humanSelection, computerSelection);
    }

    console.log(`final score for human is ${humanScore}, and final score for computer is ${computerScore}.
        Thus, the winner is ${(humanScore>computerScore)? "human": "computer"}!`);
}


playGame()
