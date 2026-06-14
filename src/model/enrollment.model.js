const mongoose = require("mongoose")

const enrollmentschema = new mongoose.Schema({
    student:{
        type: mongoose.Schema.Types.ObjectId,
        ref:"user",
        required:true
    },
    course:{
        type: mongoose.Schema.Types.ObjectId,
        ref:"course",
        required:true
    }
},{
    timestamps:true
})

enrollmentschema.index(
    {
        student:1,
        course:1
    },
    {
        unique:true
    }
)
const enrollmentmodel = mongoose.model("enrollment",enrollmentschema)

module.exports = enrollmentmodel