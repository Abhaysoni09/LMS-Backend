const mongoose = require("mongoose")

const courseschema = new mongoose.Schema({
    title:{
        type:String,
        required:true
    },
    description:String,
    thumbnail:String,
    notes:String,
    price:{
        type:String,
        default:0
    },
    category:{
        type:String,
        required:true
    },
    instructor:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"user"
    }
})

const coursemodel = mongoose.model("course",courseschema)

module.exports = coursemodel