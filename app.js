let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");

const userChoicePara = document.querySelector("#user-score");
const compChoicePara = document.querySelector("#comp-score");

const drawGame = () =>{
    msg.innerText = "Game was a draw. Play again.";
    msg.style.backgroundColor = "#081b31";
};

const showWinner = (userWin,userChoice,compChoice) => {
    if(userWin){
        userScore++;
        userChoicePara.innerText=userScore;
        msg.innerText = `You win. Your ${userChoice} beats ${compChoice}`;
        msg.style.backgroundColor = "green";
    }else{
        compScore++;
        compChoicePara.innerText=compScore;
        msg.innerText = `You lose. ${compChoice} beats your ${userChoice}`;
        msg.style.backgroundColor = "red";
    }
};

const genCompChoice = () => {
    let options = ["rock","paper","scissors"];
    let randomIdx = Math.floor(Math.random()*3);
    return options[randomIdx];
};

const playGame = (userChoice) => {
    //Generate Computer Choice
    let compChoice = genCompChoice();

    if(userChoice === compChoice){
        //Draw Game
        drawGame();
    }else {
        let userWin = true;
        if(userChoice === "rock"){
            //scissors,paper
            userWin = compChoice === "paper" ? false : true;
        }else if(userChoice === "paper"){
            //rock,scissors
            userWin = compChoice === "scissors" ? false : true;
        }else{
            //rock,paper
            userWin = compChoice === "rock" ? false : true;
        }
        showWinner(userWin,userChoice,compChoice);
    }
};

choices.forEach((choice) =>{
    choice.addEventListener("click",() => {
        const userChoice = choice.getAttribute("id");
        playGame(userChoice);
    })
});