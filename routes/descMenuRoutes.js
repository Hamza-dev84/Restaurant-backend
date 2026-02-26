
const express = require("express");
const { createMenuDesc, getMenuDesc } = require("../controllers/descMenu");

const router = express.Router();

router.post("/", createMenuDesc);
router.get("/", getMenuDesc);

module.exports = router;