let win = 0;
let loss = 0;
let draw = 0;

const choices = document.querySelectorAll(".choice-box");
let winCount = document.querySelector(".win-points-count");
let lossCount = document.querySelector(".loss-points-count");
let drawCount = document.querySelector(".draw-points-count");

const generateComputerChoice = () => {
    const options = ["rock", "paper", "scissor"];
    const randIdx = Math.floor(Math.random()*3);
    return options[randIdx];
};

let msg = document.getElementById("msg");

const drawgame = () => {
    draw++;
    drawCount.innerText = draw;
    msg.innerText = "Game was Draw";
    msg.style.background = "blue";
}

const winLoss = (userWin) => {
    if(userWin){
        win++;
        winCount.innerText = win;
        msg.innerText = "You Won";
        msg.style.background = "green";
    }else{
        loss++;
        lossCount.innerText = loss;
        msg.innerText = "You Lost";
        msg.style.background = "red";
    }
}

let computerScreen = document.querySelector(".computer-choise");
let userScreen = document.querySelector(".your-choise");

const displayComputerChoice = (computerChoice) => {
    if(computerChoice === "rock"){
        computerScreen.innerHTML = `<i class="fa-regular fa-hand-back-fist"></i>`;
    }else if(computerChoice === "paper"){
        computerScreen.innerHTML = `<i class="fa-regular fa-hand"></i>`;
    }else{
        computerScreen.innerHTML = `<i class="fa-regular fa-hand-scissors"></i>`;
    }
}

const displayUserChoice = (userChoice) => {
    if(userChoice === "rock"){
        userScreen.innerHTML = `<i class="fa-regular fa-hand-back-fist"></i>`;
    }else if(userChoice === "paper"){
        userScreen.innerHTML = `<i class="fa-regular fa-hand"></i>`;
    }else{
        userScreen.innerHTML = `<i class="fa-regular fa-hand-scissors"></i>`;
    }
}

const playGame = (userChoice) => {
    const computerChoice = generateComputerChoice();

    if(userChoice === computerChoice){
        drawgame();
    }else{
        let userWin = true;
        if(userChoice === "rock"){
            if (computerChoice === "paper") {
                userWin = false;
            }else{
                userWin = true;
            }
        }else if(userChoice === "paper"){
            if(computerChoice === "scissor"){
                userWin = false;
            }else{
                userWin = true;
            }
        }else{
            if(computerChoice === "rock"){
                userWin = false;
            }else{
                userWin = true;
            }
        }
        winLoss(userWin);
    }

    displayComputerChoice(computerChoice);
    displayUserChoice(userChoice);
};

choices.forEach((choice) => {
    choice.addEventListener("click", () => {
        const userChoice = choice.getAttribute("id");
        playGame(userChoice);
    });
});

let resetBtn = document.getElementById("reset-btn");

let resetGame = () => {
    win = 0;
    loss = 0;
    draw = 0;

    winCount.innerText = win;
    lossCount.innerText = loss;
    drawCount.innerText = draw;

    computerScreen.innerHTML = "";
    userScreen.innerHTML = "";

    msg.innerText = "Let's Play!";
    msg.style.background = "linear-gradient(45deg, red, green,blue)";
}

resetBtn.addEventListener("click", resetGame);