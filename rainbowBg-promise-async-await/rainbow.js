console.log('one you trigger start, the cycle will run from red to violet continously \n');
console.log('once you trigger stop,it will stop after competing the current cycle!');


const stopbtn=document.querySelector('#stop');

const rainbowBg=(color,delay=2000)=>{
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            document.body.style.backgroundColor=color
            resolve();
        },delay)
    })
}
let intervalId;
// there's a better alternative!
// const changeBg=()=>{
//     rainbowBg('red')
//         .then(()=>rainbowBg('orange'))
//         .then(()=>rainbowBg('yellow'))
//         .then(()=>rainbowBg('green'))
//         .then(()=>rainbowBg('blue'))
//         .then(()=>rainbowBg('indigo'))
//         .then(()=>rainbowBg('violet'));
// }

const changeBg=async()=>{
    await rainbowBg('red');
    await rainbowBg('orange');
    await rainbowBg('yellow');
    await rainbowBg('green');
    await rainbowBg('blue');
    await rainbowBg('indigo');
    await rainbowBg('violet');
    
}

window['start'].addEventListener('click',()=>{
    changeBg();
    intervalId=setInterval(changeBg,16000);
    window['start'].style.display='none';
    stopbtn.style.display='inline-block';
});
stopbtn.addEventListener('click',()=>{
    
    clearInterval(intervalId);
    // document.body.style.backgroundColor='white';
    window['start'].style.display='inline-block';
    stopbtn.style.display='none';
    
});



    