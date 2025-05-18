let boxes = document.querySelectorAll(".box");
let resetBtn = document.querySelector("#reset-btn");
let newGameBtn = document.querySelector("#new-btn");
let msgContainer = document.querySelector(".msg-container");
let msg = document.querySelector("#msg");
let gameContainer = document.querySelector(".game-container");

gameContainer.classList.remove("hide");

let turn = true;
let moves = 0;

const winPatterns = [
    [0,1,2], [0,3,6], [0,4,8], [1,4,7], 
    [2,4,6], [2,5,8], [3,4,5], [6,7,8]
];

boxes.forEach((box) => {
    box.addEventListener("click", () => {
        if(turn)
        {
            box.innerText = "O";
            box.style.color = "blue";
            turn=false;
        }else{
            box.innerText="X";
            box.style.color = "red";
            turn=true;
        }
        box.disabled = true;
        moves++;

        checkWinner();
    });
});

const toggleBoxes = (enable) => {
    boxes.forEach((box) => {
        box.innerText = enable ? "" : box.innerText;
        box.disabled = !enable;
    });
};

const showWinner = (winner) => {
    setTimeout(() => { 
        msg.innerText = `🎉 Congratulations! Winner: ${winner}`;
        msgContainer.classList.remove("hide");
        gameContainer.classList.add("hide");
    }, 300);
    toggleBoxes(false);
};

const checkWinner = () => {
    for (let pattern of winPatterns) {
        let pos1Val = boxes[pattern[0]].innerText;
        let pos2Val = boxes[pattern[1]].innerText;
        let pos3Val = boxes[pattern[2]].innerText;
    
        if (pos1Val != "" && pos2Val != "" && pos3Val != "") {
          if (pos1Val === pos2Val && pos2Val === pos3Val) {
            showWinner(pos1Val);
            return;
          }
        }
      }

    if (moves === 9) {
        msg.innerText = "🤝 It's a Draw!";
        msgContainer.classList.remove("hide");
        toggleBoxes(false);
    }
};

const resetGame = () => {
    turn = true;
    moves = 0;
    msg.innerText = "";
    msgContainer.classList.add("hide");
    gameContainer.classList.remove("hide");
    toggleBoxes(true);
};

resetBtn.addEventListener("click", resetGame);
newGameBtn.addEventListener("click", resetGame);
