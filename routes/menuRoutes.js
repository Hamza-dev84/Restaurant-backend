
const express = require("express");
const {createMenuItem, getMenuItems} = require("../controllers/menuController");

const router = express.Router();

router.post("/", createMenuItem);
router.get("/", getMenuItems);

module.exports = router;
