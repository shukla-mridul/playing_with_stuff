const jokeBtn=document.querySelector('#jokebtn');
const jokeUl=document.querySelector('#jokeul');

const appendDadJoke=(joke)=>{
    const newli=document.createElement('li');
    newli.innerText=joke;
    jokeUl.append(newli);
    newli.scrollIntoView();
}

const dadJoke=async()=>{
    try{
    const config={headers:{Accept:'application/json'}};
    const res=await axios.get('https://icanhazdadjoke.com/',config);
    appendDadJoke(res.data.joke);
    // console.log(res.data.joke);
    }
    catch (err) {
        console.log(err);
        appendDadJoke("counln't get a new joke , Sorry :( Try again Later!" );

    }

}


jokeBtn.addEventListener('click',async()=>{
    jokeBtn.innerText='loading...';
    await dadJoke();
    jokeBtn.innerText='get New Joke';
});