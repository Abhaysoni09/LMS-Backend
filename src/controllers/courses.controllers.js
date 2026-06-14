const coursemodel = require("../model/course.model")

async function allcourses(req,res){
    try{
        const courses = await coursemodel.find().limit(5)

        res.status(200).json({
            message:"courses fetched successfully",
            courses:courses
        })
    }
    catch(err){
        console.log(err)
    }
}

async function findcourse(req,res){
    try{
        const id = req.params.id
    const course = await coursemodel.findOne(id).populate("instuctor")
    if(!course){
        return res.status(401).json({
            message:"Course not found"
        })
    }
    res.status(200).json({
        message:"course fetch successfully",
        course:course
    })
    }
    catch(err){
        console.log(err)
        messsage:"User unauthorized"
    }

}



module.exports = {allcourses,findcourse}