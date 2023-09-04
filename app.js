let gameseq = [];
let userseq = [];

let h2  = document.querySelector("h2");

let level =0;
let started = false;

let btns = ["yellow","red", "purple", "green"];


document.addEventListener("keypress",function(){
    if(started==false){
        console.log("Game started");
        started=true;
        levelUp();
    }
})

function btnflash(btn){
    btn.classList.add("flash");
    setTimeout(function(){
        btn.classList.remove("flash");
    },100)
}


function levelUp(){
    userseq=[];
    level++;
    h2.innerText = `Level ${level}`;
    
    let randindx = Math.floor(Math.random()*3);
    let randcolor = btns[randindx];
    let randbtn = document.querySelector(`.${randcolor}`);
    gameseq.push(randcolor);
    console.log(gameseq);
    btnflash(randbtn);
}

function checkans(idx){
    if(userseq[idx]==gameseq[idx]){
        if(userseq.length == gameseq.length){
            setTimeout(levelUp(),1000);
        }
    }
    else{
        h2.innerHTML = `Game Over! Your score was <b>${level}</b>. <br>Press any key to start.`;
        document.querySelector("body").style.backgroundColor="red";
        setTimeout(function(){
            document.querySelector("body").style.backgroundColor="white";
        },150);
        reset();
    }
}

function reset(){
    started = false;
    level = 0;
    userseq=[];
    gameseq=[];
}

function btnpress(idx){
    let btn = this;
    btnflash(btn);

    userColor = btn.getAttribute("id");
    userseq.push(userColor);

    checkans(userseq.length-1);
}

let allbtn = document.querySelectorAll(".btn");

for(btn of allbtn){
    btn.addEventListener("click",btnpress)
}