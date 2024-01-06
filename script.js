var playerChoice = document.getElementById("playerChoiceDisplay");
var computerChoice = document.getElementById("computerChoiceDisplay");
var button = document.getElementById("confirm");
const rock = document.getElementById("rock");
const paper = document.getElementById("paper");
const scissor = document.getElementById("scissor");
let arr = ["rock","paper","scissor"];

rock.addEventListener("click",() => {
    button.style.display = "block";
    playerChoice.className = "rock";
})

paper.addEventListener("click",() => {
    button.style.display = "block";
    playerChoice.className = "paper";
})

scissor.addEventListener("click",() => {
    button.style.display = "block";
    playerChoice.className="scissor";
})

button.addEventListener("click",() => {
    var index = parseInt(Math.random() * 10) % 3;
    computerChoice.className = `${arr[index]}`;
    button.style.display = "none";
    setTimeout(() => {checkWinner(index)},250);
})

function checkWinner(computerIndex) 
{
    const playerIndex = arr.indexOf(playerChoice.className);
    const resultText = document.querySelector('.header');

    if (playerIndex === computerIndex) 
    {
        resultText.innerText = 'It\'s a tie!';
    } 
    else if ((playerIndex + 1) % 3 === computerIndex) 
    {
        resultText.innerText = 'Computer wins!';
    } 
    else 
    {
        resultText.innerText = 'You win!';
    }
}
