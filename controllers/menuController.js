
const Menu = require("../models/Menu");
const sendSuccess = require("../utilities/responseHandler")

const createMenuItem = async (req, res, next) => {

    try {
        const items = await Menu.create(req.body);

        sendSuccess({res, data:items});
    } catch (error) {
        next(error);
    }

}

const getMenuItems = async (req, res, next) => {

    try {
        const items = await Menu.find();
        
        sendSuccess({res, data:items});
    } catch (error) {
        next(error);
    }

}

module.exports = { createMenuItem, getMenuItems };