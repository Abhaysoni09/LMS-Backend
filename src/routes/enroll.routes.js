const express = require("express")
const enrollcontrollers  = require("../controllers/enroll.controllers")
const authorizerole = require("../middleware/authorizeroles")

const router = express.Router()

router.post("/enroll/:courseid",authorizerole.authrole("student"),enrollcontrollers.studentenroll)

module.exports = router