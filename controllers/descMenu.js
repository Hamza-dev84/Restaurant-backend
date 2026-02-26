
const DescMenu = require("../models/DescMenu");
const { createService, getAllService } = require("../services/dbService");

const createMenuDesc = createService(DescMenu, "Menu Item Created");
const getMenuDesc = getAllService(DescMenu);

module.exports = {
    createMenuDesc, getMenuDesc
}