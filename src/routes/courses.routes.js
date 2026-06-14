const express = require("express")
const coursesroutes = require("../controllers/courses.controllers")
const authmiddleware = require("../middleware/authmiddelware")


const router = express.Router()

router.get("/",authmiddleware.authmiddel,coursesroutes.allcourses)
router.get("/courses/:id",authmiddleware.authmiddel,coursesroutes.findcourse)

module.exports = router