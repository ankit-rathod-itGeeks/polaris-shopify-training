const express = require("express");
const router = express.Router();
const constroller = require("../controllers/student");

router.get("/getAllrequestedBooks/:id", constroller.getAllrequestedBooks);

module.exports = router;
