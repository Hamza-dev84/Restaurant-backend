
const express = require("express");
const router = express.Router();
const { sendMessage, getMessage } = require("../controllers/contactController");

router.post("/", sendMessage); 
router.get("/", getMessage);    

module.exports = router;
