let command=prompt("what would you like to do?");
const list=[];
while(command.toLowerCase()!=="quit"){

    if(command.toLowerCase()==="new"){
        list.push(prompt("what item would you like to add"));
    }
    else if(command.toLowerCase()==="list"){
        alert("display in console");
       console.log("* * * * * * * * * *");
        for(let i=0;i<list.length;i++){
            console.log(`Item ${i}: ${list[i]}`);
        }
        console.log("* * * * * * * * * *");
    }
    else if(command.toLowerCase()==="delete"){
        let index=parseInt(prompt("what item number would you like to delete"));
        if(!(isNaN(index))){
        list.splice(index,1);
        }
        else alert("invalid index, try again");
    }








    command=prompt("what would you like to do?");
}
alert("out");