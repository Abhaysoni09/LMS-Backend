const express = require("express")
const uploadcontroller = require("../controllers/upload.controllers")
const authorizerole = require("../middleware/authorizeroles")
const router = express.Router()
const multer = require("multer")

const upload = multer({storage:multer.memoryStorage()})

router.post("/uploadcourse",authorizerole.authrole("instructor","admin"),upload.single("image"),uploadcontroller.uploadcourse)

module.exports = router