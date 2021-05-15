const p1Score = document.querySelector('#p1Score');
const p2Score = document.querySelector('#p2Score');
const p1button = document.querySelector('#p1Button');
const p2button = document.querySelector('#p2Button');
const reset = document.querySelector('#reset');
const maxScore = document.querySelector('select');


let player1 = 0;
let player2 = 0;

let total = 3

function Scorereset(p1Score,p2Score){
    
    p1Score.style.color = "red";
    p2Score.style.color = "green";
    alert("Can you please click reset to start a new game");
    p1button.disabled = true;
    p2button.disabled = true;

    
}
reset.addEventListener('click',()=>{
    alert("Let's start a new game");
    p1button.disabled = false;
    p2button.disabled = false;
    p1Score.innerText = 0;
    p2Score.innerText = 0;
    p1Score.style.color = 'black';
    p2Score.style.color = 'black';
    player1 = 0;
    player2 = 0;


})

p1button.addEventListener('click',()=>{
    if(total == player1){
 
  Scorereset(p2Score,p1Score);
    }
    else{
    player1+=1;
    p1Score.innerText = player1;
    }
})

p2button.addEventListener('click',()=>{
    if(total == player2){
        
        Scorereset(p1Score,p2Score);
    }
    else{
    player2+=1;
    p2Score.innerText = player2;
    }
})

maxScore.addEventListener('click',()=>{
    total = parseInt(maxScore.value)
})


