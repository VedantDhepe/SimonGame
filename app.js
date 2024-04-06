let gameSeq = [];
let userSeq = []; 
let btns = ['red','blue','yellow','purple'];
let started = false;
let h2 = document.querySelector("h2");
let level = 0;

document.addEventListener('keypress', function(){
    if(started ==false){
        console.log("The game is started");
        started = true;
        levelUp();
    }
    else{
        return;
    }
});
function btnFlash(btn){
        btn.classList.add('flash');
        setTimeout(function(){
            btn.classList.remove("flash");
        }, 150);
}

function levelUp(){
    userSeq =[];
    level++;
    h2.innerText = `Level ${level}`;

    let randomIdx = Math.floor(Math.random() * 4 );
    let randomElement = btns[randomIdx];
    let randombtn = document.querySelector(`.${randomElement}`);
    gameSeq.push(randomElement);
    console.log(gameSeq);
    btnFlash(randombtn);
}
function checkAns(idx){
    if(gameSeq[idx] === userSeq[idx]){
        if(gameSeq.length == userSeq.length){
            setTimeout(levelUp,1000);
        }
    } 
    else{   
        document.querySelector('body').style.backgroundColor = "red";
        h2.innerText = `Game Over! \nYour Score is ${level-1} \nPress any key to start the Game`;
        h2.style.fontSize = "30px";
        restart();
        setTimeout(()=>{document.querySelector('body').style.backgroundColor = "white";
                        h2.style.fontSize = "20px";
                         },500);
    }
    
}
function btnPress(){
    let btn = this;
    userSeq.push(this.getAttribute('id'));
    console.log(userSeq);
    btnFlash(btn);
    setTimeout(checkAns(userSeq.length-1));
}
let allBtns = document.querySelectorAll(".block");
let i = 1;
for(btn of allBtns){
    btn.addEventListener('click',btnPress);
}
function restart(){
    level = 0;
    gameSeq = [];
    userSeq = [];
    started = false;
}
