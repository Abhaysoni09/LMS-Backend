const jwt = require("jsonwebtoken")


function authrole(...role){
 return async (req,res,next)=>{
    try{
        const token = req.cookies.token

        if(!token){
            return res.status(401).json({
                message:"Unauthorized User"
            })
        }
        const decoded = jwt.verify(token,process.env.JWT_SECRET)

        if(!role.includes(decoded.role)){
            return res.status(403).json({
                message:"Not allowed to Access"
            })
        }
        req.user = decoded
        next()


    }
    catch(err){
        console.log(err)
        res.status(401).json({
            message:"Access Denied"
        })
    }
}
}

module.exports = {authrole}