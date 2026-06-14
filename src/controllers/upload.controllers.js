const coursemodel = require("../model/course.model")
const upload = require("../services/cloud.service")

async function uploadcourse(req,res){
    const {title,description,notes,price,category} = req.body
    const result = await upload(req.file.buffer)
    if(!title || !description || !category){
   return res.status(400).json({
      message:"All fields required"
   })
}

    const course = await coursemodel.create({
        title,
        description,
        thumbnail:result.url,
        notes,
        price,
        category,
        instructor:req.user.id
    })
    res.status(200).json({
        message:"Course uploaded successfully"
    })

}

module.exports = {uploadcourse}