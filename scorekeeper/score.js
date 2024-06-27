let scorecap=parseInt(document.querySelector('#gamecap').value);
gamecap.addEventListener('change',()=>{
    scorecap=parseInt(document.querySelector('#gamecap').value);
})
img2.setAttribute("style","display:none");
// reset=document.querySelector('#reset);
const heading=document.querySelector('h1');
const player1 = {
    name:"player1",
    score:0,
    button:document.querySelector("#p1plus"),
    display:document.querySelector("#p1score")
};

const player2 = {
    name:"player2",
    score:0,
    button:document.querySelector("#p2plus"),
    display:document.querySelector("#p2score")
};

function incScore(player,rival){
    player.score++;
    player.display.textContent=player.score;
    if(player.score>=scorecap){
        player1.button.disabled=true;
        player2.button.disabled=true;

        heading.innerText=(`Congrats! ${player.name} has won by ${player.score-rival.score} points`);
        img2.style.display="block";
        img1.style.display="none";


    }

}

player1.button.addEventListener('click',()=>{
    incScore(player1,player2);
})
player2.button.addEventListener('click',()=>{
    incScore(player2,player1);
})

reset.addEventListener('click',()=>{
    player1.button.disabled=false;
    player2.button.disabled=false;
    player1.score=0;
    player2.score=0;
    player1.display.innerText=player1.score;
    player2.display.innerText=player2.score;
    img1.style.display="block";
    img2.style.display="none";
    heading.innerText="Scores";
})