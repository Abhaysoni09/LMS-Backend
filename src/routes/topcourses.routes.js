const express = require("express")
const topcourses = require("../controllers/topcourses.controllers")

const router = express.Router()

router.get("/topcourses",topcourses.getTopCourses)

module.exports  = router