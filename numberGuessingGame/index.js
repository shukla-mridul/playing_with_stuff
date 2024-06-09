let maxNumber=parseInt(prompt("enter max number for limit"));
while(!maxNumber){
    maxNumber=parseInt(prompt("SERIOUSLY?! STFU and enter max number for limit politely bich"));
}
const random=Math.round((Math.random()*maxNumber)+1);
let guess=(prompt("enter your guess"));
let attempts=0;
while(parseInt(guess)!==random){
    attempts++;
    if(guess.toUpperCase()=="Q") break;
    guess=parseInt(guess);
    //nan logical op number always results in false: v
    if(guess<random){
        guess=(prompt("too low , try again bich [enter Q to quit]"));
    }//so that invalid input will go to else
    else if(guess>random){ 
        guess=(prompt("too high, compensating much? [enter Q to quit]"));
}
else guess=(prompt("Enter a valid number dumbo or [enter Q to quit]"));  
}
if(guess=="Q"){
    alert(`damn you actually gave up? :o , only took you ${attempts -1 } tries :p`);
}else{
alert(`damn you actually got it :o , only took you ${attempts} tries :p`);
}

