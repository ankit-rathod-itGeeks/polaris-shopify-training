const express = require("express");
const multer = require("multer")
const router = express.Router();
const constroller = require("../controllers/student");
const uploadStorage =require('../middlewares/multer')

router.get("/getAllrequestedBooks/:id", constroller.getAllrequestedBooks);
router.post('/uploadProfileImage/:id',uploadStorage.single("image"),constroller.uploadProfileImage)
router.get('/getProfileImage/:id',constroller.getProfileImage)

module.exports = router;
