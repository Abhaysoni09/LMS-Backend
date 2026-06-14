const enrollmentmodel = require("../model/enrollment.model")


const getTopCourses = async (req,res)=>{
    const courses = await enrollmentmodel.aggregate([
        {
            $group:{
                _id:"$course",
                totalEnrollments:{
                    $sum:1
                }
            }
        },
        {
            $sort:{
                totalEnrollments:-1
            }
        },
        {
            $limit:5
        },
        {
            $lookup:{
                from:"courses",
                localField:"_id",
                foreignField:"_id",
                as:"course"
            }
        }
    ])

    res.status(200).json({
        success:true,
        data:courses
    })
}

module.exports = {getTopCourses}