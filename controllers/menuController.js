
const Menu = require("../models/Menu");
const sendSuccess = require("../utilities/responseHandler");
const asyncWrapper = require("../utilities/asyncWrapper");

const createMenuItem = asyncWrapper(async (req, res) => {

    const items = await Menu.create(req.body);

    sendSuccess({ res, data: items });


})

const getMenuItems = asyncWrapper( async (req, res) => {

        const items = await Menu.find();

        sendSuccess({ res, data: items });
    

})

module.exports = { createMenuItem, getMenuItems };