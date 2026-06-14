const express = require("express")
const authcontroller = require("../controllers/auth.controllers")

const router = express.Router()

router.post("/register",authcontroller.userregistration)
router.post("/login",authcontroller.userlogin)

module.exports = router