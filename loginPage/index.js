const express = require('express');
const app=express();
const path=require('path'); 
const port=4400;
const mongoose=require('mongoose');



mongoose.connect('mongodb://127.0.0.1:27017/loginPage')
    .then(()=>{
        console.log('mongo connection established');
    })
    .catch(err=>{
        console.log('mongoose connection failed');
        console.log(err);
    })

const Credential=require('./models/credentials')

app.set('views',path.join(__dirname,'views'));
app.set('view engine','ejs');
 
app.use(express.urlencoded({extended:true}));

app.get('/home',(req,res)=>{
    res.render('landingPage.ejs');
})

app.get('/login',(req,res)=>{
    res.render('login.ejs')
})
app.post('/login',async (req,res)=>{
    console.log(req.body);

    await Credential.findOne(req.body)
        .then(data=>{
            console.log('input recieved',data);
            if(data){
                res.send('logged in');
            }
            else{
                res.send('uh OhQ!')
            }
          
        })
        .catch(err=>{
            console.log('not found',err);
        })
    
})

app.get('/signup',(req,res)=>{
    res.render('signup.ejs');
})
app.post('/signup',async (req,res)=>{
    const newCred = new Credential(req.body);
    // console.log(newCred);
    await newCred.save()
        .then(data=>{
            console.log('new user created',data);
        })
        .catch(err=>{
            console.log('uh Oh',err);
        })
    res.redirect('/login');

})

app.get('/forgotpass',(req,res)=>{
    res.render('forgotPass.ejs')
})
app.post('/forgotpass',(req,res)=>{
    // console.log(req.body);
    const {username}=req.body;
    const {password}=req.body;
    // console.log(username);
    Credential.findOneAndUpdate({username},{password},{new:true})
        .then(data=>{
            console.log('done',data);
            if(data){
                res.redirect('/login');
            }
            else{
                res.send('said user not found!')
            }
        })
        .catch(err=>{
            console.log('oh Oh',err);
        })
    
})














app.listen(port,()=>{
    console.log(`server started at port : ${port}`);
})