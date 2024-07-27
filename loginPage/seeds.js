const Credential= require('./models/credentials');
const mongoose = require('mongoose');
mongoose.connect('mongodb://127.0.0.1:27017/loginPage')
    .then(()=>{
        console.log('connected');
    })
    .catch(err=>{
        console.log(err);
    })

const test=new Credential({username:'test1',password:'testing'});
test.save();