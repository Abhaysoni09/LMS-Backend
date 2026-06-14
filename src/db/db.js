const mongoose = require("mongoose")

async function connectdb(){
    await mongoose.connect(process.env.MONGO_URI)
    console.log("Database Connected successfully")
}

module.exports = connectdb