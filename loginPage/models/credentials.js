const mongoose=require('mongoose');
mongoose.connect('mongodb://127.0.0.1:27017/loginPage')
    .then(()=>{
        console.log('connected');
    })
    .catch(err=>{
        console.log(err);
    })

credentialSchema= new mongoose.Schema({
    username:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    }
})

const Credential=mongoose.model('Credential',credentialSchema);
module.exports=Credential;