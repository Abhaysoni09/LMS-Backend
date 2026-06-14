const jwt = require("jsonwebtoken")

async function authmiddel(req,res,next){
    try{
        const token = req.cookies.token

        if(!token){
            return res.status(401).json({
                message:"Unauthorized User"
            })
        }
        const decoded = jwt.verify(token,process.env.JWT_SECRET)

        if(decoded.role!=="student" && decoded.role!="instructor" && decoded.role!="admin"){
            return res.status(401).json({
                message:"Not allowed to Access"
            })
        }
        req.user = decoded
        next()


    }
    catch(err){
        console.log(err)
        res.status(401).json({
        message:"Unauthorized user"
        })
    }
}

module.exports = {authmiddel}