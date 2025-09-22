let gameSequence = [];
let userSequence = [];

let btns = ["red", "green", "blue", "yellow"];

let started = false;
let level = 0;

document.addEventListener("keypress", ()=>{
    if(started == false){
        console.log("game started.");
        started = true;

        levelUp();
    }
});

function btnFlash(btn){
    btn.classList.add("flash");
    setTimeout(function(){
        btn.classList.remove("flash");
    }, 400);
}

function userFlash(btn){
    btn.classList.add("userflash");
    setTimeout(function(){
        btn.classList.remove("userflash");
    }, 400);
}

let heading2 = document.querySelector("h2");

function levelUp(){
    userSequence = [];
    level++;
    heading2.innerText = `level ${level}`;

    let randomidx = Math.floor(Math.random()*4);
    let randomColor = btns[randomidx];
    let btn = document.querySelector(`.${randomColor}`);

    gameSequence.push(randomColor);
    btnFlash(btn);
}

function checkAns(idx){
    if(gameSequence[idx] === userSequence[idx]){
        if(gameSequence.length == userSequence.length){
            setTimeout(levelUp, 1000);
        }
    }else{
        heading2.innerHTML = `Game Over!, Your score was <b>${level}</b> <br> Press any key to Restart the game.`;
        document.querySelector('body').style.backgroundColor = "red";
        setTimeout(function(){
            document.querySelector('body').style.backgroundColor = "white";
        }, 200);

        reset();
    }
}

function btnPress(){
    let btn = this;
    userFlash(btn);

    let userColor = btn.getAttribute("id");
    userSequence.push(userColor);

    checkAns(userSequence.length-1);
}

let allBtns = document.querySelectorAll(".btn");
for (const element of allBtns) {
    element.addEventListener("click", btnPress);
}

function reset(){
    gameSequence = [];
    userSequence = [];
    started = false;
    level = 0;
}