
// const Order = require("../models/Order");
// const { createService } = require("../services/dbService");

// const createOrder = createService(Order, "Order Created Successfully");




const asyncWrapper = require("../utilities/asyncWrapper");
const Order = require("../models/Order");
const sendSuccess = require("../utilities/responseHandler");

const createOrder = asyncWrapper(async (req, res) => {

    const orderData = {
        ...req.body,
        user: req.user._id
    };

    const order = await Order.create(orderData);

    sendSuccess({
        res,
        data: order,
        message: "Order Created",
        statusCode: 201
    });
});


const getMyOrders = asyncWrapper(async (req, res) => {

    const orders = await Order.find({ user: req.user._id })
        .sort({ createdAt: -1 });

    sendSuccess({
        res,
        data: orders,
        message: "Orders fetched successfully"
    });
});

module.exports = {createOrder, getMyOrders};
