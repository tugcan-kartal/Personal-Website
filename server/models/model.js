const mongoose=require('mongoose');

const userSchema=new mongoose.Schema({
    fullName: {
        type: String,
        required: true,
    },
    eMail: {
        type: String,
        required: true,
    },
    subject:{
        type: String,
        required: true,
    },
});

const userModel=mongoose.model('user',userSchema);

module.exports=userModel;

