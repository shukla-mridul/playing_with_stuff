let x=0;
let y=0;
let mmt='';

const image=document.querySelector('img');

const move=function(mmt,x,y){
    
    let directionx=`${x}px`;
    let directiony=`${y}px`;
    if(mmt==='x'){
        image.style.translate=`${directionx} ${directiony}`;
    }
    else{
        image.style.translate=`${directionx} ${directiony}`;
    }
}


document.addEventListener('keydown',(evt)=>{
if(evt.key==='ArrowRight'){x+=10; mmt='x'; move(mmt,x,y); }
else if(evt.key==='ArrowLeft'){ x-=10; mmt='x';move(mmt,x,y);}
if(evt.key==='ArrowUp'){ y-=10; mmt='y';move(mmt,x,y);}
else if(evt.key==='ArrowDown'){ y+=10; mmt='y';move(mmt,x,y);}

})

