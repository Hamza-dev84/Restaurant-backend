
const Menu = require("../models/Menu");
const { createService, getAllService } = require("../services/dbService");

const createMenuItem = createService(Menu, "Menu Item Created");
const getMenuItems = getAllService(Menu);

module.exports = {
    createMenuItem, getMenuItems
}
