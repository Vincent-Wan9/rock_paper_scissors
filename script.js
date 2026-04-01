
function getComputerChoice(){
    const rand = Math.random();
    if(rand<=1/3){
        return "rock";
    } else if (rand>(1/3) && rand<=(2/3)){
        return "paper";
    } else {
        return "scissors";
    }
}


function getHumanChoice(){
    return prompt("Enter your choice: ");
}


function playRound(humanChoice, computerChoice, output){
    humanChoice = humanChoice.toLowerCase();
    if (!["rock", "paper", "scissors"].includes(humanChoice)) {
        output.textContent = "Invalid input!";
        return;
    }

    if(humanChoice==="rock" && computerChoice==="paper"){
        computerScore++;
        output.textContent = "You lose! rock cannot beat paper";
    } else if (humanChoice==="rock" && computerChoice==="scissors"){
        humanScore++;
        output.textContent = "You win! Rock beats scissors";
    } else if (humanChoice==="paper" && computerChoice==="scissors"){
        computerScore++;
        output.textContent = "You lose! paper cannot beat scissors";
    } else if (humanChoice==="paper" && computerChoice==="rock"){
        humanScore++;
        output.textContent = "You win! Paper beats Rock";
    } else if (humanChoice==="scissors" && computerChoice==="rock"){
        computerScore++;
        output.textContent = "You lose! scissors cannot beat rock";
    } else if (humanChoice==="scissors" && computerChoice==="paper"){
        humanScore++;
        output.textContent = "You win! Scissors beat paper";
    } else {
        output.textContent = "No winner today!";
    }
}



/*
function playGame(event){
    
    event.target.value

    const humanSelection = getHumanChoice();
    const computerSelection = getComputerChoice();
    playRound(humanSelection, computerSelection);



    console.log(`final score for human is ${humanScore}, and final score for computer is ${computerScore}.
        Thus, the winner is ${(humanScore>=computerScore)? "human": "computer"}!`);
}
*/

let humanScore = 0;
let computerScore = 0;
let buttons = document.querySelectorAll("button");
let output = document.querySelector(".output");
let summary = document.querySelector(".summary");

buttons.forEach(button => {
    button.addEventListener("click", () => {
        const humanSelection = button.value;
        const computerSelection = getComputerChoice();
        playRound(humanSelection, computerSelection, output);

        if(humanScore>=5 || computerScore >= 5){
            summary.textContent = `final score for human is ${humanScore}, and final score for computer is ${computerScore}.
            Thus, the winner is ${(humanScore>=computerScore)? "human": "computer"}!`;

            buttons.forEach(btn => btn.disabled = true);
        }
    });
});



