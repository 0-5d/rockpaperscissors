function computerPlay(){
    x = Math.floor(Math.random() * 3 + 1);
    return x;
}

const result = document.getElementById("result");
const scoreDisplay = document.getElementById("scoreDisplay")

let humanScore = 0;
let computerScore = 0;

function playRound(humanIn){
    let computerIn = computerPlay();
    if (humanIn == computerIn) {
        result.textContent = "draw";
        scoreDisplay.textContent = `human:${humanScore} computer:${computerScore}`;
    } else if (humanIn == 3 || computerIn == 3){ 
        if (humanIn == 3) {
            if (computerIn == 1){
                result.textContent = "computer wins";
                computerScore++;
                scoreDisplay.textContent = `human:${humanScore} computer:${computerScore}`;
            } else {
                result.textContent = "human wins";
                humanScore++;
                scoreDisplay.textContent = `human:${humanScore} computer:${computerScore}`;         
            }
        } else if (computerIn == 3) {
            if (humanIn == 1){
                result.textContent = "human wins";
                humanScore++;
                scoreDisplay.textContent = `human:${humanScore} computer:${computerScore}`; 
            } else {
                result.textContent = "computer wins";
                computerScore++;
                scoreDisplay.textContent = `human:${humanScore} computer:${computerScore}`;
            }   
        }
    } else if (humanIn > computerIn){
        result.textContent = "human wins";
        humanScore++;
        scoreDisplay.textContent = `human:${humanScore} computer:${computerScore}`;     
    } else {
        result.textContent = "computer wins";
        computerScore++;
        scoreDisplay.textContent = `human:${humanScore} computer:${computerScore}`;
    }
}

const rock = document.getElementById("rock");
rock.addEventListener("click", function (){
    playRound(3);
});

const paper = document.getElementById("paper");
paper.addEventListener("click", function (){
    playRound(1);
});

const scissors = document.getElementById("scissors");
scissors.addEventListener("click", function (){
    playRound(2);
});
