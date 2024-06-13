const randomGenerator=function(num=255){
    return Math.floor(Math.random() * num)+1;
}
const btn=document.querySelector('#changeC');
const body=document.querySelector('body');
const mainH=document.querySelector('#mainH');

const rgbcolor=document.createElement('h2');

const changeColor=function(evt){
    console.log(evt);
    let r=randomGenerator();
    let g=randomGenerator();
    let b=randomGenerator();
    let color=`rgb(${r},${g},${b})`;
    body.style.backgroundColor=color;
    rgbcolor.innerText=color;
    mainH.after(rgbcolor);

}

//PointerEvent {isTrusted: true, pointerId: 1, width: 1, height: 1, pressure: 0, …}


btn.addEventListener('click',changeColor);

