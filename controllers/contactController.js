
const Contact = require("../models/Contact");
const sendSuccess = require("../utilities/responseHandler");
const asyncWrapper = require("../utilities/asyncWrapper");

const sendMessage = asyncWrapper(async (req, res) => {
    const { name, email, subject, message } = req.body;

    const newMessage = await Contact.create({ name, email, subject, message });

    sendSuccess({ res, data: newMessage, message: "Message Sent Successfully" });
})

const getMessage = asyncWrapper(async (req, res) => {

    const messages = await Contact.find().sort({ createdAt: -1 });

    sendSuccess({ res, data: messages });

})

module.exports = {
    sendMessage, getMessage
}