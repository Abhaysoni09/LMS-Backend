const express = require("express")
require("dotenv").config()
const authroutes = require("./routes/auth.routes")
const courseroutes = require("./routes/courses.routes")
const enrollroutes = require("./routes/enroll.routes")
const uploadroutes = require("./routes/upload.routes")
const topcourses = require("./routes/topcourses.routes")



const app = express()
app.use(express.json())

app.use("/api/course",topcourses)
app.use("/api",uploadroutes)
app.use("/api/auth",authroutes)
app.use("/api",enrollroutes)
app.use("/api",courseroutes)

module.exports = app