const mongoose = require("mongoose")

const userschema = new mongoose.Schema({
    username:String,
    email:{
        type:String,
        unique:true,
        required:true
    },
    password:{
        type:String,
        required:true
    },
    role:{
        type:String,
        enum:["student","instructor","admin"],
        default:"student"
    }
})

const usermodel = mongoose.model("user",userschema)

module.exports = usermodel