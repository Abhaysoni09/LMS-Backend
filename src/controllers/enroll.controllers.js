const coursemodel = require("../model/course.model")
const enrollmentmodel = require("../model/enrollment.model")

async function studentenroll(req,res){

    const courseid = req.params.courseid
    const courseexist = await coursemodel.findOne({courseid})
    if(!courseexist){
        return res.status(401).json({
            message:"Course not Found"
        })
    }

    const enrollexist = await enrollmentmodel.findOne({
        student:req.user.id,
        course:courseid
    })
    if(enrollexist){
        return res.status(401).json({
            message:"Already Enrolled"
        })
    }

    const enrolled = await enrollmentmodel.create({
        student:req.user.id,
        course:courseid
    })
    res.status(201).json({
        message:"Enrolled Successfully"
    })
}

module.exports = {studentenroll}