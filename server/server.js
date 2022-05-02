const express=require('express');
const cors=require('cors');
const mongoose=require('mongoose');
const userModel=require('./models/model.js');
const nodemailer = require("nodemailer");
require('dotenv').config();

const app=express();
const port=process.env.PORT || 8001;

app.use(express.json());
app.use(cors());

mongoose.connect('mongodb+srv://tugcankartal:tugcankartal@cluster0.xr1dv.mongodb.net/userInfo?retryWrites=true&w=majority');

app.get('/',(req,res)=>{
    res.status(200).send('Hello Love');
})

app.post('/addUser',async(req,res)=>{
    const fullName=req.body.fullName;
    const eMail=req.body.eMail;
    const subject=req.body.subject;

    const user=new userModel({fullName: fullName,eMail: eMail,subject: subject});
    await user.save();

    res.send(user);
});

app.get('/read',async(req,res)=>{
    userModel.find({},(err,result)=>{
        if (err) {
            res.send(err)
        }else{
            res.send(result)
        }
    })
});    

app.listen(port,()=>console.log(`Listening on localhost: ${port}`));