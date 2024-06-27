const queue=["Alex","Rudy","Sarah"];

enq.addEventListener('submit',(evt)=>{
    evt.preventDefault();
    let name=personName.value[0].toUpperCase()+personName.value.slice(1);
    updateQueue(name,category.value);
    updateDisplay();
    personName.value='';
});
 queueDisplay.innerText=queue;


if(queue.length==0){
    queueDisplay.innerText="Empty!";
}
function updateQueue(name,category){
    if(category=="g"){
        queue.push(name);
    }
    else if(category=="v"){
        queue.unshift(name);
    }
}
function updateDisplay(){

    queueDisplay.innerText=queue;
    }
let s=9;

setInterval(()=>{
    if(queue.length){
    timer.innerText=`${s} seconds till next entry!`;
    s--;
    if(s<=0){s=10;}
    
}
    else timer.innerText='Queue Empty';

},1000);





setInterval(()=>{
    if(queue.length){ 
    let entry=queue.shift();
    entered.innerText=(`- ${entry} has entered`);
    updateDisplay();
    s=9;
    }
    else {
        queueDisplay.innerText='Empty!';
        entered.innerText='';
        }
    },10000);


         


