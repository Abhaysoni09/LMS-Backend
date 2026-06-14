const usermodel = require("../model/user.model")
const bcrypt = require("bcryptjs")
const jwt = require("jsonwebtoken")

async function userregistration(req,res){

    const {username,email,password,role} = req.body
    const userexist = await usermodel.findOne(
        {email
        }
    )
    if(userexist){
        return res.status(400).json({
            message:"User alresdy existed"
        })
    }

    const hash  = await bcrypt.hash(password,10)

    const user = await usermodel.create({
        username,
        email,
        password:hash,
        role
    })

    const token = jwt.sign({id:user._id,role:user.role},process.env.JWT_SECRET)

    res.cookie("token",token)

    res.status(201).json({
        message:"Registration Successfully"
    })

}

async function userlogin(req,res){
    const {username,email,password} = req.body
    const user = await usermodel.findOne({
        $or:[

            {username},
            {email}
        ]
    })
    if(!user){
        return res.status(400).json({message:"User not found"})
    }
    const ismatch = await bcrypt.compare(password,user.password)
    if(!ismatch){
        return res.status(400).json({message:"Invalid Password"})
    }
    const token = jwt.sign({id:user._id,role:user.role},process.env.JWT_SECRET)

    res.cookie("token",token)

    res.status(201).json({
        message:"Login Successfully"
    })


}

module.exports = {userregistration,userlogin}

