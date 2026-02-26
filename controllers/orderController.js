
const Order = require("../models/Order");
const { createService } = require("../services/dbService");

const createOrder = createService(Order, "Order Created Successfully");

module.exports = createOrder;
